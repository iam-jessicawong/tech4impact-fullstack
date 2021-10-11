const isR18Plus = (age) => {
  let checkAge = age >= 18
  // mengembalikan promise resolve jika age di atas  atau sama dengan 18 dan reject jika di bawah 18
  return new Promise(
    (resolve, reject) => {
      if(checkAge) {
        let message = "anda sudah dewasa"
        resolve(message)
      } else {
        let message = "anda masih dibawah umur"
        reject(message)
      }
    }
  );
};

const printR18Plus = async () => {
  const underAge = await isR18Plus(10).then(e => e).catch(e => e);
  const properAge = await isR18Plus(19).then(e => e).catch(e => e);

  console.log(underAge);
  console.log(properAge);
}

printR18Plus();
