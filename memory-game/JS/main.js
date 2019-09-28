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
var cardsInPlay = [];

var checkForMatch = function(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
    } else {
      console.log("Sorry, try again.");
    }
}

var flipCard = function()
{
  var cardId = this.getAttribute("data-id");
  var card = cards[cardId];
  this.setAttribute("src", card.cardImage);
  console.log(this);
  cardsInPlay.push(card.rank);
  if (cardsInPlay.length === 2) 
  {
    checkForMatch();
  }
}

var clearGame = function ()
{
  var allCards = document.getElementsByClassName("cardElement");
  for (var i = 0; i < allCards.length; i++)
  {
    allCards[i].setAttribute("src","images/back.png");
  }
}

  var createBoard = function(){
    
    var board = document.getElementById("game-board");

    for (var i = 0; i < cards.length; i++) {
      var cardElement = document.createElement("img");
      cardElement.setAttribute("class", "cardElement");
      cardElement.setAttribute("src", "images/back.png");
      cardElement.setAttribute("data-id", i);
      cardElement.addEventListener("click", flipCard);
      board.appendChild(cardElement);
    }

    var button = document.createElement("button");
    button.setAttribute("id", "btnClear");
    button.innerHTML = "Reset";
    button.addEventListener("click", clearGame);
    board.appendChild(button);
  }
  
  createBoard();
