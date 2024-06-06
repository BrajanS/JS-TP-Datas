import readJSON from "./modules/getData.js"

let url = "http://127.0.0.1:5500/datas/data.json";

readJSON(url).then(reponse => {
    console.log("Nom (Id1): ",reponse);
})

