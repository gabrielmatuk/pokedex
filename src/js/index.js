const listSelectedPokemon = document.querySelectorAll(".pokemon");
const pokemonsCard = document.querySelectorAll(".card-pokemon");

listSelectedPokemon.forEach((pokemon) => {
  pokemon.addEventListener("click", () => {
    const cardOpen = document.querySelector(".open");
    cardOpen.classList.remove("open");

    const idSelected = pokemon.attributes.id.value;

    let selectedCard = `card-${idSelected}`;
    const cardPokemonToOpen = document.getElementById(selectedCard);
    cardPokemonToOpen.classList.add("open");

    const activePokemon = document.querySelector(".active");
    activePokemon.classList.remove("active");

    const selectedListPokemon = document.getElementById(idSelected);
    selectedListPokemon.classList.add("active");
  });
});
