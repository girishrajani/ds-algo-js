const arr = [66,2,13,88,696,325,22,65,45];


console.log("Orignal Array");
console.log(arr);

let lar = arr[0];
let small = arr[0];

for(let i in arr){
    if(i > lar){
        lar = i;
    }
    if(small > i) {
       small = i;
    }
}

console.log('Largest Element: ',lar);
console.log("Smallest Element: ",small)
