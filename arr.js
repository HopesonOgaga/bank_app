// PRIMARY DATA
const Julia_data = [3, 5, 2, 12, 7];
const Kate_data = [4, 1, 15, 8, 3];
//TEST DATA 2:
const Julia_data2 = [9, 16, 6, 8, 3];
const Kate_data2 = [10, 5, 6, 1, 4];
//
const checkDogs = (dog_julia, dog_kate) => {
  new_arr = dog_julia;
  new_arr.splice(-2);
  const merge_data = [...new_arr, ...dog_kate];
  merge_data.forEach(function (value, index) {
    const age = value >= 5 ? 'adult' : 'puppy';
    console.log(`dog number:${index + 1} and is ${age} ${value} old`);
  });
};

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euro_usd = 1.1;

const new_value = movements.map(function (movement) {
  return movement * euro_usd;
});

const higher = movements.filter(function (mov) {
  return mov > 0;
});

let sum = 0;
const compress = movements.reduce(function (mov) {
  return (sum += mov);
});

const movement_description = movements.map(function (mov, i, arr) {
  if (mov > 0) {
    return `movement: ${i + 1} you deposited ${mov}`;
  } else {
    return `movement: ${i + 1}  you withdrew ${Math.abs(mov)}`;
  }
});

const cleri = movements.forEach(function (mov, i) {
  if (mov > 0) {
    return `movement: ${i + 1} you deposited ${mov}`;
  } else {
    return `movement: ${i + 1}  you withdrew ${Math.abs(mov)}`;
  }
});

////////////////////////////////////////////////////////

// let arr = ['a','b','c','d','e']
// const arr_2 = ['j','i','h','g','f']
// console.log(arr.slice(2,4))
// console.log(arr.slice(-1))
// console.log(arr.slice())
// console.log(arr_2.reverse())
// console.log(arr_2)

// //concat

// const letters = arr.concat(arr_2)
// console.log([...arr, ...arr_2])
// console.log(letters)

// // join
// console.log(letters.join(' '))
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log('-------for of--------')
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`movement: ${i + 1} you deposited ${movement}`);
//   } else {
//     console.log(`movement: ${i + 1}  you withdrew ${Math.abs(movement)}`);
//   }
// }
// //// for each
// console.log('-------for each--------')

// movements.forEach(function (movement, i, index) {
//   if (movement > 0) {
//     console.log(`movement: ${i + 1}  you deposited ${movement}`);
//   } else {
//     console.log(`movement: ${i + 1}  you withdrew ${Math.abs(movement)}`);
//   }
// });

// for (i = 0; i < movements.length; i++) {
//   if (movements[i] > 0) {
//     console.log(`you deposited ${movements[i]}`);
//   } else {
//     console.log(`you withdrew ${Math.abs(movements[i])}`);
//   }
// }
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
const owner_user_name = acccount => {
  acccount.forEach(function (acct_value) {
    acct_value.username = acct_value.owner
      .toLowerCase()
      .split(' ')
      .map(function (name) {
        return name[0];
      })
      .join('');
  });
};
const test_w = owner_user_name(accounts);
// console.log(test_w)
// const test = owner_user_name(accounts);
// console.log(test);
// const user = 'Steven Thomas Williams';
// const user_name = user
//   .toLowerCase()
//   .split(' ')
//   .map(function (name) {
//     return name[0];
//   })
//   .join('');
