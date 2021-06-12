import bcrypt from 'bcryptjs';

import bookshelf from '../db';
import Post from './post';

const TABLE_NAME = 'users';

/**
 * Encrypt passed string or number.
 *
 * @param {String|Number} toEncrypt
 * @returns {String}
 */
function encrypt(toEncrypt) {
  return bcrypt.hash(toEncrypt, 12);
}

/**
 * User Model.
 */
class User extends bookshelf.Model {

  /**
   * Constructor function.
   *
   * @param  {...any} args
   */
  constructor(...args) {
    super(...args);

    this.on('saving', this.handleOnSave);
  }

  /**
   * Pre save handler.
   */
  async handleOnSave() {
    await this.encryptAndSavePassword();
  };

  /**
   * Encrypt plain text password and save to db.
   */
  async encryptAndSavePassword() {
    if (!this.hasChanged) return;

    const encryptedPassword = await encrypt(this.attributes.password);

    this.set('password', encryptedPassword);
    this.set('password_confirm', null);
  }

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
   * Hidden attributes.
   */
  get hidden() {
    return [
      'password',
      'active',
      'password_confirm',
      'passwordResetToken',
      'password_changed_at',
      'reset_token_expires_at'
    ];
  }

  /**
   * Fetch model and include hidden attributes.
   *
   * @param {Object} options
   * @returns {Promise}
   */
  fetchWithHiddenAttributes(options = {}) {
    return this
      .fetch(options)
      .then(() => this.toJSON({ hidden: [] }));
  }

  /**
   * Compare request password with user saved password.
   *
   * @param {String} requestPassword
   * @param {String} password
   * @returns {Promise}
   */
  static doesPasswordMatch(requestPassword, password) {
    return bcrypt.compare(requestPassword, password);
  }

  /**
   * Associate posts to user.
   */
  posts() {
    return this.hasMany(Post);
  }
}

export default User;
