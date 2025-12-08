"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight, Instagram, Mail, Phone, X } from "lucide-react"

export default function Home() {
  const [currentView, setCurrentView] = useState("home")

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
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="w-full max-w-md mx-auto space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <Image src="/images/logo-20gomez.jpeg" alt="Gomez Belezza" fill className="object-contain" priority />
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center space-y-3">
            <h1 className="text-2xl md:text-3xl font-serif text-foreground tracking-wide">GOMEZ BELEZZA</h1>
            <p className="text-base md:text-lg text-foreground/70 font-light italic leading-relaxed">
              Perfumes que deixam memórias no ar
            </p>
            <div className="pt-2 space-y-1">
              <p className="text-sm text-muted-foreground">Alta perfumaria artesanal</p>
              <p className="text-sm text-muted-foreground">Exclusividade em cada fragrância</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-3 pt-4">
            <NavButton onClick={() => navigateToView("landing")} icon={<ChevronRight className="w-5 h-5" />}>
              Landing Page Completa
            </NavButton>

            <NavButton onClick={() => navigateToView("perfumes")} icon={<ChevronRight className="w-5 h-5" />}>
              Catálogo de Perfumes
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
            <p className="text-xs text-muted-foreground">© 2025 Gomez Belezza. Todos os direitos reservados.</p>
          </footer>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511995384328"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50"
        aria-label="WhatsApp"
      >
        <Phone className="w-6 h-6" />
      </a>
    </main>
  )
}

