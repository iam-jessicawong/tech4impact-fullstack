// SOAL-03 | export fungsi validateLoginData sebagai export default

export default function validateLoginData(email, password){
  // regex untuk valid email dan password
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[!@#$%^&*]).{8,}$/

  // pengecekan valid email dan password
  if(validEmail.test(email)) {
    return validPassword.test(password)? "Welcome to The Jungle" : "tolong masukan password sesuai ketentuan"
  }
  else {
    return "tolong masukan email yang valid"
  }
}