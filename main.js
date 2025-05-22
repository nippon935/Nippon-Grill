window.addEventListener("DOMContentLoaded", () => {

  document.getElementById("about").addEventListener("click", () => {
    document.getElementById("about-sec").scrollIntoView({ behavior: "smooth" });
  });


  document.getElementById("specials").addEventListener("click", () => {
    document.getElementById("special-sec").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("gallery").addEventListener("click", () => {
    document.getElementById("gallery-sec").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("contact-location").addEventListener("click", () => {
    document.getElementById("contact-sec").scrollIntoView({ behavior: "smooth" });
  });
});



  