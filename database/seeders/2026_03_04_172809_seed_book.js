import db from '../../app/models/modrels.js';

async function up({ context: QueryInterface }) {
  if (db.Book) {
    await db.Book.bulkCreate([
      { isbn: "aaa", title: "Kincses", author: "Pásztor László", totalCopies: 3000 },
      { isbn: "bbb", title: "Hegy", author: "Pásztor József", totalCopies: 2340 },
      { isbn: "ccc", title: "Folyó", author: "Pásztor Zoltán", totalCopies: 1300 },
    ]);
  } else {
    await QueryInterface.bulkInsert('books', [

    ]);
  }

}

async function down({ context: QueryInterface }) {
  await QueryInterface.bulkDelete('books');
}

export { up, down }
