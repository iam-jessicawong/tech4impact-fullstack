// SOAL-01
const arr1 = [1, 2, 3, 4, 5];
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
  if(arr.length === 0) {
    return 0
  } else {
    return (arr[0] > avg? 1 : 0) + countAboveAvg(arr.slice(1), avg)
  }
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);



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
function trianglePattern(row, column) {
  if(row === 0) {
    return
  }
  else {
    // set karakter awal sebagai A, kemudian untuk setiap pemanggilan tambahkan dengan column-row, untuk mendapatkan karakter awal yang sesuai dengan kolom ke berapa saat ini, jika ke 2 berarti B jika ke 3 berarti C
    let startAlphabet = 65 + (column - row)
    let char = String.fromCharCode(startAlphabet)     // mengubah dari ascii menjadi karakter biasa
    let string = ""
    
    for(let i = 1; i<=column; i++) {
      if(i < row) {
        string += " "     // untuk menambah space
      } else {
        string += char    // untuk menambah karakternya
        char = String.fromCharCode(char.charCodeAt(0) + 1)    // untuk setiap perulangan selanjutnya tambahkan dengan 1
      }
    }
    console.log(string)
    return trianglePattern(row-1, column)
  }
}

trianglePattern(5, 5);

