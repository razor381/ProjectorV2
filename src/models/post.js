import bookshelf from '../db';

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
}



export default Post;
