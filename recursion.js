// Problem 1: Recursion
const flatTheArray = (arr) => {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      resultArr = resultArr.concat(flatTheArray(arr[i]));
    } else {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
};

// Problem 2: Recursion

function capitalizeAllLetters(arr) {
  if (arr.length == 0) {
    return [];
  }

  return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
  // [tony, kim, james]
  // [kim, james]
  // [james]
  // [tony].toUpperCase + capitalizeWords([kim, james])
}

// console.log(capitalizeWords(['tony', 'kim', 'james']));
