// Menu Mobile
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Dados para a galeria de ambiente
const ambienteImagens = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5", 
    "https://images.unsplash.com/photo-1544148103-0773bf10d330",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    "https://images.unsplash.com/photo-1544148103-0773bf10d330"
];

// Dados dos Pratos
const pratos = [
    {
        nome: "Bacalhau à Brás",
        imagem: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
        descricao: "Bacalhau desfiado com batata palha, ovos e azeitonas",
        ingredientes: [
            "Bacalhau desfiado",
            "Batata palha",
            "Ovos",
            "Azeitonas",
            "Cebola",
            "Azeite"
        ]
    },
    {
        nome: "Francesinha",
        imagem: "https://images.unsplash.com/photo-1686435382940-53cd7e5d27de?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descricao: "Sanduíche com várias camadas de carne e queijo, coberta com molho especial",
        ingredientes: [
            "Pão",
            "Bife",
            "Linguiça",
            "Fiambre",
            "Queijo",
            "Molho especial"
        ]
    },
    {
        nome: "Arroz de Pato",
        imagem: "https://images.unsplash.com/photo-1733414717515-d997dafb7341?q=80&w=1554&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descricao: "Arroz cozido com pato, chouriço e ervas aromáticas",
        ingredientes: [
            "Pato",
            "Arroz",
            "Chouriço",
            "Cebola",
            "Alho",
            "Ervas aromáticas"
        ]
    },
    {
        nome: "Pastéis de Nata",
        imagem: "https://images.unsplash.com/photo-1687182845783-dc091d25bcc9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descricao: "Deliciosos pastéis de nata portugueses",
        ingredientes: [
            "Massa folhada",
            "Creme de ovos",
            "Açúcar",
            "Canela"
        ]
    }
];

// Dados das Avaliações
const avaliacoes = [
    {
        nome: "João Silva",
        estrelas: 5,
        texto: "Melhor bacalhau à Brás que já comi em Lisboa! Ambiente acolhedor e serviço excelente.",
        imagem: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        nome: "Ana Rodrigues",
        estrelas: 4,
        texto: "Adorei a francesinha, mas o molho poderia ser um pouco mais picante. Voltarei com certeza!",
        imagem: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        nome: "Carlos Mota",
        estrelas: 5,
        texto: "O arroz de pato é divino! E os pastéis de nata são os melhores da cidade. Recomendo!",
        imagem: "https://randomuser.me/api/portraits/men/75.jpg"
    }
];

// Função para gerar estrelas
function gerarEstrelas(qtd) {
    return '★'.repeat(qtd) + '☆'.repeat(5 - qtd);
}

// Galeria de Ambiente
const galleryGrid = document.querySelector('.gallery-grid');
ambienteImagens.forEach(imgUrl => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `<img src="${imgUrl}" alt="Ambiente do Restaurante">`;
    galleryGrid.appendChild(galleryItem);
});

// Cards de Pratos
const menuCards = document.querySelector('.menu-cards');
pratos.forEach(prato => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.innerHTML = `
        <div class="menu-card-front">
            <img src="${prato.imagem}" alt="${prato.nome}">
            <h3>${prato.nome}</h3>
            <p>${prato.descricao}</p>
        </div>
        <div class="menu-card-back">
            <h3>${prato.nome}</h3>
            <p>Ingredientes:</p>
            <ul>${prato.ingredientes.map(ing => `<li>${ing}</li>`).join('')}</ul>
        </div>
    `;
    menuCards.appendChild(card);
});

// Carrossel de Avaliações
const reviewsCarousel = document.querySelector('.reviews-carousel');
const carouselNav = document.createElement('div');
carouselNav.className = 'carousel-nav';

let currentSlide = 0;

// Criar slides e dots só se ainda não existirem
if (!document.querySelector('.review-slide')) {
    avaliacoes.forEach((avaliacao, index) => {
        const slide = document.createElement('div');
        slide.className = `review-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <img src="${avaliacao.imagem}" alt="${avaliacao.nome}" style="width:80px;height:80px;border-radius:50%;object-fit:cover;margin-bottom:1rem;">
            <div class="review-stars">${gerarEstrelas(avaliacao.estrelas)}</div>
            <p class="review-text">"${avaliacao.texto}"</p>
            <p class="review-author">- ${avaliacao.nome}</p>
        `;
        reviewsCarousel.appendChild(slide);

        const dot = document.createElement('div');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => showSlide(index));
        carouselNav.appendChild(dot);
    });

    reviewsCarousel.appendChild(carouselNav);
}

// Função para mostrar slides
function showSlide(index) {
    const slides = document.querySelectorAll('.review-slide');
    const dots = document.querySelectorAll('.carousel-dot');

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Auto slide
setInterval(() => showSlide(currentSlide + 1), 5000);

// Efeito 3D Hero Image
const heroImage = document.querySelector('.image-3d');
document.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    heroImage.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
document.querySelector('.hero-image').addEventListener('mouseleave', () => {
    heroImage.style.transform = 'rotateY(15deg) rotateX(10deg)';
});

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            burger.classList.remove('toggle');
        }
    });
});
