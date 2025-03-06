import { test, expect } from "@playwright/test";

test("sign in", async ({ page }) => {
  await page.goto("http://localhost:3000/auth/signin");

  const emailInput = page.locator('input[type="email"]');
  await emailInput.waitFor({ state: "visible" });

  await emailInput.click();
  await emailInput.fill("admin@test.com");

  const passwordInput = page.locator('input[type="password"]');
  await passwordInput.waitFor({ state: "visible" });
  await passwordInput.fill("adminpassword1234");

  const signInButton = page.getByRole("button", { name: "Sign In" });
  await signInButton.waitFor({ state: "visible" });

  await signInButton.click();
  await page.waitForURL("http://localhost:3000/");
});

test("homepage functionality", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const nextButton = page.getByRole("button", { name: "Next" });
  await expect(nextButton).toBeEnabled();
  await nextButton.click();
});
