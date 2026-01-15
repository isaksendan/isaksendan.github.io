function adjustLayout() {
    let width = window.innerWidth;
    
    let headshot = document.getElementById("headshot-image");
    let contact = document.getElementById("contact-me");
    let sidebarEmail = document.getElementById("sidebar-email");
    
    if (width < 900) {
        headshot.style.display = "none";
        contact.style.display = "none";
        mainContent.style.right = "20px";
        sidebarEmail.style.display = "block";
    } else {
        headshot.style.display = "block";
        contact.style.display = "block";
        sidebarEmail.style.display = "none";
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

function toggleSidebar() {
    let sidebarElement = document.getElementById("sidebar");
    let sidebarContentElement = document.getElementById("sidebar-content");
    let sidebarCollapseButtonElement = document.querySelector(".sidebar-collapse-button");
    let mainContentElement = document.querySelector(".main-content");
    let sidebarCollapseButton = document.querySelector(".sidebar-collapse-button button");

    if (sidebarElement.style.width >= "200px") {
        sidebarContentElement.style.display = "none";
        sidebarElement.style.width = "50px";
        mainContentElement.style.left = "70px";
        sidebarCollapseButton.textContent = "e";
        sidebarCollapseButtonElement.style.left = "20px";
    } else {
        sidebarContentElement.style.display = "block";
        sidebarElement.style.width = "230px";
        mainContentElement.style.left = "250px";
        sidebarCollapseButton.innerHTML = "<img src='images/left_arrow_button.png' width='10'>";
        sidebarCollapseButtonElement.style.left = "200px";
    }
}





