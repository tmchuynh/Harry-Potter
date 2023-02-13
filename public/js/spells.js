var spells_container = document.querySelector(".spells-container");

$.getJSON("https://harry-potter-api-en.onrender.com/spells", function(data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        renderSpells(data[i]);
    }
});

function renderSpells(spells) {
    var card = document.createElement("div");
    card.classList.add("card");
    spells_container.appendChild(card);

    var card_body = document.createElement("div");
    card_body.classList.add("card-body");
    card.appendChild(card_body);

    var h2 = document.createElement("h2");
    h2.classList.add("card-title");
    h2.innerText = spells.spell;
    card_body.appendChild(h2);

    var p = document.createElement("p");
    p.classList.add("card-text");
    p.innerText = spells.use;
    card_body.appendChild(p);

    spells_container.appendChild(card);

}