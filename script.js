const searchUser = document.querySelector("[data-buscar]")
const userInput = document.querySelector("[data-user]")
const userPhoto = document.querySelector("[data-user='photo']")
const userName = document.querySelector("[data-user='nome']")
const userBio = document.querySelector("[data-user='bio']")
const userRepos = document.querySelector("[data-user='repositorio']")
const userSeguidores = document.querySelector("[data-user='seguidores']")
const userSeguindo = document.querySelector("[data-user='seguindo']")
const createMouth = document.querySelector(".mes")
const createYear = document.querySelector(".ano")

function handleClick(e){
  e.preventDefault()
  const inputUser = userInput.value
  showUser(inputUser)
}

async function showUser(user){
  try{
    const urlApi = `https://api.github.com/users/${user}`
    const dadosResponse = await fetch(urlApi)
    const dadosJson = await dadosResponse.json()

    userName.innerText = dadosJson.name

    if(dadosJson.bio){
      userBio.innerText = dadosJson.bio
    }else{
      userBio.innerText = "Esse perfil nao possui Bio"
    }
    
    userRepos.innerText = dadosJson.public_repos
    userSeguidores.innerText = dadosJson.followers
    userSeguindo.innerText = dadosJson.following
    userPhoto.src = dadosJson.avatar_url
    createMouth.innerHTML = dadosJson.created_at.split('-')[1]
    createYear.innerHTML = dadosJson.created_at.split('-')[0]

  }catch(erro){
    console.log(erro)
  }
}

searchUser.addEventListener('click', handleClick)