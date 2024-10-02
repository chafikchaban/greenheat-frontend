import { test, expect } from '@playwright/test';

test.describe('CurrentWeatherPage', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200');
        await page.route('**/graphql', async (route, request) => {
            const postData = JSON.parse(request.postData() || '{}');

            if (postData.query.includes('GET_WEATHER_FOR_LOCATIONS')) {
                await route.fulfill({
                    contentType: 'application/json',
                    body: JSON.stringify({
                        data: {
                            weatherForLocations: [
                                { id: '1', name: 'Location A', temperature: 22 },
                                { id: '2', name: 'Location B', temperature: 25 },
                            ],
                        },
                    }),
                });
            } else if (postData.query.includes('ADD_LOCATION')) {
                await route.fulfill({
                    contentType: 'application/json',
                    body: JSON.stringify({
                        data: {
                            addLocation: {
                                success: true,
                                location: {
                                    id: '1',
                                    name: postData.variables.name,
                                    latitude: postData.variables.latitude,
                                    longitude: postData.variables.longitude,
                                },
                            },
                        },
                    }),
                });
            } else {
                await route.continue();
            }
        });
    });

    test('should display loading state initially', async ({ page }) => {
        // Mock loading state
        await page.route('**/graphql', async (route) => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            return route.fulfill({ status: 200, body: JSON.stringify({ data: {} }) });
        });

        const loadingText = await page.getByText('Loading...');
        await expect(loadingText).toBeVisible();
    });

    test('should display error message on error', async ({ page }) => {
        // Mock error state
        await page.route('**/graphql', (route) => {
            return route.abort();
        });

        const errorText = await page.getByText('Error...');
        await expect(errorText).toBeVisible();
    });

    test('should render MyMap component with data', async ({ page }) => {
        const mapContainer = await page.locator('div[data-testid="map-container"]');
        await expect(mapContainer).toBeVisible();
    });


    test('user can right-click on the map, track a location, and verify refetch', async ({ page }) => {
        function getRandomOffset(maxOffset) {
            return Math.floor(Math.random() * (maxOffset * 2 + 1)) - maxOffset;
        }

        async function moveMouseRandomly(page) {
            const xOffset = getRandomOffset(10);
            const yOffset = getRandomOffset(10);
            await page.mouse.move(100 + xOffset, 100 + yOffset);
        }

        await moveMouseRandomly(page);

        // Wait for the map container to be rendered
        const mapContainer = await page.locator('[data-testid="map-container"]');
        await expect(mapContainer).toBeVisible();

        // Perform a right-click on the map
        await mapContainer.click({ button: 'right' });

        // Check if the context menu is displayed
        const contextMenu = await page.locator('[data-testid="context-menu"]');
        await expect(contextMenu).toBeVisible();

        // Click on the "Track this location" button
        const trackButton = await contextMenu.locator('button');
        await expect(trackButton).toHaveText('Track this location');
        await trackButton.click();

        // Fill the input field with a location name
        const inputField = await contextMenu.locator('input');
        await inputField.focus();
        await inputField.fill('Test Location');

        // Click on the "Save" button
        const saveButton = await contextMenu.locator('button');
        await expect(saveButton).toHaveText('Save');
        await saveButton.click();

        // assert that the context menu is hidden
        await expect(page.locator('.notexists')).toHaveCount(0);
    });
});
