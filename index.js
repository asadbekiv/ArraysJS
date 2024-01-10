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

// alert(sumInput())

// Fifth task


function getMaxSubSum(arr){
    let maxSum=0

    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart=0;
        for (let j = 0; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum=Math.max(maxSum,sumFixedStart);
            
        }
        
    }

    return maxSum;
}

console.log(getMaxSubSum([-1,2,3,-9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]) );
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));

console.log('Hi');




// The problem in leetcode ARRAY two sum .


let twoSum=function(nums,target){
    let map={};
    for (let i = 0; i < nums.length; i++) {
        let value=nums[i];
        let complementPair=target-value;
        if (map[complementPair] !== undefined) {
            return[map[complementPair],i]
            
        }else{
            map[value]=i;
        }
    }
}

let nums=[2,7,11,13];
let nums1=[3,2,4];
let nums2=[3,3];

let target=9;
let target1=6;
let target2=6;

console.log(twoSum(nums,target));
console.log(twoSum(nums1,target1));
console.log(twoSum(nums2,target2));

// The problem leetcode Plus One

let plusOne = function(digits) {
    for (let i=digits.length-1;i>=0; i--){
        if(digits[i]===9){
            digits[i]=0;
        }else{
            digits[i]++
            return digits
        }
    }
    digits.unshift(1);
    return digits;
    
};

console.log(plusOne([1,2,3]));
console.log(plusOne([1,2,3,4,5,6,7,8,9,10]));
console.log(plusOne([9]));



let newArr=[1,2,3];
console.log(newArr.length);
console.log('say hi ');

for(let i=newArr.length-1;i>0;i--){
    newArr.push(i);
}
console.log(newArr);
console.log(newArr.at(-1));
console.log(newArr.length-1);
console.log(newArr.length);


// leetcode problem 1480 Running Sum of 1d Array

let numsArr=[1,2,3,4];
let numsArr1=[1,1,1,1,1];
let numsArr2=[3,1,2,10,1];

let runningSum=function(nums){
    let p=1;
    while(p<nums.length){
        nums[p]+=nums[p-1];
        p+=1;
    }
    return nums
    
    

}

console.log(runningSum(numsArr),runningSum(numsArr1),runningSum(numsArr2));







