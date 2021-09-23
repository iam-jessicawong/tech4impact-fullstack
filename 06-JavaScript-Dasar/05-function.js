/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxCalc(salary) {
  // mengecek apakah input yang diberikan benar-benar number
  if(typeof salary !== "number") {
    return "Please, input number only."
  }
  else {
    let tax     // variabel untuk menyimpan hasil kalkulasi tax yang nantinya akan diformat dalam bentuk rupiah ketika direturn

    // mulai pengkalkulasian tax
    // jika penghasilan di bawah 5.000.000
    if(salary < 5000000) {
      return 0
    }
    // penghasilan di antara 5.000.000 - 9.999.999
    else if(salary >= 5000000 && salary < 10000000) {
      tax =  (5/100) * salary
      return new Intl.NumberFormat("id-ID").format(tax)
    }
    // penghasilan antara 10.000.000 - 19.999.999
    else if(salary >= 10000000 && salary < 20000000) {
      tax =  (10/100) * salary
      return new Intl.NumberFormat("id-ID").format(tax)
    }
    // penghasilan lebih besar dari 20.000.000
    else {
      tax = (20/100) * salary
      return new Intl.NumberFormat("id-ID").format(tax)
    }
  }     //ENDIF
}     //END taxCalc(salary)

// TRY taxCalc(salary)
console.log("Try Function taxtCalc() :")
console.log(taxCalc(4500000))
console.log(taxCalc(5000000))
console.log(taxCalc(20000000))

/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE
function checkBMI(height, weight) {
  // pengecekan input height dan weeight harus benar benar number
  if(typeof height !== "number" || typeof weight !== "number") {
    return "Please check your input again. Number only input."
  }
  else {
    // menghitung bmi
    let bmi = (weight/(Math.pow(height,2))) * 10000

    // mulai pengecekan bmi
    if(bmi < 18.5) {
      return "under weight"
    }
    else if(bmi > 18.5 && bmi < 24.9) {
      return "normal"
    }
    else if(bmi > 25 && bmi < 29.9) {
      return "over weight"
    }
    else if(bmi > 30 && bmi < 34.9) {
      return "obese"
    }
    else {
      return "extremely obese"
    }
    // end cek bmi
  }     //END IF
}     //END checkBMI(height, weight)

// TRY FUNCTION checkBMI(height, weight)
console.log("\nTry Function checkBMI() :")
let weight = 80
let height = 170
console.log(checkBMI(height,weight))

weight = 80
height = 160
console.log(checkBMI(height,weight))


/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(sentence) {
  // cek terlebih dahulu apakah input benar-benar string
  if(typeof sentence !== "string") {
    return "Please input text only."
  }
  else {
    // ubah sentence yang diberikan ke huruf kecil dahulu untuk menghindari sentence yang terdapat huruf kapital di pertengahan katanya. Kemudian split sentence yang diberikan dengan pemisahnya adalah spasi, untuk bisa mengganti huruf pertama tiap kata menjadi kapital
    let sentencesplit = sentence.toLowerCase().split(' ')

    // untuk setiap kata yang sudah disimpan dalam array inisialisasi ulang value tiap indexnya dengan mengganti huruf pertama jadi kapital dan digabungkan dengan sisa hurufnya, memanfaatkan slice untuk mengabaikan huruf pertama
    sentencesplit.forEach(function(value, index) {
      sentencesplit[index] = value.charAt(0).toUpperCase() + value.slice(1)
    })
    
    // kembalikan sentence yang sudah dimodifikasi dengan memanfaatkan fungsi join pada array (menggabungkan setiap value pada array sentencesplit jadi satu string dan dipisahkan oleh spasi jika lebih dari satu kata)
    return sentencesplit.join(' ')
  }
}     //END FUNCTION  convToUpperCase(sentence)

// TRY FUNCTION convToUpperCase(sentence)
console.log("\nTry Function convToUpperCase() :")
let sentence = "hello bandung"
console.log(convToUpperCase(sentence))

sentence = "helloworldwide"
console.log(convToUpperCase(sentence))


/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE
function firstNonRepeatedChar(word) {
  //pengecekan input
  if(typeof word !== 'string') {
    return "Please input text only"
  }
  else {
    // pengecekan string yang memiliki spasi
    if(word.trim().indexOf(' ') > 0) {
      return "kata tidak boleh dipisah"
    }
    else {
      let noTwinChar= "", checkedChar = ""      //variabel noTwinChar untuk memasukkan karakter yang tidak kembar. checkedChar untuk menampung karakter yang sudah dicek, jadi tidak perlu dilakukan pengecekan ulang

      //pengulangan untuk mengecek tiap karakter
      for(index = 0; index < word.length; index++) {
        //jika karakter yang sedang dicek saat ini belum pernah dicek sebelumnya, untuk menghindari kekeliruan pengecekan, jadi tidak perlu dicek ulang
        if(!(checkedChar.includes(word[index]))) {
          //untuk melihat apakah karakter yang dicek saat ini memiliki kembaran (ada di karakter-karakter berikutnya). jika tidak maka masukkan karakter tersebut ke variabel noTwinChar, kemudian langsung break loop. karena yang diminta hanya karakter pertama yang tidak sama saja yang ditampilkan
          if(!(word.slice(index+1).includes(word[index]))) {
            noTwinChar += word[index]
            break
          }
          //jika terdapat karakter yang sama pada karakter-karakter berikutnya maka tambahkan karakter tersebut ke dalam checkedChar dan lanjutkan pengecekan
          else if(word.slice(index+1).includes(word[index])) {
            checkedChar += word[index]
          }
        }     //END IF
      }     //END FOR

      return noTwinChar       //kembalikan karakter tidak kembar yang didapat
    }     //END IF
  }     //END IF
}

console.log("\nTry Function firstNonRepeatedChar() :")
let word = "hello world"
console.log(firstNonRepeatedChar(word))

word = "alloha"
console.log(firstNonRepeatedChar(word))

word = "wooohoowh"
console.log(firstNonRepeatedChar(word))