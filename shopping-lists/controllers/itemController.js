import { renderFile } from "https://deno.land/x/eta@v2.0.0/mod.ts";
import * as itemService from "../services/itemService.js";
import * as requestUtils from "../utils/requestUtils.js";
import * as listService from "../services/shoppingListService.js";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const addItem = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  const id = urlParts[2];
  const formData = await request.formData();
  const name = formData.get("name");

  await itemService.create(name, id);

  return requestUtils.redirectTo(`/lists/${id}`);
};

const checkItems = async (request) => { 
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");

  const data = {
    shopping_list_items: await itemService.checkIfListIsEmpty(urlParts[2]),
    current_list: await listService.findCurrent(urlParts[2]),
  };
  console.log("ollaan checkItemsissa")
  console.log(data);
  return new Response(await renderFile("list.eta", data), responseDetails); 
};

//Ei tulosta consolilogeja
const collectItem = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  const shopping_list_id = urlParts[2];
  const item_id = urlParts[4];
  console.log(item_id);
  console.log(shopping_list_id);
  await itemService.collectById(item_id);

  return await requestUtils.redirectTo(`/lists/${shopping_list_id}}`);
};

export { addItem, checkItems, collectItem };