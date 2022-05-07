const API = "FcKFrE3GQ6nJe-BThZMzKNZZv0EaWXU4TLbFwKBj_O4";

import {navbar} from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import {searchImages,append} from "../components/fetch.js"

let search = (e) =>{
    if(e.key==="Enter"){
        let value = document.getElementById("query").value;
        searchImages(API,value).then((data)=>{
            console.log(data);
            let container = document.getElementById("container");
            append(data.results,container)
        })
       
    }
}

document.getElementById("query").addEventListener("keydown",search)

let categories = document.getElementById("categories").children;
// console.log(categories);

function cSearch(){
    console.log(this.id);
    searchImages(API,this.id).then((data)=>{
        console.log(data);
        let container = document.getElementById("container");
        append(data.results,container)
    })
}
for(let el of categories){
    el.addEventListener("click",cSearch);
}