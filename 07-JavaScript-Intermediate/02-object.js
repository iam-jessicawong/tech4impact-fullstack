// SOAL - 01
const person = {
  name: "person A",
  age: 100,
  favDrinks: [
    "coffee",
    "jamu temulawak",
    "tea"
  ],
  greeting: function() {
    console.log("hello world")
  }
}

/// EDIT HERE
// ubah field name pada variable person menjadi namamu sendiri
person.name = "Jessica Wong"

// ubah field favDrinks yang berisi "temulawak" menjadi "tap water"
person.favDrinks[1] = "tap water"

// ubah field greeting menjadi sebuah fungsi, dengan spesifikasi:
//  - memiliki 1 parameter
//  - name [String] => nama seseorang yang akan disapa
//  - return value [String] => akan mengembalikan sebuah String dengan format "Hello, $NAME"
person.greeting = (name) => {
  if(typeof name !== 'string' || name.trim().length === 0) {
    return 'Please check your input again'
  } else {
    return `Hello, ${name.trim()}`
  }
}

/// STOP

console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
console.log(person.greeting("John Watson"));


// SOAL - 02
function getObjectValue(obj, path) {
  if(typeof obj !== 'object' || typeof path !== 'string') {
    return "Please check your input again"
  }
  else {
    let value = obj   // inisialisasi variabel value sebagai object yang akan ditelusuri (dicari valuenya)
    let splitPath = path.split('.')       // melakukan split pada string untuk mendapatkan key dari object yang ingin dicari valuenya
    // dengan menggunakan fungsi map dilakukan penelusuran pada object berdasarkan key yang diberikan untuk mendapatkan valuenya
    splitPath.map((e) => value = value[e])
    
    // mengembalikan value yang didapat jika ditemukan dan null jika tidak ditemukan
    return ((value !== undefined)? value : null)
    
  }
}

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5
    }
  },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan)


// SOAL - 03
// dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [
  {
    btc: { buy: 10, sell: 9 },
    eth: { buy: 8, sell: 7.5 },
    doge: { buy: 7, sell: 6.5 },
    day: 1,
  },
  {
    btc: { buy: 9, sell: 5 },
    eth: { buy: 7, sell: 4 },
    doge: { buy: 6, sell: 3 },
    day: 2,
  },
  {
    btc: { buy: 5, sell: 10 },
    eth: { buy: 4, sell: 6 },
    doge: { buy: 3, sell: 4 },
    day: 3,
  },
];

const calculateIncome = (items) => {
  /// EDIT DOWN HERE
  // untuk setiap key btc, eth dan doge cari pendapatan perharinya dan tambahkan dengan pendapatan hari sebelumnya dan masukkan hasil perhitungannya ke variabel result
  let result = items.reduce((prev, curr) => {
    prev['btc'] = (prev['btc'] || 0) + (curr['btc'].sell - curr['btc'].buy)         // menghitung pendapatan untuk btc
    prev['doge'] = (prev['doge'] || 0) + (curr['doge'].sell - curr['doge'].buy)     // menghitung pendapatan untuk doge
    prev['eth'] = (prev['eth'] || 0) + (curr['eth'].sell - curr['eth'].buy)         // menghitung pendapatan untuk eth
    return prev
  }, {})

  return result     // mengembalikan rangkuman pendapatan
}

console.log(calculateIncome(items))
