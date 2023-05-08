import { sql } from "../databases/database.js";

const create = async (name) => {
  await sql`INSERT INTO shopping_list_items (name) VALUES (${ name })`;
};

const findAllItems = async () => {
  return await sql`SELECT * FROM shopping_list_item`;
};

export { create, findAllItems };