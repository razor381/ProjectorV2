const TABLE_NAME = 'comments';

/**
 * Create comments table.
 *
 * @param {Object} knex
 * @returns {Promise}
 */
exports.up = async function(knex) {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  return knex.schema.createTable(TABLE_NAME, (table) => {
    table
      .uuid('id')
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()')),

    table.string('comment').notNull()
    table.timestamps(true, true);

    table
      .integer('user')
      .notNull()
      .references('users.id')
      .onDelete('CASCADE'),

    table
      .integer('post')
      .notNull()
      .references('posts.id')
      .onDelete('CASCADE')
  });
};

/**
 * Drop comments table.
 *
 * @param {Object} knex
 * @returns {Promise}
 */
exports.down = function(knex) {
  return knex.schema.dropTable(TABLE_NAME);
};
