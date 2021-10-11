// 1. Apa itu synchronous?
// 2. Apa itu asynchronous?
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
/* for (var i = 1; i<=5; i++) {
  console.log("first log: ", i); // 01 - Pertama
  setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
} */


// ANSWER
// 1. Synchronous merupakan mode default dalam proses jalannya program, yaitu secara berurutan sesuai dengan antrian eksekusinya, baris per baris programnya.
// 2. Asynchronous merupakan proses jalannya program tanpa perlu menunggu antiran eksekusi dari antrian sebelumnya selesai, jadi proses eksekusi sebelumnya akan ditunggu sampai selesai, tetapi sambil menunggu eksekusi sebelumnya tersebut selesai compiler akan mengeksekusi perintah code selanjutnya. Output dari proses ini tergantung dengan waktu proses eksekusinya, tidak selalu berurutan hasilnya seperti synchronous.
// 3. Kita dapat dengan mudah menerapkan asynchronous hampir pada semua modern browser, untuk older browser yang tidak support asynchronous kita dapat menggunakan library BabelJS
// 4. console.log pertama akan menampilkan first log: 1 sampai first log: 5 sedangkan console.log kedua akan menampilkan first log: 6 sebanyak 5 kali
// 5. Ketidaksamaan antara keluaran dari console.log pertama dan kedua adalah karena inisialisasi variabel pada for loopnya menggunakan var sehingga scope dari var ini akan mengganti variabelnya secara global, sehingga ketika dieksekusi console.log kedua yang merupakan asynchronous dan memiliki timeout 100ms maka variabel i sudah berubah menjadi 6 karena for loop sudah selesai dijalankan sebanyak 5 kali baru console.log kedua selesai dijalankan. jika menggunakan let maka variable scopenya akan berada pada scope for loop itu saja sehingga ketika console.log kedua selesai dieksekusi variabel i nya tetap dimulai dari 1 - 5

// 6. Perbaikan code dengan mengganti var jadi let
for (let i = 1; i<=5; i++) {
  console.log("first log: ", i); // 01 - Pertama
  setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}