const url=("https://inshorts.deta.dev/news?category=science")
const api =async()=>{
    const request =await fetch(url)
    const response=await request.json()
    const output =await response.data
    console.log(output)
    output.forEach((data)=>{
        const listitem=document.getElementById("root")
    listitem.innerHTML+=`<div class="container">
    <div class="card title">Title: ${data.title}</div>
   <div class="image"> <img src="${data.imageUrl}  class="image"></div>
   
    <div class="card content">Content: ${data.content}</div>
    <div class="card date">Date:${data.date}</div>
    <div class="card time">Time:${data.time}</div>
    <div class="card name">AuthorName: ${data.author}</div>
    </div>`

    })
    
}
api()