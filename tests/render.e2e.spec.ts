import { test, expect } from '@playwright/test';

const BASE_PATH = '/self-hosted-microblogging';

test('The home page has Micrblogging in the title and get started link leading to the new post page', async ({
  page,
}) => {
  await page.goto('./');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Self-hosted microblogging client/);

  // create a locator
  const newPost = page.getByText('New Post');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(newPost).toHaveAttribute('href', `${BASE_PATH}/posts/new`);

  // Click the get started link.
  await newPost.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*new/);
});
