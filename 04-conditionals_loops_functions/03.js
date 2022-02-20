function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

/**
 * 1. Create while loop equivalents of the loops in the previous exercises!
 *
 * 2. Using the random number generator above, write a while loop that generates
 *    random numbers until it has generated one that is divisible by 11. Do you
 *    remember what operator to use?
 */


let index = 5;
while (index < 1000) {
    console.log(index);
    index += 5;
}


let count = 100;
while (count >= -100) {
    console.log(count);
    count--;
}