import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import '@testing-library/jest-dom';
import './__mocks__/rechartsMock';

expect.extend(matchers);

afterEach(() => {
    cleanup();
});