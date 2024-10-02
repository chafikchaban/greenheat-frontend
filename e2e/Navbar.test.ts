import { test, expect } from '@playwright/test';

test('should navigate to forecast page from navbar', async ({ page }) => {
  // Start from the homepage
  await page.goto('http://localhost:4200');
  
  // Check if the navbar exists and click the "Forecast" link
  await expect(page.locator('nav')).toBeVisible();
  await page.click('text=Forecast');

  // Verify if URL changed to /forecast
  await expect(page).toHaveURL('http://localhost:4200/forecast');

  await expect(page.getByRole('heading', { name: '7 day forecast' })).toBeVisible();
});
