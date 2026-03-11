let lang="en"

function toggleLang(){
lang = lang==="en" ? "hi" : "en"
loadNews()
}

async function loadNews(){

const res = await fetch("https://pulsegurgaon.onrender.com/news")

const data = await res.json()

const row = document.getElementById("newsrow")

row.innerHTML=""

data.forEach(article=>{

const card = document.createElement("div")
card.className="card"

const title = lang==="en" ? article.title_en : article.title_hi
const summary = lang==="en" ? article.summary_en : article.summary_hi

card.innerHTML = `
<img src="${article.image}">
<h3>${title}</h3>
<p>${summary}</p>
`

row.appendChild(card)

})

}

loadNews()