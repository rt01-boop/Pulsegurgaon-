let lang = "en"

function toggleLang(){
lang = lang === "en" ? "hi" : "en"
loadNews()
}

async function loadNews(){

const row = document.getElementById("newsrow")

if(!row){
console.log("newsrow container not found")
return
}

row.innerHTML="Loading news..."

try{

const res = await fetch("/.in/articles.json")
const data = await res.json()

row.innerHTML=""

data.forEach(article=>{

const title = lang==="en" ? article.title_en : article.title_hi
const summary = lang==="en" ? article.summary_en : article.summary_hi

const card = document.createElement("div")
card.className="card"

card.innerHTML = `
<a href="frontend/article.html?id=${article.id}">
<img src="${article.image}">

<h3>${title}</h3>
<p>${summary}</p>
</a>
`row.appendChild(card)

})

}catch(err){

row.innerHTML="Failed to load news."
console.error(err)

}

}

loadNews()