const tittleLevel = document.getElementById("tittle-level");
const descriptionLevel = document.getElementById("description-level");
const body = document.getElementById("nivel-container");
const alert = document.getElementById("alert");

function login() {
    const direction = ["Izquierda", "Derecha"];
    let textDirection = Math.floor(Math.random() * 2);

    tittleLevel.textContent = "Responde la siguiente pregunta para iniciar con el juego"
    descriptionLevel.innerHTML = "Seleccione la direccion contraria a la que se le muestra en el siguiente texto: <br>" + direction[textDirection];

    const right = document.createElement("button");
    right.textContent = "Derecha";
    body.appendChild(right);

    const left = document.createElement("button");
    left.textContent = "Izquierda";
    body.appendChild(left)

    right.addEventListener("click", () => {
        if (direction[textDirection] != right.textContent) {
            alert.textContent = "Correcto"
            body.removeChild(left)
            body.removeChild(right)
            level1()
        } else {
            alert.textContent = "Incorrecto"
        }
    })

    left.addEventListener("click", () => {
        if (direction[textDirection] != left.textContent) {
            alert.textContent = "Correcto"
            body.removeChild(left)
            body.removeChild(right)
            level1()
        } else {
            alert.textContent = "Incorrecto"
        }
    })

}

function level3() {
    const numbers = [];

    for (let i = 0; i < 4; i++) {
        numbers[i] = Math.floor(Math.random() * 10)
    }

    tittleLevel.innerHTML = "❗❗Remember de Numbers❗❗";
    descriptionLevel.innerHTML = numbers.join(" ");
    setTimeout(() => {
        descriptionLevel.innerHTML = "¿How was the sequence of numbers?"
    }, 1500);

    //Create three buttons with equals class but differents id
    for (let i = 1; i <= 3; i++) {
        const button = document.createElement("button");
        body.appendChild(button);
        button.classList.add("btn")
        button.setAttribute("id", "btn" + i);
        button.textContent = [numbers[0] - i, numbers[1] - i, numbers[2], numbers[3] - i].join(" ")
    }

    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn3");
    let correct = document.getElementById("btn2");

    correct.textContent = numbers.join(" ");


    correct.addEventListener("click", function () {
        alert.textContent = "CORRECT"
    })

    btn1, btn2.addEventListener("click", () => {
        alert.textContent = "INCORRECT"
    })



}
login()




