

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*Dibyendu code*/

// let num=81;
// let sum=0;
// while(num<=131){
//     if(num%2!==0){
//         sum=sum+num;
//     }
//     num=num+1;
// }
// console.log(sum);

let num=206;
let sum=0;
while(num<=311){
    if(num%2==0){
        sum=sum+num;
    }
    num=num+1;
}
console.log(sum);