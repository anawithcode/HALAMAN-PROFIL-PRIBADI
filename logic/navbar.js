const links = document.querySelectorAll(".navbar a");

links.forEach(link => {
    link.addEventListener("click", () => {

        // Hapus active dari semua link
        links.forEach(item => item.classList.remove("active"));

        // Tambahkan active ke link yang diklik
        link.classList.add("active");

    });
});