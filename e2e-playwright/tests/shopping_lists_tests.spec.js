const { test, expect } = require("@playwright/test");

test("Main page has expected title.", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Shared shopping lists");
});

test("Can create a list.", async ({ page }) => {
  await page.goto("/lists");
  const listName = `My list: ${Math.random()}`;
  await page.locator("input[type=text]").type(listName);
  await page.locator("input[type=submit]").first().click();
  await expect(page.locator(`a >> text='${listName}'`)).toHaveText(listName);
});

test("Can open a list.", async ({ page }) => {
  await page.goto("/lists");
  const listName = `My list: ${Math.random()}`;
  await page.locator("input[type=text]").type(listName);
  await page.locator("input[type=submit]").first().click();
  await page.locator(`a >> text='${listName}'`).click();
  await expect(page.locator("h1")).toHaveText(listName);
});


/*
test("Main page has expected title and headings.", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Task application!");
  await expect(page.locator("h1")).toHaveText("Tasks");
  await expect(page.locator("h2")).toHaveText(["Add a task", "Active tasks"]);
});

test("Can create a task.", async ({ page }) => {
  await page.goto("/");
  const listName = `My task: ${Math.random()}`;
  await page.locator("input[type=text]").type(listName);
  await page.locator("input[type=submit]").click();
  await expect(page.locator(`a >> text='${listName}'`)).toHaveText(listName);
});

test("Can open a task page.", async ({ page }) => {
  await page.goto("/");
  const listName = `My task: ${Math.random()}`;
  await page.locator("input[type=text]").type(listName);
  await page.locator("input[type=submit]").click();
  await page.locator(`a >> text='${listName}'`).click();
  await expect(page.locator("h1")).toHaveText(listName);
});
*/
//Viisi testiä - yllä olevien mukaan/lisäksi:

/*  - Voi lisätä listoja
    - Voi deaktivoida listoja
    - Voi lisätä tuotteita listalle
    - Voi merkitä tuotteita kerätyksi
    - list.eta näyttää oikean ostoslistan otsikon */