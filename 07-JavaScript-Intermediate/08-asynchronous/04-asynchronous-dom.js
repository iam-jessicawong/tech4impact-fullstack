const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");

const getGitHubUser = async (username) => {
  if(username) {
    try {
      const url = `https://api.github.com/users/${username}`
      const response = await fetch(url)

      // jika pengguna tidak ditemukan
      if(response.status === 404) {
        throw "Not Found"
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

elFormUsername.onsubmit = async (e) => {
  e.preventDefault();

  // get username from input
  const username = document.getElementsByName('username')[0].value.trim()
  const user = await getGitHubUser(username)    // get user from fetch api

  // if input not null
  if(user) {
    elCard.classList.remove("d-none")
    // if user exist
    if(user instanceof Object) {
      elCardBtn.classList.remove("d-none")
      elCardImg.classList.remove("d-none")
      elCardTitle.innerHTML = user.login
      elCardImg.setAttribute("src", user.avatar_url)
      elCardBtn.setAttribute("href", user.html_url)
      elCardBtn.setAttribute("target", "_blank")
    }

    // if user not exist
    else {
      elCardBtn.classList.add("d-none")
      elCardImg.classList.add("d-none")
      elCardTitle.textContent = user
    }
  }
};

