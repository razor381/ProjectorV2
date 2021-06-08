"use strict";

const TABLE_NAME = 'posts';
/**
 * Create posts table.
 *
 * @param {Object} knex
 * @returns {Promise}
 */

exports.up = function (knex) {
  return knex.schema.createTable(TABLE_NAME, table => {
    table.increments().unsigned().primary();
    table.text('name').notNull();
    table.string('summary').notNull();
    table.string('description');
    table.string('slug');
    table.float('ratings_average', 2, 1).defaultTo(4.5);
    table.integer('ratings_quantity').defaultTo(0);
    table.string('image_cover').defaultTo('default_cover.jpg');
    table.specificType('images', 'text ARRAY');
    table.timestamps(true, true);
    table.integer('user_id').notNull().references('id').inTable('users').index().onDelete('CASCADE');
  });
};
/**
 * Drop posts table.
 *
 * @param {Object} knex
 * @returns {Promise}
 */


exports.down = function (knex) {
  return knex.schema.dropTable(TABLE_NAME);
};
//# sourceMappingURL=20210606031447_create_posts_table.js.map