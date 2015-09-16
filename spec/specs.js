describe('Player', function() {
  it("returns the player's mark", function() {
    var testPlayer = new Player("X");
    expect(testPlayer.mark).to.equal("X");
  });
});

describe('Space', function() {
  it("returns the correct coordinates of a space", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.xCoordinate).to.equal(1);
    expect(testSpace.yCoordinate).to.equal(2);
  });

  it("lets a player mark a space", function() {
    var testPlayer = new Player("X");
    var testSpace = new Space(1,2);
    testSpace.mark(testPlayer);
    expect(testSpace.markedBy).to.equal(testPlayer);
  });
});

describe('Board', function() {
  it("creates 9 spaces when it is initialized", function() {
    var testBoard = new Board(3);
    var testSpace1 = new Space(1,1,null);
    var testSpace2 = new Space(1,2,null);
    var testSpace3 = new Space(1,3,null);
    var testSpace4 = new Space(2,1,null);
    var testSpace5 = new Space(2,2,null);
    var testSpace6 = new Space(2,3,null);
    var testSpace7 = new Space(3,1,null);
    var testSpace8 = new Space(3,2,null);
    var testSpace9 = new Space(3,3,null);
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

  // it("tells if there are three in a row marked by the same player", function() {
  //   var testBoard = new Board(3);
  //   var testPlayer = new Player("X");
  //   var testPlayer2 = new Player("Y");
  //   testBoard.boardArray[0].mark(testPlayer);
  //   testBoard.boardArray[1].mark(testPlayer);
  //   testBoard.boardArray[2].mark(testPlayer2);
  //   expect(testBoard.checkGameOver()).to.equal(false);
  // });

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


});

// describe('Game', function() {
//   it("")
// });
