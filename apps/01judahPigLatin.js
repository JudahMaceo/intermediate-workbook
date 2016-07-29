var vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];


function pigLatin(word){
  var word = word.toLowerCase();
  for(k = 0; k < vowels.length; k++){
    if(word[0] === vowels[k].toLowerCase()){
      return(word + "yay");
    }
  }


    var RestWordFirstPart = RestWordAndFirstPart(word);
    return RestWordFirstPart + "ay";



}

function RestWordAndFirstPart(word){
  for(i = 0; i < word.length; i++){
    for(j = 0; j < vowels.length; j++){
      if(word[i] === vowels[j].toLowerCase()){
        var firstPart = word.slice(0, i);
        var restWord = word.slice(i, word.length);
        var newWord = restWord + firstPart;
        return newWord;
      }
    }
  }
}

console.log(pigLatin('car'), 'arcay');
console.log(pigLatin('dog'), 'ogday');
console.log(pigLatin('create'), 'eatecray');
console.log(pigLatin('valley'), 'alleyvay');
console.log(pigLatin('egg'), 'eggyay');
console.log(pigLatin('emission'), 'emissionyay');
console.log(pigLatin('heLlo'), 'ellohay');
console.log(pigLatin('RoCkEt'), 'ocketray');
console.log(pigLatin('otter'));
