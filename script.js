const email = "uniquesedit0@gmail.com";

document.querySelector(".email").addEventListener("click", () => {
  navigator.clipboard.writeText(email)
    .then(() => alert("Email copied!"))
    .catch(err => console.error(err));
});


 const socialLinks = document.querySelectorAll("#social-links .social-link");

  socialLinks.forEach(linkDiv => {
    linkDiv.addEventListener("click", (e) => {
      e.preventDefault(); // prevent default link behavior

      // Get the anchor tag inside
      const anchor = linkDiv.querySelector("a");
      const url = anchor.href;

      // Get the class name of the div (like 'instagram', 'email', etc.)
      const socialClass = linkDiv.classList[1];

      // Handle based on social media type
      switch(socialClass) {
        case "portfolio":
        case "instagram":
        case "twitter":
        case "threads":
        case "reddit":
        case "linkedin":
          window.open(url, "_blank"); // open link in new tab
          break;

        case "email":
          window.location.href = url; // open mail client
          break;

        default:
          console.log("Unknown social link:", socialClass);
      }

      // Optional: Animation on click
      linkDiv.style.transform = "scale(0.95)";
      setTimeout(() => {
        linkDiv.style.transform = "scale(1)";
      }, 150);
    });
  });