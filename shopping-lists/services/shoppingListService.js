import { sql } from "../databases/database.js";

const create = async (name) => {
  await sql`INSERT INTO shopping_lists (name) VALUES (${ name })`;
};

const findAllActiveShoppingLists = async () => {
  return await sql`SELECT * FROM shopping_lists WHERE active = true`;
};

const deactivateById = async (id) => {
  await sql`UPDATE shopping_list SET active = false WHERE id = ${ id }`;
};
// listaa pääsivulle ostoslistojen lukumäärän
const countShoppingLists = async () => {
  await sql`SELECT COUNT(id) from shopping_list`;
};

export { countShoppingLists, create, deactivateById, findAllActiveShoppingLists };