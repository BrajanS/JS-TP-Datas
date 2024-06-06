export function tableBuilder(a,b,c,d,e){
    let tr = document.createElement('tr')
    let id = document.createElement('td')
    let nom = document.createElement('td')
    let prenom = document.createElement('td')
    let email = document.createElement('td')
    let role = document.createElement('td')
    
    id.textContent = a
    nom.textContent = b
    prenom.textContent = c
    email.textContent = d
    role.textContent = e

    tr.appendChild(id)
    tr.appendChild(prenom)
    tr.appendChild(nom)
    tr.appendChild(email)
    tr.appendChild(role)

    document.getElementById('tb').appendChild(tr);
}