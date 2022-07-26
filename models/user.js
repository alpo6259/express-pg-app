class User {
  static async create (newUser) {
    const { firstName, lastName, email, tel } = newUser;

    const insertQuery = `
        INSERT INTO users (first_name, last_name, email, tel)
        VALUES ('${firstName}', '${lastName}', '${email}', '${tel}')
        RETURNING *;
      `;

    try {
      const {
        rows: [user],
      } = await User.pool.query(insertQuery);
      return user;
    } catch (err) {
      throw new Error(err.detail);
    }
  }

  static async update (id, body) {
    const { firstName, lastName, email, tel } = body;

    const updateUser = `
    UPDATE users
    SET ${firstName ? `first_name = '${firstName}'` : ''} ${
      lastName && firstName ? ',' : ''
    }
        ${lastName ? `last_name = '${lastName}'` : ''} ${
      email && (firstName || lastName) ? ',' : ''
    } 
        ${email ? `email = '${email}'` : ''} ${
      tel && (firstName || lastName || email) ? ',' : ''
    }
        ${tel ? `tel = '${tel}'` : ''} 
    WHERE id = '${id}'
    RETURNING *;
    `;

    try {
      const { rows } = await User.pool.query(updateUser);
      return rows;
    } catch (err) {
      throw new Error(err.detail);
    }
  }

  static async delete (id) {
    const deleteQuery = `
    DELETE FROM users
    WHERE id=${id}
    RETURNING id;
    `;

    try {
      const {
        rows: [deletedUser],
      } = await User.pool.query(deleteQuery);
      return deletedUser;
    } catch (err) {
      throw new Error(err.detail);
    }
  }

  static async getUsersPhones (id) {
    const getUserPhones = `
    SELECT u.first_name, p.brand, p.model,p_to_o.amount, o.created_at
    FROM phones AS p INNER JOIN phones_to_orders AS p_to_o ON p.id = p_to_o.phone_id 
                     INNER JOIN orders AS o ON o.id = p_to_o.order_id
                     INNER JOIN users AS u ON u.id=o.user_id
    WHERE u.id = '${id}'; `;

    try {
      const { rows } = await User.pool.query(getUserPhones);
      if (rows) {
        return rows;
      }
    } catch (err) {
      throw new Error(err.detail);
    }
  }

  static async getUsers () {
    const getUsers = `SELECT id, first_name, last_name, tel FROM users ; `;
    try {
      const { rows } = await User.pool.query(getUsers);
      if (rows) {
        return rows;
      }
    } catch (err) {
      throw new Error(err.detail);
    }
  }
}

module.exports = User;
