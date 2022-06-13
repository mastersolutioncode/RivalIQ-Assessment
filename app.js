const input1 = "the cat sat on the mat";
const input2 = "the cat sat on the dog";

const search1 = "cat";
const search2 = "cat|dog";

const search = (input, search) => {
  var map = new Map();
  const wordArray = input.split(' ');

  for (let i = 0; i < wordArray.length; i++) {
    if (search.includes(wordArray[i])) {
      if (map.has(wordArray[i])) map.set(wordArray[i], map.get(wordArray[i]) + 1);
      else map.set(wordArray[i], 1);
    }
  }

  return map;
}

console.log(search(input1, search1));
console.log(search(input2, search2));