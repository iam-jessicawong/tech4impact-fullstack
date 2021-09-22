/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
let primeNumber = ""    //mendefinisikan string primeNumber agar nantinya bilangan dapat ditampilkan dalam satu baris
for (let num = 1; num <=100; num++) {
  let prime = true    //inisialisasi prime = true untuk nantinya dapat diganti menjadi false jika bilangan yang dicek dapat dibagi dengan bilangan lain sehingga tidak akan ditampilkan
  if(num != 1) {    //pengecekan agar melewatkan satu, karena satu bukan bilangan prima
    for(div = 2; div < num-1; div++) {    //perulangan untuk mengecek faktor dari bilangan
      if(num % div == 0) {    //jika faktornya selain dirinya dan satu maka bukan bilangan prima dan langsung lanjut ke bilangan selanjutnya
        prime = false
        break
      }
    }
    if(prime) {   //jika setelah dilakukan pengecekan bilangan tersebut tidak punya faktor selain dirinya dan satu maka bilangan tersebut adalah prima
      primeNumber += `${num}, `
    }
  }
}
console.log(primeNumber)



/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop
let primeCounter = 0;

/// EDIT HERE
let num2 = 2   //inisialisasi bilangan awal/bilangan mulainya langsung dari 2 karena satu sudah bukan prima jadi tidak perlu dicek lagi
while (primeCounter < 50) {   //perulangan akan terus berlangsung selama primeCounter belum mencapai 50
  let prime = true    //inisialisasi prime untuk melakukan pengecekan apakah bilangan pada kondisi ini prima atau tidak

  for(div = 2; div < num2-1; div++) {    //perulangan untuk membagi bilangan dengan setiap bilangan lain agar didapatkan faktornya
    if(num2 % div == 0) {    //jika bilangan tersebut habis dibagi dengan bilangan lain maka bukan prima
      prime = false
      break
    }
  }
  
  if(prime) {   //jika setelah pengecekan, bilangan saat ini tidak memiliki faktor lain maka bilangan ini adalah prima jadi tambahkan counternya
    primeCounter += 1
  }
  
  if(primeCounter == 50) {    //untuk mengambil bilangan prima ke 50
    const fiftiethPrime = num2;
    console.log(`fiftiethPrime: ${fiftiethPrime}`)
  }
  num2++
}



/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;

num3 = 1   //inisialisasi bilangan awal yang akan dicek
do {
  if(num3%2) {         //jika num3 % 2 hasilnya 1 (truthy value) maka bilangan ganjil, tambahkan counter dengan 1
    oddCounter += 1
  }
  if(oddCounter == 50) {      //mendapatkan bilangan ganjil ke 50
    const fiftiethOdd = num3;
    console.log(`fiftiethOdd: ${fiftiethOdd}`)
  }
  num3 ++
} while (oddCounter < 50)   //ulang sampai 50

