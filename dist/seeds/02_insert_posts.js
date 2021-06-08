"use strict";

/**
 * Clear existing entries and seed posts table.
 *
 * @param {Object} knex
 * @returns {Promise}
 */
exports.seed = function (knex) {
  return knex('posts').del().then(function () {
    return knex('posts').insert([{
      name: 'post1',
      summary: 'post 1 summary',
      description: 'post 1 description',
      user_id: 1
    }, {
      name: 'post2',
      summary: 'post 2 summary',
      description: 'post 2 description',
      user_id: 1
    }, {
      name: 'post3',
      summary: 'post 3 summary',
      description: 'post 3 description',
      user_id: 1
    }, {
      name: 'post4',
      summary: 'post 4 summary',
      description: 'post 4 description',
      user_id: 2
    }, {
      name: 'post5',
      summary: 'post 5 summary',
      description: 'post 5 description',
      user_id: 2
    }, {
      name: 'post6',
      summary: 'post 6 summary',
      description: 'post 6 description',
      user_id: 3
    }]);
  });
};
//# sourceMappingURL=02_insert_posts.js.map