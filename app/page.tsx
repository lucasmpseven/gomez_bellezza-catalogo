"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronRight, Instagram, Mail, Phone, X, ArrowUp } from "lucide-react"

export default function Home() {
  const [currentView, setCurrentView] = useState("home")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigateToView = (view: string) => {
    setCurrentView(view)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (currentView === "landing") {
    return <LandingPageView onBack={() => navigateToView("home")} />
  }

  if (currentView === "perfumes") {
    return <PerfumesView onBack={() => navigateToView("home")} />
  }

  if (currentView === "inspiracoes") {
    return <InspiracoesView onBack={() => navigateToView("home")} />
  }

  if (currentView === "linhas") {
    return <LinhasView onBack={() => navigateToView("home")} />
  }

  if (currentView === "quiz") {
    return <QuizView onBack={() => navigateToView("home")} />
  }

  if (currentView === "contato") {
    return <ContatoView onBack={() => navigateToView("home")} />
  }

  return (
    <main className={`min-h-screen bg-background transition-opacity duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="w-full max-w-md mx-auto space-y-8">
          <div className="flex justify-center mb-8">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg ring-2 ring-border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20gomez-rsMtVmAHTdlzPga3s7zbhszXbAiUCF.jpeg"
                alt="Gomez Bellezza"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center space-y-3">
            <h1 className="text-2xl md:text-3xl font-serif text-foreground tracking-wide">Gomez Bellezza</h1>
            <p className="text-base md:text-lg text-foreground/70 font-light italic leading-relaxed">
              Perfumes que deixam memorias no ar
            </p>
            <div className="w-12 h-px bg-accent mx-auto" />
            <div className="pt-2 space-y-1">
              <p className="text-sm text-muted-foreground">Alta perfumaria artesanal</p>
              <p className="text-sm text-muted-foreground">Exclusividade em cada fragrancia</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-3 pt-4">
            <NavButton onClick={() => navigateToView("landing")} icon={<ChevronRight className="w-5 h-5" />}>
              Conheca Nossa Historia
            </NavButton>

            <NavButton onClick={() => navigateToView("perfumes")} icon={<ChevronRight className="w-5 h-5" />}>
              Catalogo de Perfumes
            </NavButton>

            <NavButton onClick={() => navigateToView("inspiracoes")} icon={<ChevronRight className="w-5 h-5" />}>
              Inspiracoes Olfativas
            </NavButton>

            <NavButton onClick={() => navigateToView("linhas")} icon={<ChevronRight className="w-5 h-5" />}>
              Nossas Linhas
            </NavButton>

            <NavButton onClick={() => navigateToView("quiz")} icon={<ChevronRight className="w-5 h-5" />}>
              Descubra Seu Perfume Ideal
            </NavButton>

            <NavButton onClick={() => navigateToView("contato")} icon={<ChevronRight className="w-5 h-5" />}>
              Atendimento e Contato
            </NavButton>

            <NavButton
              href="https://instagram.com/gomez_bellezza"
              icon={<Instagram className="w-5 h-5" />}
              variant="secondary"
            >
              Instagram
            </NavButton>
          </nav>

          {/* Footer */}
          <footer className="pt-8 text-center">
            <p className="text-xs text-muted-foreground">2025 Gomez Bellezza. Todos os direitos reservados.</p>
          </footer>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  )
}

/* =========================================================================
   INSPIRACOES OLFATIVAS VIEW - New section with branded perfume inspirations
   ========================================================================= */
function InspiracoesView({ onBack }: { onBack: () => void }) {
  const inspiracoes = [
    {
      name: "212 VIP",
      brand: "Carolina Herrera",
      family: "Floral Frutado Gourmand",
      notes: "Maracuja, rum, almiscar branco, baunilha, flores brancas",
      shortDescription: "Sofisticado e moderno, frutado com toque doce e elegante.",
      fullDescription:
        "Uma fragrancia que captura a essencia da exclusividade e da vida noturna sofisticada. A combinacao ousada de maracuja exotico com o calor do rum cria uma abertura intrigante que evolui para um coracao de flores brancas delicadas. O fundo de almiscar e baunilha confere sensualidade e fixacao prolongada, tornando-a perfeita para quem deseja se destacar com elegancia discreta e charme irresistivel.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/212%20vip-ylZvWoabBOJENGLcEDESLRDUF44B4x.jpeg",
      tag: "Voce esta na lista.",
    },
    {
      name: "212 VIP Black",
      brand: "Carolina Herrera",
      family: "Amadeirado Especiado",
      notes: "Anis estrelado, cardamomo, lavanda, rum, cafe, fava tonka, madeira de gaiac",
      shortDescription: "Marcante e intenso, mistura especiarias com um toque doce envolvente.",
      fullDescription:
        "A versao mais intensa e magnetica da linha 212 VIP. Abre com a energia pulsante do anis estrelado e cardamomo, envolvidos pela frescura aromatica da lavanda. O coracao revela a profundidade do rum e do cafe, criando uma aura de misterio e poder. A base de fava tonka e madeira de gaiac proporciona um rastro quente e viciante que permanece na memoria. Uma fragrancia para quem domina a noite com confianca absoluta.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/212%20vip%20black-jZyCf6b6SAExg6vTJJlkVAff7KiiCc.jpeg",
      tag: "Domine a noite.",
    },
    {
      name: "Scandal",
      brand: "Jean Paul Gaultier",
      family: "Floral Gourmand",
      notes: "Mel, gardenia, flor de laranjeira, caramelo, patchouli",
      shortDescription: "Doce e sofisticado, com mel sensual e flores ricas.",
      fullDescription:
        "Uma declaracao de ousadia e feminilidade em sua forma mais provocante. O mel sensual entrelaca-se com a opulencia da gardenia e a delicadeza da flor de laranjeira, criando um bouquet que e ao mesmo tempo doce e misterioso. As notas de caramelo adicionam uma camada gourmand irresistivel, enquanto o patchouli confere profundidade e fixacao magistral. Uma fragrancia que transforma cada entrada em um acontecimento memoravel.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jean%20paul%20scandal-hU6rrYjGpeCtI3JPbRKOyvxceXgIuY.jpeg",
      tag: "Notas doces que seduzem e encantam.",
    },
    {
      name: "Erba Pura",
      brand: "Xerjoff",
      family: "Citrico Amadeirado",
      notes: "Laranja, limao siciliano, bergamota, frutas brancas, acorde de mel, ambar, baunilha, madeiras claras",
      shortDescription: "Frescor citrico com docura suave e fundo aconchegante.",
      fullDescription:
        "Uma obra-prima da perfumaria italiana de nicho que eleva os citricos a um patamar de luxo absoluto. A explosao inicial de laranja, limao siciliano e bergamota transmite vitalidade e frescor mediterraneo. As frutas brancas e o acorde de mel suavizam a transicao para um fundo aconchegante de ambar, baunilha e madeiras claras. O resultado e uma fragrancia luminosa e envolvente que evoca dias ensolarados na costa italiana, com uma fixacao surpreendente para sua familia olfativa.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/erba%20pura-k8oeS3vQHuX2GTjNzNWqfHPofzmnPc.jpeg",
      tag: "O poder da fruta envolto em luxo.",
    },
    {
      name: "Le Male Le Parfum",
      brand: "Jean Paul Gaultier",
      family: "Fougere Oriental",
      notes: "Menta intensa, lavanda, canela, baunilha cremosa, fava tonka, ambar",
      shortDescription: "Charmoso e profundo, com menta marcante e calor doce de baunilha.",
      fullDescription:
        "A evolucao mais intensa e sedutora do classico Le Male. A menta irrompe com frescor vigoroso, rapidamente abraçada pela lavanda aromatica e pela canela quente. O coracao revela a riqueza da baunilha cremosa, que se funde magistralmente com a fava tonka e o ambar na base. O resultado e uma fragrancia de contraste fascinante entre o frescor gelado e o calor envolvente, criando uma assinatura olfativa que combina charme classico com intensidade contemporanea.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jean%20paul%20gaultier-DPVqCAZO2ZT19SnUCVZi4W50WXBX73.jpeg",
      tag: "The intense new fragrance.",
    },
    {
      name: "CK One",
      brand: "Calvin Klein",
      family: "Citrico Aromatico",
      notes: "Limao, abacaxi, cha verde, jasmim, almiscar",
      shortDescription: "Citrico aromatico e unissex. Refrescante, limpo e versatil.",
      fullDescription:
        "Um marco na historia da perfumaria moderna e o pioneiro absoluto das fragancias unissex. CK One revolucionou o mercado ao provar que frescor e elegancia nao precisam de genero. A abertura vibrante de limao e abacaxi desperta os sentidos com naturalidade, enquanto o cha verde e o jasmim no coracao conferem uma leveza sofisticada. O almiscar na base garante um toque suave e limpo que permanece discretamente na pele. Perfeito para o dia a dia e climas quentes, transmite leveza e naturalidade atemporal.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img1-kJDD4JD5mmBgOKNBSOMHEGQ4Apr5WL.jpeg",
      tag: "Frescor que une estilos.",
    },
    {
      name: "Fantasy",
      brand: "Britney Spears",
      family: "Gourmand Frutado",
      notes: "Kiwi, lichia vermelha, cupcake, chocolate branco, almiscar",
      shortDescription: "Doce, envolvente e divertido. Frutado com acordes gourmand cremosos.",
      fullDescription:
        "Uma fragrancia que transforma a doçura em arte olfativa e celebra a feminilidade jovial e desinibida. A abertura frutada de kiwi e lichia vermelha suculenta cria uma explosao de energia e vitalidade. O coracao gourmand de cupcake e chocolate branco adiciona camadas cremosas e irresistiveis, enquanto o almiscar na base proporciona um toque sensual e envolvente que permanece na memoria. Ideal para quem gosta de perfumes marcantes e adocicados que deixam um rastro de encantamento por onde passam.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img%202-AOlsvcEMEo6FCdcwbmH5wQGLjvsEUl.jpeg",
      tag: "Doce e inesquecivel.",
    },
    {
      name: "Baccarat Rouge 540",
      brand: "Maison Francis Kurkdjian",
      family: "Ambarado Floral",
      notes: "Açafrao, jasmim, ambar cinzento, notas amadeiradas",
      shortDescription: "Luxuoso e marcante, doçura ambarada com sofisticacao absoluta.",
      fullDescription:
        "Considerado uma das maiores criações da perfumaria contemporanea, Baccarat Rouge 540 e sinonimo de luxo e exclusividade. A abertura luminosa de açafrao confere uma calidez especiada unica, enquanto o jasmim adiciona uma faceta floral elegante e refinada. O ambar cinzento e as notas amadeiradas na base criam uma aura envolvente de doçura sofisticada e projecao magnetica. Uma fragrancia que transcende generos e estacoes, marcando presenca com uma assinatura olfativa inconfundivel e de alta fixacao.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img3-Ckg1LMknN4pjBINjycyZXyovWlfBoi.jpeg",
      tag: "O luxo em sua forma mais pura.",
    },
    {
      name: "Light Blue",
      brand: "Dolce & Gabbana",
      family: "Citrico Fresco",
      notes: "Limao siciliano, maça verde, cedro, almiscar",
      shortDescription: "Refrescante e vibrante, a sensacao do verao mediterraneo.",
      fullDescription:
        "Uma ode ao Mediterraneo e a dolce vita italiana. Light Blue captura a essencia dos dias ensolarados na costa de Capri com sua abertura eletrizante de limao siciliano que desperta e revigora. A maça verde adiciona uma camada de frescor crocante e juvenil, enquanto o cedro e o almiscar na base proporcionam uma elegancia discreta e duradoura. Leve, citrico e extremamente agradavel, e a escolha perfeita para quem busca uma fragrancia que transmita vitalidade, alegria e a sofisticacao natural do estilo italiano.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img4-idnaRLlo58jbKTixmbzl2W6xtHxv0n.jpeg",
      tag: "O frescor do Mediterraneo.",
    },
    {
      name: "MYSLF",
      brand: "Yves Saint Laurent",
      family: "Amadeirado Floral",
      notes: "Bergamota, flor de laranjeira, ambroxan, madeiras",
      shortDescription: "Moderno e intenso, frescor citrico com fundo amadeirado envolvente.",
      fullDescription:
        "Uma declaracao de identidade masculina contemporanea assinada pela iconica maison francesa. MYSLF combina a luminosidade fresca da bergamota com a delicadeza sensual da flor de laranjeira, criando uma abertura que equilibra frescor e profundidade. O ambroxan e as madeiras nobres na base conferem uma presenca envolvente e sofisticada que permanece na pele por horas. Versatil e elegante, traduz a ideia de que masculinidade moderna e feita de multiplas facetas, todas igualmente poderosas e refinadas.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img5-X5juobaFfJXwASD7AjCwLR3vjGlSJ2.jpeg",
      tag: "Sou todas as minhas versoes.",
    },
    {
      name: "Chloe Eau de Parfum",
      brand: "Chloe",
      family: "Floral Powdery",
      notes: "Peonia, rosa, lichia, ambar",
      shortDescription: "Delicado e elegante, a rosa de forma moderna e sofisticada.",
      fullDescription:
        "Uma celebracao da feminilidade em sua forma mais pura e refinada. Chloe Eau de Parfum apresenta a peonia e a rosa em um dueto floral que exala naturalidade e charme inato. A lichia adiciona um toque frutado discreto e luminoso, enquanto o ambar na base confere uma calidez acolhedora e uma fixacao elegante. Feminino, leve e naturalmente sofisticado, e o perfume que define a mulher confiante que encontra sua forca na delicadeza e na graciosidade de cada gesto.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img6-L9VFM34iS2KvoKWsZN9pBCs6qrgI4i.jpeg",
      tag: "Graciosidade em cada nota.",
    },
    {
      name: "Invictus",
      brand: "Paco Rabanne",
      family: "Aquatico Amadeirado",
      notes: "Toranja, notas marinhas, louro, ambar cinzento, madeira guaiac",
      shortDescription: "Fresco e energetico, notas aquaticas com fundo adocicado e ambarado.",
      fullDescription:
        "Uma fragrancia que evoca a sensacao de vitoria e conquista com cada borrifada. A toranja abre com uma explosao citrica eletrizante, seguida por notas marinhas que trazem frescor e vitalidade pulsante. O louro no coracao adiciona uma dimensao aromatica nobre, enquanto o ambar cinzento e a madeira guaiac na base criam um fundo adocicado e poderoso. Jovem, competitivo e de otima projecao, Invictus e a escolha definitiva para quem enfrenta cada dia como um desafio a ser vencido com estilo.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/erba%20pura-k8oeS3vQHuX2GTjNzNWqfHPofzmnPc.jpeg",
      tag: "A fragrancia da conquista.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header title="Inspiracoes Olfativas" onBack={onBack} />

      <div className="px-4 md:px-6 py-12 max-w-7xl mx-auto">
        {/* Intro */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <p className="text-xs text-accent uppercase tracking-[0.3em]">12 fragancias de referencia</p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-tight">Grandes Fragancias, Uma Interpretacao Unica</h2>
          <div className="w-16 h-px bg-accent mx-auto" />
          <p className="text-muted-foreground leading-relaxed">
            A Gomez Bellezza se inspira nas maiores criações da perfumaria mundial para desenvolver
            interpretacoes artesanais com identidade propria. Cada composicao preserva a essencia olfativa
            da referencia original, elevada pela qualidade e concentracao premium que e marca registrada da casa.
          </p>
        </div>

        {/* Perfume Cards */}
        <div className="space-y-20">
          {inspiracoes.map((perfume, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[3/4] max-w-md mx-auto rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={perfume.image}
                    alt={perfume.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-5">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">{perfume.brand}</p>
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground">{perfume.name}</h3>
                  <p className="text-sm text-accent uppercase tracking-wider mt-2">{perfume.family}</p>
                </div>

                <div className="w-10 h-px bg-border" />

                <p className="text-foreground/80 leading-relaxed">{perfume.fullDescription}</p>

                <div className="bg-card border border-border rounded-lg p-5 space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider min-w-[80px]">Notas</span>
                    <span className="text-sm text-foreground">{perfume.notes}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider min-w-[80px]">Familia</span>
                    <span className="text-sm text-foreground">{perfume.family}</span>
                  </div>
                </div>

                <p className="text-lg font-serif italic text-foreground/60">{`"${perfume.tag}"`}</p>

                <a
                  href="https://wa.me/5511995384328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-accent-foreground rounded-md font-medium transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Consultar Disponibilidade
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center space-y-6">
          <div className="w-16 h-px bg-accent mx-auto" />
          <p className="text-lg font-serif text-foreground italic">
            {`"Cada fragrancia conta uma historia. Encontre a sua."`}
          </p>
          <a
            href="https://wa.me/5511995384328"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-accent-foreground rounded-md font-medium transition-colors"
          >
            <Phone className="w-5 h-5" />
            Fale com Nosso Consultor
          </a>
        </div>
      </div>

      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  )
}

/* =========================================================================
   LANDING PAGE VIEW
   ========================================================================= */
function LandingPageView({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Gomez Bellezza" onBack={onBack} />

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg ring-2 ring-border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20gomez-rsMtVmAHTdlzPga3s7zbhszXbAiUCF.jpeg"
                alt="Gomez Bellezza"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground tracking-wide">Gomez Bellezza</h1>
          <div className="w-16 h-px bg-accent mx-auto" />
          <p className="text-xl md:text-2xl text-foreground/70 italic font-light leading-relaxed">
            Perfumes que deixam memorias no ar
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Alta perfumaria artesanal com exclusividade em cada fragrancia. Criacoes olfativas que transformam momentos
            em lembrancas inesqueciveis atraves de composicoes sofisticadas e fixacao excepcional.
          </p>
        </div>
      </section>

      {/* Nossa Filosofia */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 text-foreground">Nossa Filosofia</h2>
          <div className="w-12 h-px bg-accent mx-auto mb-12" />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3 p-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-serif text-lg">I</span>
              </div>
              <h3 className="text-xl font-serif text-foreground">Artesanal</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cada perfume e desenvolvido com tecnicas artesanais de alta perfumaria, garantindo qualidade e
                exclusividade em cada frasco.
              </p>
            </div>
            <div className="text-center space-y-3 p-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-serif text-lg">II</span>
              </div>
              <h3 className="text-xl font-serif text-foreground">Fixacao Excepcional</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Concentracoes premium entre EDP e Parfum, proporcionando fixacao de 8 a 20 horas com projecao marcante e
                duradoura.
              </p>
            </div>
            <div className="text-center space-y-3 p-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-serif text-lg">III</span>
              </div>
              <h3 className="text-xl font-serif text-foreground">Ingredientes Nobres</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Utilizamos apenas materias-primas de primeira qualidade, selecionadas criteriosamente para criar
                composicoes sofisticadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teoria da Perfumaria */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 text-foreground">Entendendo a Perfumaria</h2>
          <div className="w-12 h-px bg-accent mx-auto mb-4" />
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            A perfumaria e uma arte milenar que combina ciencia e criatividade. Compreender suas bases fundamentais
            permite apreciar plenamente cada criacao olfativa.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Piramide Olfativa */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-foreground mb-6">Piramide Olfativa</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Notas de Saida (Topo)</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Primeira impressao do perfume. Duram de 15 minutos a 2 horas. Geralmente sao notas citricas, frescas
                    e leves que capturam a atencao imediata.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Notas de Coracao (Corpo)</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    O verdadeiro carater do perfume. Duram de 3 a 5 horas. Florais, especiarias e acordes aromaticos que
                    definem a personalidade da fragrancia.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Notas de Fundo (Base)</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A assinatura duradoura. Permanecem por mais de 5 horas. Madeiras, ambar, musgo e acordes profundos
                    que fixam a fragrancia na pele.
                  </p>
                </div>
              </div>
            </div>

            {/* Familias Olfativas */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-foreground mb-6">Familias Olfativas</h3>
              <div className="space-y-3">
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-1">Floral</h4>
                  <p className="text-xs text-muted-foreground">Rosa, jasmim, lirio. Elegancia atemporal e feminilidade classica.</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-1">Oriental</h4>
                  <p className="text-xs text-muted-foreground">Especiarias, ambar, baunilha. Luxo, opulencia e sensualidade intensa.</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-1">Amadeirado</h4>
                  <p className="text-xs text-muted-foreground">Sandalo, cedro, vetiver. Sofisticacao terrosa e elegancia masculina.</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-1">Aquatico / Fresco</h4>
                  <p className="text-xs text-muted-foreground">Notas marinhas, citricos. Energia, vitalidade e modernidade.</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-1">Gourmand</h4>
                  <p className="text-xs text-muted-foreground">Caramelo, mel, baunilha. Docura envolvente e sensualidade moderna.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Concentracoes */}
          <div className="mt-12 bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-serif text-foreground mb-6 text-center">Concentracoes</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-2">
                <p className="font-semibold text-foreground">Eau de Cologne</p>
                <p className="text-xs text-muted-foreground">2-4% de concentracao</p>
                <p className="text-xs text-muted-foreground">Duracao media: 2h</p>
              </div>
              <div className="text-center space-y-2">
                <p className="font-semibold text-foreground">Eau de Toilette</p>
                <p className="text-xs text-muted-foreground">5-15% de concentracao</p>
                <p className="text-xs text-muted-foreground">Duracao media: 3-5h</p>
              </div>
              <div className="text-center space-y-2">
                <p className="font-semibold text-accent">Eau de Parfum</p>
                <p className="text-xs text-accent">15-20% de concentracao</p>
                <p className="text-xs text-accent">Duracao media: 6-8h</p>
              </div>
              <div className="text-center space-y-2">
                <p className="font-semibold text-accent">Parfum / Extrait</p>
                <p className="text-xs text-accent">20-30% de concentracao</p>
                <p className="text-xs text-accent">Duracao media: 8-24h</p>
              </div>
            </div>
            <div className="w-16 h-px bg-accent mx-auto mt-6 mb-3" />
            <p className="text-center text-sm text-muted-foreground">
              Gomez Bellezza trabalha exclusivamente com concentracoes EDP e Parfum
            </p>
          </div>
        </div>
      </section>

      {/* Catalogo Completo com fotos reais */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 text-foreground">Catalogo de Fragancias</h2>
          <div className="w-12 h-px bg-accent mx-auto mb-4" />
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Seis criacoes olfativas exclusivas, cada uma com personalidade unica e fixacao excepcional.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Vayn's", category: "Especiado Aromatico",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215629-7tY96GYes0QsyBYT94SpfiJ5Wg3owy.jpg",
                description: "Composicao envolvente que celebra a sofisticacao noturna com especiarias afiadas e notas alcoólicas modernas.",
                notes: "Especiarias, Notas Alcoolicas, Toques Modernos", fixation: "12-16 horas",
              },
              {
                name: "Secret Lun's", category: "Floral Amadeirado",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215741-pu33KEWgvRsni50qqUyr843BA4JFgY.jpg",
                description: "Interpretacao majestosa da rosa em sua forma mais poderosa, sustentada por madeiras nobres e especiarias.",
                notes: "Rosa Intensa, Madeiras Nobres, Especiarias", fixation: "14-18 horas",
              },
              {
                name: "Baby", category: "Floral Fresco",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215947-EcjeTeslQzZnvkliRLZMNxdCTKA0IJ.jpg",
                description: "Leveza e sofisticacao em fragrancia atemporal. Bouquet floral refinado com rosa delicada e feminina.",
                notes: "Rosa Delicada, Peonia, Lirio do Vale", fixation: "8-12 horas",
              },
              {
                name: "Olimpic", category: "Floral Salgado",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215339-efo0xVtmgGL0ZA9z0b7BglsEV67HQ5.jpg",
                description: "Fragrancia de contrastes fascinantes. Frescor salgado harmonizado com florais modernos adocicados.",
                notes: "Notas Marinhas, Florais Adocicados, Ambar", fixation: "12-16 horas",
              },
              {
                name: "Eter's", category: "Aquatico Amadeirado",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215055-1nxqMramisAzBkvi6YhpsS0Kl0bbmx.jpg",
                description: "Energia e frescor em composicao dinamica. Vitalidade de notas aquaticas com forca de madeiras aromaticas.",
                notes: "Frescor Marinho, Toranja, Madeiras Vibrantes", fixation: "10-14 horas",
              },
              {
                name: "Adien's", category: "Oriental Especiado",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215518-C0aN0iewr2fA4XMzsXg1PmSZFSH14c.jpg",
                description: "Luxo e ousadia em cada gota. Especiarias marcantes com couro elegante e toques doces envolventes.",
                notes: "Especiarias, Couro, Notas Doces", fixation: "16-20 horas",
              },
            ].map((perfume, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all group">
                <div className="relative h-80 bg-muted overflow-hidden">
                  <Image src={perfume.image} alt={perfume.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-2xl font-serif text-foreground">{perfume.name}</h3>
                    <p className="text-xs text-accent uppercase tracking-wider">{perfume.category}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{perfume.description}</p>
                  <div className="text-xs space-y-1 pt-2 border-t border-border">
                    <p><span className="text-muted-foreground">Notas: </span>{perfume.notes}</p>
                    <p><span className="text-muted-foreground">Fixacao: </span>{perfume.fixation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiracoes Olfativas Preview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 text-foreground">Inspiracoes Olfativas</h2>
          <div className="w-12 h-px bg-accent mx-auto mb-4" />
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            12 interpretacoes artesanais das maiores fragancias da perfumaria mundial, com identidade e concentracao Gomez Bellezza.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "212 VIP", brand: "Carolina Herrera", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/212%20vip-ylZvWoabBOJENGLcEDESLRDUF44B4x.jpeg" },
              { name: "212 VIP Black", brand: "Carolina Herrera", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/212%20vip%20black-jZyCf6b6SAExg6vTJJlkVAff7KiiCc.jpeg" },
              { name: "Scandal", brand: "Jean Paul Gaultier", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jean%20paul%20scandal-hU6rrYjGpeCtI3JPbRKOyvxceXgIuY.jpeg" },
              { name: "Erba Pura", brand: "Xerjoff", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/erba%20pura-k8oeS3vQHuX2GTjNzNWqfHPofzmnPc.jpeg" },
              { name: "Le Male Le Parfum", brand: "Jean Paul Gaultier", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jean%20paul%20gaultier-DPVqCAZO2ZT19SnUCVZi4W50WXBX73.jpeg" },
              { name: "CK One", brand: "Calvin Klein", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img1-kJDD4JD5mmBgOKNBSOMHEGQ4Apr5WL.jpeg" },
              { name: "Fantasy", brand: "Britney Spears", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img%202-AOlsvcEMEo6FCdcwbmH5wQGLjvsEUl.jpeg" },
              { name: "Baccarat Rouge 540", brand: "Maison Francis Kurkdjian", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img3-Ckg1LMknN4pjBINjycyZXyovWlfBoi.jpeg" },
              { name: "Light Blue", brand: "Dolce & Gabbana", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img4-idnaRLlo58jbKTixmbzl2W6xtHxv0n.jpeg" },
              { name: "MYSLF", brand: "Yves Saint Laurent", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img5-X5juobaFfJXwASD7AjCwLR3vjGlSJ2.jpeg" },
              { name: "Chloe EDP", brand: "Chloe", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img6-L9VFM34iS2KvoKWsZN9pBCs6qrgI4i.jpeg" },
              { name: "Invictus", brand: "Paco Rabanne", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/erba%20pura-k8oeS3vQHuX2GTjNzNWqfHPofzmnPc.jpeg" },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-3 group">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
                  <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                </div>
                <div>
                  <h3 className="text-sm font-serif text-foreground">{item.name}</h3>
                  <p className="text-xs text-muted-foreground">{item.brand}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guia de Aplicacao */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 text-foreground">
            Guia de Aplicacao e Cuidados
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-serif text-foreground mb-3">Pontos de Aplicacao</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Aplique nos pontos de pulsacao onde o sangue flui mais proximo a pele:
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Pulsos internos</li>
                <li>Atras das orelhas</li>
                <li>Base do pescoco</li>
                <li>Parte interna dos cotovelos</li>
                <li>Atras dos joelhos</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-serif text-foreground mb-3">Maximizando a Fixacao</h3>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Aplique apos o banho, com a pele ainda umida</li>
                <li>Hidrate bem a pele antes da aplicacao</li>
                <li>Nao esfregue os pulsos apos aplicar</li>
                <li>Borrife a uma distancia de 15-20cm</li>
                <li>Pele oleosa retem fragancias por mais tempo</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-serif text-foreground mb-3">Armazenamento Correto</h3>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Mantenha em local fresco e seco</li>
                <li>Evite exposicao direta ao sol</li>
                <li>Nao armazene no banheiro</li>
                <li>Mantenha o frasco sempre fechado</li>
                <li>Temperatura ideal: 15-20 graus</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-serif text-foreground mb-3">Combinacoes e Camadas</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Para criar assinaturas olfativas unicas, combine fragancias da mesma familia ou crie
                camadas complementares. Comece com notas mais leves e adicione as mais intensas por cima. Evite combinar
                mais de dois perfumes para nao criar confusao olfativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">Entre em Contato</h2>
          <div className="w-12 h-px bg-accent mx-auto" />

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Phone className="w-8 h-8 mx-auto text-accent" />
              <p className="font-semibold text-foreground">WhatsApp</p>
              <a href="https://wa.me/5511995384328" className="text-sm text-muted-foreground hover:text-accent transition-colors">(11) 99538-4328</a>
            </div>
            <div className="space-y-2">
              <Instagram className="w-8 h-8 mx-auto text-accent" />
              <p className="font-semibold text-foreground">Instagram</p>
              <a href="https://instagram.com/gomez_bellezza" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors">@gomez_bellezza</a>
            </div>
            <div className="space-y-2">
              <Mail className="w-8 h-8 mx-auto text-accent" />
              <p className="font-semibold text-foreground">Atendimento</p>
              <p className="text-sm text-muted-foreground">Disponivel 24/7</p>
            </div>
          </div>

          <div className="pt-8">
            <a href="https://wa.me/5511995384328" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-accent hover:bg-accent-hover text-accent-foreground rounded-md font-medium transition-colors text-lg">
              Consultar Disponibilidade
            </a>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Gomez Bellezza - Alta Perfumaria Artesanal
              <br />
              Beleza, cosmeticos e cuidados pessoais
              <br />
              Exclusividade em cada fragrancia
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-border">
        <p className="text-xs text-muted-foreground">2025 Gomez Bellezza. Todos os direitos reservados.</p>
      </footer>

      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  )
}

/* =========================================================================
   PERFUMES VIEW
   ========================================================================= */
function PerfumesView({ onBack }: { onBack: () => void }) {
  const perfumes = [
    {
      name: "Vayn's",
      originalInspiration: "212 VIP Men Black",
      category: "Especiado Aromatico",
      notes: "Especiarias, Notas Alcoolicas, Toques Modernos",
      description: "Uma composicao envolvente que celebra a sofisticacao noturna. Vayn's entrega presenca marcante atraves de especiarias afiadas equilibradas com sutis notas alcoolicas, criando um rastro vibrante e contemporaneo. Ideal para quem busca impacto e personalidade em cada momento.",
      intensity: "Intensa",
      fixation: "12-16 horas",
      occasion: "Noturno, Eventos Especiais",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215629-7tY96GYes0QsyBYT94SpfiJ5Wg3owy.jpg",
    },
    {
      name: "Secret Lun's",
      originalInspiration: "Fakhar Rose",
      category: "Floral Amadeirado",
      notes: "Rosa Intensa, Madeiras Nobres, Especiarias",
      description: "Uma interpretacao majestosa da rosa em sua forma mais poderosa. Secret Lun's apresenta um coracao floral intenso sustentado por madeiras profundas, revelando camadas de sofisticacao e luxo. Elegancia assertiva e presenca memoravel.",
      intensity: "Forte",
      fixation: "14-18 horas",
      occasion: "Versatil, Dia e Noite",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215741-pu33KEWgvRsni50qqUyr843BA4JFgY.jpg",
    },
    {
      name: "Baby",
      originalInspiration: "Chloe",
      category: "Floral Fresco",
      notes: "Rosa Delicada, Peonia, Lirio do Vale",
      description: "A leveza e sofisticacao reunidas em uma fragrancia atemporal. Baby traz um bouquet floral refinado onde a rosa se revela em sua forma mais delicada e feminina. Perfeito para quem valoriza sutileza com personalidade.",
      intensity: "Moderada",
      fixation: "8-12 horas",
      occasion: "Dia a Dia, Eventos Diurnos",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215947-EcjeTeslQzZnvkliRLZMNxdCTKA0IJ.jpg",
    },
    {
      name: "Olimpic",
      originalInspiration: "Olympea",
      category: "Floral Salgado",
      notes: "Notas Marinhas, Florais Adocicados, Ambar",
      description: "Uma fragrancia de contrastes fascinantes que desafia convencoes. Olimpic harmoniza o frescor salgado das notas aquaticas com florais modernos adocicados, criando uma assinatura unica e sofisticada. Feminilidade com forca e determinacao.",
      intensity: "Intensa",
      fixation: "12-16 horas",
      occasion: "Noturno, Sofisticado",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215339-efo0xVtmgGL0ZA9z0b7BglsEV67HQ5.jpg",
    },
    {
      name: "Eter's",
      originalInspiration: "Invictus",
      category: "Aquatico Amadeirado",
      notes: "Frescor Marinho, Toranja, Madeiras Vibrantes",
      description: "Energia e frescor capturados em uma composicao dinamica. Eter's combina a vitalidade de notas aquaticas com a forca de madeiras aromaticas, evocando sensacao de vitoria e conquista. Para homens ativos e confiantes.",
      intensity: "Moderada a Forte",
      fixation: "10-14 horas",
      occasion: "Esportivo, Dia a Dia",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215055-1nxqMramisAzBkvi6YhpsS0Kl0bbmx.jpg",
    },
    {
      name: "Adien's",
      originalInspiration: "One Million",
      category: "Oriental Especiado",
      notes: "Especiarias, Couro, Notas Doces",
      description: "Luxo e ousadia em cada gota. Adien's apresenta uma combinacao irresistivel de especiarias marcantes com couro elegante e toques doces envolventes. Opulencia e confianca extrema, criando um rastro inesquecivel.",
      intensity: "Muito Forte",
      fixation: "16-20 horas",
      occasion: "Noturno, Grande Impacto",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215518-C0aN0iewr2fA4XMzsXg1PmSZFSH14c.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header title="Catalogo de Perfumes" onBack={onBack} />

      <div className="px-4 md:px-6 py-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 max-w-2xl mx-auto space-y-3">
          <p className="text-muted-foreground leading-relaxed">
            Cada fragrancia Gomez Bellezza e uma obra de alta perfumaria artesanal.
          </p>
          <div className="w-12 h-px bg-accent mx-auto" />
          <p className="text-muted-foreground/80 text-sm">
            Criadas com ingredientes nobres e concentracao premium para maxima fixacao e projecao.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perfumes.map((perfume, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all group">
              <div className="relative h-80 bg-muted overflow-hidden">
                <Image src={perfume.image} alt={perfume.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-serif text-foreground mb-1">{perfume.name}</h3>
                  <p className="text-xs text-accent uppercase tracking-wider">{perfume.category}</p>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">{perfume.description}</p>
                <div className="pt-3 border-t border-border space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Notas:</span>
                    <span className="text-foreground font-medium text-right">{perfume.notes}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Fixacao:</span>
                    <span className="text-foreground font-medium">{perfume.fixation}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Intensidade:</span>
                    <span className="text-foreground font-medium">{perfume.intensity}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Ocasiao:</span>
                    <span className="text-foreground font-medium">{perfume.occasion}</span>
                  </div>
                </div>
                <a href="https://wa.me/5511995384328" target="_blank" rel="noopener noreferrer" className="block w-full mt-4 px-4 py-3 bg-accent hover:bg-accent-hover text-accent-foreground text-center rounded-md text-sm font-medium transition-colors">
                  Consultar Disponibilidade
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  )
}

/* =========================================================================
   LINHAS VIEW
   ========================================================================= */
function LinhasView({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Nossas Linhas" onBack={onBack} />

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Linha Feminina */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Linha Feminina</h2>
            <div className="w-12 h-px bg-accent mx-auto" />
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Criacoes elegantes e sofisticadas que celebram a feminilidade em todas as suas facetas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {[
              { name: "Secret Lun's", cat: "Floral Amadeirado", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215741-pu33KEWgvRsni50qqUyr843BA4JFgY.jpg" },
              { name: "Baby", cat: "Floral Fresco", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215947-EcjeTeslQzZnvkliRLZMNxdCTKA0IJ.jpg" },
              { name: "Olimpic", cat: "Floral Salgado", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215339-efo0xVtmgGL0ZA9z0b7BglsEV67HQ5.jpg" },
              { name: "Eter's", cat: "Floral Suave", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215055-1nxqMramisAzBkvi6YhpsS0Kl0bbmx.jpg" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <div className="relative w-48 h-48 rounded-lg overflow-hidden shadow-md">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="text-center space-y-1">
                  <h3 className="text-lg font-serif text-foreground">{item.name}</h3>
                  <p className="text-sm text-accent">{item.cat}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Linha Masculina */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Linha Masculina</h2>
            <div className="w-12 h-px bg-accent mx-auto" />
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Fragancias marcantes e envolventes que expressam sofisticacao e presenca.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "Vayn's", cat: "Especiado Aromatico", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215629-7tY96GYes0QsyBYT94SpfiJ5Wg3owy.jpg" },
              { name: "Adien's", cat: "Oriental Especiado", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215518-C0aN0iewr2fA4XMzsXg1PmSZFSH14c.jpg" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <div className="relative w-48 h-48 rounded-lg overflow-hidden shadow-md">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="text-center space-y-1">
                  <h3 className="text-lg font-serif text-foreground">{item.name}</h3>
                  <p className="text-sm text-accent">{item.cat}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre as Linhas */}
        <section className="bg-card/30 p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-serif text-foreground text-center mb-6">Identidade das Linhas</h3>
          <div className="w-12 h-px bg-accent mx-auto mb-6" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Linha Feminina</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Quatro criacoes que exploram diferentes aspectos da feminilidade: desde a delicadeza floral ate a
                intensidade amadeirada. Fragancias versateis para momentos diurnos e noturnos, sempre com elegancia.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Linha Masculina</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Duas composicoes marcantes que definem presenca: Vayn's com sua personalidade noturna especiada, e
                Adien's com sua opulencia oriental. Fragancias de carater forte e fixacao duradoura.
              </p>
            </div>
          </div>
        </section>
      </div>

      <WhatsAppButton />
    </div>
  )
}

/* =========================================================================
   QUIZ VIEW
   ========================================================================= */
function QuizView({ onBack }: { onBack: () => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)

  const questions = [
    {
      question: "Qual ambiente voce prefere?",
      options: [
        { text: "Noite elegante em festa", value: "especiado" },
        { text: "Jardim florido na primavera", value: "floral" },
        { text: "Costa maritima ao entardecer", value: "aquatico" },
        { text: "Lounge sofisticado", value: "oriental" },
      ],
    },
    {
      question: "Qual palavra te descreve melhor?",
      options: [
        { text: "Vibrante", value: "especiado" },
        { text: "Elegante", value: "floral" },
        { text: "Energetico", value: "aquatico" },
        { text: "Ousado", value: "oriental" },
      ],
    },
    {
      question: "Quando voce usaria seu perfume ideal?",
      options: [
        { text: "Eventos noturnos especiais", value: "especiado" },
        { text: "Dia a dia sofisticado", value: "floral" },
        { text: "Atividades diarias", value: "aquatico" },
        { text: "Grandes ocasioes", value: "oriental" },
      ],
    },
  ]

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const getResult = () => {
    const counts = answers.reduce((acc, answer) => { acc[answer] = (acc[answer] || 0) + 1; return acc }, {} as Record<string, number>)
    const winner = Object.entries(counts).reduce((a, b) => (a[1] > b[1] ? a : b))[0]
    const results = {
      especiado: { perfume: "Vayn's", description: "Uma fragrancia vibrante e moderna, perfeita para quem busca presenca marcante em ambientes noturnos e eventos especiais." },
      floral: { perfume: "Baby ou Secret Lun's", description: "Fragancias florais que equilibram delicadeza e sofisticacao, ideais para quem aprecia elegancia atemporal." },
      aquatico: { perfume: "Eter's", description: "Um perfume energetico com frescor aquatico, perfeito para quem tem estilo de vida ativo e dinamico." },
      oriental: { perfume: "Adien's", description: "Uma composicao luxuosa e ousada com fixacao excepcional, ideal para quem nao teme fazer declaracoes marcantes." },
    }
    return results[winner as keyof typeof results]
  }

  const resetQuiz = () => { setCurrentQuestion(0); setAnswers([]); setShowResult(false) }

  if (showResult) {
    const result = getResult()
    return (
      <div className="min-h-screen bg-background">
        <Header title="Seu Perfume Ideal" onBack={onBack} />
        <div className="px-4 md:px-6 py-8 max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 text-center space-y-6 border border-border shadow-sm">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">{result.perfume}</h2>
            <div className="w-12 h-px bg-accent mx-auto" />
            <p className="text-muted-foreground text-lg leading-relaxed">{result.description}</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button onClick={resetQuiz} className="flex-1 px-6 py-3 bg-card-hover hover:bg-muted text-foreground rounded-md font-medium transition-colors border border-border">Refazer Quiz</button>
              <a href="https://wa.me/5511995384328" target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-3 bg-accent hover:bg-accent-hover text-accent-foreground text-center rounded-md font-medium transition-colors">Entrar em Contato</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header title="Descubra Seu Perfume" onBack={onBack} />
      <div className="px-4 md:px-6 py-8 max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            {questions.map((_, index) => (
              <div key={index} className={`h-1.5 flex-1 rounded-full transition-colors ${index <= currentQuestion ? "bg-accent" : "bg-muted"}`} />
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Pergunta {currentQuestion + 1} de {questions.length}
          </p>
        </div>
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8 text-center">{questions[currentQuestion].question}</h2>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option.value)} className="w-full px-6 py-4 bg-background hover:bg-accent hover:text-accent-foreground text-foreground rounded-md text-left transition-all border border-border">
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* =========================================================================
   CONTATO VIEW
   ========================================================================= */
function ContatoView({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Atendimento e Contato" onBack={onBack} />

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg ring-2 ring-border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20gomez-rsMtVmAHTdlzPga3s7zbhszXbAiUCF.jpeg"
                alt="Gomez Bellezza"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground">Estamos a Disposicao</h1>
          <div className="w-16 h-px bg-accent mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nossa equipe esta pronta para ajuda-lo a descobrir a fragrancia perfeita. Atendimento personalizado
            e consultoria olfativa a qualquer momento.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <a href="https://wa.me/5511995384328" target="_blank" rel="noopener noreferrer" className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-all group">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-serif text-foreground mb-2">WhatsApp</h3>
            <p className="text-sm text-muted-foreground mb-3">Atendimento disponivel 24h</p>
            <p className="text-accent font-medium">(11) 99538-4328</p>
          </a>

          <a href="https://instagram.com/gomez_bellezza" target="_blank" rel="noopener noreferrer" className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-all group">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                <Instagram className="w-8 h-8 text-pink-600" />
              </div>
            </div>
            <h3 className="text-xl font-serif text-foreground mb-2">Instagram</h3>
            <p className="text-sm text-muted-foreground mb-3">Siga-nos nas redes sociais</p>
            <p className="text-accent font-medium">@gomez_bellezza</p>
          </a>

          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                <Mail className="w-8 h-8 text-accent" />
              </div>
            </div>
            <h3 className="text-xl font-serif text-foreground mb-2">Consultoria</h3>
            <p className="text-sm text-muted-foreground mb-3">Orientacao olfativa personalizada</p>
            <p className="text-accent font-medium">Sob agendamento</p>
          </div>
        </div>

        {/* Horario */}
        <div className="bg-card border border-border rounded-lg p-8 mb-12">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-serif text-foreground">Horario de Atendimento</h3>
            <div className="w-12 h-px bg-accent mx-auto" />
            <div className="space-y-2">
              <p className="text-lg text-foreground font-medium">Disponivel 24 horas por dia</p>
              <p className="text-muted-foreground">Todos os dias da semana, incluindo finais de semana e feriados</p>
              <p className="text-sm text-accent italic">Respostas rapidas e atendimento personalizado</p>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-foreground">Como Comprar</h3>
            <div className="w-8 h-px bg-accent" />
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Entre em contato via WhatsApp ou Instagram", "Escolha suas fragancias favoritas do catalogo", "Receba orientacoes personalizadas sobre cada perfume", "Finalize seu pedido com seguranca e praticidade"].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-foreground">Diferenciais</h3>
            <div className="w-8 h-px bg-accent" />
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Atendimento personalizado e consultoria olfativa", "Produtos de alta qualidade com fixacao excepcional", "Fragancias exclusivas e sofisticadas", "Disponibilidade total para tirar suas duvidas"].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center space-y-6">
          <div className="w-16 h-px bg-accent mx-auto" />
          <p className="text-lg text-foreground font-serif italic">Transforme momentos em memorias inesqueciveis</p>
          <a href="https://wa.me/5511995384328" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-medium hover:bg-accent-hover transition-colors shadow-lg hover:shadow-xl">
            <Phone className="w-5 h-5" />
            Fale Conosco no WhatsApp
          </a>
        </div>
      </div>

      <WhatsAppButton />
    </div>
  )
}

/* =========================================================================
   SHARED COMPONENTS
   ========================================================================= */
function Header({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-4 md:px-6 py-4 max-w-7xl mx-auto">
        <button onClick={onBack} className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="Voltar">
          <X className="w-6 h-6 text-foreground" />
        </button>
        <h1 className="text-xl md:text-2xl font-serif text-foreground">{title}</h1>
        <div className="w-10" />
      </div>
    </header>
  )
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511995384328"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50"
      aria-label="WhatsApp"
    >
      <Phone className="w-6 h-6" />
    </a>
  )
}

function ScrollToTopButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => { setShow(window.scrollY > 400) }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-6 bg-accent text-accent-foreground p-3 rounded-full shadow-lg hover:bg-accent-hover transition-all z-50"
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}

interface NavButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  icon?: React.ReactNode
  variant?: "primary" | "secondary"
}

function NavButton({ children, onClick, href, icon, variant = "primary" }: NavButtonProps) {
  const baseClasses = "flex items-center justify-between w-full px-6 py-4 rounded-lg text-left font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
  const variantClasses = variant === "primary"
    ? "bg-card hover:bg-card-hover border border-border shadow-sm hover:shadow-md text-foreground"
    : "bg-accent/10 hover:bg-accent/20 border border-accent/20 text-foreground"

  const content = (<><span>{children}</span>{icon}</>)

  if (href) {
    return (<a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${variantClasses}`}>{content}</a>)
  }
  return (<button onClick={onClick} className={`${baseClasses} ${variantClasses}`}>{content}</button>)
}
