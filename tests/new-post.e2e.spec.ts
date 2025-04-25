import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('./posts/new');
});

test('should create a new post with a title and body', async ({ page }) => {
  const postTitle = 'New Post Heading';
  const postBody = 'New post main text';

  await page.getByRole('textbox', { name: 'Title' }).fill(postTitle);
  await page.getByRole('textbox', { name: 'The message' }).fill(postBody);
  await page.getByRole('button', { name: 'Post it' }).click();
  await expect(page.getByRole('heading', { name: postTitle })).toBeVisible();
  await expect(page.getByText(postBody)).toBeVisible();
});

test('should show an error message when the title is empty', async ({
  page,
}) => {
  await page
    .getByRole('textbox', { name: 'The message' })
    .fill('New post main text');
  await page.getByRole('button', { name: 'Post it' }).click();
  await expect(page.getByLabel('Title is required')).toBeVisible();
});

test('should show an error message when the body is empty', async ({
  page,
}) => {
  await page.getByRole('textbox', { name: 'Title' }).fill('New Post Heading');
  await page.getByRole('button', { name: 'Post it' }).click();
  await expect(page.getByLabel('The message is required')).toBeVisible();
});
