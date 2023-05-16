import { sql } from "../databases/database.js";

const collectById = async (id) => {
  await sql`UPDATE shopping_list_items SET collected = true WHERE id = ${ id }`;
};

const create = async (name) => {
  await sql`INSERT INTO shopping_list_items (name) VALUES (${ name })`;
};

const findAllItems = async () => {
  return await sql`SELECT * FROM shopping_list_items ORDER BY collected, name ASC`;
};

/*
- kuten alla, fidnAllitems funktion tulisi saada id parametrinä, ja katsoa täällä, onko lista tyhjä vai ei. Sitten kun palautetaan boolean arvo,
niin if(!) vertailu toimii kuten kuuluu.

- tee oma funktio id-kohtaiseen kyselyyn

const findCurrentWorkEntry = async (taskId) => {
  const rows = await sql`SELECT * FROM work_entries
    WHERE task_id = ${ taskId } AND finished_on IS NULL`;

  if (rows && rows.length > 0) {
    return rows[0];
  }

  return false;
};*/

export { create, collectById, findAllItems };