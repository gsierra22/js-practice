let fizzbuzz = (num) =>{
    if (num % 3 === 0 && num % 5 === 0){
        console.log('fizzbuzz')
    }
    else if (num % 5 === 0){
        console.log('buzz')
    }
    else if (num % 3 === 0){
        console.log('fizz')
    }
    else{console.log("no output")}
    return
}

const fizzBuzz2 = (num)=>{
    num % 3 === 0 && num % 5 === 0  ? console.log('fizzbuzz') : 
    num % 5 === 0 ? console.log('buzz') :
    num % 3 === 0 ? console.log('fizz') : console.log("no output")
    return
}

fizzbuzz(8)
fizzBuzz2(9)
fizzBuzz2(10)
fizzBuzz2(15)
fizzBuzz2(8)