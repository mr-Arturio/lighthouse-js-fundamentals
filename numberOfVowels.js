const numberOfVowels = function (data) {

  let num = data.match(/[aeiou]/gi); //g makes it search the whole string, i makes it case-insensitive
  return num.length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

