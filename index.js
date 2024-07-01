// Code your solution in this file!

// function distanceFromHqInBlocks (pickUpValue) {
//     // returns the number of blocks given a value
//     // if (pickUpValue < 42) {
//     //     return (pickUpValue - 42) * (-1) 
//     // } else {
//     //     return pickUpValue - 42
//     // }
//     return Math.abs(pickUpValue - 42)
// }

const distanceFromHqInBlocks = pickUpValue => Math.abs(pickUpValue - 42)

// function distanceFromHqInFeet(someValue) {
//     distanceFromHqInBlocks(someValue);
//     // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
//     // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
//     return distanceFromHqInBlocks(someValue) * 264
//     // the return value of distanceFromHqInBlocks can then be used to calculate feet
//   }

const distanceFromHqInFeet = someValue => distanceFromHqInBlocks(someValue) * 264 


//   function distanceTravelledInFeet(start, destination) {
//     //returns the number of feet traveled
//     // if ((start - destination) < 0 ) {
//     //     return (start - destination) * (-1) * 264
//     // } else {
//     //     return (start - destination) * 264
//     // }
//     return Math.abs(start -destination) * 264
//   }

  const distanceTravelledInFeet = (start, destination) => Math.abs(start -destination) * 264

  

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance = distanceTravelledInFeet(start, destination)

    if (distance < 400) {
        return 0
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02
    } else if (distance > 2000 && distance <= 2500 ) {
        return 25
    } else {
        return 'cannot travel that far'
    }
  }

  