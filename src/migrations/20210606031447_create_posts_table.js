const TABLE_NAME = 'posts';

/**
 * Create posts table.
 *
 * @param {Object} knex
 * @returns {Promise}
 */
exports.up = function(knex) {
  return knex.schema.createTable(TABLE_NAME, (t) => {
    t.increments('id').unsigned().primary();
    t.text('name').notNull();
    t.string('summary').notNull();
    t.string('description');
    t.string('slug');
    t.float('ratings_average', 2, 1).defaultTo(4.5);
    t.integer('ratings_quantity').defaultTo(0);
    t.string('image_cover').defaultTo('default_cover.jpg');
    t.specificType('images', 'text ARRAY');
    t.timestamp('created_at').notNull().defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

/**
 * Drop posts table.
 *
 * @param {Object} knex
 * @returns {Promise}
 */
exports.down = function(knex) {
  return knex.schema.dropTable(TABLE_NAME);
};
