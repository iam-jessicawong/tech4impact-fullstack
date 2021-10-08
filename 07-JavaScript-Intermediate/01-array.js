// SOAL - 01
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(arr) {
  // variabel untuk menampung array yang dibalikkan
  const reversedArr = []
  // untuk setiap value yang ada dalam array push ke dalam reversedArr tapi ke setiap index paling awalnya, sehingga arraynya akan terbalik
  arr.map(value => reversedArr.unshift(value))
  return reversedArr
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);


// SOAL - 02
const arr3 = [1, 3, 4, 1, 2, 8];
const arr4 = [5, 6, 7, 8, 1, 3];

// mendapatkan total penjumlahan array
const sum = (previousValue, currentValue) => previousValue + currentValue;
function getAverage(arr) {
  const avg = (arr.reduce(sum)/arr.length)      // mendapatkan rata-rata dari array, dengan membagi total penjumlahan dengan length array
  let totalPass = 0       // inisialisasi variabel totalPass untuk menampung banyaknya bilangan yang melebihi nilai rata-rata
  
  // untuk setiap nilai yang ada dalam array dilakukan pengecekan, jika nilai tersebut melebihi nilai rata-rata maka totalPass akan ditambah dengan 1
  arr.map((val) => {
    if(val > avg) {
      totalPass += 1
    }
  })
  
  return totalPass
}

console.log(getAverage(arr3))
console.log(getAverage(arr4))


// SOAL - 03
const arr5 = [
  [10],
  [9, 2, 1],
  [2, 8],
];

function searchInArray(arr, value) {
  // ubah array multidimensi menjadi satu dimensi
  const singleArr = arr5.flat()

  // variabel untuk menampung index pertama hasil pencarian nilai dalam array
  let index = singleArr.indexOf(value)

  // jika tidak menemukan nilai yang dicari pada array kembalikan null jika ditemukan kembalikan indexnya
  return (index === -1) ? null : index
}

console.log(searchInArray(arr5, 3));
console.log(searchInArray(arr5, 2));
console.log(searchInArray(arr5, 4));
console.log(searchInArray(arr5, 8));
