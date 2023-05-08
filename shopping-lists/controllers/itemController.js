import { renderFile } from "https://deno.land/x/eta@v2.0.0/mod.ts";
import * as itemService from "../services/itemService.js";
import * as shoppingListService from "../services/shoppingListService.js";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const addItem = async (request) => {
  const formData = await request.formData();
  const name = formData.get("name");

  await itemService.create(name);

  return redirectTo("/lists");
};

const viewTask = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");

  const data = {
    task: await taskService.findById(urlParts[2]),
    currentWorkEntry: await workEntryService.findCurrentWorkEntry(urlParts[2]),
  };

  return new Response(await renderFile("task.eta", data), responseDetails);
};

const viewTasks = async (request) => {
  const data = {
    tasks: await taskService.findAllNonCompletedTasks(),
  };

  return new Response(await renderFile("tasks.eta", data), responseDetails);
};

export { addTask, viewTask, viewTasks };