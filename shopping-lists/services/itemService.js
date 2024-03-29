import { sql } from "../databases/database.js";

const collectById = async (id) => {
  await sql`UPDATE shopping_list_items SET collected = true WHERE id = ${ id }`;
};

const create = async (name, id) => {
  await sql`INSERT INTO shopping_list_items (name, shopping_list_id) VALUES (${ name }, ${id})`;
};

const checkIfListIsEmpty = async (shopping_list_id) => {
  return await sql`
    SELECT * FROM shopping_list_items
    WHERE shopping_list_id = ${shopping_list_id} ORDER BY collected, name ASC`;
};

const countAllItems = async () => {
  const result = await sql`SELECT COUNT(id) FROM shopping_list_items`;
  return result[0].count;
};

export { checkIfListIsEmpty, countAllItems, create, collectById};