let text = "I have a dog";
let change = text.replace(/dog/g, "cat")

let change2 = text.replace("dog", "lizard")

let change3 = text.replace(/ a |dog/g, function (x) {
    return x.toUpperCase();
  })

console.log(change)
console.log(change2)
console.log(change3)