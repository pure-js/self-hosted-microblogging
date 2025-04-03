import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('./posts/new');
});

test('should create a new post with a title and body', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Title' }).fill('Test Heading');
  await page.getByRole('textbox', { name: 'The message' }).fill('Test body');
  await page.getByRole('button', { name: 'Post it' }).click();
  await expect(page.getByText('Test Heading')).toBeVisible();
  await expect(page.getByText('Test body')).toBeVisible();
});
