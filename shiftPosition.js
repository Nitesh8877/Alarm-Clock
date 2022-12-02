// Question 1:
// Write a program that takes as input an array of numbers of length N and a number p (positions - p is greater than 0 
// and less than N) and a number d (direction - either 0 for left or 1 for right). The objective is to return the array 
// shifted by p positions in d direction.
// Example: For an input array [1, 3, 2, 7, 4, 6] with p=3 and d=0
// the expected result would be [7, 4, 6, 1, 3, 2] with the array shifted left by 3 positions.



let arr=[2,4,1,7,5,3,5,6];

/**
 * Time complexity big o notation O(N);
 * Space Complexity big o notation O(1);
 * 
 */

/**
 * Possible testbase;
 * 1,3,2,7,4,6
 * 2,4,1,7,5,3,5,6
 * .....etc
 * 
 * 
 */
let p=6;
let d=1;
/**
 * if d=0 menas rotation will be done at left side 
 * and d=1 means rotation will be done at right side
 * 
 * p is the how many element are shifted
 */


function shifted(arr,p,d){
    let n=[];
    //left direction d=0;
    if(d==0){
        for(let i=0;i<p;i++){ //O(N)
            n.push(arr[0]);
            arr.shift();
        }
            while(n.length>0){ //O(N)
                arr.push(n.shift());
            }
    }
    else if(d==1){
        let len=arr.length;
           for(let i=len-1;i>=len-p;i--){//O(N)
            console.log(arr.length-p);
            n.push(arr.pop());
           } 
           console.log(n)
           let i=0;
           while(n.length>i){//O(N)
            arr.unshift(n[i])
            i++
           }
    }


return arr;
}
console.log("original value"+arr);
let ans=shifted(arr,p,d);
console.log("shifted are done "+ans);


