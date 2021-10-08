// SOAL-01
/* const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) {
  return (arr.length === 1) ? (arr[0]) : (arr[0] + sumOfArray(arr.slice(1)))
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));



// SOAL-02
const avg1 = Math.floor(sumOfArray(arr1)/arr1.length);
const avg2 = Math.floor(sumOfArray(arr2)/arr2.length);
function countAboveAvg(arr, avg) {
  return arr.filter(value => (value >= avg)).length
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2); */



// SOAL-03
const arr = [1, 2, 3, 4, 5];

function searchInArray(arr, num) {
  // melakukan pengecekan pada elemen terakhir array apakah sama dengan num
  if(arr[arr.length - 1] === num) {
    return console.log(`angka ditemukan pada index: ${arr.length - 1}`)
  }

  // mengecek length array jika sama dengan satu artinya array sudah dicek sampai habis dan tidak ditemukan num pada array tersebut
  else if(arr.length === 1) {
    return console.log("angka tidak ditemukan")
  }

  // remove element array paling terakhir karena sudah dilakukan pengecekan dan panggil kembali fungsinya dengan mempassing arr yang sudah dipotong elemen terakhirnya untuk dilakukan pengecekan selanjutnya
  arr.pop()
  return searchInArray(arr, num)
}

searchInArray(arr, 6);
searchInArray(arr, 1);
searchInArray(arr, 8);



// SOAL - 04
function trianglePattern(column, row) {
  
}

trianglePattern(5, 5);

