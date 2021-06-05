import bookshelf from '../db';
import User from './user';

const TABLE_NAME = 'posts';

/**
 * User Model.
 */
class Post extends bookshelf.Model {
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

  /**
   *
   * @returns
   */
  user() {
    return this.belongsTo(User, 'user_id');
  }
}



export default Post;
