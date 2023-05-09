import { renderFile } from "https://deno.land/x/eta@v2.0.0/mod.ts";
import * as listService from "../services/shoppingListService.js";
import * as requestUtils from "../utils/requestUtils.js";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const addList = async (request) => {
  const formData = await request.formData();
  const name = formData.get("name");

  await listService.create(name);

  return requestUtils.redirectTo("/lists");
};

//miksi request?????>:)
const viewLists = async (request) => {
  const data = {
    lists: await listService.findAllActiveShoppingLists(),
  };
// joku error 24:29 renderfilessa?
  return new Response(await renderFile("lists.eta", data), responseDetails);
};

export { addList, viewLists };