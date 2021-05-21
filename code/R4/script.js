const API = 'https://jsonplaceholder.typicode.com';
const xml = new XMLHttpRequest();

function requets() {
    if (this.readyState === 4 && this.status === 200) {
        //console.log(this.response);

        const data = JSON.parse(this.response);
        console.log(data)

        const HTMLrequest = document.getElementById('app')
        const column_2 = document.getElementById('app_1')
        const column_3 = document.getElementById('app_2')

        const name = data.map(user => `<th>${user.name}</th>`)
        const username = data.map(user => `<td>${user.username}</td>`)
        const email = data.map(user => `<td> ${user.email}</td>`)

        /* let nuevo = name.replace(/,/g, "");
         console.log(name)*/


        HTMLrequest.innerHTML = `<tr>${name}</tr>`
        column_2.innerHTML = `<td>${username}</td>`
        column_3.innerHTML = `<td>${email}</td>`
    }
}

xml.addEventListener("load", requets);
xml.open("GET", `${API}/users`);
xml.send();