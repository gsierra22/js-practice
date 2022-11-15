const vowels = ['a', 'e', 'i', 'o', 'u'];

let vowelCount = (str) => {
    let count =0;
    for(let char of str.toLowerCase()){
        if (vowels.includes(char)){
            count++
        }
    }
    console.log(count);
    return count;
};

let vowelCount2 =(str)=>{
    let count =0;
    for(let i=0; i<str.length;i++){
        for(let j=0; j<vowels.length;j++){
            if (str[i]===vowels[j]){
                count++
            }
        }
    }
    console.log(count);
    return count;
};

vowelCount('apple');
vowelCount('daedra');
vowelCount2('queue');
vowelCount2('thunder');