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
          "name": "Rujal Shrestha",
          "email": "admin@projectorv2.io",
          "role": "admin",
          "photo": "user-1.jpg",
          "password": "$2a$12$Q0grHjH9PXc6SxivC8m12.2mZJ9BbKcgFpwSG4Y1ZEII8HJVzWeyS"
        },
        {
          "name": "Lourdes Browning",
          "email": "loulou@example.com",
          "role": "user",
          "photo": "user-2.jpg",
          "password": "$2a$12$hP1h2pnNp7wgyZNRwPsOTeZuNzWBv7vHmsR3DT/OaPSUBQT.y0S.."
        },
        {
          "name": "Sophie Louise Hart",
          "email": "sophie@example.com",
          "role": "user",
          "photo": "user-3.jpg",
          "password": "$2a$12$9nFqToiTmjgfFVJiQvjmreLt4k8X4gGYCETGapSZOb2hHa55t0dDq"
        },
        {
          "name": "Ayla Cornell",
          "email": "ayls@example.com",
          "role": "user",
          "photo": "user-4.jpg",
          "password": "$2a$12$tm33.M/4pfEbZF64WbFuHuVFv85v4qEhi.ik8njbud7yaoqCZpjiy"
        },
        {
          "name": "Leo Gillespie",
          "email": "leo@example.com",
          "role": "mentor",
          "photo": "user-5.jpg",
          "password": "$2a$12$OOPr90tBEBF1Iho3ox0Jde0O/WXUR0VLA5xdh6tWcu7qb.qOCvSg2"
        },
        {
          "name": "Jennifer Hardy",
          "email": "jennifer@example.com",
          "role": "mentor",
          "photo": "user-6.jpg",
          "password": "$2a$12$XCXvvlhRBJ8CydKH09v1v.jpg0hB9gVVfMVEoz4MsxqL9zb5PrF42"
        },
        {
          "name": "Kate Morrison",
          "email": "kate@example.com",
          "role": "mentor",
          "photo": "user-7.jpg",
          "password": "$2a$12$II1F3aBSFDF3Xz7iB4rk/.a2dogwkClMN5gGCWrRlILrG1xtJG7q6"
        },
        {
          "name": "Eliana Stout",
          "email": "eliana@example.com",
          "role": "user",
          "photo": "user-8.jpg",
          "password": "$2a$12$Jb/ILhdDV.ZpnPMu19xfe.NRh5ntE2LzNMNcsty05QWwRbmFFVMKO"
        },
        {
          "name": "Cristian Vega",
          "email": "chris@example.com",
          "role": "user",
          "photo": "user-9.jpg",
          "password": "$2a$12$r7/jtdWtzNfrfC7zw3uS.eDJ3Bs.8qrO31ZdbMljL.lUY0TAsaAL6"
        },
        {
          "name": "Steve T. Scaife",
          "email": "steve@example.com",
          "role": "mentor",
          "photo": "user-10.jpg",
          "password": "$2a$12$q7v9dm.S4DvqhAeBc4KwduedEDEkDe2GGFGzteW6xnHt120oRpkqm"
        },
        {
          "name": "Aarav Lynn",
          "email": "aarav@example.com",
          "role": "mentor",
          "photo": "user-11.jpg",
          "password": "$2a$12$lKWhzujFvQwG4m/X3mnTneOB3ib9IYETsOqQ8aN5QEWDjX6X2wJJm"
        },
        {
          "name": "Miyah Myles",
          "email": "miyah@example.com",
          "role": "mentor",
          "photo": "user-12.jpg",
          "password": "$2a$12$.XIvvmznHQSa9UOI639yhe4vzHKCYO1vpTUZc4d45oiT4GOZQe1kS"
        },
        {
          "name": "Lisa Brown",
          "email": "lisa@example.com",
          "role": "user",
          "photo": "user-20.jpg",
          "password": "$2a$12$uA9FsDw63v6dkJKGlLQ/8ufYBs8euB7kqIQewyYlZXU5azEKeLEky"
        }
      ]);
    });
};
