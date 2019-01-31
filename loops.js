let arrNames = ["kingsley", "stanley", "femi","sarah","omotayo"];

let arrLen = arrNames.length;
console.log(arrLen);
for(let i = 0; i<arrLen; i++){
  console.log(arrNames[i]);
}
console.log(" ");
const listNames = {name: "Luke Skywalker", occupation: "Jedi", powers: "The force"}


for(names in listNames){
  console.log(names)
}
console.log(" ");

let entries = Object.entries(listNames)
for(const [key,value] of entries){
  console.log(`these are the list ${key}: ${value}`);
}

console.log(" ");

let num = [1,2,3,4,5,6,7,8,9,10];

let numlen = num.length;

for(let i = 0; i < numlen; i++){
  if(num[i]%2 !==0){
      console.log(num[i] + ": these are odd numbers");
  }
}