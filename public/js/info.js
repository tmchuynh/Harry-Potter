var characters_container = document.querySelector(".characters-container");

function renderCharacters(characters) {
    var card = document.createElement("div");
    card.classList.add("card");
    characters_container.appendChild(card);

    var header = document.createElement("div");
    header.classList.add("card-header");
    header.textContent = characters.name;
    card.appendChild(header);

    var body = document.createElement("div");
    body.classList.add("card-body");
    card.appendChild(body);

    var image = document.createElement("img");
    image.classList.add("card-img-top");
    /* Checking if the character has an image. If it does, it will show the image, if not, it will show
    the Hogwarts shield. */
    if (characters.image != "") {
        image.src = characters.image;
    }
    else {
        image.src = "public/img/shield.png";
    }
    body.appendChild(image);

    var table = document.createElement("table");
    table.classList.add("table");
    body.appendChild(table);

    var tbody = document.createElement("tbody");
    table.appendChild(tbody);

    var tr_name = document.createElement("tr");
    var td = document.createElement("td");
    td.style.fontWeight = "bold";
    td.textContent = "House";
    tr_name.appendChild(td);
    var td_name = document.createElement("td");
    /* Checking if the character has a house. If it does, it will show the house, if not, it will show
    "Unknown". */
    if (characters.house != "") {
        td_name.textContent = characters.house;
    }
    else {
        td_name.textContent = "Unknown";
    }
    td_name.style.fontFamily = "'Cookie', cursive";
    td_name.style.fontSize = "1.5rem";
    /* Changing the color of the house name depending on the house. */
    if (characters.house == "Gryffindor") {
        td_name.style.color = "#aa130d";
    }
    else if (characters.house == "Hufflepuff") {
        td_name.style.color = "#e3bd0a";
    }
    else if (characters.house == "Ravenclaw") {
        td_name.style.color = "#4191b4";
    }
    else if (characters.house == "Slytherin") {
        td_name.style.color = "#19420d";
    }

    tr_name.appendChild(td_name);
    tbody.appendChild(tr_name);

    var tr_name = document.createElement("tr");
    var td = document.createElement("td");
    td.style.fontWeight = "bold";
    td.textContent = "Gender";
    tr_name.appendChild(td);
    var td_name = document.createElement("td");
    /* Checking if the character has a gender. If it does, it will show the gender, if not, it will
    show "Unknown". */
    if (characters.gender != "") {
        td_name.textContent = characters.gender;
    }
    else {
        td_name.textContent = "Unknown";
    }
    td_name.style.fontFamily = "'Cookie', cursive";
    td_name.style.fontSize = "1.5rem";
    tr_name.appendChild(td_name);
    tbody.appendChild(tr_name);

    var tr_name = document.createElement("tr");
    var td = document.createElement("td");
    td.style.fontWeight = "bold";
    td.textContent = "Ancestry";
    tr_name.appendChild(td);
    var td_name = document.createElement("td");
    /* Checking if the character has an ancestry. If it does, it will show the ancestry, if not, it
    will show "Unknown". */
    if (characters.ancestry != "") {
        td_name.textContent = characters.ancestry;
    }
    else {
        td_name.textContent = "Unknown";
    }
    td_name.style.fontFamily = "'Cookie', cursive";
    td_name.style.fontSize = "1.5rem";
    tr_name.appendChild(td_name);
    tbody.appendChild(tr_name);

    var tr_name = document.createElement("tr");
    var td = document.createElement("td");
    td.style.fontWeight = "bold";
    td.textContent = "Wizardary";
    tr_name.appendChild(td);
    var td_name = document.createElement("td");
    /* Checking if the character is a wizard or not. If it is, it will show a check mark, if not, it
    will show an X. */
    if (characters.wizard) {
        td_name.innerHTML = "<i class=\"bi bi-check\"></i>";
    } else {
        td_name.innerHTML = "<i class=\"bi bi-x\"></i>";
    }
    tr_name.appendChild(td_name);
    tbody.appendChild(tr_name);

    var tr_name = document.createElement("tr");
    var td = document.createElement("td");
    td.style.fontWeight = "bold";
    td.textContent = "Actor";
    tr_name.appendChild(td);
    var td_name = document.createElement("td");
    /* Checking if the character has an actor. If it does, it will show the actor, if not, it will show
    "Unknown". */
    if (characters.actor != "") {
        td_name.textContent = characters.actor;
    }
    else {
        td_name.textContent = "Unknown";
    }
    td_name.textContent = characters.actor;
    td_name.style.fontFamily = "'Cookie', cursive";
    td_name.style.fontSize = "1.5rem";
    tr_name.appendChild(td_name);
    tbody.appendChild(tr_name);

    var tr_name = document.createElement("tr");
    var td = document.createElement("td");
    td.style.fontWeight = "bold"; td.textContent = "Alive";
    tr_name.appendChild(td);
    var td_name = document.createElement("td");
    /* Checking if the character is alive or not. If it is, it will show a check mark, if not, it
    will show an X. */
    if (characters.alive) {
        td_name.innerHTML = "<i class=\"bi bi-check\"></i>";
    } else {
        td_name.innerHTML = "<i class=\"bi bi-x\"></i>";
    }
    tr_name.appendChild(td_name);
    tbody.appendChild(tr_name);

    var house = document.createElement("img");
    house.classList.add("house");
    /* Checking the house of the character and depending on the house, it will show the house's logo. */
    if (characters.house == "Gryffindor") {
        house.src = "public/img/gryffindor.png";
    }
    else if (characters.house == "Ravenclaw") {
        house.src = "public/img/ravenclaw.png";
    }
    else if (characters.house == "Slytherin") {
        house.src = "public/img/slytherin.png";
    }
    else if (characters.house == "Hufflepuff") {
        house.src = "public/img/hufflepuff.png";
    }
    else {
        house.src = "public/img/shield.png";
    }

    body.appendChild(house);

}

$.getJSON("https://hp-api.onrender.com/api/characters", function (data) {

    console.log(data);

    for (var i = 0; i < data.length; i++) {
        renderCharacters(data[i]);
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