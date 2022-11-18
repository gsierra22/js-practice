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