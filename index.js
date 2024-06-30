document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-item a');
    const sections = document.querySelectorAll('section'); // Supondo que suas seções tenham a tag <section>

    function changeActiveLink() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('nav-add'));
        navLinks[index].classList.add('nav-add');
    }

    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);
});


function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}


window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navItems = document.querySelectorAll('.nav-item a');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    // Fechar o menu ao clicar em um item
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
});