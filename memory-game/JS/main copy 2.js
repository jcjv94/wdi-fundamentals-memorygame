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

var flipCard = function(cardId){
    var cardId = this.getAttribute("data-id");
    var card = cards[cardId];
    console.log("user flipped" + cards[cardId].rank);
    cardsInPlay.push(card.rank);
    console.log(cardImage);
    console.log(suit);
    if (cardsInPlay.length === 2) {
        checkForMatch();
      }
    }

