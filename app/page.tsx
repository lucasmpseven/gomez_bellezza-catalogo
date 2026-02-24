"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import {
  ChevronRight,
  Instagram,
  Phone,
  X,
  ArrowUp,
  Droplets,
  Gem,
  Clock,
  Sparkles,
  Filter,
  ArrowLeft,
  MessageCircle,
} from "lucide-react"

/* =========================================================================
   DATA
   ========================================================================= */

const WHATSAPP_NUMBER = "5511995384328"
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`
const INSTAGRAM_LINK = "https://instagram.com/gomez_bellezza"
const LOGO_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20gomez-rsMtVmAHTdlzPga3s7zbhszXbAiUCF.jpeg"

const perfumes = [
  {
    name: "Vayn's",
    originalInspiration: "212 VIP Men Black",
    category: "Especiado Aromatico",
    line: "Masculina",
    familyTag: "Especiado",
    notes: {
      top: "Especiarias afiadas, Notas aromaticas",
      heart: "Notas alcoolicas, Acordes modernos",
      base: "Madeiras escuras, Ambar quente",
    },
    description:
      "Uma composicao envolvente que celebra a sofisticacao noturna. Vayn's entrega presenca marcante atraves de especiarias afiadas equilibradas com sutis notas alcoolicas, criando um rastro vibrante e contemporaneo.",
    intensity: "Intensa",
    fixation: "12-16 horas",
    occasion: "Noturno, Eventos Especiais",
    volume: "50ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215629-7tY96GYes0QsyBYT94SpfiJ5Wg3owy.jpg",
  },
  {
    name: "Secret Lun's",
    originalInspiration: "Fakhar Rose",
    category: "Floral Amadeirado",
    line: "Feminina",
    familyTag: "Floral",
    notes: {
      top: "Rosa intensa, Especiarias delicadas",
      heart: "Madeiras nobres, Notas florais",
      base: "Ambar, Almiscar branco",
    },
    description:
      "Uma interpretacao majestosa da rosa em sua forma mais poderosa. Secret Lun's apresenta um coracao floral intenso sustentado por madeiras profundas, revelando camadas de sofisticacao e luxo.",
    intensity: "Forte",
    fixation: "14-18 horas",
    occasion: "Versatil, Dia e Noite",
    volume: "50ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215741-pu33KEWgvRsni50qqUyr843BA4JFgY.jpg",
  },
  {
    name: "Baby",
    originalInspiration: "Chloe",
    category: "Floral Fresco",
    line: "Feminina",
    familyTag: "Floral",
    notes: {
      top: "Rosa delicada, Peonia fresca",
      heart: "Lirio do vale, Magnolia",
      base: "Ambar suave, Almiscar",
    },
    description:
      "A leveza e sofisticacao reunidas em uma fragrancia atemporal. Baby traz um bouquet floral refinado onde a rosa se revela em sua forma mais delicada e feminina.",
    intensity: "Moderada",
    fixation: "8-12 horas",
    occasion: "Dia a Dia, Eventos Diurnos",
    volume: "50ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215947-EcjeTeslQzZnvkliRLZMNxdCTKA0IJ.jpg",
  },
  {
    name: "Olimpic",
    originalInspiration: "Olympea",
    category: "Floral Salgado",
    line: "Feminina",
    familyTag: "Aquatico",
    notes: {
      top: "Notas marinhas, Sal cristalino",
      heart: "Florais adocicados, Jasmim d'agua",
      base: "Ambar, Madeiras claras",
    },
    description:
      "Uma fragrancia de contrastes fascinantes que desafia convencoes. Olimpic harmoniza o frescor salgado das notas aquaticas com florais modernos adocicados.",
    intensity: "Intensa",
    fixation: "12-16 horas",
    occasion: "Noturno, Sofisticado",
    volume: "50ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215339-efo0xVtmgGL0ZA9z0b7BglsEV67HQ5.jpg",
  },
  {
    name: "Eter's",
    originalInspiration: "Invictus",
    category: "Aquatico Amadeirado",
    line: "Feminina",
    familyTag: "Aquatico",
    notes: {
      top: "Frescor marinho, Toranja",
      heart: "Madeiras vibrantes, Notas aromaticas",
      base: "Ambroxan, Vetiver",
    },
    description:
      "Energia e frescor capturados em uma composicao dinamica. Eter's combina a vitalidade de notas aquaticas com a forca de madeiras aromaticas.",
    intensity: "Moderada a Forte",
    fixation: "10-14 horas",
    occasion: "Esportivo, Dia a Dia",
    volume: "50ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215055-1nxqMramisAzBkvi6YhpsS0Kl0bbmx.jpg",
  },
  {
    name: "Adien's",
    originalInspiration: "One Million",
    category: "Oriental Especiado",
    line: "Masculina",
    familyTag: "Oriental",
    notes: {
      top: "Especiarias marcantes, Canela",
      heart: "Couro elegante, Rosa negra",
      base: "Notas doces, Ambar, Fava tonka",
    },
    description:
      "Luxo e ousadia em cada gota. Adien's apresenta uma combinacao irresistivel de especiarias marcantes com couro elegante e toques doces envolventes.",
    intensity: "Muito Forte",
    fixation: "16-20 horas",
    occasion: "Noturno, Grande Impacto",
    volume: "50ml",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215518-C0aN0iewr2fA4XMzsXg1PmSZFSH14c.jpg",
  },
]

const inspiracoes = [
  {
    name: "212 VIP",
    brand: "Carolina Herrera",
    family: "Floral Frutado Gourmand",
    notes: "Maracuja, rum, almiscar branco, baunilha, flores brancas",
    shortDescription: "Sofisticado e moderno, frutado com toque doce e elegante.",
    fullDescription:
      "Uma fragrancia que captura a essencia da exclusividade e da vida noturna sofisticada. A combinacao ousada de maracuja exotico com o calor do rum cria uma abertura intrigante que evolui para um coracao de flores brancas delicadas. O fundo de almiscar e baunilha confere sensualidade e fixacao prolongada.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/212%20vip-ylZvWoabBOJENGLcEDESLRDUF44B4x.jpeg",
    tag: "Voce esta na lista.",
  },
  {
    name: "212 VIP Black",
    brand: "Carolina Herrera",
    family: "Amadeirado Especiado",
    notes: "Anis estrelado, cardamomo, lavanda, rum, cafe, fava tonka, madeira de gaiac",
    shortDescription: "Marcante e intenso, mistura especiarias com um toque doce envolvente.",
    fullDescription:
      "A versao mais intensa e magnetica da linha 212 VIP. Abre com a energia pulsante do anis estrelado e cardamomo, envolvidos pela frescura aromatica da lavanda. O coracao revela a profundidade do rum e do cafe, criando uma aura de misterio e poder.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/212%20vip%20black-jZyCf6b6SAExg6vTJJlkVAff7KiiCc.jpeg",
    tag: "Domine a noite.",
  },
  {
    name: "Scandal",
    brand: "Jean Paul Gaultier",
    family: "Floral Gourmand",
    notes: "Mel, gardenia, flor de laranjeira, caramelo, patchouli",
    shortDescription: "Doce e sofisticado, com mel sensual e flores ricas.",
    fullDescription:
      "Uma declaracao de ousadia e feminilidade em sua forma mais provocante. O mel sensual entrelaca-se com a opulencia da gardenia e a delicadeza da flor de laranjeira, criando um bouquet que e ao mesmo tempo doce e misterioso.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jean%20paul%20scandal-hU6rrYjGpeCtI3JPbRKOyvxceXgIuY.jpeg",
    tag: "Notas doces que seduzem e encantam.",
  },
  {
    name: "Erba Pura",
    brand: "Xerjoff",
    family: "Citrico Amadeirado",
    notes: "Laranja, limao siciliano, bergamota, frutas brancas, acorde de mel, ambar, baunilha, madeiras claras",
    shortDescription: "Frescor citrico com docura suave e fundo aconchegante.",
    fullDescription:
      "Uma obra-prima da perfumaria italiana de nicho que eleva os citricos a um patamar de luxo absoluto. A explosao inicial de laranja, limao siciliano e bergamota transmite vitalidade e frescor mediterraneo.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/erba%20pura-k8oeS3vQHuX2GTjNzNWqfHPofzmnPc.jpeg",
    tag: "O poder da fruta envolto em luxo.",
  },
  {
    name: "Le Male Le Parfum",
    brand: "Jean Paul Gaultier",
    family: "Fougere Oriental",
    notes: "Menta intensa, lavanda, canela, baunilha cremosa, fava tonka, ambar",
    shortDescription: "Charmoso e profundo, com menta marcante e calor doce de baunilha.",
    fullDescription:
      "A evolucao mais intensa e sedutora do classico Le Male. A menta irrompe com frescor vigoroso, rapidamente abraçada pela lavanda aromatica e pela canela quente.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jean%20paul%20gaultier-DPVqCAZO2ZT19SnUCVZi4W50WXBX73.jpeg",
    tag: "The intense new fragrance.",
  },
  {
    name: "CK One",
    brand: "Calvin Klein",
    family: "Citrico Aromatico",
    notes: "Limao, abacaxi, cha verde, jasmim, almiscar",
    shortDescription: "Citrico aromatico e unissex. Refrescante, limpo e versatil.",
    fullDescription:
      "Um marco na historia da perfumaria moderna e o pioneiro absoluto das fragancias unissex. CK One revolucionou o mercado ao provar que frescor e elegancia nao precisam de genero.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img1-kJDD4JD5mmBgOKNBSOMHEGQ4Apr5WL.jpeg",
    tag: "Frescor que une estilos.",
  },
  {
    name: "Fantasy",
    brand: "Britney Spears",
    family: "Gourmand Frutado",
    notes: "Kiwi, lichia vermelha, cupcake, chocolate branco, almiscar",
    shortDescription: "Doce, envolvente e divertido. Frutado com acordes gourmand cremosos.",
    fullDescription:
      "Uma fragrancia que transforma a doçura em arte olfativa e celebra a feminilidade jovial e desinibida.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img%202-AOlsvcEMEo6FCdcwbmH5wQGLjvsEUl.jpeg",
    tag: "Doce e inesquecivel.",
  },
  {
    name: "Baccarat Rouge 540",
    brand: "Maison Francis Kurkdjian",
    family: "Ambarado Floral",
    notes: "Açafrao, jasmim, ambar cinzento, notas amadeiradas",
    shortDescription: "Luxuoso e marcante, docura ambarada com sofisticacao absoluta.",
    fullDescription:
      "Considerado uma das maiores criações da perfumaria contemporanea, Baccarat Rouge 540 e sinonimo de luxo e exclusividade.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img3-Ckg1LMknN4pjBINjycyZXyovWlfBoi.jpeg",
    tag: "O luxo em sua forma mais pura.",
  },
  {
    name: "Light Blue",
    brand: "Dolce & Gabbana",
    family: "Citrico Fresco",
    notes: "Limao siciliano, maça verde, cedro, almiscar",
    shortDescription: "Refrescante e vibrante, a sensacao do verao mediterraneo.",
    fullDescription:
      "Uma ode ao Mediterraneo e a dolce vita italiana. Light Blue captura a essencia dos dias ensolarados na costa de Capri.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img4-idnaRLlo58jbKTixmbzl2W6xtHxv0n.jpeg",
    tag: "O frescor do Mediterraneo.",
  },
  {
    name: "MYSLF",
    brand: "Yves Saint Laurent",
    family: "Amadeirado Floral",
    notes: "Bergamota, flor de laranjeira, ambroxan, madeiras",
    shortDescription: "Moderno e intenso, frescor citrico com fundo amadeirado envolvente.",
    fullDescription:
      "Uma declaracao de identidade masculina contemporanea assinada pela iconica maison francesa.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img5-X5juobaFfJXwASD7AjCwLR3vjGlSJ2.jpeg",
    tag: "Sou todas as minhas versoes.",
  },
  {
    name: "Chloe Eau de Parfum",
    brand: "Chloe",
    family: "Floral Powdery",
    notes: "Peonia, rosa, lichia, ambar",
    shortDescription: "Delicado e elegante, a rosa de forma moderna e sofisticada.",
    fullDescription:
      "Uma celebracao da feminilidade em sua forma mais pura e refinada. Chloe Eau de Parfum apresenta a peonia e a rosa em um dueto floral que exala naturalidade e charme inato.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img6-L9VFM34iS2KvoKWsZN9pBCs6qrgI4i.jpeg",
    tag: "Graciosidade em cada nota.",
  },
  {
    name: "Invictus",
    brand: "Paco Rabanne",
    family: "Aquatico Amadeirado",
    notes: "Toranja, notas marinhas, louro, ambar cinzento, madeira guaiac",
    shortDescription: "Fresco e energetico, notas aquaticas com fundo adocicado e ambarado.",
    fullDescription:
      "Uma fragrancia que evoca a sensacao de vitoria e conquista com cada borrifada.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/erba%20pura-k8oeS3vQHuX2GTjNzNWqfHPofzmnPc.jpeg",
    tag: "A fragrancia da conquista.",
  },
]

/* =========================================================================
   INTERSECTION OBSERVER HOOK
   ========================================================================= */
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

/* =========================================================================
   MAIN APP
   ========================================================================= */
export default function Home() {
  const [currentView, setCurrentView] = useState("home")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigateToView = useCallback((view: string) => {
    setCurrentView(view)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center opacity-0 animate-fade-in">
          <p className="font-serif text-2xl tracking-luxury text-foreground">GOMEZ BELLEZZA</p>
        </div>
      </div>
    )
  }

  const views: Record<string, React.ReactNode> = {
    home: <HomeView onNavigate={navigateToView} />,
    landing: <LandingPageView onBack={() => navigateToView("home")} />,
    perfumes: <PerfumesView onBack={() => navigateToView("home")} />,
    inspiracoes: <InspiracoesView onBack={() => navigateToView("home")} />,
    linhas: <LinhasView onBack={() => navigateToView("home")} />,
    quiz: <QuizView onBack={() => navigateToView("home")} />,
    contato: <ContatoView onBack={() => navigateToView("home")} />,
  }

  return views[currentView] || views.home
}

/* =========================================================================
   HOME VIEW — Premium Landing Experience
   ========================================================================= */
function HomeView({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <main className="min-h-screen bg-foreground">
      {/* Hero Section — Full screen dark */}
      <HeroSection onNavigate={onNavigate} />

      {/* About Section — Editorial */}
      <AboutSection />

      {/* Collections Section */}
      <CollectionsSection onNavigate={onNavigate} />

      {/* Featured Perfumes */}
      <FeaturedPerfumesSection onNavigate={onNavigate} />

      {/* Differentials */}
      <DifferentialsSection />

      {/* CTA Final */}
      <CTASection />

      {/* Footer */}
      <PremiumFooter />

      <WhatsAppButton />
      <ScrollToTopButton variant="dark" />
    </main>
  )
}

/* =========================================================================
   HERO SECTION
   ========================================================================= */
function HeroSection({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-foreground overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/premium-luxury-perfume-collection.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground" />
      </div>

      <div className="relative z-10 text-center px-6 py-20 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-10 opacity-0 animate-fade-in-up">
          <div className="relative w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden ring-1 ring-gold/30 shadow-2xl">
            <Image src={LOGO_URL} alt="Gomez Bellezza" fill className="object-cover" priority />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="opacity-0 animate-fade-in-up stagger-1 text-background font-serif text-4xl md:text-6xl lg:text-7xl tracking-wide text-balance mb-6">
          GOMEZ BELLEZZA
        </h1>

        {/* Gold divider */}
        <div className="opacity-0 animate-fade-in-up stagger-2 flex justify-center mb-6">
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        {/* Tagline */}
        <p className="opacity-0 animate-fade-in-up stagger-3 text-gold font-serif italic text-xl md:text-2xl lg:text-3xl mb-4 tracking-wide">
          Perfumes que deixam memorias no ar
        </p>

        <p className="opacity-0 animate-fade-in-up stagger-4 text-background/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-sans">
          Alta perfumaria artesanal com fragancias exclusivas
        </p>

        {/* CTA Buttons */}
        <div className="opacity-0 animate-fade-in-up stagger-5 flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <button
            onClick={() => onNavigate("perfumes")}
            className="px-8 py-4 bg-gold text-foreground font-sans font-medium text-sm tracking-wider uppercase hover:bg-gold-light transition-all duration-300 min-w-[220px]"
          >
            Explorar Catalogo
          </button>
          <button
            onClick={() => onNavigate("landing")}
            className="px-8 py-4 border border-background/30 text-background font-sans font-medium text-sm tracking-wider uppercase hover:border-gold hover:text-gold transition-all duration-300 min-w-[220px]"
          >
            Conhecer a Marca
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in stagger-6">
        <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent mx-auto mb-2" />
        <p className="text-background/30 text-[10px] tracking-luxury uppercase font-sans">Descubra</p>
      </div>
    </section>
  )
}

/* =========================================================================
   ABOUT SECTION — Editorial Block
   ========================================================================= */
function AboutSection() {
  const { ref, isInView } = useInView(0.2)

  return (
    <section ref={ref} className="bg-background py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Image */}
        <div
          className={`w-full lg:w-5/12 transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
        >
          <div className="relative aspect-[3/4] max-w-sm mx-auto img-hover-zoom">
            <Image
              src="/imgs/colecao-gomez-bellezza.jpg"
              alt="Frasco de perfume elegante da colecao Gomez Bellezza"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5" />
          </div>
        </div>

        {/* Text */}
        <div
          className={`w-full lg:w-7/12 transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
        >
          <p className="text-gold text-xs tracking-luxury uppercase font-sans mb-4">Sobre a Marca</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6 text-balance">
            Cada fragrancia e criada como uma obra de arte
          </h2>
          <div className="w-12 h-px bg-gold mb-8" />
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
            Na Gomez Bellezza, cada fragrancia e criada como uma obra de arte. Desenvolvemos perfumes
            artesanais que despertam sensacoes, marcam momentos e eternizam memorias.
          </p>
          <p className="text-muted-foreground/80 leading-relaxed text-sm md:text-base">
            Nossas composicoes utilizam ingredientes selecionados e concentracoes premium entre EDP e
            Parfum, proporcionando fixacao excepcional de ate 20 horas. Uma marca que transcende o
            ordinario e celebra a arte da perfumaria.
          </p>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   COLLECTIONS SECTION
   ========================================================================= */
function CollectionsSection({ onNavigate }: { onNavigate: (view: string) => void }) {
  const { ref, isInView } = useInView(0.15)

  const collections = [
    {
      name: "Linha Feminina",
      description: "Elegancia e sofisticacao em quatro criacoes florais e sensuais",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215947-EcjeTeslQzZnvkliRLZMNxdCTKA0IJ.jpg",
      count: "4 fragancias",
    },
    {
      name: "Linha Masculina",
      description: "Presenca marcante e sofisticacao em composicoes intensas",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251102_215629-7tY96GYes0QsyBYT94SpfiJ5Wg3owy.jpg",
      count: "2 fragancias",
    },
    {
      name: "Linha Exclusiva",
      description: "Interpretacoes artesanais das maiores fragancias da perfumaria mundial",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img3-Ckg1LMknN4pjBINjycyZXyovWlfBoi.jpeg",
      count: "12 inspiracoes",
    },
    {
      name: "Edicao Limitada",
      description: "Criacoes sazonais exclusivas em tiragem reduzida",
      image: "/gold-luxury-perfume-bottle.jpg",
      count: "Em breve",
    },
  ]

  return (
    <section ref={ref} className="bg-foreground py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-gold text-xs tracking-luxury uppercase font-sans mb-4">Colecoes</p>
          <h2 className="font-serif text-3xl md:text-5xl text-background mb-6 text-balance">
            Nossas Linhas
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          <p className="text-background/50 max-w-2xl mx-auto leading-relaxed">
            Descubra colecoes curadas com personalidade unica, cada uma expressando uma faceta da arte da perfumaria.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col, i) => (
            <button
              key={i}
              onClick={() => onNavigate("linhas")}
              className={`group text-left relative overflow-hidden transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={col.image}
                  alt={col.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-gold/80 text-[10px] tracking-luxury uppercase font-sans mb-1">{col.count}</p>
                  <h3 className="font-serif text-xl text-background mb-2">{col.name}</h3>
                  <p className="text-background/50 text-xs leading-relaxed">{col.description}</p>
                </div>
                {/* Gold hover line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   FEATURED PERFUMES SECTION
   ========================================================================= */
function FeaturedPerfumesSection({ onNavigate }: { onNavigate: (view: string) => void }) {
  const { ref, isInView } = useInView(0.1)
  const featured = perfumes.slice(0, 3)

  return (
    <section ref={ref} className="bg-background py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-gold text-xs tracking-luxury uppercase font-sans mb-4">Destaques</p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6 text-balance">
            Fragancias em Destaque
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((perfume, i) => (
            <div
              key={i}
              className={`group transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="relative aspect-[3/4] mb-6 overflow-hidden img-hover-zoom">
                <Image
                  src={perfume.image}
                  alt={perfume.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5" />
              </div>
              <div>
                <p className="text-gold text-[10px] tracking-luxury uppercase font-sans mb-2">
                  {perfume.category}
                </p>
                <h3 className="font-serif text-2xl text-foreground mb-2">{perfume.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                  {perfume.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground/80">
                  <span>{perfume.fixation}</span>
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  <span>{perfume.volume}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-16 transition-all duration-700 delay-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <button
            onClick={() => onNavigate("perfumes")}
            className="px-10 py-4 border border-foreground text-foreground font-sans text-sm tracking-wider uppercase hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Ver Catalogo Completo
          </button>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   DIFFERENTIALS SECTION
   ========================================================================= */
function DifferentialsSection() {
  const { ref, isInView } = useInView(0.2)

  const differentials = [
    { icon: <Droplets className="w-6 h-6" />, title: "Producao Artesanal", description: "Cada frasco e produzido com tecnicas de alta perfumaria" },
    { icon: <Gem className="w-6 h-6" />, title: "Ingredientes Selecionados", description: "Materias-primas nobres de primeira qualidade" },
    { icon: <Clock className="w-6 h-6" />, title: "Alta Fixacao", description: "Concentracoes premium com duracao de 8 a 20 horas" },
    { icon: <Sparkles className="w-6 h-6" />, title: "Exclusividade Limitada", description: "Producao em tiragem reduzida para colecoes unicas" },
  ]

  return (
    <section ref={ref} className="bg-background py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-16">
          {differentials.map((item, i) => (
            <div
              key={i}
              className={`flex-1 text-center transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-gold/30 text-gold mb-4">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   CTA SECTION
   ========================================================================= */
function CTASection() {
  const { ref, isInView } = useInView(0.2)

  return (
    <section ref={ref} className="bg-foreground py-24 md:py-32 px-6">
      <div
        className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex justify-center mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-background mb-6 text-balance italic">
          Descubra a fragrancia que vai marcar sua historia
        </h2>
        <p className="text-background/50 mb-10 max-w-xl mx-auto leading-relaxed">
          Atendimento personalizado e consultoria olfativa para encontrar o perfume ideal para voce.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gold text-foreground font-sans font-medium text-sm tracking-wider uppercase hover:bg-gold-light transition-all duration-300 inline-flex items-center gap-3 min-w-[220px] justify-center"
          >
            <MessageCircle className="w-4 h-4" />
            Falar no WhatsApp
          </a>
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-background/30 text-background font-sans font-medium text-sm tracking-wider uppercase hover:border-gold hover:text-gold transition-all duration-300 inline-flex items-center gap-3 min-w-[220px] justify-center"
          >
            <Instagram className="w-4 h-4" />
            Ver Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   PREMIUM FOOTER
   ========================================================================= */
function PremiumFooter() {
  return (
    <footer className="bg-foreground border-t border-background/10 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-1 ring-gold/20">
              <Image src={LOGO_URL} alt="Gomez Bellezza" fill className="object-cover" />
            </div>
            <div>
              <p className="font-serif text-lg text-background">Gomez Bellezza</p>
              <p className="text-background/40 text-xs">Alta Perfumaria Artesanal</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/50 hover:text-gold transition-colors"
            >
              Instagram
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/50 hover:text-gold transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-background/10 to-transparent" />
        </div>

        <p className="text-center text-background/30 text-xs">
          2025 Gomez Bellezza. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

/* =========================================================================
   PERFUMES VIEW — Full Catalog with Filters
   ========================================================================= */
function PerfumesView({ onBack }: { onBack: () => void }) {
  const [activeCategory, setActiveCategory] = useState("Todas")
  const [activeFamily, setActiveFamily] = useState("Todas")

  const categories = ["Todas", "Feminina", "Masculina"]
  const families = ["Todas", "Floral", "Especiado", "Aquatico", "Oriental"]

  const filtered = perfumes.filter((p) => {
    const catMatch = activeCategory === "Todas" || p.line === activeCategory
    const famMatch = activeFamily === "Todas" || p.familyTag === activeFamily
    return catMatch && famMatch
  })

  return (
    <div className="min-h-screen bg-background">
      <PremiumHeader title="Catalogo de Perfumes" onBack={onBack} />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Intro */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-gold text-xs tracking-luxury uppercase font-sans mb-4">
            {perfumes.length} fragancias exclusivas
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 text-balance">
            Nossa Colecao Completa
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Cada fragrancia Gomez Bellezza e uma obra de alta perfumaria artesanal, criada com
            ingredientes nobres e concentracao premium.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-gold" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Filtrar por</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Linha:</span>
              <div className="flex gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 text-xs tracking-wider transition-all duration-300 ${
                      activeCategory === cat
                        ? "bg-foreground text-background"
                        : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Familia:</span>
              <div className="flex gap-2 flex-wrap justify-center">
                {families.map((fam) => (
                  <button
                    key={fam}
                    onClick={() => setActiveFamily(fam)}
                    className={`px-4 py-2 text-xs tracking-wider transition-all duration-300 ${
                      activeFamily === fam
                        ? "bg-foreground text-background"
                        : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {fam}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((perfume, index) => (
            <PerfumeCard key={index} perfume={perfume} index={index} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">Nenhum perfume encontrado com os filtros selecionados.</p>
            <button
              onClick={() => { setActiveCategory("Todas"); setActiveFamily("Todas") }}
              className="mt-4 text-gold text-sm hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>

      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  )
}

/* =========================================================================
   PERFUME CARD
   ========================================================================= */
function PerfumeCard({
  perfume,
  index,
}: {
  perfume: (typeof perfumes)[0]
  index: number
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="group bg-card border border-border overflow-hidden hover:shadow-lg transition-all duration-500">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={perfume.image}
          alt={perfume.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-foreground/80 text-background text-[10px] tracking-luxury uppercase backdrop-blur-sm">
            {perfume.line}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <p className="text-gold text-[10px] tracking-luxury uppercase font-sans mb-2">{perfume.category}</p>
          <h3 className="font-serif text-2xl text-foreground">{perfume.name}</h3>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{perfume.description}</p>

        {/* Olfactory Pyramid */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-gold text-xs tracking-wider uppercase hover:underline mb-4 flex items-center gap-1"
        >
          Piramide Olfativa
          <ChevronRight className={`w-3 h-3 transition-transform ${expanded ? "rotate-90" : ""}`} />
        </button>

        {expanded && (
          <div className="mb-5 border-l-2 border-gold/30 pl-4 space-y-3 animate-fade-in">
            <div>
              <p className="text-[10px] text-gold uppercase tracking-wider mb-1">Notas de Topo</p>
              <p className="text-foreground text-xs">{perfume.notes.top}</p>
            </div>
            <div>
              <p className="text-[10px] text-gold uppercase tracking-wider mb-1">Notas de Coracao</p>
              <p className="text-foreground text-xs">{perfume.notes.heart}</p>
            </div>
            <div>
              <p className="text-[10px] text-gold uppercase tracking-wider mb-1">Notas de Fundo</p>
              <p className="text-foreground text-xs">{perfume.notes.base}</p>
            </div>
          </div>
        )}

        {/* Details */}
        <div className="border-t border-border pt-4 space-y-2 mb-5">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Fixacao</span>
            <span className="text-foreground font-medium">{perfume.fixation}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Intensidade</span>
            <span className="text-foreground font-medium">{perfume.intensity}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Volume</span>
            <span className="text-foreground font-medium">{perfume.volume}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Ocasiao</span>
            <span className="text-foreground font-medium">{perfume.occasion}</span>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <a
          href={`${WHATSAPP_LINK}?text=Ola! Tenho interesse no perfume ${perfume.name}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 bg-foreground text-background text-sm font-sans tracking-wider uppercase hover:bg-gold hover:text-foreground transition-all duration-300"
        >
          <MessageCircle className="w-4 h-4" />
          Solicitar no WhatsApp
        </a>
      </div>
    </article>
  )
}

/* =========================================================================
   INSPIRACOES VIEW
   ========================================================================= */
function InspiracoesView({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-background">
      <PremiumHeader title="Inspiracoes Olfativas" onBack={onBack} />

      <div className="px-6 py-12 max-w-7xl mx-auto">
        {/* Intro */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-gold text-xs tracking-luxury uppercase font-sans mb-4">
            12 fragancias de referencia
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight mb-6 text-balance">
            Grandes Fragancias, Uma Interpretacao Unica
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          <p className="text-muted-foreground leading-relaxed">
            A Gomez Bellezza se inspira nas maiores criacoes da perfumaria mundial para desenvolver
            interpretacoes artesanais com identidade propria.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-24">
          {inspiracoes.map((perfume, index) => (
            <InspiracaoCard key={index} perfume={perfume} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          <p className="font-serif text-2xl text-foreground italic mb-8 text-balance">
            {"Cada fragrancia conta uma historia. Encontre a sua."}
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-sans text-sm tracking-wider uppercase hover:bg-gold hover:text-foreground transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Fale com Nosso Consultor
          </a>
        </div>
      </div>

      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  )
}

function InspiracaoCard({
  perfume,
  index,
}: {
  perfume: (typeof inspiracoes)[0]
  index: number
}) {
  const { ref, isInView } = useInView(0.15)

  return (
    <div
      ref={ref}
      className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Image */}
      <div className="w-full lg:w-5/12">
        <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden img-hover-zoom">
          <Image
            src={perfume.image}
            alt={perfume.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5" />
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-7/12">
        <p className="text-muted-foreground text-xs uppercase tracking-luxury mb-2">{perfume.brand}</p>
        <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-1">{perfume.name}</h3>
        <p className="text-gold text-xs uppercase tracking-wider mb-6">{perfume.family}</p>

        <div className="w-10 h-px bg-gold mb-6" />

        <p className="text-foreground/80 leading-relaxed mb-6">{perfume.fullDescription}</p>

        <div className="bg-background border border-border p-5 mb-6">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-[10px] text-gold uppercase tracking-luxury min-w-[60px] pt-0.5">Notas</span>
            <span className="text-sm text-foreground">{perfume.notes}</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[10px] text-gold uppercase tracking-luxury min-w-[60px] pt-0.5">Familia</span>
            <span className="text-sm text-foreground">{perfume.family}</span>
          </div>
        </div>

        <p className="font-serif text-lg italic text-muted-foreground mb-6">{`"${perfume.tag}"`}</p>

        <a
          href={`${WHATSAPP_LINK}?text=Ola! Gostaria de saber sobre a inspiracao ${perfume.name}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-sans tracking-wider uppercase hover:bg-gold hover:text-foreground transition-all duration-300"
        >
          <Phone className="w-4 h-4" />
          Consultar Disponibilidade
        </a>
      </div>
    </div>
  )
}

/* =========================================================================
   LANDING PAGE VIEW
   ========================================================================= */
function LandingPageView({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-background">
      <PremiumHeader title="Gomez Bellezza" onBack={onBack} />

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden ring-1 ring-gold/30 shadow-xl">
              <Image src={LOGO_URL} alt="Gomez Bellezza" fill className="object-cover" />
            </div>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground tracking-wide mb-6">Gomez Bellezza</h1>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          <p className="font-serif text-xl md:text-2xl text-gold italic mb-4">
            Perfumes que deixam memorias no ar
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Alta perfumaria artesanal com exclusividade em cada fragrancia. Criacoes olfativas que
            transformam momentos em lembrancas inesqueciveis.
          </p>
        </div>
      </section>

      {/* Filosofia */}
      <section className="py-16 px-6 bg-foreground">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold text-xs tracking-luxury uppercase font-sans text-center mb-4">Filosofia</p>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-6 text-background">Nossa Filosofia</h2>
          <div className="flex justify-center mb-12">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "I", title: "Artesanal", text: "Cada perfume e desenvolvido com tecnicas artesanais de alta perfumaria, garantindo qualidade e exclusividade em cada frasco." },
              { num: "II", title: "Fixacao Excepcional", text: "Concentracoes premium entre EDP e Parfum, proporcionando fixacao de 8 a 20 horas com projecao marcante." },
              { num: "III", title: "Ingredientes Nobres", text: "Utilizamos apenas materias-primas de primeira qualidade, selecionadas criteriosamente para criar composicoes sofisticadas." },
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold font-serif text-lg">{item.num}</span>
                </div>
                <h3 className="font-serif text-xl text-background mb-3">{item.title}</h3>
                <p className="text-background/50 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Piramide e Familias Olfativas */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold text-xs tracking-luxury uppercase font-sans text-center mb-4">Educacao Olfativa</p>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-4 text-foreground">
            Entendendo a Perfumaria
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            A perfumaria e uma arte milenar que combina ciencia e criatividade. Compreender suas bases
            permite apreciar plenamente cada criacao olfativa.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Piramide */}
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-6">Piramide Olfativa</h3>
              <div className="space-y-5">
                {[
                  { label: "Notas de Saida (Topo)", text: "Primeira impressao do perfume. Duram de 15 minutos a 2 horas. Notas citricas, frescas e leves." },
                  { label: "Notas de Coracao (Corpo)", text: "O verdadeiro carater do perfume. Duram de 3 a 5 horas. Florais, especiarias e acordes aromaticos." },
                  { label: "Notas de Fundo (Base)", text: "A assinatura duradoura. Permanecem por mais de 5 horas. Madeiras, ambar, musgo e acordes profundos." },
                ].map((note, i) => (
                  <div key={i} className="border-l-2 border-gold/40 pl-5">
                    <h4 className="font-medium text-foreground mb-1">{note.label}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{note.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Familias */}
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-6">Familias Olfativas</h3>
              <div className="space-y-3">
                {[
                  { name: "Floral", desc: "Rosa, jasmim, lirio. Elegancia atemporal e feminilidade classica." },
                  { name: "Oriental", desc: "Especiarias, ambar, baunilha. Luxo, opulencia e sensualidade." },
                  { name: "Amadeirado", desc: "Sandalo, cedro, vetiver. Sofisticacao terrosa e elegancia." },
                  { name: "Aquatico / Fresco", desc: "Notas marinhas, citricos. Energia e modernidade." },
                  { name: "Gourmand", desc: "Caramelo, mel, baunilha. Docura envolvente e sensualidade." },
                ].map((fam, i) => (
                  <div key={i} className="bg-card border border-border p-4">
                    <h4 className="font-medium text-foreground mb-1">{fam.name}</h4>
                    <p className="text-xs text-muted-foreground">{fam.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Concentracoes */}
          <div className="mt-12 bg-card border border-border p-8">
            <h3 className="font-serif text-2xl text-foreground mb-6 text-center">Concentracoes</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Eau de Cologne", conc: "2-4%", dur: "2h", highlight: false },
                { name: "Eau de Toilette", conc: "5-15%", dur: "3-5h", highlight: false },
                { name: "Eau de Parfum", conc: "15-20%", dur: "6-8h", highlight: true },
                { name: "Parfum / Extrait", conc: "20-30%", dur: "8-24h", highlight: true },
              ].map((c, i) => (
                <div key={i} className={`text-center space-y-2 p-4 ${c.highlight ? "border border-gold/30 bg-gold/5" : ""}`}>
                  <p className={`font-medium ${c.highlight ? "text-gold" : "text-foreground"}`}>{c.name}</p>
                  <p className={`text-xs ${c.highlight ? "text-gold/80" : "text-muted-foreground"}`}>
                    {c.conc} de concentracao
                  </p>
                  <p className={`text-xs ${c.highlight ? "text-gold/80" : "text-muted-foreground"}`}>
                    Duracao media: {c.dur}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 mb-3">
              <div className="w-12 h-px bg-gold/30" />
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Gomez Bellezza trabalha exclusivamente com concentracoes EDP e Parfum
            </p>
          </div>
        </div>
      </section>

      {/* Guia de Aplicacao */}
      <section className="py-16 px-6 bg-card/50 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold text-xs tracking-luxury uppercase font-sans text-center mb-4">Guia</p>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-4 text-foreground">
            Aplicacao e Cuidados
          </h2>
          <div className="flex justify-center mb-12">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Pontos de Aplicacao",
                items: ["Pulsos internos", "Atras das orelhas", "Base do pescoco", "Parte interna dos cotovelos", "Atras dos joelhos"],
              },
              {
                title: "Maximizando a Fixacao",
                items: ["Aplique apos o banho, com a pele ainda umida", "Hidrate bem a pele antes da aplicacao", "Nao esfregue os pulsos apos aplicar", "Borrife a uma distancia de 15-20cm", "Pele oleosa retem fragancias por mais tempo"],
              },
              {
                title: "Armazenamento Correto",
                items: ["Mantenha em local fresco e seco", "Evite exposicao direta ao sol", "Nao armazene no banheiro", "Mantenha o frasco sempre fechado", "Temperatura ideal: 15-20 graus"],
              },
              {
                title: "Combinacoes e Camadas",
                text: "Para criar assinaturas olfativas unicas, combine fragancias da mesma familia ou crie camadas complementares. Comece com notas mais leves e adicione as mais intensas por cima.",
              },
            ].map((card, i) => (
              <div key={i} className="bg-card border border-border p-6">
                <h3 className="font-serif text-xl text-foreground mb-4">{card.title}</h3>
                {card.items ? (
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Entre em Contato</h2>
          <div className="flex justify-center mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="p-6">
              <Phone className="w-8 h-8 mx-auto text-gold mb-3" />
              <p className="font-medium text-foreground mb-1">WhatsApp</p>
              <a
                href={WHATSAPP_LINK}
                className="text-sm text-muted-foreground hover:text-gold transition-colors"
              >
                (11) 99538-4328
              </a>
            </div>
            <div className="p-6">
              <Instagram className="w-8 h-8 mx-auto text-gold mb-3" />
              <p className="font-medium text-foreground mb-1">Instagram</p>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-gold transition-colors"
              >
                @gomez_bellezza
              </a>
            </div>
            <div className="p-6">
              <Sparkles className="w-8 h-8 mx-auto text-gold mb-3" />
              <p className="font-medium text-foreground mb-1">Consultoria</p>
              <p className="text-sm text-muted-foreground">Disponivel 24/7</p>
            </div>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-foreground text-background font-sans text-sm tracking-wider uppercase hover:bg-gold hover:text-foreground transition-all duration-300"
          >
            Consultar Disponibilidade
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center border-t border-border">
        <p className="text-xs text-muted-foreground">2025 Gomez Bellezza. Todos os direitos reservados.</p>
      </footer>

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
      <PremiumHeader title="Nossas Linhas" onBack={onBack} />

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        {/* Feminina */}
        <section>
          <div className="text-center mb-10">
            <p className="text-gold text-xs tracking-luxury uppercase font-sans mb-3">Colecao</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Linha Feminina</h2>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-px bg-gold" />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Criacoes elegantes e sofisticadas que celebram a feminilidade em todas as suas facetas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {perfumes
              .filter((p) => p.line === "Feminina")
              .map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="relative aspect-square mb-4 overflow-hidden img-hover-zoom">
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(max-width: 640px) 50vw, 25vw" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-1">{item.name}</h3>
                  <p className="text-gold text-xs tracking-wider">{item.category}</p>
                </div>
              ))}
          </div>
        </section>

        {/* Masculina */}
        <section>
          <div className="text-center mb-10">
            <p className="text-gold text-xs tracking-luxury uppercase font-sans mb-3">Colecao</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Linha Masculina</h2>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-px bg-gold" />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Fragancias marcantes e envolventes que expressam sofisticacao e presenca.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {perfumes
              .filter((p) => p.line === "Masculina")
              .map((item, i) => (
                <div key={i} className="text-center group w-48">
                  <div className="relative aspect-square mb-4 overflow-hidden img-hover-zoom">
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="200px" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-1">{item.name}</h3>
                  <p className="text-gold text-xs tracking-wider">{item.category}</p>
                </div>
              ))}
          </div>
        </section>

        {/* Identidade */}
        <section className="bg-foreground p-8 md:p-12">
          <h3 className="font-serif text-2xl text-background text-center mb-6">Identidade das Linhas</h3>
          <div className="flex justify-center mb-8">
            <div className="w-12 h-px bg-gold" />
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="font-medium text-gold mb-3 text-sm tracking-wider uppercase">Linha Feminina</h4>
              <p className="text-background/60 text-sm leading-relaxed">
                Quatro criacoes que exploram diferentes aspectos da feminilidade: desde a delicadeza
                floral ate a intensidade amadeirada. Fragancias versateis para momentos diurnos e
                noturnos, sempre com elegancia.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gold mb-3 text-sm tracking-wider uppercase">Linha Masculina</h4>
              <p className="text-background/60 text-sm leading-relaxed">
                Duas composicoes marcantes que definem presenca: Vayn's com sua personalidade noturna
                especiada, e Adien's com sua opulencia oriental. Fragancias de carater forte e fixacao
                duradoura.
              </p>
            </div>
          </div>
        </section>
      </div>

      <WhatsAppButton />
      <ScrollToTopButton />
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
    const counts = answers.reduce(
      (acc, answer) => {
        acc[answer] = (acc[answer] || 0) + 1
        return acc
      },
      {} as Record<string, number>
    )
    const winner = Object.entries(counts).reduce((a, b) => (a[1] > b[1] ? a : b))[0]
    const results: Record<string, { perfume: string; description: string }> = {
      especiado: {
        perfume: "Vayn's",
        description:
          "Uma fragrancia vibrante e moderna, perfeita para quem busca presenca marcante em ambientes noturnos e eventos especiais.",
      },
      floral: {
        perfume: "Baby ou Secret Lun's",
        description:
          "Fragancias florais que equilibram delicadeza e sofisticacao, ideais para quem aprecia elegancia atemporal.",
      },
      aquatico: {
        perfume: "Eter's",
        description:
          "Um perfume energetico com frescor aquatico, perfeito para quem tem estilo de vida ativo e dinamico.",
      },
      oriental: {
        perfume: "Adien's",
        description:
          "Uma composicao luxuosa e ousada com fixacao excepcional, ideal para quem nao teme fazer declaracoes marcantes.",
      },
    }
    return results[winner]
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
  }

  if (showResult) {
    const result = getResult()
    return (
      <div className="min-h-screen bg-background">
        <PremiumHeader title="Seu Perfume Ideal" onBack={onBack} />
        <div className="px-6 py-12 max-w-2xl mx-auto">
          <div className="bg-foreground p-8 md:p-12 text-center">
            <p className="text-gold text-xs tracking-luxury uppercase mb-6">Resultado</p>
            <h2 className="font-serif text-3xl md:text-4xl text-background mb-4">{result.perfume}</h2>
            <div className="flex justify-center mb-6">
              <div className="w-12 h-px bg-gold" />
            </div>
            <p className="text-background/60 text-lg leading-relaxed mb-8">{result.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="px-6 py-3 border border-background/30 text-background text-sm tracking-wider uppercase hover:border-gold hover:text-gold transition-all duration-300"
              >
                Refazer Quiz
              </button>
              <a
                href={`${WHATSAPP_LINK}?text=Ola! Fiz o quiz e meu perfume ideal e ${result.perfume}. Gostaria de saber mais!`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gold text-foreground text-sm tracking-wider uppercase hover:bg-gold-light transition-all duration-300 text-center"
              >
                Entrar em Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <PremiumHeader title="Descubra Seu Perfume" onBack={onBack} />
      <div className="px-6 py-12 max-w-2xl mx-auto">
        {/* Progress */}
        <div className="mb-10">
          <div className="flex gap-2 mb-4">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-[2px] flex-1 transition-colors duration-300 ${
                  index <= currentQuestion ? "bg-gold" : "bg-border"
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center tracking-wider uppercase">
            Pergunta {currentQuestion + 1} de {questions.length}
          </p>
        </div>

        {/* Question */}
        <div className="bg-card border border-border p-8 md:p-12">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-10 text-center text-balance">
            {questions[currentQuestion].question}
          </h2>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="w-full px-6 py-4 text-left border border-border text-foreground hover:border-gold hover:bg-gold/5 transition-all duration-300 text-sm"
              >
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
      <PremiumHeader title="Atendimento e Contato" onBack={onBack} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative w-20 h-20 rounded-full overflow-hidden ring-1 ring-gold/30">
              <Image src={LOGO_URL} alt="Gomez Bellezza" fill className="object-cover" />
            </div>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Estamos a Disposicao</h1>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nossa equipe esta pronta para ajuda-lo a descobrir a fragrancia perfeita. Atendimento
            personalizado e consultoria olfativa a qualquer momento.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border p-8 text-center hover:border-gold/30 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/10 transition-colors">
              <Phone className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-serif text-xl text-foreground mb-2">WhatsApp</h3>
            <p className="text-sm text-muted-foreground mb-3">Atendimento disponivel 24h</p>
            <p className="text-gold font-medium">(11) 99538-4328</p>
          </a>

          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border p-8 text-center hover:border-gold/30 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/10 transition-colors">
              <Instagram className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-serif text-xl text-foreground mb-2">Instagram</h3>
            <p className="text-sm text-muted-foreground mb-3">Siga-nos nas redes sociais</p>
            <p className="text-gold font-medium">@gomez_bellezza</p>
          </a>

          <div className="bg-card border border-border p-8 text-center">
            <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-serif text-xl text-foreground mb-2">Consultoria</h3>
            <p className="text-sm text-muted-foreground mb-3">Orientacao olfativa personalizada</p>
            <p className="text-gold font-medium">Sob agendamento</p>
          </div>
        </div>

        {/* Horario */}
        <div className="bg-foreground p-8 mb-12 text-center">
          <h3 className="font-serif text-2xl text-background mb-4">Horario de Atendimento</h3>
          <div className="flex justify-center mb-4">
            <div className="w-12 h-px bg-gold" />
          </div>
          <p className="text-lg text-background/80 font-medium mb-2">Disponivel 24 horas por dia</p>
          <p className="text-background/50">Todos os dias da semana, incluindo finais de semana e feriados</p>
          <p className="text-gold text-sm italic mt-2">Respostas rapidas e atendimento personalizado</p>
        </div>

        {/* Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-serif text-xl text-foreground mb-4">Como Comprar</h3>
            <div className="w-8 h-px bg-gold mb-4" />
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Entre em contato via WhatsApp ou Instagram",
                "Escolha suas fragancias favoritas do catalogo",
                "Receba orientacoes personalizadas sobre cada perfume",
                "Finalize seu pedido com seguranca e praticidade",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-xl text-foreground mb-4">Diferenciais</h3>
            <div className="w-8 h-px bg-gold mb-4" />
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Atendimento personalizado e consultoria olfativa",
                "Produtos de alta qualidade com fixacao excepcional",
                "Fragancias exclusivas e sofisticadas",
                "Disponibilidade total para tirar suas duvidas",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          <p className="font-serif text-lg text-foreground italic mb-6">
            Transforme momentos em memorias inesqueciveis
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 font-sans text-sm tracking-wider uppercase hover:bg-gold hover:text-foreground transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
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
function PremiumHeader({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Voltar"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-xs tracking-wider uppercase hidden sm:inline">Voltar</span>
        </button>
        <h1 className="font-serif text-lg md:text-xl text-foreground">{title}</h1>
        <div className="w-16" />
      </div>
    </header>
  )
}

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-[#FFFFFF] p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 z-50"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}

function ScrollToTopButton({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 left-6 p-3 rounded-full shadow-lg transition-all duration-300 z-50 hover:scale-105 ${
        variant === "dark"
          ? "bg-background/90 text-foreground backdrop-blur-sm"
          : "bg-foreground text-background"
      }`}
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}
