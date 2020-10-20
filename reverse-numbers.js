let array = [1, 2, 3, 4, 5, 6, 7];

function reverse(array) {

     array.reverse();
}

reverse(array);
for (const index in array) {
    console.log(array[index]);
}