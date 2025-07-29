document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('whatsapp-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        const whatsappNumber = '+5513974173380';

        const whatsappMessage = `Olá, PG DAS GRIFE'S!

        Gostaria de entrar em contato.
        
        *Nome:* ${name}
        *E-mail:* ${email}
        *Telefone:* ${phone}
        
        *Mensagem:*
        ${message}
        `;

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappUrl, '_blank');
        
        // Optionally, reset the form after submission
        form.reset();
    });
});

