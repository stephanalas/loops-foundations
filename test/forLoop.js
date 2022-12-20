/* 
theses are different formats for loops but essentially all do the same thing in different ways

for (let index = 0; index < array.length; index++) {
    // code stuff
}

this format allows you specify how many times you will peform a loop base on middle condition 'index < array.length'.
you could potentially set it to any value 
----------------------------------------------------------------------------------------

for (let index of array) {
    
}

this format is clean but is not as flexable as the one above
it will iterate through all elements of an array but you wouldnt be able to loop anymore after
-----------------------------------------------------------------------------------------

array.forEach((item, idx) => {

}),
array.map((item,idx) => {})
array.filter((item,idx) => {})

we could also loop through an array using a declarative approach instead of using the first loop
(which is an imperative approach). notice how each prototype method (forEach, map, filter, etc) we pass
in a function that has parameters item and idx. we can use item(each element in array) and the idx to perform
logic
----------------------------------------------------------------------------------------
const obj = {
    randomKey: 'hello',
}
for (let key in obj) {
    console.log(obj[key]) // 'hello'
}

finally, we can also loop through object keys using this format. Just many ways that looping can be implemented.

*/
const mostCommonChar = function(char) {

}


module.exports = {
    mostCommonChar,

}