function LandingPageView({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-background">
      <Header title="GOMEZ BELEZZA" onBack={onBack} />

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-b from-accent/5 to-transparent">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <Image src="/images/logo-20gomez.jpeg" alt="Gomez Belezza" fill className="object-contain" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground tracking-wide">GOMEZ BELEZZA</h1>
          <p className="text-xl md:text-2xl text-foreground/70 italic font-light leading-relaxed">
            Perfumes que deixam memórias no ar
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Alta perfumaria artesanal com exclusividade em cada fragrância. Criações olfativas que transformam momentos
            em lembranças inesquecíveis através de composições sofisticadas e fixação excepcional.
          </p>
        </div>
      </section>

      {/* Nossa Filosofia */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-foreground">Nossa Filosofia</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <h3 className="text-xl font-serif text-foreground">Artesanal</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cada perfume é desenvolvido com técnicas artesanais de alta perfumaria, garantindo qualidade e
                exclusividade em cada frasco.
              </p>
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-xl font-serif text-foreground">Fixação Excepcional</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Concentrações premium entre EDP e Parfum, proporcionando fixação de 8 a 20 horas com projeção marcante e
                duradoura.
              </p>
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-xl font-serif text-foreground">Ingredientes Nobres</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Utilizamos apenas matérias-primas de primeira qualidade, selecionadas criteriosamente para criar
                composições sofisticadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teoria da Perfumaria */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-8 text-foreground">Entendendo a Perfumaria</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            A perfumaria é uma arte milenar que combina ciência e criatividade. Compreender suas bases fundamentais
            permite apreciar plenamente cada criação olfativa.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Pirâmide Olfativa */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-foreground mb-6">Pirâmide Olfativa</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Notas de Saída (Topo)</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Primeira impressão do perfume. Duram de 15 minutos a 2 horas. Geralmente são notas cítricas, frescas
                    e leves que capturam a atenção imediata.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Notas de Coração (Corpo)</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    O verdadeiro caráter do perfume. Duram de 3 a 5 horas. Florais, especiarias e acordes aromáticos que
                    definem a personalidade da fragrância.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Notas de Fundo (Base)</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A assinatura duradoura. Permanecem por mais de 5 horas. Madeiras, âmbar, musgo e acordes profundos
                    que fixam a fragrância na pele.
                  </p>
                </div>
              </div>
            </div>

            {/* Famílias Olfativas */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-foreground mb-6">Famílias Olfativas</h3>
              <div className="space-y-3">
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-1">Floral</h4>
                  <p className="text-xs text-muted-foreground">
                    Rosa, jasmim, lírio. Elegância atemporal e feminilidade clássica.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-1">Oriental</h4>
                  <p className="text-xs text-muted-foreground">
                    Especiarias, âmbar, baunilha. Luxo, opulência e sensualidade intensa.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-1">Amadeirado</h4>
                  <p className="text-xs text-muted-foreground">
                    Sândalo, cedro, vetiver. Sofisticação terrosa e elegância masculina.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-1">Aquático / Fresco</h4>
                  <p className="text-xs text-muted-foreground">
                    Notas marinhas, cítricos. Energia, vitalidade e modernidade.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-1">Especiado</h4>
                  <p className="text-xs text-muted-foreground">
                    Pimenta, cardamomo, noz-moscada. Calor, vibração e presença marcante.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Concentrações */}
          <div className="mt-12 bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-serif text-foreground mb-6 text-center">Concentrações</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-2">
                <p className="font-semibold text-foreground">Eau de Cologne</p>
                <p className="text-xs text-muted-foreground">2-4% · 2h</p>
              </div>
              <div className="text-center space-y-2">
                <p className="font-semibold text-foreground">Eau de Toilette</p>
                <p className="text-xs text-muted-foreground">5-15% · 3-5h</p>
              </div>
              <div className="text-center space-y-2">
                <p className="font-semibold text-accent">Eau de Parfum</p>
                <p className="text-xs text-accent">15-20% · 6-8h</p>
              </div>
              <div className="text-center space-y-2">
                <p className="font-semibold text-accent">Parfum / Extrait</p>
                <p className="text-xs text-accent">20-30% · 8-24h</p>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              GOMEZ BELEZZA trabalha exclusivamente com concentrações EDP e Parfum
            </p>
          </div>
        </div>
      </section>

      {/* Catálogo Completo */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 text-foreground">Catálogo de Fragrâncias</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Seis criações olfativas exclusivas, cada uma com personalidade única e fixação excepcional.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vayn's */}
            <div className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all">
              <div className="relative h-80 bg-muted">
                <Image
                  src="/images/img-20251102-215629.jpg"
                  alt="Vayn's"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-2xl font-serif text-foreground">Vayn's</h3>
                  <p className="text-xs text-accent uppercase tracking-wider">Especiado Aromático</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Composição envolvente que celebra a sofisticação noturna com especiarias afiadas e notas alcoólicas
                  modernas. Presença marcante e rastro vibrante.
                </p>
                <div className="text-xs space-y-1 pt-2 border-t border-border">
                  <p>
                    <span className="text-muted-foreground">Notas:</span> Especiarias, Alcoólicas, Toques Modernos
                  </p>
                  <p>
                    <span className="text-muted-foreground">Fixação:</span> 12-16 horas
                  </p>
                  <p>
                    <span className="text-muted-foreground">Inspirado em:</span> 212 VIP Men Black
                  </p>
                </div>
              </div>
            </div>

            {/* Secret Lun's */}
            <div className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all">
              <div className="relative h-80 bg-muted">
                <Image
                  src="/images/img-20251102-215741.jpg"
                  alt="Secret Lun's"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-2xl font-serif text-foreground">Secret Lun's</h3>
                  <p className="text-xs text-accent uppercase tracking-wider">Floral Amadeirado</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Interpretação majestosa da rosa em sua forma mais poderosa. Coração floral intenso sustentado por
                  madeiras nobres. Elegância assertiva.
                </p>
                <div className="text-xs space-y-1 pt-2 border-t border-border">
                  <p>
                    <span className="text-muted-foreground">Notas:</span> Rosa Intensa, Madeiras Nobres, Especiarias
                  </p>
                  <p>
                    <span className="text-muted-foreground">Fixação:</span> 14-18 horas
                  </p>
                  <p>
                    <span className="text-muted-foreground">Inspirado em:</span> Fakhar Rose
                  </p>
                </div>
              </div>
            </div>

            {/* Baby */}
            <div className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all">
              <div className="relative h-80 bg-muted">
                <Image
                  src="/images/img-20251102-215947.jpg"
                  alt="Baby"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-2xl font-serif text-foreground">Baby</h3>
                  <p className="text-xs text-accent uppercase tracking-wider">Floral Fresco</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Leveza e sofisticação em fragrância atemporal. Bouquet floral refinado com rosa delicada. Sutileza com
                  personalidade para todas as ocasiões.
                </p>
                <div className="text-xs space-y-1 pt-2 border-t border-border">
                  <p>
                    <span className="text-muted-foreground">Notas:</span> Rosa Delicada, Peônia, Lírio do Vale
                  </p>
                  <p>
                    <span className="text-muted-foreground">Fixação:</span> 8-12 horas
                  </p>
                  <p>
                    <span className="text-muted-foreground">Inspirado em:</span> Chloé
                  </p>
                </div>
              </div>
            </div>

            {/* Olimpic */}
            <div className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all">
              <div className="relative h-80 bg-muted">
                <Image
                  src="/images/img-20251102-215339.jpg"
                  alt="Olimpic"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-2xl font-serif text-foreground">Olimpic</h3>
                  <p className="text-xs text-accent uppercase tracking-wider">Floral Salgado</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Fragrância de contrastes fascinantes. Frescor salgado harmonizado com florais modernos adocicados.
                  Feminilidade com força e determinação.
                </p>
                <div className="text-xs space-y-1 pt-2 border-t border-border">
                  <p>
                    <span className="text-muted-foreground">Notas:</span> Notas Marinhas, Florais Adocicados, Âmbar
                  </p>
                  <p>
                    <span className="text-muted-foreground">Fixação:</span> 12-16 horas
                  </p>
                  <p>
                    <span className="text-muted-foreground">Inspirado em:</span> Olympéa
                  </p>
                </div>
              </div>
            </div>

            {/* Étér's */}
            <div className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all">
              <div className="relative h-80 bg-muted">
                <Image
                  src="/images/img-20251102-215055.jpg"
                  alt="Étér's"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-2xl font-serif text-foreground">Étér's</h3>
                  <p className="text-xs text-accent uppercase tracking-wider">Aquático Amadeirado</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Energia e frescor em composição dinâmica. Vitalidade de notas aquáticas com força de madeiras
                  aromáticas. Sensação de vitória e conquista.
                </p>
                <div className="text-xs space-y-1 pt-2 border-t border-border">
                  <p>
                    <span className="text-muted-foreground">Notas:</span> Frescor Marinho, Toranja, Madeiras Vibrantes
                  </p>
                  <p>
                    <span className="text-muted-foreground">Fixação:</span> 10-14 horas
                  </p>
                  <p>
                    <span className="text-muted-foreground">Inspirado em:</span> Invictus
                  </p>
                </div>
              </div>
            </div>

            {/* Adien's */}
            <div className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all">
              <div className="relative h-80 bg-muted">
                <Image
                  src="/images/img-20251102-215518.jpg"
                  alt="Adien's"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-2xl font-serif text-foreground">Adien's</h3>
                  <p className="text-xs text-accent uppercase tracking-wider">Oriental Especiado</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Luxo e ousadia em cada gota. Especiarias marcantes com couro elegante e toques doces. Opulência e
                  confiança extrema com rastro inesquecível.
                </p>
                <div className="text-xs space-y-1 pt-2 border-t border-border">
                  <p>
                    <span className="text-muted-foreground">Notas:</span> Especiarias, Couro, Notas Doces
                  </p>
                  <p>
                    <span className="text-muted-foreground">Fixação:</span> 16-20 horas
                  </p>
                  <p>
                    <span className="text-muted-foreground">Inspirado em:</span> One Million
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Usar Perfumes */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-foreground">
            Guia de Aplicação e Cuidados
          </h2>

          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-serif text-foreground mb-3">Pontos de Aplicação</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Aplique o perfume nos pontos de pulsação onde o sangue flui mais próximo à pele, gerando calor natural
                que potencializa a fragrância:
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Pulsos internos</li>
                <li>Atrás das orelhas</li>
                <li>Base do pescoço</li>
                <li>Parte interna dos cotovelos</li>
                <li>Atrás dos joelhos (para fixação prolongada)</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-serif text-foreground mb-3">Maximizando a Fixação</h3>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Aplique após o banho, com a pele ainda úmida</li>
                <li>Hidrate bem a pele antes da aplicação</li>
                <li>Não esfregue os pulsos após aplicar</li>
                <li>Borrife a uma distância de 15-20cm</li>
                <li>Pele oleosa retém fragrâncias por mais tempo</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-serif text-foreground mb-3">Armazenamento Correto</h3>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Mantenha em local fresco e seco</li>
                <li>Evite exposição direta ao sol</li>
                <li>Não armazene no banheiro (umidade degrada)</li>
                <li>Mantenha o frasco sempre fechado</li>
                <li>Temperatura ideal: 15-20°C</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-serif text-foreground mb-3">Combinações e Camadas</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Para criar assinaturas olfativas únicas, você pode combinar fragrâncias da mesma família ou criar
                camadas complementares. Comece com notas mais leves e adicione as mais intensas por cima. Evite combinar
                mais de dois perfumes para não criar confusão olfativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato e Informações */}
      <section className="py-16 px-4 bg-accent/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">Entre em Contato</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Phone className="w-8 h-8 mx-auto text-accent" />
              <p className="font-semibold text-foreground">WhatsApp</p>
              <a
                href="https://wa.me/5511995384328"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                (11) 99538-4328
              </a>
            </div>

            <div className="space-y-2">
              <Instagram className="w-8 h-8 mx-auto text-accent" />
              <p className="font-semibold text-foreground">Instagram</p>
              <a
                href="https://instagram.com/gomez_bellezza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                @gomez_bellezza
              </a>
            </div>

            <div className="space-y-2">
              <Mail className="w-8 h-8 mx-auto text-accent" />
              <p className="font-semibold text-foreground">Atendimento</p>
              <p className="text-sm text-muted-foreground">Disponível 24/7</p>
            </div>
          </div>

          <div className="pt-8">
            <a
              href="https://wa.me/5511995384328"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-accent hover:bg-accent-hover text-accent-foreground rounded-md font-medium transition-colors text-lg"
            >
              Consultar Disponibilidade
            </a>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              GOMEZ BELEZZA - Alta Perfumaria Artesanal
              <br />
              Beleza, cosméticos e cuidados pessoais
              <br />
              Exclusividade em cada fragrância
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-border">
        <p className="text-xs text-muted-foreground">© 2025 Gomez Belezza. Todos os direitos reservados.</p>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511995384328"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50"
        aria-label="WhatsApp"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  )
}

function PerfumesView({ onBack }: { onBack: () => void }) {
  const perfumes = [
    {
      name: "Vayn's",
      originalInspiration: "212 VIP Men Black",
      category: "Especiado Aromático",
      notes: "Especiarias, Notas Alcoólicas, Toques Modernos",
      description:
        "Uma composição envolvente que celebra a sofisticação noturna. Vayn's entrega presença marcante através de especiarias afiadas equilibradas com sutis notas alcoólicas, criando um rastro vibrante e contemporâneo. Ideal para quem busca impacto e personalidade em cada momento.",
      intensity: "Intensa",
      fixation: "12-16 horas",
      occasion: "Noturno, Eventos Especiais",
      image: "/images/img-20251102-215629.jpg",
    },
    {
      name: "Secret Lun's",
      originalInspiration: "Fakhar Rose",
      category: "Floral Amadeirado",
      notes: "Rosa Intensa, Madeiras Nobres, Especiarias",
      description:
        "Uma interpretação majestosa da rosa em sua forma mais poderosa. Secret Lun's apresenta um coração floral intenso sustentado por madeiras profundas, revelando camadas de sofisticação e luxo. Esta fragrância comunica elegância assertiva e presença memorável, perfeita para quem não teme ser notado.",
      intensity: "Forte",
      fixation: "14-18 horas",
      occasion: "Versátil, Dia e Noite",
      image: "/images/img-20251102-215741.jpg",
    },
    {
      name: "Baby",
      originalInspiration: "Chloé",
      category: "Floral Fresco",
      notes: "Rosa Delicada, Peônia, Lírio do Vale",
      description:
        "A leveza e sofisticação reunidas em uma fragrância atemporal. Baby traz um bouquet floral refinado onde a rosa se revela em sua forma mais delicada e feminina. Equilibrado e elegante, este perfume é a escolha perfeita para quem valoriza sutileza com personalidade, adequado para todas as ocasiões.",
      intensity: "Moderada",
      fixation: "8-12 horas",
      occasion: "Dia a Dia, Eventos Diurnos",
      image: "/images/img-20251102-215947.jpg",
    },
    {
      name: "Olimpic",
      originalInspiration: "Olympéa",
      category: "Floral Salgado",
      notes: "Notas Marinhas, Florais Adocicados, Âmbar",
      description:
        "Uma fragrância de contrastes fascinantes que desafia convenções. Olimpic harmoniza o frescor salgado das notas aquáticas com florais modernos e levemente adocicados, criando uma assinatura única e sofisticada. Expressa feminilidade com força e determinação, ideal para mulheres que equilibram delicadeza e poder.",
      intensity: "Intensa",
      fixation: "12-16 horas",
      occasion: "Noturno, Sofisticado",
      image: "/images/img-20251102-215339.jpg",
    },
    {
      name: "Étér's",
      originalInspiration: "Invictus",
      category: "Aquático Amadeirado",
      notes: "Frescor Marinho, Toranja, Madeiras Vibrantes",
      description:
        "Energia e frescor capturados em uma composição dinâmica. Étér's combina a vitalidade de notas aquáticas com a força de madeiras aromáticas, evocando sensação de vitória e conquista. Perfeito para homens ativos e confiantes que buscam uma fragrância energizante que acompanha seu estilo de vida intenso.",
      intensity: "Moderada a Forte",
      fixation: "10-14 horas",
      occasion: "Esportivo, Dia a Dia",
      image: "/images/img-20251102-215055.jpg",
    },
    {
      name: "Adien's",
      originalInspiration: "One Million",
      category: "Oriental Especiado",
      notes: "Especiarias, Couro, Notas Doces",
      description:
        "Luxo e ousadia em cada gota. Adien's apresenta uma combinação irresistível de especiarias marcantes com couro elegante e toques doces envolventes. Esta fragrância comunica opulência e confiança extrema, criando um rastro inesquecível. Desenvolvida para quem não teme chamar atenção e aprecia composições intensas e marcantes.",
      intensity: "Muito Forte",
      fixation: "16-20 horas",
      occasion: "Noturno, Grande Impacto",
      image: "/images/img-20251102-215518.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header title="Catálogo de Perfumes" onBack={onBack} />

      <div className="px-4 md:px-6 py-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-2">
            Cada fragrância GOMEZ BELEZZA é uma obra de alta perfumaria artesanal.
          </p>
          <p className="text-muted-foreground/80 text-sm">
            Criadas com ingredientes nobres e concentração premium para máxima fixação e projeção.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perfumes.map((perfume, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="relative h-80 bg-muted overflow-hidden">
                <Image
                  src={perfume.image || "/placeholder.svg"}
                  alt={perfume.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-serif text-foreground mb-1">{perfume.name}</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{perfume.category}</p>
                </div>

                <p className="text-sm text-foreground/70 leading-relaxed">{perfume.description}</p>

                <div className="pt-3 border-t border-border space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Notas:</span>
                    <span className="text-foreground font-medium text-right">{perfume.notes}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Fixação:</span>
                    <span className="text-foreground font-medium">{perfume.fixation}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Intensidade:</span>
                    <span className="text-foreground font-medium">{perfume.intensity}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Ocasião:</span>
                    <span className="text-foreground font-medium">{perfume.occasion}</span>
                  </div>
                </div>

                <a
                  href="https://wa.me/5511995384328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-4 px-4 py-3 bg-accent hover:bg-accent-hover text-accent-foreground text-center rounded-md text-sm font-medium transition-colors"
                >
                  Consultar Disponibilidade
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function LinhasView({ onBack }: { onBack: () => void }) {
  const linhas = [
    {
      name: "Linha Floral",
      description:
        "Composições florais que variam da delicadeza romântica à intensidade poderosa. Nossa linha floral expressa toda a versatilidade e sofisticação das mais nobres flores em alta perfumaria.",
      produtos: ["Baby", "Secret Lun's"],
      caracteristicas: "Fixação 8-18 horas · Versátil · Elegância Atemporal",
      image: "/images/img-20251102-215741.jpg",
    },
    {
      name: "Linha Especiada",
      description:
        "Para quem busca presença marcante e modernidade. Fragrâncias vibrantes que combinam especiarias contemporâneas com acordes aromáticos inovadores, criando composições envolventes e memoráveis.",
      produtos: ["Vayn's"],
      caracteristicas: "Fixação 12-16 horas · Noturno · Impacto Moderno",
      image: "/images/img-20251102-215629.jpg",
    },
    {
      name: "Linha Oriental",
      description:
        "O ápice do luxo em perfumaria. Composições ricas e opulentas que combinam especiarias raras, couro nobre e acordes doces envolventes. Fragrâncias de máxima fixação para momentos extraordinários.",
      produtos: ["Adien's"],
      caracteristicas: "Fixação 16-20 horas · Luxo Extremo · Grande Impacto",
      image: "/images/img-20251102-215518.jpg",
    },
    {
      name: "Linha Aquática",
      description:
        "Energia e frescor para o dia a dia dinâmico. Fragrâncias que capturam a vitalidade do mar e a força das madeiras, perfeitas para estilos de vida ativos e pessoas que buscam intensidade constante.",
      produtos: ["Étér's", "Olimpic"],
      caracteristicas: "Fixação 10-16 horas · Energético · Dia e Noite",
      image: "/images/img-20251102-215055.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header title="Nossas Linhas" onBack={onBack} />

      <div className="px-4 md:px-6 py-8 max-w-6xl mx-auto">
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Cada linha GOMEZ BELEZZA representa uma filosofia olfativa distinta, unidas pelo compromisso com alta
          concentração, fixação excepcional e ingredientes de primeira qualidade.
        </p>

        <div className="space-y-8">
          {linhas.map((linha, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-all"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full bg-muted order-2 md:order-1">
                  <Image src={linha.image || "/placeholder.svg"} alt={linha.name} fill className="object-cover" />
                </div>
                <div className="p-8 md:p-10 space-y-4 order-1 md:order-2">
                  <h3 className="text-3xl font-serif text-foreground">{linha.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{linha.description}</p>
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Características</p>
                    <p className="text-sm text-foreground/70">{linha.caracteristicas}</p>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Perfumes</p>
                    <div className="flex flex-wrap gap-2">
                      {linha.produtos.map((produto, i) => (
                        <span key={i} className="px-4 py-2 bg-accent/10 text-foreground rounded-md text-sm font-medium">
                          {produto}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function QuizView({ onBack }: { onBack: () => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)

  const questions = [
    {
      question: "Qual ambiente você prefere?",
      options: [
        { text: "Noite elegante em festa", value: "especiado" },
        { text: "Jardim florido na primavera", value: "floral" },
        { text: "Costa marítima ao entardecer", value: "aquatico" },
        { text: "Lounge sofisticado", value: "oriental" },
      ],
    },
    {
      question: "Qual palavra te descreve melhor?",
      options: [
        { text: "Vibrante", value: "especiado" },
        { text: "Elegante", value: "floral" },
        { text: "Energético", value: "aquatico" },
        { text: "Ousado", value: "oriental" },
      ],
    },
    {
      question: "Quando você usaria seu perfume ideal?",
      options: [
        { text: "Eventos noturnos especiais", value: "especiado" },
        { text: "Dia a dia sofisticado", value: "floral" },
        { text: "Atividades diárias", value: "aquatico" },
        { text: "Grandes ocasiões", value: "oriental" },
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
      {} as Record<string, number>,
    )

    const winner = Object.entries(counts).reduce((a, b) => (a[1] > b[1] ? a : b))[0]

    const results = {
      especiado: {
        perfume: "Vayn's",
        description:
          "Uma fragrância vibrante e moderna, perfeita para quem busca presença marcante em ambientes noturnos e eventos especiais.",
      },
      floral: {
        perfume: "Baby ou Secret Lun's",
        description:
          "Fragrâncias florais que equilibram delicadeza e sofisticação, ideais para quem aprecia elegância atemporal.",
      },
      aquatico: {
        perfume: "Étér's",
        description:
          "Um perfume energético com frescor aquático, perfeito para quem tem estilo de vida ativo e dinâmico.",
      },
      oriental: {
        perfume: "Adien's",
        description:
          "Uma composição luxuosa e ousada com fixação excepcional, ideal para quem não teme fazer declarações marcantes.",
      },
    }

    return results[winner as keyof typeof results]
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
        <Header title="Seu Perfume Ideal" onBack={onBack} />

        <div className="px-4 md:px-6 py-8 max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 text-center space-y-6 border border-border shadow-sm">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">{result.perfume}</h2>

            <p className="text-muted-foreground text-lg leading-relaxed">{result.description}</p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={resetQuiz}
                className="flex-1 px-6 py-3 bg-card-hover hover:bg-muted text-foreground rounded-md font-medium transition-colors border border-border"
              >
                Refazer Quiz
              </button>
              <a
                href="https://wa.me/5511995384328"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-accent hover:bg-accent-hover text-accent-foreground text-center rounded-md font-medium transition-colors"
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
      <Header title="Descubra Seu Perfume" onBack={onBack} />

      <div className="px-4 md:px-6 py-8 max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded-full transition-colors ${
                  index <= currentQuestion ? "bg-accent" : "bg-muted"
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Pergunta {currentQuestion + 1} de {questions.length}
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8 text-center">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="w-full px-6 py-4 bg-background hover:bg-accent hover:text-accent-foreground text-foreground rounded-md text-left transition-all border border-border"
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

function ContatoView({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Atendimento e Contato" onBack={onBack} />

      <div className="px-4 md:px-6 py-8 max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <p className="text-lg text-muted-foreground">
            Estamos à disposição para atendê-lo com dedicação e profissionalismo.
          </p>
          <p className="text-sm text-muted-foreground">Atendimento disponível 24 horas por dia, 7 dias por semana.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-8 rounded-lg border border-border text-center space-y-4">
            <Phone className="w-12 h-12 mx-auto text-accent" />
            <h3 className="text-xl font-serif text-foreground">WhatsApp</h3>
            <p className="text-muted-foreground">Atendimento direto e personalizado</p>
            <a
              href="https://wa.me/5511995384328"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-colors"
            >
              (11) 99538-4328
            </a>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border text-center space-y-4">
            <Instagram className="w-12 h-12 mx-auto text-accent" />
            <h3 className="text-xl font-serif text-foreground">Instagram</h3>
            <p className="text-muted-foreground">Acompanhe nossas novidades</p>
            <a
              href="https://instagram.com/gomez_bellezza"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-3 bg-accent hover:bg-accent-hover text-accent-foreground rounded-md font-medium transition-colors"
            >
              @gomez_bellezza
            </a>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-serif text-foreground mb-6 text-center">Como Podemos Ajudar</h3>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Consultas Personalizadas:</strong> Ajudamos você a escolher o perfume
              ideal para seu estilo e ocasião.
            </p>
            <p>
              <strong className="text-foreground">Informações sobre Produtos:</strong> Detalhes completos sobre fixação,
              notas e características de cada fragrância.
            </p>
            <p>
              <strong className="text-foreground">Disponibilidade e Entrega:</strong> Consulte estoque e opções de
              entrega para sua região.
            </p>
            <p>
              <strong className="text-foreground">Orientações de Uso:</strong> Dicas profissionais para maximizar a
              fixação e durabilidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

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

interface NavButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  icon?: React.ReactNode
  variant?: "primary" | "secondary"
}

function NavButton({ children, onClick, href, icon, variant = "primary" }: NavButtonProps) {
  const baseClasses =
    "flex items-center justify-between w-full px-6 py-4 rounded-lg text-left font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
  const variantClasses =
    variant === "primary"
      ? "bg-card hover:bg-card-hover border border-border shadow-sm hover:shadow-md text-foreground"
      : "bg-accent/10 hover:bg-accent/20 border border-accent/20 text-foreground"

  const content = (
    <>
      <span>{children}</span>
      {icon}
    </>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${variantClasses}`}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
      {content}
    </button>
  )
}
