let planets = ["Mercure","Vénus","Terre","Mars","Jupiter","Saturne","Uranus","Neptune"];    

let section = document.querySelector(".listPlanets")

for (let item of planets) {
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    let newDiv = document.createElement("div");
    newDiv.classList.add("planet");
    newDiv.style.backgroundColor = "#" + randomColor;
    let lune = document.createElement("div");
    lune.classList.add("moon");
    newDiv.appendChild(document.createTextNode(item));
    newDiv.appendChild(lune);
    section.appendChild(newDiv);
}



