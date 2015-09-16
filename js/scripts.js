function Player(mark) {
  this.mark = mark;
}

function Space(xCoordinate, yCoordinate, markedBy) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.markedBy = markedBy;
}

Space.prototype.mark = function(player) {
  this.markedBy = player;
}

function Board(size) {
  this.boardArray = [];
  for(var x=1; x<=size; x++) {
    for(var y=1; y<=size; y++) {
      var newSpace = new Space(x,y,null);
      this.boardArray.push(newSpace);
    }
  }
}

Board.prototype.getRows = function(xCoord) {
  var rows = [];
  this.boardArray.forEach(function(space) {
    if(space.xCoordinate === xCoord) {
      rows.push(space);
    }
  });
  return rows;
}
//
Board.prototype.checkGameOver = function() {
  //Diagonals
  if((this.boardArray[0].markedBy === this.boardArray[4].markedBy) && (this.boardArray[0].markedBy === this.boardArray[8].markedBy) || (this.boardArray[2].markedBy === this.boardArray[4].markedBy) && (this.boardArray[2].markedBy === this.boardArray[6].markedBy)) {
    return true;
  } else {
  //Rows
  for(var i=0; i<this.boardArray.length; i+=3) {
    if((this.boardArray[i].markedBy === this.boardArray[i+1].markedBy) && (this.boardArray[i].markedBy === this.boardArray[i+2].markedBy)) {
      return true;
    }
  }
  //Columns
  for(var i=0; i<this.boardArray.length; i++) {
    if((this.boardArray[i].markedBy === this.boardArray[i+3].markedBy) && (this.boardArray[i].markedBy === this.boardArray[i+6].markedBy)) {
      return true;
    }
  }
  return false;
}



  // this.boardArray.forEach(function(space, index) {
  //   console.log(index);
  //   if(this.markedBy === this.boardArray[index].markedBy) {
  //     return true;
  //   }
    // var xCoordinate = space.xCoordinate;
    // var yCoordinate = space.yCoordinate;
    //
    // for(var x = xCoordinate; x<=3; x++) {
    //   for(var y = 1; y<=3; y++) {
    //     var currentSpace;
    //     currentSpace.find(x, y);
    //   }
    // }
    // var rows = this.getRows(space.xCoordinate);
    // if((rows[0].markedBy === rows[1].markedBy) && (rows[0].markedBy === rows[2].markedBy)) {
    //   return true;
    // }
}
