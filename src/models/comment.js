import bookshelf from '../db';
import User from './user';
import Post from './post';

const TABLE_NAME = 'comments';

/**
 * Comment Model.
 */
class Comment extends bookshelf.Model {
  /**
   * Get table name.
   */
  get tableName() {
    return TABLE_NAME
  }

  /**
   * Table has timestamps.
   */
  get hasTimestamps() {
    return true;
  }

  /**
   * Define belongs to a user association.
   *
   * @returns {Model}
   */
  user() {
    return this.belongsTo(User, 'user');
  }

  /**
   * Define belongs to a post association.
   *
   * @returns {Model}
   */
  post() {
    return this.belongsTo(Post, 'post');
  }
}

export default Comment;
