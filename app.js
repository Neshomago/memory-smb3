document.addEventListener('DOMContentLoaded', ()=> {

    //card options
    const cardArray=[
        {
            name: 'star',
            img: 'images/star.gif'
        },
        {
            name: 'star',
            img: 'images/star.gif'
        },
        {
            name: 'chest',
            img: 'images/chest.gif'
        },
        {
            name: 'chest',
            img: 'images/chest.gif'
        },
        {
            name: 'coin10',
            img: 'images/coin10.gif'
        },
        {
            name: 'coin10',
            img: 'images/coin10.gif'
        },
        {
            name: 'coin20',
            img: 'images/coin20.gif'
        },
        {
            name: 'coin20',
            img: 'images/coin20.gif'
        },
        {
            name: 'flower',
            img: 'images/flower.gif'
        },
        {
            name: 'flower',
            img: 'images/flower.gif'
        },
        {
            name: 'mush',
            img: 'images/mush.gif'
        },
        {
            name: 'mush',
            img: 'images/mush.gif'
        },
    ];

    cardArray.sort( () => 0.5 - Math.random())
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //creating board
    function createBoard(){
        for (let i=0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.gif')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check match
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosenId[1]){
            alert ('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.gif')
            cards[optionTwoId].setAttribute('src','images/white.gif')
            cardsWon.push(cardsChosen)
        } else{
            cards[optionOneId].setAttribute('src', 'images/blank.gif')
            cards[optionTwoId].setAttribute('src','images/blank.gif')
            alert('Try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congrats! you found them all!'
        }
    }


    //flipcard
    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 200)
        }
    }

    createBoard()
})