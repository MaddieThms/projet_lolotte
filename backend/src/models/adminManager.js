const AbstractManager = require("./AbstractManager");

class AdminManager extends AbstractManager {
  constructor() {
    super({ table: "administrator" });
  }

  findByEmailWithPassword(email) {
    return this.connection.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );
  }
}
module.exports = AdminManager;