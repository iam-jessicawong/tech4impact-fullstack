/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/// - Type Error terjadi ketika kita memberikan value yang tidak sesuai tipe nya dengan yang seharusnya diberikan atau ketika kita menggunakan sebuah value dengan cara yang salah. Atau ketika kita berusaha untuk memodifikasi sebuah nilai yang sifatnya tidak bisa diganti (contohnya seperti mengubah nilai pada variabel const)
/// - Reference Error terjadi ketika menggunakan variabel yang belum dideklarasikan
/// - Range Error terjadi ketika kita mencoba memberikan panjang/value yang tidak valid/tidak sesuai, value yang tidak berada dalam set atau rentang yang diizinkan
/// - Syntax Error terjadi ketika kita menggunakan syntax yang tidak sesuai dengan aturan penulisannya, sehingga syntax tersebut tidak dikenali


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/// - jika kita menjalankan baris kode di bawah maka yang akan terjadi adalah error
/// - error tersebut termasuk ke dalam Reference Error
/// - karena pada baris program di bawah salaryWithConst diakses sebelum variabel tersebut diinisialisasikan. variabel salaryWithConst merupakan jenis variabel const sehingga variabel tersebut baru dapat diakses setelah diinisialisasi secara menyeluruh, kalau belum diinisialisasi maka akan terjadi error. keadaan ini disebut dengan temporal dead zone (TDZ). berbeda dengan var yang bisa diakses sebelum inisialisasi akan tetapi nilainya akan bersifat undefined.
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
