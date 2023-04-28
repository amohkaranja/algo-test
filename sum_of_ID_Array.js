// Method 1
function sumArray(myArray){
let arry2=[];
arry2[0]=myArray[0];
for (let index = 1; index < myArray.length; index++) {
    arry2[index]=myArray[index]+arry2[index-1];
    
}
return arry2
}

console.log(sumArray([3000,1000,255874455,107744755,1444555]));
// Method 2
function sumArray(myArray){
    
    for (let index = 1; index < myArray.length; index++) {
        myArray[index]=myArray[index]+myArray[index-1];
        
    }
    return myArray
    }
    console.log(sumArray([3,1,2,10,1]));