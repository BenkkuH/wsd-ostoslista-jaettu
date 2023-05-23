import { serve } from "./deps.js";
import { configure } from "https://deno.land/x/eta@v2.0.0/mod.ts";
import * as listController from "./controllers/listController.js";
import * as itemController from "./controllers/itemController.js";
import * as requestUtils from "./utils/requestUtils.js";

configure({
  views: `${Deno.cwd()}/views/`,
});

const handleRequest = async (request) => {
  const url = new URL(request.url);
// 19:12 joku errori:TypeError: Cannot read properties of undefined (reading 'forEach')
  if (url.pathname === "/" && request.method === "GET") {
    return  await listController.countLists(request);
  } else if (url.pathname === "/lists" && request.method === "POST") {
    return await listController.addList(request);
  } else if (url.pathname === "/lists" && request.method === "GET") {
    return await listController.viewLists(request);
  } else if (url.pathname.match("lists/[0-9]+") && request.method === "GET") {
    return await itemController.checkItems(request);
  } else if (url.pathname.match("lists/[0-9]+") && request.method === "GET") {
    return await itemController.viewItems(request);
  } else if (url.pathname.match("/lists/[0-9]+/items") && request.method === "POST") {
    return await itemController.addItem(request);
  } else if (url.pathname.match("lists/[0-9]+/deactivate") && request.method === "POST") {
    return await listController.deactivateList(request);
  } else if (url.pathname.match("/lists/[0-9]+/items/[0-9]+/collect ") && request.method === "POST") {
    return await itemController.collectItem(request);
  } else {
    return new Response("Not found", { status: 404 });
  }
};
//polku index-etaan!
//muista lisätä toiminnallisuus, jolla items-polkuun viitataan 

serve(handleRequest, { port: 7777 });