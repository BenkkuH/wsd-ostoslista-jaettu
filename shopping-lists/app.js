import { serve } from "./deps.js";
import { configure } from "https://deno.land/x/eta@v2.0.0/mod.ts";
import * as listController from "./controllers/listController.js";

configure({
  views: `${Deno.cwd()}/views/`,
});

const handleRequest = async (request) => {
  const url = new URL(request.url);

  if (url.pathname === "/" && request.method === "GET") {
    return new Response(`Redirecting to /lists.`, {
      status: 303,
      headers: {
        "Location": "/lists",
      },
    });
  } else if (url.pathname === "/lists" && request.method === "POST") {
    return await listController.addList(request);
  } else if (url.pathname === "/lists" && request.method === "GET") {
    return await listController.viewLists(request);
  } else {
    return new Response("Not found", { status: 404 });
  }
};

//muista lisätä toiminnallisuus, jolla items-polkuun viitataan 

serve(handleRequest, { port: 7777 });