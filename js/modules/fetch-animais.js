import AnimaNumeros from "./anima-numeros.js";

export default function InitFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numbers-grid");
      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      const animaNumeros = new AnimaNumeros(
        "[data-numbers]",
        ".numeros",
        "ativo"
      );
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numbers-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numbers>${animal.total}</span>`;
    return div;
  }

  fetchAnimais("./json/animaisapi.json");
}
