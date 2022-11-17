const addText = (str1, str2)=>{
    let newText
    str1.indexOf(str2) === 0 ? newText = str1 : newText= str2 + ' ' + str1;
    console.log(newText)
}

addText ('apples', 'caramel')
addText ('caramel apples', 'caramel')