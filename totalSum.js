const totalSum = (num) => {
    let sum = 0

    for (let i = 1; i<=num; i++){
        sum+=i
    }
    console.log(sum)
    return sum
}

totalSum(3)
totalSum(5)
totalSum(100)