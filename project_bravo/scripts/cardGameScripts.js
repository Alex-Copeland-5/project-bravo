document.addEventListener("DOMContentLoaded", () => {
    console.log("document succesfully loaded, baby");

    const randomDeckOfCards = makeDeckOfCards();
    console.log("random Deck: ", randomDeckOfCards);

    //todo: make 'em random 

    console.log(Math.floor(Math.random() * 52));

    let cardP = document.createElement('p');
    cardP.classList.add("text-wrap");
    cardP.classList.add("drag");
    
    randomDeckOfCards.forEach((card) => {
        // document.getElementById('stackOfCards').append("index of the array = " + j + " & " + "avlue of the array =" + card + "<br>")
        cardP.textContent += card + ' ';
        // document.getElementById('btnClicky').addEventListener('click', btnClicky); 
    });
    document.getElementById('stackOfCards').append(cardP);

    $('.drag').draggable(); 

    $( "#spades" ).droppable({
        drop: function( event, ui ) {
          $( this )
            .addClass( "redClass" );
            
        }
      });
    
});

function makeDeckOfCards() {

    //make 52 cards, 4 suits, 13 per. 

    // var = ... let or const 
    // hard code array const deck = [[Kheart, qheart, jheark], [kspades, ... ]]

    const suits = ["♥️", "♠️", "♣️"];
    let deckOfCards = [];

    for (i = 1; i <= 13; i++) {

        //ex: fruits.forEach((fruit) => console.log(fruit));
        suits.forEach((suit) => {
            // console.log(suit, i);
            deckOfCards.push(suit + i);
        });

    }

    return deckOfCards;

}
