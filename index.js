const cardList = document.querySelector( '.cardList');
const micro = document.getElementById('mic')
const score = document.querySelector('.score');
buildBoard();
let clicks = 0;

let interval = setInterval(function(){
    addCard("firewall") //makes it start at 1 not 0
}, 1000);
let badInterval = setInterval( function(){
    addBadCard("virus")
}, 2000);

cardList.addEventListener('click',function (e){
    console.log(e.target);
    if (e.target.matches('.cardList')){
        return
    }
    if (e.target.classList.contains('active')){
        e.target.classList.remove('active');
        e.target.classList.add('inactive');
        return
    }
    e.target.remove();
})

micro.addEventListener('click',function (e){
    console.log(e.target);
    if (e.target.matches('.cardList')){
        return
    }
    if (e.target.classList.contains('virus')){
        e.target.classList.remove('virus');
        e.target.classList.add('inactive');
        return
    }
    e.target.remove();
})


function addCard(value){
    let card = document.createElement( 'div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}

function addBadCard(value){
    let badCard = document.createElement('div');
    badCard.classList.add('badCard');
    badCard.classList.add('badActive');
    badCard.innerHTML = value;
    cardList.appendChild(badCard);
}

function buildBoard(){
    for (let i=0; i<12; i++){
        addCard( 'firewall');
    }
}