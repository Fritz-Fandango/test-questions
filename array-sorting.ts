const person = [  {
   name: 'Rafael',
    age: 21,
    blackBelt: true,
    experience: 12,
    availableForWork: true,
    isTurtle: true,
    friends: [
     {
       name: 'Leo',
        age: 31,
        blackBelt: false,
        isTurtle: false,
        availableForWork: false
      },
      {
       name: 'Donny',
        age: 33,
        blackBelt: true,
        isTurtle: false,
        availableForWork: true
      }
    ]
  },  {
   name: 'Michaelangelo',
    age: 17,
    blackBelt: true,
    experience: 10,
    availableForWork: false,
    isTurtle: true,
    friends: [
     {
       name: 'April',
        age: 21,
        blackBelt: false,
        isTurtle: false,
        availableForWork: false
      },
      {
       name: 'B-Bob',
        age: 21,
        blackBelt: true,
        isTurtle: false,
        availableForWork: true
      }
    ]
  }
];

const people = [
 {
   name: 'Leo',
    age: 22,
    blackBelt: true,
    experience: 18,
    availableForWork: true,
    isTurtle: true,
    friends: [
     {
       name: 'Micky',
        age: 44,
        blackBelt: false,
        availableForWork: true,
        isTurtle: false
      },
      {
       name: 'Donny',
        age: 32,
        blackBelt: true,
        availableForWork: false,
        isTurtle: false
      }
    ]
  },
  {
   name: 'Rafael',
    age: 21,
    blackBelt: true,
    experience: 12,
    availableForWork: true,
    isTurtle: true,
    friends: [
     {
       name: 'Leo',
        age: 31,
        blackBelt: false,
        isTurtle: false,
        availableForWork: false
      },
      {
       name: 'Donny',
        age: 33,
        blackBelt: true,
        isTurtle: false,
        availableForWork: true
      }
    ]
  },
  {
   name: 'Donatello',
    age: 19,
    blackBelt: true,
    experience: 16,
    availableForWork: false,
    isTurtle: true,
    friends: [
     {
       name: 'Nicky',
        age: 34,
        blackBelt: false,
        isTurtle: false,
        availableForWork: true
      },
      {
       name: 'Splinter',
        age: 73,
        blackBelt: true,
        isTurtle: false,
        availableForWork: false
      }
    ]
  },
  {
   name: 'Michaelangelo',
    age: 17,
    blackBelt: true,
    experience: 10,
    availableForWork: false,
    isTurtle: true,
    friends: [
     {
       name: 'April',
        age: 21,
        blackBelt: false,
        isTurtle: false,
        availableForWork: false
      },
      {
       name: 'B-Bob',
        age: 21,
        blackBelt: true,
        isTurtle: false,
        availableForWork: true
      }
    ]
  }
];

/*
console.log('people', people)

const agesOfAllPersons = people.reduce((acc, currentValue) => {
 acc.push(currentValue.age)
  currentValue.friends.forEach( friend => {
      acc.push(friend.age);
  })
  // console.log('acc', acc)
  return acc;
}, []);

const ageSet = new Set(agesOfAllPersons);
console.log([...ageSet]);

const peoples = [...person, ...people]
console.log(peoples)
const availableForWork = peoples.reduce((acc, currentValue) => {
 if(currentValue.availableForWork === true) {
   acc.push(currentValue);
  }
  currentValue.friends.forEach(friend => {
    if(friend.availableForWork === true) {
      acc.push(friend);
    }
  });
  return acc;
}, []);

console.log(new Set(availableForWork));

console.log('peoples', peoples)

const ageSort = (peoples) => peoples.sort((a, b) => a.age - b.age);
console.log(ageSort(peoples));

const alphaSort = (peoples) => peoples.sort((a, b) => {
  if(a.name > b.name) {return 1}
  if(a.name < b.name) {return -1}
  return 0
}
  );

console.log(alphaSort(peoples))
*/

let words = ['éclair', 'adieu', 'café', 'réservé', 'premier'];

words.sort((a,b) => a.localeCompare(b));

console.log(words);
