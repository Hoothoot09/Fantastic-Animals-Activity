export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    //Bind object's 'this' to the mutation callback
    this.handleMutation = this.handleMutation.bind(this);
  }

  //Receive an element from the DOM with a number in its
  //text Increment from 0 to the final number
  static incrementarNumeros(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start = start + incremento;
      numero.innerText = start;
      if (start > total) {
        clearInterval(timer);
        numero.innerText = total;
      }
    }, 25 * Math.random());
  }

  //Increment the active number for each
  //selected number from the DOM
  animaNumeros() {
    this.numeros.forEach((numero) =>
      this.constructor.incrementarNumeros(numero)
    );
  }

  //Function that happens when mutations ocour
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  //Add the MutationObserver for verify when the
  //class 'active' added to the target element
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
