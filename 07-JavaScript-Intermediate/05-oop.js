// SOAL - 01
// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
const obj = {
  fun1: function() {
    console.log("fun1", this);
  },
  fun2: () => {
    console.log("fun2", this);
  }
};

obj.fun1();
obj.fun2();



// SOAL - 02
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
//    Encapsulation merupakan suatu teknik untuk membatasi akses terhadap properti atau method yang dimiliki object. Konsep ini dapat digambarkan seperti mengamankan property atau method sehingga tidak bisa diakses di luar dari scope yang sudah ditentukan (hanya bisa diakses dan dimodifikasi di dalam class nya sendiri)
//    Encapsulation dibutuhkan karena dalam suatu program itu terdapat property atau method yang tidak boleh dimodifikasi dari luar classnya, atau suatu properti yang jika diubah maka akan membuat hasil dari program menjadi tidak seperti yang semestinya.

// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// Abstraction merupakan suatu teknik untuk menyebunyikan detail tertentu dari sebuah objek atau method dan hanya menampilkan fungsionalitas (fitur penting) dari objek tersebut. Contohnya seperti method yang tidak memiliki body pada parent class.

// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
//    Inheritance dalam oop diartikan sebagai turunan dari suatu kelas, artinya satu class bisa mewariskan property dan method yang dimilikinya kepada class turunannya. Konsep ini dibutuhkan agar kita dapat mengelompokkan beberapa class ke dalam kelompok yang sama, jika ia memiliki property dan method yang mirip-mirip maka dapat dibuat induk classnya sehingga lebih sederhana pendefinisiannya dan rapi, tidak perlu berulang-ulang menuliskan property dan method yang dimilikinya. Singkatnya, inheritance berguna untuk code reusability.

// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?



// SOAL - 03
class Phone {
  constructor(brand, storage, ram) {
    this.brand = String(brand)
    this.storage = Number(storage)
    this.ram = Number(ram)
  }

  getBrandName() {
    return this.brand
  }

  setBrandName(brand) {
    this.brand = String(brand)
  }

  printSpecification() {
    console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`)
  }

  setSpecification(storage, ram) {
    this.storage = Number(storage)
    this.ram = Number(ram)
  }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();



// SOAL - 04
class Student {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.gender = null
    this.courseOfferings = [];
  }
  
  takeNewCourse(course) {
    
  }
  
  takeATest() {
    
  }
  
  courseAttendance() {
    
  }
}

class CourseOffering {
  constructor(course, grade, attendance = 0) {
    this.course = String(course)
    this.grade = Number(grade)
    this.attendance = Number(attendance)
  }
}

class Course {
  constructor(subject, quota, attendance) {
    this.subject = String(subject)
    this.quota = Number(quota)
    this.attendance = Number(attendance)
  }

  getSubject() {
    return this.subject
  }

  getAttendance() {
    return this.attendance
  }

  decreaseQuota() {
    this.quota -= 1
  }
}


const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);
