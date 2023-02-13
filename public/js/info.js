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
    td.textContent = "House";
    tr_name.appendChild(td);
    var td_name = document.createElement("td");
    td_name.textContent = characters.house;
    tr_name.appendChild(td_name);
    tbody.appendChild(tr_name);

    var tr_name = document.createElement("tr");
    var td = document.createElement("td");
    td.textContent = "Gender";
    tr_name.appendChild(td);
    var td_name = document.createElement("td");
    td_name.textContent = characters.gender;
    tr_name.appendChild(td_name);
    tbody.appendChild(tr_name);

    var tr_name = document.createElement("tr");
    var td = document.createElement("td");
    td.textContent = "Ancestry";
    tr_name.appendChild(td);
    var td_name = document.createElement("td");
    td_name.textContent = characters.ancestry;
    tr_name.appendChild(td_name);
    tbody.appendChild(tr_name);

    var tr_name = document.createElement("tr");
    var td = document.createElement("td");
    td.textContent = "Wizardary";
    tr_name.appendChild(td);
    var td_name = document.createElement("td");
    if (characters.wizard) {
        td_name.innerHTML = "<i class=\"bi bi-check\"></i>";
    } else {
        td_name.innerHTML = "<i class=\"bi bi-x\"></i>";
    }
    tr_name.appendChild(td_name);
    tbody.appendChild(tr_name);

    var tr_name = document.createElement("tr");
    var td = document.createElement("td");
    td.textContent = "Actor";
    tr_name.appendChild(td);
    var td_name = document.createElement("td");
    td_name.textContent = characters.actor;
    tr_name.appendChild(td_name);
    tbody.appendChild(tr_name);

    var tr_name = document.createElement("tr");
    var td = document.createElement("td");
    td.textContent = "Alive";
    tr_name.appendChild(td);
    var td_name = document.createElement("td");
    if (characters.alive) {
        td_name.innerHTML = "<i class=\"bi bi-check\"></i>";
    } else {
        td_name.innerHTML = "<i class=\"bi bi-x\"></i>";
    }
    tr_name.appendChild(td_name);
    tbody.appendChild(tr_name);

    var house = document.createElement("img");
    house.classList.add("house");
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

// =============================================================================================

// const urlToFetch = "https://harry-potter-api-en.onrender.com/spells"

// fetch(urlToFetch)
// 	.then((res) => res.json())
// 	.then((data) => {
// 		// It brings all data at the API and it shows it at the console
// 		console.log(data)
// 	})
// 	.catch((e) => console.log(e));