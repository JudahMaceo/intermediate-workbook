//salvador = rock
//computer = random

//prompt = salvador = rock
//hand1 must be ["rock", paper, scissors]
//
//reg ex replace space with ""


function rockPaperScissors(hand1, hand2) {

    var hand1 = randomHand(hand1);
    var hand2 = randomHand(hand2);
    console.log(hand1,hand2);
    //rock === 0
    //paper === 0

    if(hand1 === 0 && hand2 === 0){
      console.log("hand1 ");
    }

}

rockPaperScissors(1,2);

function randomHand(a){
  a = Math.floor(Math.random() * 3);
  return a
}
function randomHand(b){
  b = Math.floor(Math.random() * 3);
  return b
}
