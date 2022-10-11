// make image big on click
const img = document.getElementById("personal-img");
// Function to increase image size
function resetImg() {
    // Set image size to original
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";
    img.onclick = enlargeImg;
  }
function enlargeImg() {
    // Set image size to 1.5 times original
    img.style.transform = "scale(1.5)";
    // Animation effect
    img.style.transition = "transform 0.25s ease";
    // click it and make it small image
    img.onclick = resetImg;
  }

// insert navbar
fetch("html-parts/nav.html")
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector(".navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem, oldelem);
});

// insert footer
fetch("html-parts/footer.html")
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector(".footer");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem, oldelem);
})

// insert article
fetch("projects/project1.html")
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector(".article");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem, oldelem);
})