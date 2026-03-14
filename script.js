async function loadNews(){

const container = document.getElementById("newsrow")

try{

const res = await fetch("articles.json")
const data = await res.json()

container.innerHTML = ""

data.forEach(article => {

const card = document.createElement("div")
card.className = "card"

card.innerHTML = `
<img src="${article.image}">

<h3>${article.title_en}</h3>
<p>${article.summary_en}</p>
<a href="frontend/article.html?id=${article.id}">Read full article</a>
`container.appendChild(card)

})

}catch(e){

container.innerHTML = "News failed to load"

}

}

loadNews()