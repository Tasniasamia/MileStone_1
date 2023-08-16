const tobody=document.querySelector('tbody');
console.log(parseInt(tobody.innerHTML.length));
const tr=document.querySelectorAll('tr');
const pagination=document.querySelector("#pagination")
const pagination_part=document.querySelector('#pagination_part')
let page=document.getElementById('PagePer');
let index=0;
console.log("data");
console.log(tr.length);
let itemperpage=6;


let emptybox=[];
//looping into total-items
for(let i=0;i<=tr.length;i++){
   emptybox.push(tr[i])
}
//How to display items
function displaypage(limit){
    tobody.innerHTML = '';
    for (let i = 0; i < limit; i++) {
        tobody.appendChild(emptybox[i]);
    }
   
    const item=document.querySelectorAll('.page')

    item.forEach(index=>index.remove())
}
displaypage(itemperpage)

//How many items display into page just give it
page.onchange=DisplayPage
function DisplayPage(){
    let itemperPage=parseInt(page.value);
    displaypage(itemperPage);
    Pagination(itemperPage)
}


//pagination part

function Pagination(getitem){
    let totalitem=emptybox.length;
    console.log(totalitem);
    console.log(getitem);
    if(totalitem <= getitem){
         pagination_part.style.display="none";
        pagination.style.display="none";
    }
    else{
        pagination_part.style.display="flex";
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
        pagination.insertBefore(li,pagination.querySelector('#Next'))
            
        }
        
    }
}


Pagination(parseInt(page.value))




let allpages=pagination.querySelectorAll('a');
let lastpage=allpages.length-3;

function paginationconnect(allpages,items,lastpage){
    for(let button of allpages){
        button.onclick=i=>{
            const data_page=i.target.getAttribute('data-page');
            const next=i.target.getAttribute('id');
            if(data_page!=null){
                index=data_page;
            }else{
                if(next==="Next"){
                    index++;
                    if(index>=lastpage){
                        index=lastpage;
                    }
                    else{
                        index--;
                        if(index<=0){
                            index=0;
                        }
                    }

                }
                
            }
        }
    }

}

let pageli=pagination.querySelectorAll('.page');
pageli[0].classList.add('active');
paginationconnect(allpages,parseInt(page.value),lastpage,pageli)
