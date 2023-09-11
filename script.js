// script.js

// Função para abrir uma conversa no WhatsApp
function openWhatsApp(whatsappNumber) {
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}`);
}

// Função para exibir informações do sabor
function showSaborInfo(title, price, description, whatsapp) {
    const infoTitle = document.querySelector("#info-title h2");
    const infoPrice = document.querySelector("#info-price p");
    const infoDescription = document.querySelector("#info-description p");
    const whatsappButton = document.querySelector("#whatsapp-button");

    infoTitle.textContent = title;
    infoPrice.textContent = `Preço: ${price}`;
    infoDescription.textContent = description;

    // Adiciona o evento de clique ao botão do WhatsApp
    whatsappButton.addEventListener("click", function () {
        openWhatsApp(whatsapp);
    });

    const menuInfo = document.querySelector("#menu-info");
    menuInfo.style.display = "block";
}

// Função para fechar a janela de informações
function hideInfo() {
    const menuInfo = document.querySelector("#menu-info");
    menuInfo.style.display = "none";
}

// Event listeners para cada sabor
document.querySelector("#sabor-ameixa").addEventListener("click", function () {
    showSaborInfo("Ameixa com Doce de Leite", "R$60", "Uma combinação celestial que agrada a todos os paladares.", "SEU-NÚMERO-DE-WHATSAPP-AQUI");
});

document.querySelector("#sabor-ninho-abacaxi").addEventListener("click", function () {
    showSaborInfo("Ninho com Abacaxi", "R$60", "O Ninho com Abacaxi é uma festa de texturas e sabores.", "SEU-NÚMERO-DE-WHATSAPP-AQUI");
});

document.querySelector("#sabor-kitkat").addEventListener("click", function () {
    showSaborInfo("Kit Kat", "Preço: Sob consulta", "Se você é fã de Kit Kat, este bolo é para você.", "SEU-NÚMERO-DE-WHATSAPP-AQUI");
});

<!-- Inclua a biblioteca jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script>
$(document).ready(function() {
    $(".menu-toggle").click(function() {
        $(".menu-list").slideToggle(); // Exibe/oculta o menu
    });
});
</script>
