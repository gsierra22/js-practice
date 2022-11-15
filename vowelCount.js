const vowels = ['a', 'e', 'i', 'o', 'u'] 

let vowelCount = (str) => {
    let count =0
    for(let char of str.toLowerCase()){
        if (vowels.includes(char)){
            count++
        }
    }
    console.log(count)
}

vowelCount('apple')
vowelCount('daedra')