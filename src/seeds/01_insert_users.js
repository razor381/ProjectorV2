/**
 * Clear existing entries and seed users table.
 *
 * @param {Object} knex
 * @returns {Promise}
 */
exports.seed = function(knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          name: 'user1',
          email: 'user1@projectorv2.io',
          password: 'test1234',
          password_confirm: 'test1234'
        },
        {
          name: 'user2',
          email: 'user2@projectorv2.io',
          password: 'test1234',
          password_confirm: 'test1234'
        },
        {
          name: 'user3',
          email: 'user3@projectorv2.io',
          password: 'test1234',
          password_confirm: 'test1234'
        },
        {
          name: 'user4',
          email: 'user4@projectorv2.io',
          password: 'test1234',
          password_confirm: 'test1234'
        },
        {
          name: 'user5',
          email: 'user5@projectorv2.io',
          password: 'test1234',
          password_confirm: 'test1234'
        },
      ]);
    });
};
