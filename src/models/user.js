import bookshelf from '../db';

const TABLE_NAME = 'users';

/**
 * User Model.
 */
class User extends bookshelf.Model {
  /**
   * Get table name.
   */
  get tableName() {
    return TABLE_NAME;
  }

  /**
   * Table has timestamps.
   */
  get hasTimeStamps() {
    return true;
  }
}



export default User;
