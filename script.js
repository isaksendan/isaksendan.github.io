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

    if (sidebarElement.style.width === "230px") {
        sidebarContentElement.style.display = "none";
        sidebarElement.style.width = "30px";
        mainContentElement.style.left = "50px";
        sidebarCollapseButton.innerHTML = "&#12297;";
        sidebarCollapseButtonElement.style.left = "5px";
    } else {
        sidebarContentElement.style.display = "block";
        sidebarElement.style.width = "230px";
        mainContentElement.style.left = "250px";
        sidebarCollapseButton.innerHTML = "&#12296;";
        sidebarCollapseButtonElement.style.left = "195px";
    }
}

function resizeSidebarOnWindow() {
    let width = window.innerWidth;

    let sidebarElement = document.getElementById("sidebar");
    let sidebarContentElement = document.getElementById("sidebar-content");
    let sidebarCollapseButtonElement = document.querySelector(".sidebar-collapse-button");
    let mainContentElement = document.querySelector(".main-content");
    let sidebarCollapseButton = document.querySelector(".sidebar-collapse-button button");

    if (width > 750) {
        sidebarContentElement.style.display = "block";
        sidebarElement.style.width = "230px";
        mainContentElement.style.left = "250px";
        sidebarCollapseButton.innerHTML = "&#12296;";
        sidebarCollapseButtonElement.style.left = "195px";
    } else {
        sidebarContentElement.style.display = "none";
        sidebarElement.style.width = "30px";
        mainContentElement.style.left = "50px";
        sidebarCollapseButton.innerHTML = "&#12297;";
        sidebarCollapseButtonElement.style.left = "5px";
    }
}
window.addEventListener("resize", resizeSidebarOnWindow)





