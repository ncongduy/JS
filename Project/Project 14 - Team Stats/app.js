const team = {
  _players: [
    {
      firstName: "Pablo1",
      lastName: "Sanchez1",
      age: 11,
    },
    {
      firstName: "Pablo2",
      lastName: "Sanchez2",
      age: 12,
    },
    {
      firstName: "Pablo3",
      lastName: "Sanchez3",
      age: 13,
    },
  ],
  _games: [
    {
      opponent: "Broncos1",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "Broncos2",
      teamPoints: 43,
      opponentPoints: 28,
    },
    {
      opponent: "Broncos3",
      teamPoints: 44,
      opponentPoints: 29,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName,
      lastName,
      age,
    };
    this.players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

team.addGame("abc1", 51, 21);
team.addGame("abc2", 52, 22);
team.addGame("abc3", 53, 23);

console.log(team.players);
console.log(team.games);
