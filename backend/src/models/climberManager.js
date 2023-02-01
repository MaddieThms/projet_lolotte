const AbstractManager = require("./AbstractManager");

class climberManager extends AbstractManager {
  constructor() {
    super({ table: "climber" });
  }

  insert(climber) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [climber.title]
    );
  }

  update(climber) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [climber.title, climber.id]
    );
  }
}

module.exports = climberManager;
