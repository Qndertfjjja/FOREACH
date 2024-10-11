const numbers = [1, 2, 3, 4, 5];
function forEachCustom(arr, callback){
    for (let i = 0; i < arr.length; i++){
        callback(arr[i], i, arr);
    }
 }
 
 forEachCustom(numbers, (element, index, array) =>{
    console.log(element); 
 });
  

