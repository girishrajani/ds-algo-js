const arr = [10,20,30,60,86,99];
n = arr.length;
start = 0;
end = n-1;

console.log("Orignal Array");
console.log(arr);


for(i=0;i<end;i++){
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
}

console.log("Reversed Array");
console.log(arr);