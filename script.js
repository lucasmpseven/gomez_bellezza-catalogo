// Configuração das páginas do catálogo
const pages = {
  home: {
    title: "GOMEZ",
    subtitle: "Perfumaria Exclusiva",
    buttons: [
      {
        label: "Compre no Site Oficial",
        icon: "🛍️",
        action: "site",
      },
      {
        label: "Grupo VIP",
        icon: "👑",
        action: "vip",
      },
      {
        label: "Atendimento ao Cliente",
        icon: "💬",
        action: "atendimento",
      },
      {
        label: "Referências Olfativas",
        icon: "🌸",
        action: "referencias",
      },
      {
        label: "Instagram",
        icon: "📷",
        action: "external",
        url: "https://instagram.com/gomezbeleza",
      },
      {
        label: "Descubra seu Perfume Ideal",
        icon: "✨",
        action: "quiz",
      },
      {
        label: "YouTube",
        icon: "▶️",
        action: "external",
        url: "https://youtube.com/@gomezbeleza",
      },
      {
        label: "TikTok",
        icon: "🎵",
        action: "external",
        url: "https://tiktok.com/@gomezbeleza",
      },
    ],
  },
  site: {
    title: "Site Oficial",
    description: "Visite nossa loja online e conheça toda a coleção de fragrâncias exclusivas GOMEZ BELEZA.",
    content: `
            <div style="text-align: center;">
                <p style="margin-bottom: 24px; font-size: 1.1rem; line-height: 1.8;">
                    Explore nossa coleção completa de perfumes premium, com entrega para todo o Brasil.
                </p>
                <a href="https://gomezbeleza.com.br" target="_blank" rel="noopener noreferrer" class="action-btn">
                    🛍️ Visitar Loja Online
                </a>
            </div>
        `,
  },
  vip: {
    title: "Grupo VIP",
    description: "Entre para o nosso grupo exclusivo e receba ofertas especiais, lançamentos antecipados e muito mais!",
    content: `
            <h3 style="font-size: 1.3rem; margin-bottom: 20px; color: var(--text-primary);">Benefícios Exclusivos:</h3>
            <ul class="benefits-list">
                <li>Descontos especiais em todas as compras</li>
                <li>Acesso antecipado a lançamentos</li>
                <li>Ofertas exclusivas para membros VIP</li>
                <li>Amostras grátis em compras selecionadas</li>
                <li>Consultoria personalizada de fragrâncias</li>
                <li>Frete grátis em compras acima de R$ 299</li>
            </ul>
            <div style="text-align: center;">
                <a href="https://wa.me/5511999999999?text=Olá! Gostaria de entrar no Grupo VIP" target="_blank" rel="noopener noreferrer" class="action-btn">
                    👑 Entrar no Grupo VIP
                </a>
            </div>
        `,
  },
  atendimento: {
    title: "Atendimento ao Cliente",
    description:
      "Estamos aqui para ajudar você! Entre em contato conosco para dúvidas, suporte ou informações sobre produtos.",
    content: `
            <div style="text-align: center;">
                <p style="margin-bottom: 16px; font-size: 1rem;">
                    <strong>Horário de Atendimento:</strong><br>
                    Segunda a Sexta: 9h às 18h<br>
                    Sábado: 9h às 14h
                </p>
                <p style="margin-bottom: 24px; font-size: 1rem;">
                    <strong>Tempo médio de resposta:</strong> 5 minutos
                </p>
                <a href="https://wa.me/5511999999999?text=Olá! Preciso de atendimento" target="_blank" rel="noopener noreferrer" class="action-btn">
                    💬 Falar com Atendente
                </a>
                <p style="margin-top: 24px; font-size: 0.9rem; color: var(--text-secondary);">
                    📧 Email: contato@gomezbeleza.com.br<br>
                    📱 WhatsApp: (11) 99999-9999
                </p>
            </div>
        `,
  },
  referencias: {
    title: "Referências Olfativas",
    description: "Conheça nossas fragrâncias inspiradas nos melhores perfumes do mundo.",
    content: `
            <div class="product-card">
                <div class="product-name">🌹 Rosa Imperial</div>
                <div class="product-notes"><strong>Notas de topo:</strong> Rosa Búlgara, Bergamota</div>
                <div class="product-notes"><strong>Notas de coração:</strong> Jasmim, Lírio</div>
                <div class="product-notes"><strong>Notas de fundo:</strong> Âmbar, Almíscar</div>
                <div class="product-notes" style="margin-top: 8px; color: var(--text-primary);"><em>Inspirado em: Lancôme La Vie Est Belle</em></div>
            </div>
            
            <div class="product-card">
                <div class="product-name">🌊 Oceano Noir</div>
                <div class="product-notes"><strong>Notas de topo:</strong> Grapefruit, Bergamota</div>
                <div class="product-notes"><strong>Notas de coração:</strong> Cedro, Vetiver</div>
                <div class="product-notes"><strong>Notas de fundo:</strong> Âmbar, Patchouli</div>
                <div class="product-notes" style="margin-top: 8px; color: var(--text-primary);"><em>Inspirado em: Dior Sauvage</em></div>
            </div>
            
            <div class="product-card">
                <div class="product-name">✨ Velvet Luxe</div>
                <div class="product-notes"><strong>Notas de topo:</strong> Baunilha, Flor de Laranjeira</div>
                <div class="product-notes"><strong>Notas de coração:</strong> Tuberosa, Ylang-Ylang</div>
                <div class="product-notes"><strong>Notas de fundo:</strong> Sândalo, Tonka</div>
                <div class="product-notes" style="margin-top: 8px; color: var(--text-primary);"><em>Inspirado em: Tom Ford Black Orchid</em></div>
            </div>
            
            <div class="product-card">
                <div class="product-name">🍋 Citrus Elegance</div>
                <div class="product-notes"><strong>Notas de topo:</strong> Limão Siciliano, Mandarina</div>
                <div class="product-notes"><strong>Notas de coração:</strong> Neroli, Lavanda</div>
                <div class="product-notes"><strong>Notas de fundo:</strong> Vetiver, Musgo</div>
                <div class="product-notes" style="margin-top: 8px; color: var(--text-primary);"><em>Inspirado em: Acqua di Parma Colonia</em></div>
            </div>
            
            <div class="product-card">
                <div class="product-name">🌙 Musk Noir</div>
                <div class="product-notes"><strong>Notas de topo:</strong> Pimenta Rosa, Cardamomo</div>
                <div class="product-notes"><strong>Notas de coração:</strong> Íris, Violeta</div>
                <div class="product-notes"><strong>Notas de fundo:</strong> Almíscar, Couro</div>
                <div class="product-notes" style="margin-top: 8px; color: var(--text-primary);"><em>Inspirado em: Narciso Rodriguez For Her</em></div>
            </div>
            
            <div style="text-align: center; margin-top: 24px;">
                <a href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre as fragrâncias" target="_blank" rel="noopener noreferrer" class="action-btn">
                    💬 Falar com Especialista
                </a>
            </div>
        `,
  },
}

