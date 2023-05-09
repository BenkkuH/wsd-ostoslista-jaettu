import { sql } from "../databases/database.js";

const collectById = async (id) => {
  await sql`UPDATE shopping_list_items SET collected = true WHERE id = ${ id }`;
};

const create = async (name) => {
  await sql`INSERT INTO shopping_list_items (name) VALUES (${ name })`;
};

const findAllItems = async () => {
  return await sql`SELECT * FROM shopping_list_item`;
};

export { create, collectById, findAllItems };