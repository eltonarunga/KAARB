import { test, expect } from '@playwright/test';

test('exam landing page renders and its version switch works', async ({ page }) => {
  const pageErrors: string[] = [];
  page.on('pageerror', error => pageErrors.push(error.message));

  await page.goto('/');
  await expect(page.getByRole('heading', { name: /KAARB.*Kenya.s Final AI Exam/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Benchmark Instructions' })).toBeVisible();

  await page.getByRole('button', { name: /Previous Exam/i }).click();
  await expect(page.getByText('K-AARB v1.0 (Q1/Q2 2026)').first()).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test('main navigation opens the model results page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Model Results' }).click();
  await expect(page).toHaveURL(/#\/ai-model-results$/);
  await expect(page.getByRole('heading', { name: /KAARB.*Results/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'RANKINGS' })).toBeVisible();
});

test('restored Copilot Q2 transcript route renders', async ({ page }) => {
  await page.goto('/#/copilot-q2-exam-response');
  await expect(page.getByRole('heading', { name: /Kenya.s Final AI Exam/i })).toBeVisible();
});

test('restored Perplexity Q2 transcript route renders', async ({ page }) => {
  await page.goto('/#/perplexity-q2-exam-response');
  await expect(page.getByRole('heading', { name: /Kenya.s Final AI Exam/i })).toBeVisible();
});

test('restored Qwen Q3 transcript route renders', async ({ page }) => {
  await page.goto('/#/qwen-q3-exam-response');
  await expect(page.getByRole('heading', { name: 'K-AARB v2.0 Response Transcript' })).toBeVisible();
});

test('legacy Qwen transcript alias resolves to the Q3 transcript', async ({ page }) => {
  await page.goto('/#/qwen-3-8-max-q3-exam-response');
  await expect(page.getByRole('heading', { name: 'K-AARB v2.0 Response Transcript' })).toBeVisible();
});

test('unknown hash routes return visitors to the exam landing page', async ({ page }) => {
  await page.goto('/#/route-that-does-not-exist');
  await expect(page).toHaveURL(/#\/$/);
  await expect(page.getByRole('heading', { name: /KAARB.*Kenya.s Final AI Exam/i })).toBeVisible();
});
