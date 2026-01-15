function adjustLayout() {
    let width = window.innerWidth;
    
    let headshot = document.getElementById("headshot-image");
    let contact = document.getElementById("contact-me");
    let mainContent = document.querySelector(".main-content");
    
    if (width < 900) {
        headshot.style.display = "none";
        contact.style.display = "none";
        mainContent.style.right = "20px";
    } else {
        headshot.style.display = "block";
        contact.style.display = "block";
        mainContent.style.right = "300px"
    }
}
adjustLayout();
window.addEventListener("resize", adjustLayout);

function gotoSection(text,title) {
    let mainContentTextElement = document.getElementById("main-content-text");
    let mainContentTitleElement = document.getElementById("main-content-title");
    
    mainContentTextElement.innerHTML = mainContentTextElement.dataset[text];
    mainContentTitleElement.innerHTML = mainContentTitleElement.dataset[title];
}




