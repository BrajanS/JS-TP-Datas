import {readJSON} from "./modules/getData.js";
import {tableBuilder} from "./modules/builder.js";

let url = "http://127.0.0.1:5500/datas/data.json";
const th = document.querySelectorAll("th");
const tb = document.getElementById("tb");

async function initialize() {
    let getJSON = await readJSON(url); // Attendre la résolution de la promesse
    // console.log(getJSON);
    let saveData = JSON.stringify(getJSON);
    localStorage.setItem("users",saveData);
    if (getJSON) {
        table(getJSON);
    } else {
        console.error("Failed to fetch data.");
    }
}

function table(data){
    let getSave = localStorage.getItem("users");
    if(getSave){
        let objectify = JSON.parse(getSave)
        objectify.map(objpost => {
            tableBuilder(objpost.id,objpost.nom,objpost.prenom,objpost.email,objpost.role)
    })}
    else {data.map(post => {
        tableBuilder(post.id,post.nom,post.prenom,post.email,post.role)
    })}
}
initialize()


console.log(th[1].innerText);
th[0].addEventListener('click', function (){
    console.log("Clicked ID");
    let a,b;

    console.log("Rows: ",tb.rows[0]);
    if(tb.rows[0]){console.log("ID cell: ",tb.rows[0].cells[0]);}
    tb.insertBefore(tb.rows[2],tb.rows[0]);
})

let users = await readJSON(url);
console.log("Users: ",users);
let filteredV = [];

if(users){
    (users);
    const searchInput = document.querySelector("#searchInput");
    searchInput.addEventListener("keyup", (event)=>{
        console.log(event.target.value);
        const searchValue = event.target.value;
        const filter = users.filter((element) => 
            element.nom.toLowerCase().includes(searchValue) ||
            element.prenom.toLocaleLowerCase().includes(searchValue) ||
            element.email.toLowerCase().includes(searchValue) ||
            element.role.toLowerCase().includes(searchValue)
        )
        let r=0;
        console.log(filter[0].nom);
        while(tb.firstChild){tb.removeChild(tb.lastChild);}
        filteredV = filter.map(content => {
            r++;
            tableBuilder(content.id,content.nom,content.prenom,content.email,content.role)
        });
    });
}