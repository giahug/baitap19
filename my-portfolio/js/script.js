document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio của Lu Gia Hưng đã load xong!');

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Cảm ơn bạn đã gửi lời nhắn!');
            contactForm.reset();
        });
    }
});
