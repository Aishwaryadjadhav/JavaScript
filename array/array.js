// let x=[10,'hi',true,null,undefined,()=>{},]
// console.log(x);

//? Array helper helper-----------------
//push() & unshift()
/* Syntax -
   array.push(value1,value2................ ,valuen)
   array.unshift(value1,value2................ ,valuen)

 */
//---------Push--------------
// let col=["red"]
// console.log(col);
// console.log(col.length);
// col.push('blue','white','purple')
// console.log(col);
// console.log(col.length);
//-------unshift-----------
// let col=["red"]
// console.log(col);
// console.log(col.length);
// col.unshift('blue','white','purple')
// console.log(col);
// console.log(col.length);

/*
 syntax : array.pop(no arguments)
         array.shift(no arguments) 
           
*/
//------pop----------- from right end---------
// let x=[10,'hi',true,null,undefined,()=>{},]
// console.log(x);
// x.pop()
// console.log(x);
// console.log(x.length);

// x.pop()
// console.log(x);
// console.log(x.length);
// //------shift----------- from left end----------
// x.shift()
// console.log(x);
// console.log(x.length);

// x.shift()
// console.log(x);
// console.log(x.length); 

//--------How to empty an array---

// let x=[10,'hi',true,null,undefined,()=>{}]

// console.log(x);
// x.pop()
// x.pop()
// x.pop()
// x.pop()
// x.pop()
// x.pop()
// console.log(x);

// let x=[10,'hi',true,null,undefined,()=>{}]

// -------wrong logic-----------
// for(i=0;i<=x.length;i++){
//     x.pop()
// }
// console.log(x);
// -------wrong logic-----------

////-------way 1-----------
// let xLen= x.length
// for(i=0;i<=xLen;i++){
//          x.pop()
//     }
//      console.log(x);

////-------way 1-----------

////-------way 2-----------
// let xLen= x.length
// for(i=0;i<=xLen;i++){
//          x.shift()
//     }
//      console.log(x);

////-------way 2-----------



///////......slice() & spilce()................//////

// let arr=[10,'hi',true,null,undefined,()=>{}]
// console.log(arr);

// //Slice() method.................

// //syntax:- array.slice(from index position,till index position)

// console.log(arr.slice(0,3));
// console.log(arr.slice(1,6));
// console.log(arr.slice(5,3)); //js controller work left to write only
// console.log(arr.slice(-4,-1));
// console.log(arr.slice(-5,-7));
//console.log(arr); //note: original array not effect here 

// ..........splice() method............

//syntax:- array.splice(star index position,length of the to be removed,[replaceble elements])

// let arr=[10,'hi',true,null,undefined,()=>{}]
// console.log(arr);

// console.log(arr.splice(0,7));
// console.log(arr.splice(2,1));
// console.log(arr.splice(3,3));
// console.log(arr.splice(0,7,'dingadongi'));
// console.log(arr.splice(-4,3));
// console.log(arr); //note: original array effect here 


// indexOf() & lastIndexOf()

let str = 'karnataka'
console.log(str);
//console.log(str.split(''));
// let arrr = str.split('')  
// console.log(arrr);
// console.log(arrr.indexOf('a')); //arrayOf index method is used to 
// console.log(arrr.indexOf('u')); 
// console.log(arrr.lastIndexOf('a'));
// console.log(arrr.lastIndexOf('s'));


///include()method...............
// console.log(arrr.includes('a'));
// console.log(arrr.includes('g'));

// reverse method............

// arrr.reverse()
// console.log(arrr);


//to string method:- it convert array into string
// arrr.toString(arrr.toString())

// let convertedstr=arrr.toString()
// console.log(typeof convertedstr);





// let xx ='hello'
// console.log(xx);

//split()............string to aarray

// let arr =xx.split('')
// console.log(arr);

///join()...............

// let str=arr.join('')
// console.log(str);

// keys(), values(), entries()...................

///by using simple for loop

// for (let i = 0; i < arr.length; i++) 
// {
//      console.log(i);
// }

//........................................

// for (let i = 0; i < arr.length; i++) 
// {
//      console.log(arr[i]);
// }


//by using for in loop

// for(let i in arr){
//      console.log(i);
// }


//by using for of loop

// for(let i of arr.keys())
// {
//      console.log(i);
// }
// console.log(arr.keys());



//filter() it is an HOF ....>it is used to fetch the array data

// let num =[10,20,30,40,50,60]
// console.log(num);
// console.log(num.filter((x)=>{return x < 30}));


//tracing part..........

// let num =[10,20,30,40,50,60]
// function fil(cb){  
//      let result=[] 
//      for (let i = 0; i < num.length; i++) {
//      // console.log(i);
//           if(cb(num[i]))
//           {
//              result.push(num[i])  
//           }
//      }
//      console.log(result);
// }
// fil((x)=>{return x})


//vvvIMP
//map()---->  it is used to modification the array to get a output ,,,it is an HOF,,,,

// let aa =[10,20,30,40,50]
// console.log(aa);
// let resultArr = aa.map((x)=>{return x+5})
// console.log(resultArr);
// console.log(aa);// original array remains uneffected


//reduce()...................

// let aarr =[10,20,30,40,50]
// // console.log(aa);
// // let resultArr = aa.reduce((x,y)=>{return x+5})
// aarr.reduce((accumulater,leastindex)=>{
//   return accumulater+leastindex
// },5)
// console.log(aarr);


let d='hello'
console.log(array.isArray(d));
let e=Array.form(d)
console.log(e);
console.log(Array.isArray(e));
