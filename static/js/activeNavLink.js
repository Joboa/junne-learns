// Get the container element
let btnContainer = document.getElementById("navbar-nav");
// console.log(btnContainer)

// Get all buttons with class="btn" inside the container
let links = btnContainer.getElementsByClassName("nav-link");
// console.log(links)

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    // console.log(current)

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace("active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}