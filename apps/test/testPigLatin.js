'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();
//
//
// var vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
//
//
// function pigLatin(word){
//   var word = word.toLowerCase();
//   for(var k = 0; k < vowels.length; k++){
//     if(word[0] === vowels[k].toLowerCase()){
//       return(word + "yay");
//     }
//   }
//
//
//     var RestWordFirstPart = RestWordAndFirstPart(word);
//     return RestWordFirstPart + "ay";
//
//
//
// }
//
// function RestWordAndFirstPart(word){
//   for(var i = 0; i < word.length; i++){
//     for(var j = 0; j < vowels.length; j++){
//       if(word[i] === vowels[j].toLowerCase()){
//         var firstPart = word.slice(0, i);
//         var restWord = word.slice(i, word.length);
//         var newWord = restWord + firstPart;
//         return newWord;
//       }
//     }
//   }
// }

function getPrompt() {
    prompt.get(['word'], function (error, result) {

        console.log( pigLatin(result['word']) );

        getPrompt();
    });
}

// Tests

if (typeof describe !== 'undefined') {

    describe('#pigLatin()', function () {
        it('should translate a simple word', function () {
            assert.equal(pigLatin('car'), 'arcay');
            assert.equal(pigLatin('dog'), 'ogday');
        });
        it('should translate a complex word', function () {
            assert.equal(pigLatin('create'), 'eatecray');
            assert.equal(pigLatin('valley'), 'alleyvay');
        });
        it('should attach "yay" if word begins with vowel', function () {
            assert.equal(pigLatin('egg'), 'eggyay');
            assert.equal(pigLatin('emission'), 'emissionyay');
        });
        it('should auto lowercase word before translation', function () {
            assert.equal(pigLatin('HeLlO'), 'ellohay');
            assert.equal(pigLatin('RoCkEt'), 'ocketray');
        });
    });
} else {

    getPrompt();

}
