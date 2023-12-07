const container__button = document.getElementById("container__button")
const buttons = document.getElementsByClassName("cookies__boton")

const eliminarCookies = () =>{

    container__button.classList.add("displayflex")

}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", eliminarCookies);
}