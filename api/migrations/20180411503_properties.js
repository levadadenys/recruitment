/* prettier-ignore */

module.exports.up = async db => {
  console.log('Create properties table');

  await db.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('properties', async table => {
    table.uuid('id').notNullable().defaultTo(db.raw('uuid_generate_v1mc()')).primary();
    table.float('living_surface')
    table.timestamps(false, true);
  });
};

module.exports.down = async db => {
  await db.schema.dropTable('properties');
};

module.exports.configuration = {
  transaction: true,
};
