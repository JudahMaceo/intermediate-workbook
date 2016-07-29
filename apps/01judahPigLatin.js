var vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];


function pigLatin(word){
  for(k = 0; k < vowels.length; k++){
    if(word[0].toLowerCase() === vowels[k].toLowerCase()){
      return(word + "yay");
    }
  }


    var firstPartWord = firstPart(word);
    var newWord = word.replace(firstPartWord,"") + firstPartWord + "ay";
    return newWord.toLowerCase();


}

function firstPart(word){
  var newWord = word + "firstpart";
  for(i = 0; i < word.length; i++){
    for(j = 0; j < vowels.length; j++){
      if(word[i].toLowerCase() === vowels[j].toLowerCase()){
        return word.slice(0,i);
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
