import { test } from "@playwright/test";

import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

test("sign in", async ({ page }) => {
  await page.goto(
    "https://well-being-app-final-project.vercel.app/auth/signin"
  );

  const email = process.env.TEST_EMAIL;
  const password = process.env.TEST_PASSWORD;

  if (!email || !password) {
    throw new Error(
      "Missing TEST_EMAIL or TEST_PASSWORD in environment variables"
    );
  }

  const emailInput = page.locator('input[type="email"]');
  await emailInput.waitFor({ state: "visible" });

  await emailInput.click();
  await emailInput.fill(email);

  const passwordInput = page.locator('input[type="password"]');
  await passwordInput.waitFor({ state: "visible" });
  await passwordInput.fill(password);

  const signInButton = page.getByRole("button", { name: "Sign In" });
  await signInButton.waitFor({ state: "visible" });

  await signInButton.click();
  await page.waitForURL("https://well-being-app-final-project.vercel.app/");
});
