# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://github.com/eman2point0/faq-accordion-main)
- Live Site URL: [Add live site URL here](https://eman2point0.github.io/faq-accordion-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<input
  type="image"
  src="./assets/images/icon-plus.svg"
  alt="Plus Icon to expand FAQ answer"
/>

This is how I converted an image into an interactable button that also switches
images based on the display state.
```

```css
hr {
        border: 0;
        display: block;
        background-color: gray;
        width: 100%;
        height: 1px;
}
This was made to separate the questions with a solid line.

@font-face {
        font-family: myFirstFont;
        src: url(./assets/fonts/static/WorkSans-Bold.ttf);
}
This allowed me to change the font style
```

```js
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

This is how I would toggle the display states of the drop down elements. Interesting way to go about it.
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

A technique that I would like to learn more about are accordian menus, as they add a nice touch to a website and are good for UI.
Another technique I want to get more into is using font-faces to change the style of my text.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.w3schools.com/howto/howto_js_accordion.asp) - This helped me understand how an accordion menu interacts and the steps needed to create one.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Emanuel Barcenas](https://github.com/eman2point0/)
- Frontend Mentor - [@eman2point0](https://www.frontendmentor.io/profile/eman2point0)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
