import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  //Create a div containing informations
  //with the total number of animals
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numbers-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numbers>${animal.total}</span>`;
    return div;
  }

  //Fill each animal in the DOM
  const numerosGrid = document.querySelector(target);
  function paddingAnimals(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  //Animate the numbers for each animal
  function animaAnimalsNumbers() {
    const animaNumeros = new AnimaNumeros(
      "[data-numbers]",
      ".numeros",
      "ativo"
    );
    animaNumeros.init();
  }

  //Pull the animals from a JSON file
  //and create each animal using createAnimal
  async function criarAnimais() {
    try {
      //Fetch and wait for the response, and transform it to JSON
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      //After the transformation of JSON, activate
      // the functions to fill and animate the numbers
      animaisJSON.forEach((animal) => paddingAnimals(animal));
      animaAnimalsNumbers();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais();
}
