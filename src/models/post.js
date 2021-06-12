import bookshelf from '../db';
import User from './user';
import Comment from './comment';

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
   * Define belongs to user association.
   *
   * @returns {Model}
   */
  user() {
    return this.belongsTo(User, 'user');
  }

  /**
   * Define has many comments association.
   *
   * @returns {Model}
   */
  comments() {
    return this.hasMany(Comment, 'post');
  }
}

export default Post;
