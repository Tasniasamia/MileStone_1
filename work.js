const tobody=document.querySelector('tbody');
console.log(parseInt(tobody.innerHTML.length));
const tr=document.querySelectorAll('tr');
const pagination=document.querySelector(".pagination")
let page=document.getElementById('PagePer');

console.log("data");
let itemperpage=5;
let emptybox=[];

for(let i=0;i<=tr.length;i++){
   emptybox.push(tr[i])
}
//How to display items
function displaypage(limit){
    tobody.innerHTML="";
    for(let i=0;i<limit;i++){
        tobody.appendChild(emptybox[i])

    }
   
   
    const item=document.querySelectorAll('.page')

    item.forEach(index=>index.remove())
}

//How many items display into page just give it
page.onchange=DisplayPage
function DisplayPage(){
    let itemperPage=parseInt(page.value);
    displaypage(itemperPage);
    Pagination(itemperPage)
}


//pagination part

function Pagination(getitem){
    let totalitem=parseInt(tr.length);
    if(totalitem<=getitem){
        pagination.style.display="none"
    }
    else{
        pagination.style.display="flex";
        
        let item_per_page=Math.ceil(totalitem/getitem);
        
        for(let i=0;i<=item_per_page;i++){
            const li=document.createElement('li');
            li.className="page";
            const a=document.createElement('a');
            a.href="#";
            a.innerText=i;
            a.setAttribute("data-page",i);
            li.appendChild(a);
        pagination.insertBefore(li,pagination.querySelector('.Next'))
            
        }
        
    }
}


Pagination(parseInt(page.value))