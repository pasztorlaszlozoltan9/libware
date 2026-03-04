import db from '../../app/models/modrels.js';

async function up({ context: QueryInterface }) {
  if (db.Customer) {
    await db.Customer.bulkCreate([
      { idNumber: "134543TE", fullname: "Kiss József", email: "jozsef.kiss@example.com" },
      { idNumber: "245465BA", fullname: "Nagy Béla", email: "bela.nagy@example.com" },
      { idNumber: "379864LP", fullname: "Alap Zoltán", email: "zoltan.alap@example.com" },
    ]);
  } else {
    await QueryInterface.bulkInsert('customers', [

    ]);
  }

}

async function down({ context: QueryInterface }) {
  await QueryInterface.bulkDelete('customers');
}

export { up, down }
