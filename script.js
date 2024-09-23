// I am trying to use the basic javascript i can remember of for the portfolio\\
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// dont know if it will work by the way\\
document.querySelector('.contact-button').addEventListener('click', () => {
    alert('Thank you for reaching out!');
});
