const cards = [
  {rank: 'Queen',
  suit: 'Hearts',
  cardImage: 'images/queen-of-hearts.png'
  }, 
  {rank: 'Queen',
  suit: 'Diamonds',
  cardImage: 'images/queen-of-diamonds.png'
  }, 
  {rank: 'King' ,
  suit: 'Hearts',
  cardImage: 'images/king-of-hearts.png'
  }, 
  {rank: 'King',
  suit: 'Diamonds',
  cardImage: 'images/king-of-diamonds.png'
  }
  ];
let cardsInPlay = [];

var checkForMatch = function(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
    } else {
      console.log("Sorry, try again.");
    }
}

var flipCard = function(){
  var cardId = this.getAttribute("data-id");
  var card = cards[cardId];
  this.setAttribute("src", card.cardImage);
  this.setAttribute("class", "clicked");
  console.log(this);
  cardsInPlay.push(card.rank);
  if (cardsInPlay.length === 2) {
  checkForMatch();
}
  }

  var createBoard = function(){
    for (var i = 0; i < cards.length; i++) {
      var cardElement = document.createElement("img");
      cardElement.setAttribute("src", "images/back.png");
      cardElement.setAttribute("data-id", i)
      cardElement.addEventListener("click", flipCard);
      var board = document.getElementById("game-board");
      board.appendChild(cardElement);
    }
  }
  createBoard();