import { sql } from "../databases/database.js";

const collectById = async (id) => {
  await sql`UPDATE shopping_list_items SET collected = true WHERE id = ${ id }`;
};

const create = async (name) => {
  await sql`INSERT INTO shopping_list_items (name) VALUES (${ name })`;
};
/*
const findAllItems = async () => {
  return await sql`SELECT * FROM shopping_list_items ORDER BY collected, name ASC`;
};
*/
const checkIfListIsEmpty = async (shopping_list_id) => {
  const rows = await sql`
    SELECT * FROM shopping_list_items
    WHERE shopping_list_id = ${shopping_list_id}`;

  if (rows && rows.length > 0) {
    return rows;
  }

  return false;
};

export { checkIfListIsEmpty, create, collectById};