import { sql } from "../databases/database.js";

const collectById = async (id) => {
  await sql`UPDATE shopping_list_items SET collected = true WHERE id = ${ id }`;
};

const create = async (name, id) => {
  await sql`INSERT INTO shopping_list_items (name, shopping_list_id) VALUES (${ name }, ${id})`;
};
/*
const findAllItems = async () => {
  return await sql`SELECT * FROM shopping_list_items ORDER BY collected, name ASC`;
};
*/
const checkIfListIsEmpty = async (shopping_list_id) => {
  const rows = await sql`
    SELECT * FROM shopping_list_items
    WHERE shopping_list_id = ${shopping_list_id}
    ORDER BY collected, name ASC
  `;

  if (rows && rows.length > 0) {
    return rows;
  }

  return false;
};

/*
- kuten alla, fidnAllitems funktion tulisi saada id parametrinä, ja katsoa täällä, onko lista tyhjä vai ei. Sitten kun palautetaan boolean arvo,
niin if(!) vertailu toimii kuten kuuluu.

- tee oma funktio id-kohtaiseen kyselyyn
*/

export { checkIfListIsEmpty, create, collectById};