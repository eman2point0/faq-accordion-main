console.log("hello world!");

const container = document.querySelectorAll(
  ".faq-question input[type='image']"
);

/*Iterate through all input elements*/
for (let i = 0; i < container.length; i++) {
  /*Add an event that will toggle if answer is visible or not */
  container[i].addEventListener("click", function () {
    this.classList.toggle("active");

    /*Toggle between hiding and showing the active panel */
    let dropDiv = this.parentElement.nextElementSibling;
    dropDiv.style.display =
      dropDiv.style.display === "block" ? "none" : "block";

    /*Toggle beteen plus and minus images */
    if (dropDiv.style.display === "none") {
      this.setAttribute("src", "./assets/images/icon-plus.svg");
    } else {
      this.setAttribute("src", "./assets/images/icon-minus.svg");
    }
  });
}
