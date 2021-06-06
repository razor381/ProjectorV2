const TABLE_NAME = 'users';

/**
 * Create users table.
 *
 * @param {Object} knex
 * @returns {Promise}
 */
exports.up = function(knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments().unsigned().primary();
    table.text('name').notNull();
    table.string('email').notNull().unique();
    table.string('photo').defaultTo('default_photo.jpg');
    table.string('password').notNull();
    table.string('password_confirm').notNull();
    table.enu('role', ['user', 'admin', 'mentor']).defaultTo('user');
    table.boolean('active').defaultTo(1);
    table.string('passwordResetToken');
    table.datetime('password_changed_at');
    table.string('reset_token_expires_at');
    table.timestamps(true, true);
  });
};

/**
 * Drop users table.
 *
 * @param {Object} knex
 * @returns {Promise}
 */
exports.down = function(knex) {
  return knex.schema.dropTable(TABLE_NAME);
};
