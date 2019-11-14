import { pigWord } from '../src/back.js';

describe('pigWord', () => {
  test('should take in a word and return a word', () => {
    var word = "Hi";
    expect(word).toEqual("Hi");
  });
  test('should take a word starting with y and return the word without y and yay at the end', () => {
    var word = "your";
    var newWord = pigWord(word);
    expect(newWord).toEqual("ouryay")
  })
});
test('should take a word starting with a vowel and return the word with way at the end', () => {
  var word = "effect";
  var newWord = pigWord(word);
  expect(newWord).toEqual("effectway")
})
test('should take a word with a qu and return the word with qu and whatever was before it at the end adding ay', () => {
  var word = "squish";
  var newWord = pigWord(word);
  expect(newWord).toEqual("ishsquay")
})
test('should take words that start with a consenent and take the consenents before the first vowel are put them at end of the word and ay is added', () => {
  var word = "brace"
  var newWord = pigWord(word);
  expect(newWord).toEqual("acebray")
})
// });
//
// describe('pigWord', () => {
//   test('should ta')
//
// })
