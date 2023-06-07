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

test("Can add an item to a list", async ({ page }) => {
  await page.goto("/lists");
  const listName = `My list: ${Math.random()}`;
  await page.locator("input[type=text]").type(listName);
  await page.locator("input[type=submit]").first().click();
  await page.locator(`a >> text='${listName}'`).click();
  await expect(page.locator("h1")).toHaveText(listName);
  const itemName = `My item: ${Math.random()}`;
  await page.locator("input[type=text]").type(itemName);
  await page.locator("input[type=submit]").first().click();
  await expect(page.locator(`li >> text='${itemName}'`)).first().toHaveText(itemName);
});

//Viisi testiä - yllä olevien mukaan/lisäksi:

/*  
    - Voi deaktivoida listoja
    - Voi lisätä tuotteita listalle
    - Voi merkitä tuotteita kerätyksi
    - list.eta näyttää oikean ostoslistan otsikon */