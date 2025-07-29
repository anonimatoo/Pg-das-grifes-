document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-whatsapp');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const mensagem = document.getElementById('mensagem').value;

            // WhatsApp number
            const whatsappNumber = '5513974173380';

            // Construct the message
            const whatsappMessage = `Olá! Tenho interesse nos produtos PG DAS GRIFE'S.

*Nome:* ${nome}
*E-mail:* ${email}
*Telefone:* ${telefone}
*Mensagem:* ${mensagem}
            `;

            // Encode the message for the URL
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // Create the WhatsApp URL
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Redirect to WhatsApp
            window.open(whatsappUrl, '_blank');
        });
    }
});

