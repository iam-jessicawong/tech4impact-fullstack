/// Soal - 01
/// Dibawah ini akan ditampilkan daftar pengeluaran bulan ini beserta gaji yang akan diterima, tugas-mu adalah untuk menghitung gaji yang tersisa

/// Pegeluaran
/// gundam = 750000
/// makan = 2000000
/// kost = 1000000
/// subscription = 250000

// Declare object pengeluaran, agar bisa dinamis ditambahkan jika ada pengeluaran baru
const pengeluaran = {
  gundam: 750000,
  makan: 2000000,
  kost: 1000000,
  subscription: 250000
}

//menambahkan seluruh pengeluaran yang ada
let totalPengeluaran = 0
for(const property in pengeluaran) {
  totalPengeluaran += pengeluaran[property]
}

/// Gaji
/// gajiPokok = 5000000
/// gajiBonus = 10% dari gajiPokok
/// gajiLembur = 5% dari gajiPokok

// Declare object gaji
const gaji = {
  gajiPokok: 5000000
}
gaji.gajiBonus = (10/100) * gaji.gajiPokok,
gaji.gajiLembur = (5/100) * gaji.gajiPokok

// menghitung total gaji yang didapatkan
let gajiBersih = 0
for(property in gaji) {
  gajiBersih += gaji[property]
}

/// Sisa Gaji
const sisaGaji = new Intl.NumberFormat("id-ID").format(gajiBersih - totalPengeluaran);
console.log(`sisaGaji: ${sisaGaji}`)



/// Soal - 02
/// Gunakan operator yang tepat untuk mengetahui apakah 2 variable dibawah ini memiliki nilai yang sama (tipe data tidak termasuk)
const oneInString = "1";
const oneInNumber = 1;
const isSame = oneInString == oneInNumber;
console.log(`isSame: ${isSame}`)



/// Soal - 03
/// Gunakan operator yang tepat untuk mengetahui apakah studentA memiliki nilai yang lebih tinggi atau sama dengan studentB
const studentA = 75;
const studentB = 80;
const isHigher = studentA > studentB;
console.log(`isHigher: ${isHigher}`)



/// Soal - 04
/// Gunakan operator yang tepat untuk membedakan 2 buah variable yang terdapat pada soal-02 berdasarkan value-nya (tipe data juga dihitung)
const final = oneInString === oneInNumber;
console.log(`final: ${final}`)
