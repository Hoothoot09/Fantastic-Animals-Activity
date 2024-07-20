export default class Accordian {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  //adds the events for the accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  // start function
  init() {
    if (this.accordionList.length) {
      //active first item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent;
    }
    return this;
  }
}
