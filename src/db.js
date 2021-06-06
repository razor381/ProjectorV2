import knexJs from 'knex';
import bookshelfJs from 'bookshelf';

import knexConfig from './knexfile';

const knex = knexJs(knexConfig);
const bookshelf = bookshelfJs(knex);

// @TODO enabling plugin gives error, uncomment and fix in future.
// bookshelf.plugin('bookshelf-virtuals-plugin');

export default bookshelf;
