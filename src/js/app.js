document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll(".menuCategories a");
    const categories = document.querySelectorAll(".category");

    const albums = document.getElementById("albums");
    const members = document.getElementById("members");
    albums.style.display = "grid";
    members.style.display = "none";

    menuLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const categoryToShow = this.getAttribute("data-category");
            const categoryToHide = categoryToShow === "albums" ? "members" : "albums";

            const showCategory = document.getElementById(categoryToShow);
            const hideCategory = document.getElementById(categoryToHide);

            hideCategory.classList.add("fade-out");

            setTimeout(() => {
                hideCategory.style.display = "none";
                hideCategory.classList.remove("fade-out");

                showCategory.style.display = categoryToShow === "albums" ? "grid" : "flex";
                showCategory.classList.add("fade-in");

                setTimeout(() => {
                    showCategory.classList.remove("fade-in");
                }, 500);
            }, 500);
        });
    });
});