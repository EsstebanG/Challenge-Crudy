const tittleLevel = document.getElementById("tittle-level");
const descriptionLevel = document.getElementById("description-level");
const body = document.getElementById("nivel-container");
const showAlert = document.getElementById("showAlert");
const showHealth = document.getElementById("health");
let health = 3;

function showStatistics() {
    showHealth.innerHTML = "Vidas del usuario: <br> ❤️ Salud:" + health;

    if (health === 0) {
        confirm("GAME OVER...")
        location.reload()
    }
};

function level1() {
    showStatistics();
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
            showAlert.textContent = "Correcto"
            setTimeout(()=> {
                body.removeChild(left)
                body.removeChild(right)
                showAlert.textContent = ""
                level2();
            }, 1000)
            
        } else {
            showAlert.textContent = "Incorrecto";
            health -= 1;
            showStatistics()
        }
    })

    left.addEventListener("click", () => {
        if (direction[textDirection] != left.textContent) {
            
            showAlert.textContent = "Correcto"
            setTimeout(()=> {
                body.removeChild(left)
                body.removeChild(right)
                showAlert.textContent = ""
                level2();
            }, 1000)
        } else {
            showAlert.textContent = "Incorrecto";
            health -= 1;
            showStatistics()
        }
    })

}

function level2() {
    showStatistics();
    tittleLevel.textContent = "NIVEL 2: PUERTAS.";
    descriptionLevel.innerHTML = "Acabas de entrar a un entorno de tres puertas. Debes escoger la correcta para continuar al siguiente nivel.<br> 1. Puerta de código. <br> 2. Puerta condicional. <br> 3. Puerta de acceso directo. <br><br>"; 

    // CREATE BUTTOM.
    for (i = 0; i <= 2; i++) {
        let button = document.createElement("button");
        body.appendChild(button);
        button.setAttribute("id", "buttonLevel" + i);
    };

    const btnIncorrect1 = document.getElementById("buttonLevel0");
    btnIncorrect1.innerHTML = "Puerta de código.";
    btnIncorrect1.addEventListener('click', () => {
        showAlert.innerHTML = "Respuesta incorrecta, haz perdido una vida.";
        health -= 1;
        showStatistics();
    });

    const btnIncorrect2 = document.getElementById("buttonLevel1");
    btnIncorrect2.innerHTML = "Puerta condicional.";
    btnIncorrect2.addEventListener('click', () => {
        showAlert.innerHTML = "Respuesta incorrecta, haz perdido una vida.";
        health -= 1;
        showStatistics();
    });

    const btnCorrect = document.getElementById("buttonLevel2");
    btnCorrect.innerHTML = "Puerta de acceso directo.";
    btnCorrect.addEventListener('click', () => {
        showAlert.innerHTML = "Respuesta correcta.";
        
        showAlert.textContent = "Correcto"
            setTimeout(()=> {
                body.removeChild(btnIncorrect1);
                body.removeChild(btnIncorrect2);
                body.removeChild(btnCorrect);
                showAlert.textContent = ""
                level3();
            }, 1000)
    });

};

function level3() {
    const numbers = [];

    for (let i = 0; i < 4; i++) {
        numbers[i] = Math.floor(Math.random() * 10)
    }

    tittleLevel.innerHTML = "NIVEL 3: Recuerda los numeros";
    descriptionLevel.innerHTML = numbers.join(" ");
    setTimeout(() => {
        descriptionLevel.innerHTML = "¿Como era la secuencia de numero?"
    }, 1000);

    //Create three buttons with equals class but differents id
    for (let i = 1; i <= 3; i++) {
        const button = document.createElement("button");
        body.appendChild(button);
        button.classList.add("btn")
        button.setAttribute("id", "btn" + i);
        button.textContent = [numbers[0] - i, numbers[1] - i, numbers[2], numbers[3] - i].join(" | ")
    };

    let btn1 = document.getElementById("btn1");
    let btn3 = document.getElementById("btn3");
    let correct = document.getElementById("btn2");

    correct.textContent = numbers.join(" ");


    correct.addEventListener("click", function () {
        showAlert.textContent = "Correcto";
        setTimeout(()=> {
                body.removeChild(btn1);
                body.removeChild(btn2);
                body.removeChild(correct);
                showAlert.textContent = ""
                level4();   
            }, 1000)
        
    });

    btn1.addEventListener("click", () => {
        showAlert.textContent = "Incorrecto";
        health -= 1;
        showStatistics()
    });

    btn3.addEventListener("click", () => {
        showAlert.textContent = "Incorrecto";
        health -= 1;
        showStatistics()
    });
}
level1();




