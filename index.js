let container = document.getElementById("gallery");
let count = 1;
let flag = false;
let URL = `https://jsonplaceholder.typicode.com/photos?_page=${count}&_limit=10`;

async function getData(){
    let res = await fetch(`${URL}`);
    let data = await res.json();
    console.log(data)
    displayData(data)
}
getData();

function displayData(data){

    data.forEach((ele)=>{
        let card = document.createElement("div");

        let image = document.createElement("img");
        image.src = ele.url;

        let title = document.createElement("h4")
        title.innerText = ele.title;
        card.append(image,title)
        container.append(card)
    })
    flag = true;
}

window.addEventListener("scroll",function(){
   let clientHeight = document.documentElement.clientHeight;
   let scrollHeight = document.documentElement.scrollHeight;
   let scrollTop = document.documentElement.scrollTop;
  

   if(Math.ceil(scrollHeight-clientHeight)<=Math.ceil(scrollTop)){
    count++
    getData()
    flag=false;
   }
})
