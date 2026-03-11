let lang="en"

function toggleLang(){
lang=lang==="en"?"hi":"en"
loadNews()
}

async function loadNews(){

const res=await fetch("https://pulsegurgaon.onrender.com/news")
const data=await res.json()

const row=document.getElementById("newsrow")

row.innerHTML=""

data.forEach(a=>{

const card=document.createElement("div")
card.className="card"

let title=lang==="en"?a.title_en:a.title_hi
let summary=lang==="en"?a.summary_en:a.summary_hi

card.innerHTML=`
<img src="${a.image}">
<h3>${title}</h3>
<p>${summary}</p>
`

row.appendChild(card)

})

}

loadNews()