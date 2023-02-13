var characters_container = document.querySelector(".characters-container");

function characters(data) {
    var card = document.createElement("div");
    card.classList.add("card");
    characters_container.appendChild(card);
    var image = document.createElement("img");
    image.classList.add("card-img-top");
        image.src = data.image;
    card.appendChild(image);
    var overlay = document.createElement("img");
    overlay.classList.add("card-img-overlay");
    if (data.house == "Gryffindor") {
        overlay.src = "public/img/gryffindor.png";
    }
    else if (data.house == "Hufflepuff") {
        overlay.src = "public/img/hufflepuff.png";
    }
    else if (data.house == "Ravenclaw") {
        overlay.src = "public/img/ravenclaw.png";
    }
    else if (data.house == "Slytherin") {
        overlay.src = "public/img/slytherin.png";
    }
    card.appendChild(overlay);
    var body = document.createElement("div");
    body.classList.add("card-body");
    card.appendChild(body);
    var name = document.createElement("h5");
    name.classList.add("card-title");
    name.textContent = data.name;
    body.appendChild(name);
    var house = document.createElement("p");
    house.classList.add("card-text");
    house.textContent = data.house;
    body.appendChild(house);

}

$.getJSON("https://hp-api.onrender.com/api/characters", function (data) {

    console.log(data);

    for (var i = 0; i < data.length; i++) {
        characters(data[i]);
    }

    // name
    // alternate_names
    // species
    // gender
    // house
    // dateOfBirth
    // yearOfBirth
    // wizard = true | false
    // ancestry
    // eyeColour
    // hairColour
    // wand  -> wood core length
    // patronus
    // hogwartsStudent = true | false
    // hogwartsStaff = true | false
    // actor
    // alternate_actors
    // alive = true | false
    // image
})