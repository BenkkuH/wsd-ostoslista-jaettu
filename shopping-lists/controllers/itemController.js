import { renderFile } from "https://deno.land/x/eta@v2.0.0/mod.ts";
import * as itemService from "../services/itemService.js";
import * as requestUtils from "../utils/requestUtils.js";

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
  };
  console.log("ollaan checkItemsissa")
  console.log(data);
  return new Response(await renderFile("list.eta", data), responseDetails); 
};

const collectItem = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  const id = urlParts[2];
  await itemService.collectById(id);

  return await requestUtils.redirectTo(`/lists/${id}}`);
};

export { addItem, checkItems, collectItem };