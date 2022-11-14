const revString = (str)=>{
    const arr = str.split("");
    arr.reverse();
    str = arr.join("");
    console.log(str);
}

revString('hello');

(function(str){
    let reversed = ''
    for(let character of str){
        reversed=character + reversed
    }
    console .log(
        reversed
    )
})('saladguy');