// Estado atual da aplicação
let currentPage = "home"
let quizAnswers = []

// Carrega a página inicial ao carregar o site
document.addEventListener("DOMContentLoaded", () => {
  loadPage("home")
})

// Função principal para carregar páginas
function loadPage(pageName) {
  const app = document.getElementById("app")
  currentPage = pageName

  if (pageName === "home") {
    renderHome()
  } else if (pageName === "quiz") {
    renderQuiz()
  } else if (pages[pageName]) {
    renderContentPage(pageName)
  }
}

// Renderiza a página inicial
function renderHome() {
  const app = document.getElementById("app")
  const page = pages.home

  const html = `
        <div class="header">
            <img src="/images/logo-20gomez.jpeg" alt="GOMEZ Logo" class="logo">
            <h1 class="title">${page.title}</h1>
            <p class="subtitle">${page.subtitle}</p>
        </div>
        <div class="nav-buttons">
            ${page.buttons
              .map((btn, index) => {
                if (btn.action === "external") {
                  return `
                        <a href="${btn.url}" target="_blank" rel="noopener noreferrer" class="nav-btn">
                            <span>${btn.icon}</span>
                            <span>${btn.label}</span>
                        </a>
                    `
                } else {
                  return `
                        <button class="nav-btn" onclick="loadPage('${btn.action}')">
                            <span>${btn.icon}</span>
                            <span>${btn.label}</span>
                        </button>
                    `
                }
              })
              .join("")}
        </div>
    `

  app.innerHTML = html
}

// Renderiza páginas de conteúdo
function renderContentPage(pageName) {
  const app = document.getElementById("app")
  const page = pages[pageName]

  const html = `
        <div class="content-page">
            <button class="back-btn" onclick="loadPage('home')">
                <span>←</span>
                <span>Voltar</span>
            </button>
            <div class="content-header">
                <h2 class="content-title">${page.title}</h2>
                <p class="content-description">${page.description}</p>
            </div>
            <div class="content-body">
                ${page.content}
            </div>
        </div>
    `

  app.innerHTML = html
}

