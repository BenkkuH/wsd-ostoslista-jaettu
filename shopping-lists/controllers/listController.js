import { renderFile } from "https://deno.land/x/eta@v2.0.0/mod.ts";
import * as listService from "../services/shoppingListService.js";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};
//lähtee requestUtils.js kansioon joskus
const redirectTo = (path) => {
  return new Response(`Redirecting to ${path}.`, {
    status: 303,
    headers: {
      "Location": path,
    },
  });
};

const addList = async (request) => {
  const formData = await request.formData();
  const name = formData.get("name");

  await listService.create(name);

  return redirectTo("/lists");
};

const viewLists = async (request) => {
  const data = {
    lists: await listService.findAllActiveShoppingLists(),
  };

  return new Response(await renderFile("lists.eta", data), responseDetails);
};

export { addList, viewLists };