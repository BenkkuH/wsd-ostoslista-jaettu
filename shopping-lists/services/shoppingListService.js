import { sql } from "../databases/database.js";

const create = async (name) => {
  await sql`INSERT INTO shopping_lists (name) VALUES (${ name })`;
};

const findAllActiveShoppingLists = async () => {
  return await sql`SELECT * FROM shopping_lists WHERE active = true`;
};

const findCurrent = async (id) => {
  const result = await sql`SELECT * FROM shopping_lists WHERE id = ${id}`;
  return result[0]; // Return the first item from the result array
};


const deactivateById = async (id) => {
  await sql`UPDATE shopping_lists SET active = false WHERE id = ${ id }`;
};
// listaa pääsivulle ostoslistojen lukumäärän
const countShoppingLists = async () => {
  const result = await sql`SELECT COUNT(id) FROM shopping_lists`;
  return result[0].count;
};

export { countShoppingLists, create, deactivateById, findCurrent, findAllActiveShoppingLists };