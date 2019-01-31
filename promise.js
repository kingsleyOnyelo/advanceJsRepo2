//promise questions

function promiseArrays(checkArr){
  const arrFood = ["banana", "rice", "beans", "salad","vegetable"];
  if(arrFood.find(u => u===checkArr)){
    return Promise.resolve("successful search");
  }else{
    return Promise.reject("searched failed");
  }
  
}
promiseArrays(45)
.then((result) => console.log(result))
.catch((failed) => console.log(failed));