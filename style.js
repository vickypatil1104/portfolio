const heading = document.querySelector("#loop-heading");
// console.log(heading);

let text = "Web Developer";
let lastText = 1;
let isFroward = true;
const id = setInterval(() => {
  heading.textContent = text.substring(0, lastText);
  if (isFroward) {
    lastText++;
  } else {
    lastText--;
  }
  //   console.log(lastText);
  if (lastText > text.length + 5) {
    isFroward = false;
  }
  if (lastText < 0) {
    isFroward = text;
  }
}, 100);

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
