// SOAL - 01
// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
//    ketika baris kode di bawah di jalankan yang terjad adalah pada console ditampilkan object yang didapat dari fun1() dan object kosong yang dihasilkan dari pemanggilan fun2()

// 2. Apakah hasil dari fun1 dan fun2 itu sama?
//    Hasil dari fun1 dan fun2 tidak sama

// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
//    Hasil eksekusi obj.fun1() dan obj.fun2() tidak sama karena pada fun1, functionnya dideklarasikan sebagai regular function dan regular function memiliki property this nya sendiri yang bersifat dinamis, tergantung bagaimana cara pemanggilannya, karena pada kode ini this fun1 dipanggil didalam object maka this ini merefer pada objectnya. Sedangkan pada fun2, function dideklarasikan sebagai arrow function dan arrow function tidak memiliki property thisnya sendiri sehingga ketika this dipanggil maka tidak akan merefer ke apapun
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
//    Encapsulation dibutuhkan karena dalam suatu program bisa saja terdapat property atau method yang tidak boleh dimodifikasi dari luar classnya, atau suatu properti yang jika diubah dari luar classnya maka akan membuat hasil dari program menjadi tidak seperti yang seharusnya.

// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
//    Abstraction merupakan suatu teknik untuk menyembunyikan detail tertentu dari sebuah objek atau method dan hanya menampilkan fungsionalitas (fitur penting) dari objek tersebut. Contohnya seperti method yang tidak memiliki body pada parent class.
//    Abstraction dibutuhkan karena membantu meningkatkan pemahaman dan mempermudah dalam pemeliharaan codenya. Dengan abstraction ini juga duplikasi dari code dapat dikurangi.

// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
//    Inheritance dalam oop diartikan sebagai turunan dari suatu kelas, artinya satu class bisa mewariskan property dan method yang dimilikinya kepada class turunannya.
//    Konsep ini dibutuhkan agar kita dapat mengelompokkan beberapa class ke dalam kelompok yang sama, jika ia memiliki property dan method yang mirip-mirip maka dapat dibuat induk classnya sehingga lebih sederhana pendefinisiannya dan rapi, tidak perlu berulang-ulang menuliskan property dan method yang dimilikinya. Singkatnya, inheritance berguna untuk code reusability.

// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
//    Polymorphism merupakan suatu konsep untuk merancang objek sehingga objek tersebut dapat memiliki banyak bentuk sesuai dengan instancenya. Perilaku objek yang secara umum dideskripsikan dapat digantikan dengan yang lebih spesifik lagi dengan konsep polymorphism ini.
//    Polymorphism dibutuhkan karena dapat mengurangi kompleksitas dari code, karena kita dapat mendefinisikan fungsi yang memiliki fungsionalitas yang sama/mirip dengan satu nama saja tapi fungsi tersebut dapat dipakai dalam bentuk yang berbeda, menyesuaikan dengan kebutuhannya. Sehingga dengan seperti ini ketika kita menggunakan fungsi tersebut kita hanya perlu memanggil satu fungsi saja dan akan disesuaikan dengan instancenya, tanpa perlu kesusahan untuk memisahkan setiap fungsinya dengan nama yang berbeda.



// SOAL - 03
class Phone {
  constructor(brand, storage, ram) {
    this.brand = String(brand)
    this.storage = Number(storage)
    this.ram = Number(ram)
  }
  
  // mendapatkan isi dari field brand
  getBrandName() {
    return this.brand
  }

  // mengubah nilai dari field brand
  setBrandName(brand) {
    this.brand = String(brand)
  }

  // mencetak spesifikasi dari ponsel
  printSpecification() {
    console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`)
  }

  // mengubah nilai dari field storage dan ram
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
  constructor(name, gender) {
    this.name = String(name);
    this.gender = String(gender);
    this.courseOfferings = [];
  }
  
  // fungsi untuk memproses pengambilan course oleh student
  takeNewCourse(course) {
    // pengecekan jika sudah ada course yang diambil, jika belum maka langsung push course baru ke array courseOfferings
    if(this.courseOfferings.length === 0) {
      let myCourse = new CourseOffering(course)
      this.courseOfferings.push(myCourse)
      course.decreaseQuota()
    } else {
      // jika sudah ada course yang diambil, cek apakah course yang diambil saat ini sudah pernah diambil sebelumnya
      let getCourse = this.courseOfferings.find(value => {
        value.course.getSubject() === course.getSubject()
      })
      
      // jika belum pernah diambil maka push course baru ke dalam array courseOfferings
      if(getCourse === undefined) {
        let myCourse = new CourseOffering(course)
        this.courseOfferings.push(myCourse)
        course.decreaseQuota()
      }
    }
  }
  
  // fungsi untuk menambahkan grade pada course
  takeATest(course) {
    // mencari index dari course yang akan ditambahkan gradenya
    const findSameSubject = (element) => element.course.getSubject() === course.getSubject()
    let courseIndex = this.courseOfferings.findIndex(findSameSubject)
    
    // jika course tersebut ada dalam array courseOfferings maka lakukan pengecekan terhadap attendancenya, jika sudah mencukupi minimal attendance course tersebut maka grade dapat ditambahkan jika tidak maka tampilkan pesan pada console
    if(courseIndex > -1 ) {
      if(this.courseOfferings[courseIndex].attendance > course.getAttendance()) {
        this.courseOfferings[courseIndex].grade = Math.floor(Math.random() * 100)
      }
      else {
        console.log("please fill your absent")
      }
    } else {
      console.log("take this course first")     // jika course tidak terdapat dalam array courseOfferings
    }
  }
  
  // fungsi untuk menambahkan attandance pada course
  courseAttendance(course) {
    // mencari index course yang akan ditambahkan poin attendancenya
    const findSameSubject = (element) => element.course.getSubject() === course.getSubject()
    let courseIndex = this.courseOfferings.findIndex(findSameSubject)

    // jika course tersebut terdapat dalam array courseOfferings maka tambahkan attandancenya. jika tidak munculkan pesan pemberitahuan pada console
    if(courseIndex > -1 ) {
      this.courseOfferings[courseIndex].attendance += 1
    } else {
      console.log("take this course first")
    }
  }
}

class CourseOffering {
  constructor(course, grade = 0, attendance = 0) {
    this.course = course
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
