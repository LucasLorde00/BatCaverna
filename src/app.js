function sendMail() {
    (function () {
        emailjs.init("FhF06shjw39xA8jkX")
    })()

    var params = {
        sendername: document.querySelector("#name").value,
        to: "lucasorge.dev@gmail.com", // Escreva seu email para teste
        subject: document.querySelector("#topic").value,
        replyto: document.querySelector("#from").value,
        message: document.querySelector("#content").value
    }

    var serviceID = "service_55dxeet"
    var templateID = "template_0kwxkt7"

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert("Email foi enviado com sucesso")
        })
        .catch(error => {
            alert(`Não foi possível enviar o email, erro: ${error}`)
        }) 
}

const authorizedUsers = [
    { username: "batman", password: "batman123" },
    { username: "robin", password: "robin123" },
    { username: "nightwing", password: "nightwing123" },
    { username: "redhood", password: "redhood123" },
    { username: "alfred", password: "alfred123" },
    { username: "batgirl", password: "batgirl123" }
]


function login() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    const user = authorizedUsers.find(u => u.username === username && u.password === password)

    if (user) {

        const message = document.createElement("div")
        message.id = "message"
        message.style.position = "absolute"
        message.style.top = "10px"
        message.style.right = "10px"
        message.style.color = "#ffdd00"
        message.style.fontSize = "1.5em"
        message.textContent = `Bem-vindo(a), ${user.username}!`
        document.body.appendChild(message)
    } else {

        alert("SAIA AGORA OU SOFRA AS CONSEQUÊNCIAS!")
    }
}


window.onload = () => {
    const message = document.getElementById("message")
    if (message) {
        message.remove()
    }
}


function generateCrimeId() {
    let lastId = parseInt(localStorage.getItem("lastCrimeId") || "0", 10)
    let newId = lastId + 1
    localStorage.setItem("lastCrimeId", newId)
    return newId
}


function addCrime() {
    const description = document.getElementById('crime-description').value
    const date = document.getElementById('crime-date').value

    if (description && date) {
        const crimes = JSON.parse(localStorage.getItem("crimes")) || []
        const newCrime = {
            id: generateCrimeId(),
            description,
            date
        }
        crimes.push(newCrime)
        localStorage.setItem("crimes", JSON.stringify(crimes))
        displayCrimes()

        document.getElementById('crime-description').value = ''
        document.getElementById('crime-date').value = ''
    } else {
        alert('Por favor, preencha todos os campos.')
    }
}


function displayCrimes() {
    const crimeList = document.getElementById('crime-list')
    crimeList.innerHTML = ''

    const crimes = JSON.parse(localStorage.getItem("crimes")) || []
    crimes.forEach(crime => {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${crime.id}</td>
            <td>${crime.description}</td>
            <td>${crime.date}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editCrime(${crime.id})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="deleteCrime(${crime.id})">Excluir</button>
            </td>
        `
        crimeList.appendChild(row)
    })
}


function editCrime(id) {
    const crimes = JSON.parse(localStorage.getItem("crimes")) || []
    const crime = crimes.find(c => c.id === id)

    if (crime) {
        const newDescription = prompt("Atualize a descrição do crime:", crime.description)
        const newDate = prompt("Atualize a data do crime:", crime.date)

        if (newDescription && newDate) {
            crime.description = newDescription
            crime.date = newDate
            localStorage.setItem("crimes", JSON.stringify(crimes))
            displayCrimes()
        } else {
            alert("Todos os campos são obrigatórios.")
        }
    }
}


function deleteCrime(id) {
    let crimes = JSON.parse(localStorage.getItem("crimes")) || []
    crimes = crimes.filter(c => c.id !== id)
    localStorage.setItem("crimes", JSON.stringify(crimes))
    displayCrimes()
}


window.onload = displayCrimes

function showText(side) {
    const bruceText = document.getElementById('bruce')
    const batmanText = document.getElementById('batman')

    if (side === 'bruce') {
        bruceText.classList.add('active')
        bruceText.classList.remove('hidden')
        batmanText.classList.add('hidden')
        batmanText.classList.remove('active')

    } else if (side === 'batman') {
        batmanText.classList.add('active')
        batmanText.classList.remove('hidden')
        bruceText.classList.add('hidden')
        bruceText.classList.remove('active')
    }
}
