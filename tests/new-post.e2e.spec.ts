import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('./posts/new');
  await page.getByRole('textbox', { name: 'Title' }).click();
  await page.getByRole('textbox', { name: 'Title' }).fill('Test Heading');
  await page.getByRole('textbox', { name: 'Title' }).press('Tab');
  await page.getByRole('textbox', { name: 'The message' }).fill('Test body');
  await page.getByRole('button', { name: 'Post it' }).click();
  await expect(page).toHaveURL('./');
});
