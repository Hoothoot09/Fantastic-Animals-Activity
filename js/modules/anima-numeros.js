export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numbers]");

    numeros.forEach((numero) => {
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
    });
  }

  const observerTarget = document.querySelector(".numeros");

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
