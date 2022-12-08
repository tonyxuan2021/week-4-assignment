// Problem #5: Bubble Sort

const data = [
  {
    name: 'John Smith',
    age: new Map([['age', 88]]),
    favoriteMovie: [
      {
        title: 'Hulk',
        genre: 'action',
        rating: 6,
      },
    ],
  },
  {
    name: 'Tony Kim',
    age: new Map([['age', 3]]),
    favoriteMovie: [
      {
        title: 'Top Gun',
        genre: 'action',
        rating: 10,
      },
    ],
  },
  {
    name: 'John Smith',
    age: new Map([['age', 35]]),
    favoriteMovie: [
      {
        title: 'Saw',
        genre: 'horror',
        rating: 8,
      },
    ],
  },
];

const sortedByRating = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (
        array[j].favoriteMovie[0].rating > array[j + 1].favoriteMovie[0].rating
      ) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

const sortedByAge = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j].age.get('age') > array[j + 1].age.get('age')) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array.reverse();
};
