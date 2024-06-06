import {readJSON} from "./modules/getData.js"
import {tableBuilder} from "./modules/builder.js";

let url = "http://127.0.0.1:5500/datas/data.json";

async function initialize() {
    let getJSON = await readJSON(url); // Attendre la résolution de la promesse
    console.log(getJSON);
    let saveData = JSON.stringify(getJSON);
    localStorage.setItem("users",saveData);
    if (getJSON) {
        table(getJSON);
    } else {
        console.error("Failed to fetch data.");
    }
}

function table(data){
    let getSave = localStorage.getItem("users")
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