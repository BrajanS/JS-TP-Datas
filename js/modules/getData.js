export async function readJSON(url){
    try {
    let data = await fetch(url)
        if(data.ok){
            return data.json();
        }
        return false;
    }catch (err){
        return false;
    }
}