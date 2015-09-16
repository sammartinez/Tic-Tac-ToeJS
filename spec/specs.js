describe('Player', function() {
  it("returns the player's mark", function() {
    var testPlayer = new Player("X");
    expect(testPlayer.mark).to.equal("X");
  });
});

describe('Space', function() {
  it("returns the correct coordinates of a space", function() {
    var testSpace = new Space(null);
    expect(testSpace.markedBy).to.equal(null);
  });

  it("lets a player mark a space", function() {
    var testPlayer = new Player("X");
    var testSpace = new Space(null);
    testSpace.mark(testPlayer);
    expect(testSpace.markedBy).to.equal(testPlayer);
  });
});

describe('Board', function() {
  it("creates 9 spaces when it is initialized", function() {
    var testBoard = new Board(3);
    var testSpace1 = new Space(1);
    var testSpace2 = new Space(2);
    var testSpace3 = new Space(3);
    var testSpace4 = new Space(4);
    var testSpace5 = new Space(5);
    var testSpace6 = new Space(6);
    var testSpace7 = new Space(7);
    var testSpace8 = new Space(8);
    var testSpace9 = new Space(9);
    expect(testBoard.boardArray).to.eql([testSpace1, testSpace2, testSpace3, testSpace4, testSpace5, testSpace6, testSpace7, testSpace8, testSpace9]);
  });

  it("tells if there are three in a row marked by the same player within a row with the array values at 0, 1, 2", function() {
    var testBoard = new Board(3);
    var testPlayer = new Player("X");

    testBoard.boardArray[0].mark(testPlayer);
    testBoard.boardArray[1].mark(testPlayer);
    testBoard.boardArray[2].mark(testPlayer);
    expect(testBoard.checkGameOver()).to.equal(true);
  });

  it("tells if there are three in a row marked by the same player within a row with the array values at 3, 4, 5", function() {
    var testBoard = new Board(3);
    var testPlayer = new Player("X");

    testBoard.boardArray[3].mark(testPlayer);
    testBoard.boardArray[4].mark(testPlayer);
    testBoard.boardArray[5].mark(testPlayer);
    expect(testBoard.checkGameOver()).to.equal(true);
  });

  it("tells if there are three in a row marked by the same player within a row with the array values at 6, 7, 8", function() {
    var testBoard = new Board(3);
    var testPlayer = new Player("X");

    testBoard.boardArray[6].mark(testPlayer);
    testBoard.boardArray[7].mark(testPlayer);
    testBoard.boardArray[8].mark(testPlayer);
    expect(testBoard.checkGameOver()).to.equal(true);
  });


  it("tells if there are three in a row marked by the same player within a column with the array values at 0, 3, 6", function() {
    var testBoard = new Board(3);
    var testPlayer = new Player("X");

    testBoard.boardArray[0].mark(testPlayer);
    testBoard.boardArray[3].mark(testPlayer);
    testBoard.boardArray[6].mark(testPlayer);
    expect(testBoard.checkGameOver()).to.equal(true);
  });

  it("tells if there are three in a row marked by the same player within a column with the array values at 1, 4, 7", function() {
    var testBoard = new Board(3);
    var testPlayer = new Player("X");

    testBoard.boardArray[1].mark(testPlayer);
    testBoard.boardArray[4].mark(testPlayer);
    testBoard.boardArray[7].mark(testPlayer);
    expect(testBoard.checkGameOver()).to.equal(true);
  });

  it("tells if there are three in a row marked by the same player within a column with the array values at 2, 5, 8", function() {
    var testBoard = new Board(3);
    var testPlayer = new Player("X");

    testBoard.boardArray[2].mark(testPlayer);
    testBoard.boardArray[5].mark(testPlayer);
    testBoard.boardArray[8].mark(testPlayer);
    expect(testBoard.checkGameOver()).to.equal(true);
  });

  it("tells if there are three in a row marked by the same player within a diagonal with the array values at 0, 4, 8", function() {
    var testBoard = new Board(3);
    var testPlayer = new Player("X");

    testBoard.boardArray[0].mark(testPlayer);
    testBoard.boardArray[4].mark(testPlayer);
    testBoard.boardArray[8].mark(testPlayer);
    expect(testBoard.checkGameOver()).to.equal(true);
  });

  it("tells if there are three in a row marked by the same player within a diagonal with the array values at 2, 4, 6", function() {
    var testBoard = new Board(3);
    var testPlayer = new Player("X");

    testBoard.boardArray[2].mark(testPlayer);
    testBoard.boardArray[4].mark(testPlayer);
    testBoard.boardArray[6].mark(testPlayer);
    expect(testBoard.checkGameOver()).to.equal(true);
  });

  it("tells if there are not three in a row marked by the same player", function() {
    var testBoard = new Board(3);
    var testPlayer = new Player("X");
    var testPlayer2 = new Player("Y");
    testBoard.boardArray[0].mark(testPlayer);
    testBoard.boardArray[1].mark(testPlayer);
    testBoard.boardArray[2].mark(testPlayer2);
    expect(testBoard.checkGameOver()).to.equal(false);
  });

  it("tells if it is a cats game (aka tie)", function() {
    var testBoard = new Board(3);
    var testPlayer = new Player("X");
    var testPlayer2 = new Player("Y");
    testBoard.boardArray[0].mark(testPlayer2);
    testBoard.boardArray[1].mark(testPlayer2);
    testBoard.boardArray[2].mark(testPlayer);
    testBoard.boardArray[3].mark(testPlayer);
    testBoard.boardArray[4].mark(testPlayer);
    testBoard.boardArray[5].mark(testPlayer2);
    testBoard.boardArray[6].mark(testPlayer2);
    testBoard.boardArray[7].mark(testPlayer);
    testBoard.boardArray[8].mark(testPlayer);
    expect(testBoard.checkGameOver()).to.equal(false);
  });
});

describe('Game', function() {
  it("should have a board and two players", function() {
    var testPlayer1 = new Player("X");
    var testPlayer2 = new Player("Y");
    var testBoard = new Board(3);

    var testGame = new Game(testPlayer1, testPlayer2, testBoard);

    expect(testGame.player1).to.equal(testPlayer1);
    expect(testGame.player2).to.equal(testPlayer2);
    expect(testGame.board).to.equal(testBoard);
  });

  it("should change from player1s turn to player2s turn", function() {
    var testPlayer1 = new Player("X");
    var testPlayer2 = new Player("Y");
    var testBoard = new Board(3);

    var testGame = new Game(testPlayer1, testPlayer2, testBoard);
    testGame.nextTurn();
    expect(testGame.turn).to.equal(testPlayer2);
    testGame.nextTurn();
    expect(testGame.turn).to.equal(testPlayer1);
  });
});
