export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // Bind the class object to the callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Move the tooltip based on its styles
  // according to the mouse position
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // Remove the tooltip and the mousemove and mouseleave events
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // Create the tooltip box and put it in the body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // Create the tooltip and add the mousemove
  // and mouseleave events to the target
  onMouseOver({ currentTarget }) {
    // Create the tooltip box and place it in a property
    this.criarTooltipBox(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  // Add the mouseover events to each tooltip.
  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
