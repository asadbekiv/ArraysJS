'use strict'

console.log('My name means that I am Lion or I was born in the middle of Summer {June,July,August}');


let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log( fruits.length ); // Output will be 4 ;

// Second task.

let styles=new Array('Jazz','Blues');

styles.push('Rock-n-Roll'); // it push the value to the end of the array
styles[Math.floor((styles.length-1)/2)]='Classics';  // it find of the middle value in the array
styles.shift(); // it removes first element of the array
styles.unshift('Rap','Reggae'); //  it adds those values begining of array

console.log(styles);
console.log(styles.length);


// Third task

let arr=['a','b'];

arr.push(function(){
    console.log((this));
})

arr[2]();


// Fourth task


function sumInput(){
    
    let storeArr=new Array();

    while (true) {
        let value=prompt('Enter a number please )',0);

        if (value === "" || value === null || !isFinite(value)) break;
        
        storeArr.push(+value)
        
    }
    

    let sum = 0;
    for (const number of storeArr) {
        sum +=number
        
    }
    return sum;
}

alert(sumInput())

// Fifth task