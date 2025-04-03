import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('./posts/new');
});

test('should create a new post with a title and body', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Title' }).fill('New Post Heading');
  await page
    .getByRole('textbox', { name: 'The message' })
    .fill('New post main text');
  await page.getByRole('button', { name: 'Post it' }).click();
  await expect(
    page.getByRole('heading', { name: 'New Post Heading' }),
  ).toBeVisible();
  await expect(page.getByText('New post main text')).toBeVisible();
});
