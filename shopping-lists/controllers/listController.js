import { renderFile } from "https://deno.land/x/eta@v2.0.0/mod.ts";
import * as listService from "../services/shoppingListService.js";
import * as requestUtils from "../utils/requestUtils.js";
import * as itemService from "../services/itemService.js";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const addList = async (request) => {
  const formData = await request.formData();
  const name = formData.get("name");

  await listService.create(name);

  return requestUtils.redirectTo("/lists");
};

const viewLists = async () => {
  const data = {
    shopping_lists: await listService.findAllActiveShoppingLists(),
  };

  return new Response(await renderFile("lists.eta", data), responseDetails);
};

const countLists = async () => {
  const data = {
    shopping_lists_sum: await listService.countShoppingLists(),
    items_sum: await itemService.countAllItems(),
  };
  return new Response(await renderFile("index.eta", data), responseDetails);
};

const deactivateList = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  await listService.deactivateById(urlParts[2]);

  return requestUtils.redirectTo("/lists");
};

export { addList, countLists, deactivateList, viewLists };