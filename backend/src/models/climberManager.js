const AbstractManager = require("./AbstractManager");

class climberManager extends AbstractManager {
  constructor() {
    super({ table: "climber" });
  }

  insert(climber) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, age, genre, country, picture) values (?,?,?,?,?,?)`,
      [
        climber.firstname,
        climber.lastname,
        climber.age,
        climber.genre,
        climber.country,
        climber.picture,
      ]
    );
  }

  update(climber) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, age = ?, genre = ?, country = ?, picture = ? where id = ?`,
      [
        climber.firstname,
        climber.lastname,
        climber.age,
        climber.genre,
        climber.country,
        climber.picture,
        climber.id,
      ]
    );
  }

  updatePicture(id, picture) {
    return this.connection.query(
      `update ${this.table} set picture = ? where id = ?`,
      [picture, id]
    );
  }
}

module.exports = climberManager;
