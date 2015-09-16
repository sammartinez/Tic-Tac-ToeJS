function Player(mark) {
  this.mark = mark;
}

function Space(markedBy) {
  this.markedBy = markedBy;
}

Space.prototype.mark = function(player) {
  this.markedBy = player;
}

function Board(size) {
  this.boardArray = [];
  for(var x=1; x<=(size*size); x++) {
      var newSpace = new Space(x);
      this.boardArray.push(newSpace);
    }
}

Board.prototype.checkGameOver = function() {
    var gameOver=false;
    //Diagonals
    if((this.boardArray[0].markedBy === this.boardArray[4].markedBy) && (this.boardArray[0].markedBy === this.boardArray[8].markedBy) ||
    (this.boardArray[2].markedBy === this.boardArray[4].markedBy) && (this.boardArray[2].markedBy === this.boardArray[6].markedBy)) {
      gameOver = true;
    }
    //Rows
    for(var i=0; i<this.boardArray.length; i+=3) {
      if((this.boardArray[i].markedBy === this.boardArray[i+1].markedBy) && (this.boardArray[i].markedBy === this.boardArray[i+2].markedBy)) {
        gameOver = true;
      }
    }
    // Columns
    for(var j=0; j<3; j++) {
      if((this.boardArray[j].markedBy === this.boardArray[j+3].markedBy) && (this.boardArray[j].markedBy === this.boardArray[j+6].markedBy)) {
        gameOver = true;
      }
    }
  return gameOver;
}

function Game(player1, player2, board) {
  this.player1 = player1;
  this.player2 = player2;
  this.board = board;
  this.turn = player1;
}

Game.prototype.nextTurn = function() {
  if(this.turn === this.player1) {
    this.turn = this.player2;
  } else {
    this.turn = this.player1;
  }
}
