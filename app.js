const cards = document.querySelectorAll('.flash-card')
let won = false;
let cardFlipped = false;
let lockCard = false;
let scoreNum = 0;
let messageScore = "Your Score Is: ";
let attemptsNum=0;
let messageAttempts="Attempts: ";
let cardsOpen=[];

    function flipCard() {
    // if same card clicked twice do nothing.
    if (lockCard)
    return lockCard === true;
    if (this === firstCard) 
    return firstCard;
    this.classList.toggle('flip')

    if(!cardFlipped) {
    cardFlipped = true;
    firstCard = this;
    return;
}
    secondCard = this;
    // when card flipped check for a match
    checkForMatch()
    }  
    
    //check for a match
    function checkForMatch() {
    let match = firstCard.dataset.image === secondCard.dataset.image
    if (match === true){
        disableCards();
        score();
        attempts();

    }else{
        // if no match call flip card back function
        attempts();
        unflipCards();
        
    }
}
    // shuffle the cards
function shuffle() {
    cards.forEach(card => {
    let ramdomCards = Math.floor(Math.random() * cards.length);
    card.style.order = ramdomCards;
  });
}
    // increment score, if score = 6 callback win condition
    function score() {
        scoreNum=++scoreNum;
        document.getElementById("score").innerText= messageScore + scoreNum;
        if (scoreNum === 6){
        document.querySelector('.container').style.display = 'none';
        document.body.classList.add('game-over')
    
        }
      }
      // number of attempts 
      function attempts(){
        ++attemptsNum;
        document.getElementById("attempts").innerText = messageAttempts + attemptsNum;
      }
      // make same card not clickable twice 
    function disableCards() {
    cardsOpen.push(firstCard);
    cardsOpen.push(secondCard);
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
    resetBoard()
    }
    // if no match unflip cards
    function unflipCards() {
    setTimeout(() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    resetBoard()
    }, 500)
}

    function resetBoard() {
    cardFlipped = false;
    lockCard = false;
    firstCard = null;
    secondCard = null;
    document.body.classList.remove('game-over')
    document.querySelector('.container').style.display = 'flex';
}
    // reset game when button clicked
    function newGame() {
    resetBoard();
    for (var i = cardsOpen.length - 1; i >= 0; i--) {
      cardsOpen[i].classList.remove("flip");
      const cards = document.querySelectorAll('.flash-card');
      cards.forEach(card => card.addEventListener('click', flipCard));
      shuffle()
    }
    scoreNum = 0;
    document.getElementById("score").innerText= messageScore + scoreNum;
  
    attemptsNum=0;
    document.getElementById("attempts").innerText= messageAttempts+ attemptsNum;
  
  }
    (function shuffle() {
    cards.forEach(card => {
    let ramdomCards = Math.floor(Math.random() * cards.length);
        card.style.order = ramdomCards;
      });
    })();
    newGame()

// add event listener for each card clicked 
cards.forEach(card => card.addEventListener('click', flipCard))


// instructions button
const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal')

const openModalFunction = () => {
    modal.style.display = 'block'
}

// close about the game icon
const close = document.getElementById('close')
openBtn.addEventListener('click', openModalFunction)
const closeModalFunction = () => {
    modal.style.display = 'none'
  }
close.addEventListener('click', closeModalFunction)