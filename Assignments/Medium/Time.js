const calculateSum = (number) => {
    let start = new Date();
    let sum = 0;
    for(let i = 1; i <= number; i++){
        sum += i;
    }
    let end = new Date();
    return end - start;
}

console.log(`${calculateSum(1000000000)} milliseconds`);