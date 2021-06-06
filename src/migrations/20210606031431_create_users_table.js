const TABLE_NAME = 'users';

/**
 * Create users table.
 *
 * @param {Object} knex
 * @returns {Promise}
 */
exports.up = function(knex) {
  return knex.schema.createTable(TABLE_NAME, (t) => {
    t.increments('id').unsigned().primary();
    t.text('name').notNull();
    t.string('email').notNull().unique();
    t.string('photo').defaultTo('default_photo.jpg');
    t.string('password').notNull();
    t.string('password_confirm').notNull();
    t.enu('role', ['user', 'admin', 'mentor']).defaultTo('user');
    t.boolean('active').defaultTo(1);
    t.string('passwordResetToken');
    t.datetime('password_changed_at');
    t.string('reset_token_expires_at');
    t.timestamp('created_at').notNull().defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
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
