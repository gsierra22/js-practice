This repository will be where I keep track of simple and useful Javascript problems. I will list useful methods here too.

## Spread Operator
array = [apple, banana, orange]
Console.log(...array) // returns apple banana orange - expands array and objects to its elements

## .includes()
array.includes('string') - returns true or false depending if a string is in an array

## .some()
array.some((var) => var >= 20)- returns true or false depending if some of the values are greater than or equal to 20

## .every()
array.every((var) => var >= 20) / same as .some() but with all variables

## .filter()
array.filter((var) => var >= 20) - selects only variables that follow parameter e.g >=20

## .map()
array.map((var) => var * 20) - changes all variables in array e.g multiples numbers by 20

## .splice()
array.splice(2,1) / removes one item at index 2

## .shift()
array.shift() removes first item in array / unshift adds to start

## .concat()
array1.concat(array2) combines two arrays

## Merging objects
const obj1 ={ var1: x, var2: y} const obj2 ={ var3: z, var4: q} obj3 = {...obj1, 
...obj2}

## .replace()
str.replace('str1', 'str2') replace string 1 with string 2
str.replace(/str1/g, 'str2') replace string 1 with string 2