// Renderiza o quiz de perfume ideal
function renderQuiz() {
  const app = document.getElementById("app")
  quizAnswers = []

  const questions = [
    {
      question: "Qual é a sua ocasião favorita para usar perfume?",
      options: [
        { text: "Dia a dia, trabalho", value: "fresh" },
        { text: "Eventos especiais, festas", value: "intense" },
        { text: "Momentos românticos", value: "floral" },
        { text: "Finais de semana relaxantes", value: "woody" },
      ],
    },
    {
      question: "Que tipo de aroma você prefere?",
      options: [
        { text: "Fresco e cítrico", value: "fresh" },
        { text: "Doce e envolvente", value: "floral" },
        { text: "Amadeirado e sofisticado", value: "woody" },
        { text: "Intenso e marcante", value: "intense" },
      ],
    },
    {
      question: "Como você quer que as pessoas lembrem de você?",
      options: [
        { text: "Elegante e discreto", value: "fresh" },
        { text: "Marcante e inesquecível", value: "intense" },
        { text: "Romântico e encantador", value: "floral" },
        { text: "Sofisticado e misterioso", value: "woody" },
      ],
    },
  ]

  const html = `
        <div class="content-page">
            <button class="back-btn" onclick="loadPage('home')">
                <span>←</span>
                <span>Voltar</span>
            </button>
            <div class="content-header">
                <h2 class="content-title">Descubra seu Perfume Ideal</h2>
                <p class="content-description">Responda 3 perguntas simples e encontre a fragrância perfeita para você!</p>
            </div>
            <div class="content-body">
                <div class="quiz-container" id="quiz-container">
                    ${questions
                      .map(
                        (q, qIndex) => `
                        <div class="question-container">
                            <div class="question-title">${qIndex + 1}. ${q.question}</div>
                            <div class="quiz-options">
                                ${q.options
                                  .map(
                                    (opt, oIndex) => `
                                    <div class="quiz-option" onclick="selectOption(${qIndex}, '${opt.value}', this)">
                                        ${opt.text}
                                    </div>
                                `,
                                  )
                                  .join("")}
                            </div>
                        </div>
                    `,
                      )
                      .join("")}
                    <button class="quiz-btn" id="submit-quiz" onclick="submitQuiz()" disabled>
                        Ver Resultado ✨
                    </button>
                    <div id="quiz-result"></div>
                </div>
            </div>
        </div>
    `

  app.innerHTML = html
}

// Seleciona uma opção do quiz
function selectOption(questionIndex, value, element) {
  // Remove seleção anterior da mesma pergunta
  const container = element.parentElement
  container.querySelectorAll(".quiz-option").forEach((opt) => {
    opt.classList.remove("selected")
  })

  // Adiciona seleção atual
  element.classList.add("selected")

  // Armazena resposta
  quizAnswers[questionIndex] = value

  // Habilita botão de submit se todas perguntas foram respondidas
  if (quizAnswers.filter((a) => a).length === 3) {
    document.getElementById("submit-quiz").disabled = false
  }
}

// Submete o quiz e mostra resultado
function submitQuiz() {
  // Conta as respostas
  const counts = quizAnswers.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1
    return acc
  }, {})

  // Encontra o tipo mais frequente
  const mostFrequent = Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b))

  // Define resultado baseado no tipo
  const results = {
    fresh: {
      name: "Citrus Elegance",
      description:
        "Perfeito para você! Uma fragrância fresca e sofisticada, ideal para o dia a dia. Com notas cítricas vibrantes e um toque elegante de lavanda.",
      notes: "Limão Siciliano • Neroli • Vetiver",
    },
    floral: {
      name: "Rosa Imperial",
      description:
        "Sua fragrância perfeita! Um perfume romântico e envolvente, com rosas búlgaras e jasmim. Ideal para momentos especiais e inesquecíveis.",
      notes: "Rosa Búlgara • Jasmim • Âmbar",
    },
    woody: {
      name: "Musk Noir",
      description:
        "Feito para você! Uma fragrância sofisticada e misteriosa, com almíscar sensual e notas amadeiradas. Marcante e inesquecível.",
      notes: "Almíscar • Íris • Couro",
    },
    intense: {
      name: "Velvet Luxe",
      description:
        "Combinação perfeita! Um perfume intenso e luxuoso, com baunilha cremosa e flores brancas. Para quem quer deixar sua marca por onde passa.",
      notes: "Baunilha • Tuberosa • Sândalo",
    },
  }

  const result = results[mostFrequent]

  const resultHtml = `
        <div class="result-box">
            <h3>✨ Seu perfume ideal é:</h3>
            <h2 style="font-size: 1.8rem; margin: 16px 0;">${result.name}</h2>
            <p style="margin-bottom: 12px;">${result.description}</p>
            <p style="font-size: 0.9rem; opacity: 0.9; margin-top: 16px;">
                <strong>Notas principais:</strong><br>${result.notes}
            </p>
        </div>
        <div style="text-align: center;">
            <a href="https://wa.me/5511999999999?text=Olá! Fiz o teste e meu perfume ideal é ${result.name}. Gostaria de saber mais!" 
               target="_blank" rel="noopener noreferrer" class="action-btn">
                💬 Quero Este Perfume
            </a>
        </div>
    `

  document.getElementById("quiz-result").innerHTML = resultHtml
  document.getElementById("submit-quiz").style.display = "none"
}
