document.addEventListener("DOMContentLoaded",function() {
    const navbar = document.getElementById("navbar");
    const navLinks = navbar.getElementsByTagName("a");

    for (let i = 0; i < navLinks.length;i++){
        navLinks[i].addEventListener("click", function(event){
            event.preventDefault();
            const targatePage = event.target.getAttribute("herf");
            navigateToPage(targatePage);
        });
    }
});

function navigateToPage(page){
    console.log("Navigating to", page);
}
