/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/// - ada dua jumlah variabel scope dalam javascript. global scope dan local scope
/// - global scope merupakan variabel yang bersifat global, bisa diakses di mana saja dan dideklarasikan di luar blocks ({}). sedangkan local scope merupakan variabel yang dideklarasikan di dalam sebuah blocks seperti di dalam function, conditional dan looping, sehingga variabel ini hanya bisa diakses di dalam block tersebut, tidak bisa diakses di luar dari blocksnya

/// implementasi global scope
let globalItem = "strawberry milk"        //variabel yang dideklarasikan secara global
let iteration = 1
while(iteration < 3) {
  console.log(globalItem)           //variabel globalItem dapat diakses di dalam sebuah blocks karena merupakan global scope variable
  iteration++                       //iteration juga termasuk ke dalam variabel yang bersifat global, dan dapat diakses dari mana saja
}

//implementasi local scope
// dari contoh di bawah dapat dilihat ketika sebuah variabel dideklarasikan di dalam sebuah conditional blocks
if(iteration === 3) {
  let localItem = "banana milk"     //variabel yang dideklarasikan secara lokal di dalam block if
  console.log(localItem)            //ketika diakses dalam satu blocks yang sama maka variabel tersebut dapat diakses/accessible
}

// namun ketika variabel tersebut berusaha untuk diakses di luar dari blocks nya, maka tidak akan bisa dan akan muncul error bahwa variabel ini belum didefinisikan.
console.log(localItem)


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// - yang akan tampil di dalam console.log adalah Mariah
/// - karena pada function printFirstName, function tersebut memiliki sebuah parameter yaitu name, parameter yang dimiliki sebuah function itu sama seperti sebuah variabel dan ini bersifat seperti local scope variable, ketika function tersebut dipanggil maka yang akan direturn adalah variabel name dari parameter yang dimiliki function bukan global variabel name. variabel name sebelum function dan variabel name di dalam function itu merupakan dua variabel yang berbeda.
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
