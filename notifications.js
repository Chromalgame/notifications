btn = document.querySelector(".click")
posTop = "20px";
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

btn.addEventListener('click', () => {
    switch (randomIntFromInterval(1, 3)) {
        case 1:
            notification("red", "cancel.svg", "Erreur : Une erreur à eu lieu")
        break;
        case 2:
            notification("yellow", "info.svg", "Attention : Ceci est un avertissement")
        break;
        case 3:
            notification("green", "check.svg", "Valide : Tout est OK")
        break;
    }
})

function notification(color, logo, message){
    notifications = document.querySelectorAll('.notification')

    posTop = notifications.length * 90 + 20 + "px"

    notif_content = document.querySelector('.notif_content')
    notif = document.createElement('div')
    notif.classList.add("notification", color)
    notif.style.top = posTop;
    notif.innerHTML =
        `<img class="notif_icon" src="${logo}" alt="" />
    <div class="notif_texte">
        ${message}
    </div>`
    var notif_parent = document.querySelector('.notif_parent');
    notif_parent.insertAdjacentElement('afterbegin', notif);
    deleteElement(notif)
}

function deleteElement(element) {
    setTimeout(function () {
        element.remove();    

        notifications = document.querySelectorAll('.notification')
    
        notifications.forEach((element) => {
            element_style = window.getComputedStyle(element)
    
            posTop = parseInt(element_style['top'].slice(0, element_style['top'].length - 2)) + parseInt(posTop.slice(0, posTop.length - 2)) + "px"
            element.style.top = parseInt(element_style['top'].slice(0, element_style['top'].length - 2) - 90) + "px"
        })
    }, 10500)
}