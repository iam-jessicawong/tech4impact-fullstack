const getGitHubUser = async (username) => {
  if(username) {
    try {
      const url = `https://api.github.com/users/${username}`
      const response = await fetch(url)

      // jika pengguna tidak ditemukan
      if(response.status === 404) {
        throw "not found"
      }

      // jika pengguna ditemukan
      const data = await response.json()
      return data
    } catch (error) {
      return error
    }
  }
  else {
    return null       // jika username kosong
  }
}
const printGitHubUser = async () => {
  const mojombo = await getGitHubUser("mojombo");
  const orange = await getGitHubUser("");
  const rudiTabuti = await getGitHubUser("rudi.tabuti");

  console.log(mojombo);
  console.log(orange);
  console.log(rudiTabuti);
}

printGitHubUser();
