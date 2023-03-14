// Code your solution in this file!
const hqLocation = 42;
const cityBlock = 264;

function distanceFromHqInBlocks(pickupLocation){
    if (pickupLocation > hqLocation){
        return pickupLocation - hqLocation;
    } else (pickupLocation < hqLocation)
        return hqLocation - pickupLocation;
    };

function distanceFromHqInFeet(pickupLocation){
    return distanceFromHqInBlocks(pickupLocation) * cityBlock;
}

function distanceTravelledInFeet(pickup, dropoff){
    if (dropoff > pickup){
        return (dropoff - pickup) * 264;
    } else (pickup > dropoff) 
     return (pickup - dropoff) * 264;
    };


function calculatesFarePrice(start, destination){
    const rideLength = distanceTravelledInFeet(start, destination);
    if (rideLength <= 400){
        return 0;
    } else if (rideLength > 400 && rideLength <= 2000){
        return (rideLength - 400) * .02;
    } else if (rideLength > 2000 && rideLength < 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
}