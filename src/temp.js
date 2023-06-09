// var a=[{'id':101,mark:98},{'id':102,mark:99},{'id':104,mark:100}]
// var b=[{'id':101,name:'bala'},{'id':104,name:'arun'},{'id':102,name:'ooru'}]

// console.log("aa","bb");

// a.forEach(element => {
//     var i = element.id;
//     var mark = element.mark;
//     b.forEach(qw => {
//         var j = qw.id;
//         var names = qw.name;
//         if(i==j){
//             console.log(names+`'s mark is`,mark)
//         }
//     })
// }); 
                                //or

// a.map((data)=>{

//     b.map((value)=>{
//         if(data.id===value.id){
//         console.log(value.name+"is"+data.mark);}
//     })
// })
// ---------------------------------
// a=[2,3,4,5,6,12,30,5,27]

// b=[]
// a.forEach(ele => {
//     if ((ele%2) == 0) {
//         b.push(ele);
//     }
// });
// console.log(b);
// or
// for (i in a){
//     if ((a[i]%2) == 0) {
//         b.push(a[i]);
//     }
// }
// console.log(b);

// ---------------------------------

// const arr = [11, 7, 54, 16, 66];


// const num = parseInt(prompt("Enter a number:"));
// let found = false;
// for (let i = 0; i < arr.length; i++) {
//   if (num === arr[i]) {
//     found = true;
//     break;
//   }
// }
// if (found) {
//   console.log("pass");  
// } else {
//   console.log("fail");  
// }



const a = "Hello #every one #nice meeting you #bala is king";
const b = /#\w+/g;
const c = a.match(b);
console.log(c); // Output: ['#every', '#nice']