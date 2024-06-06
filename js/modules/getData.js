async function readJSON(url){
    let data = await fetch(url)
    return data.json()
}

export default readJSON;