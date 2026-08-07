import {
  Clock,
  PlayCircle,
  ScrollText,
  Pin,
  Feather,
  BadgeCheck,
  ShieldCheck,
  Zap,
} from "lucide-react";

const CHECKOUT_URL = "https://chk.eduzz.com/VWGZ2PZ407";

export default function Home() {
  return (
    <div className="min-h-screen bg-ink text-parchment font-sans texture-grain">
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-detective.png"
            alt="Detetive vitoriana com lupa sob a névoa de Londres"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink" />
          <div className="fog-layer absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 text-center">
          <p className="highlight-marker font-fell text-sm md:text-base tracking-[0.3em] uppercase inline-block mb-8">
            Curso Livre
          </p>

          <h1 className="font-display font-black leading-[0.95] tracking-tight text-5xl md:text-8xl mb-6">
            <span className="block text-parchment drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              VOZES
            </span>
            <span className="block text-parchment drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              VITORIANAS
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brass via-gaslight-bright to-gaslight italic">
              do Mistério
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-parchment/90 max-w-3xl mx-auto leading-relaxed mb-4 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
            Os maiores mistérios da literatura policial começaram na Era
            Vitoriana.{" "}
            <em className="text-gaslight not-italic font-semibold">
              Está na hora de descobri-los.
            </em>
          </p>

          <p className="font-fell text-parchment-dim tracking-widest uppercase text-sm mb-10">
            @sabrinnatalks
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 text-parchment/90">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gaslight" />
              <span>+ de 2 horas de curso</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-brass rounded-full" />
            <div className="flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-gaslight" />
              <span>Acesso imediato</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-brass rounded-full" />
            <div className="flex items-center gap-2">
              <ScrollText className="w-5 h-5 text-gaslight" />
              <span>Discussões gravadas</span>
            </div>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gaslight hover:bg-gaslight-bright text-ink font-display font-bold text-lg md:text-xl px-12 py-5 rounded-sm tracking-wide transition-all duration-300 transform hover:scale-105 gaslight-glow flicker"
          >
            GARANTA SUA VAGA
          </a>

          <p className="font-fell text-parchment-dim mt-6 text-sm tracking-wide">
            Venha investigar as origens das narrativas de mistério conosco!
          </p>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-brass animate-bounce">
          <Feather className="w-6 h-6" />
        </div>
      </section>

      {/* ============ O QUE É O CURSO ============ */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-ink via-coal to-ink overflow-hidden">
        <div className="absolute inset-0 opacity-[0.22]">
          <img
            src="/casebook.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-transparent to-ink/80" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="stamp text-blood mb-6">Dossiê nº 01</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold">
              <span className="highlight-marker">O que é o curso?</span>
            </h2>
          </div>

          <div className="relative bg-soot/60 backdrop-blur border border-brass/25 rounded-sm p-8 md:p-14 overflow-hidden engraving-frame">
            <div className="absolute -top-10 -right-10 w-56 h-56 bg-gaslight/10 rounded-full blur-3xl" />

            <p className="text-2xl md:text-3xl leading-relaxed mb-8 relative z-10">
              Este{" "}
              <span className="text-gaslight font-semibold">
                não é apenas um curso sobre livros de mistério
              </span>
              . É uma imersão na história e na teoria literária do suspense.
            </p>

            <p className="text-xl text-parchment/80 leading-relaxed mb-8 relative z-10">
              Aprenda sobre o contexto social e histórico por trás dos romances
              policiais, desde a sua formação até a contemporaneidade, bem como
              os aspectos teóricos que moldam o gênero.
            </p>

            <p className="font-fell text-lg text-gaslight tracking-wide relative z-10 border-l-2 border-gaslight pl-5">
              São mais de duas horas de curso sobre o melhor da literatura de
              suspense.
            </p>
          </div>
        </div>
      </section>

      {/* ============ MÓDULOS ============ */}
      <section className="relative py-24 px-6 bg-ink overflow-hidden">
        <div className="absolute inset-0 opacity-[0.2]">
          <img
            src="/map-ravencroft.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-transparent to-ink/80" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="stamp text-blood mb-6">Dossiê nº 02</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-parchment">
              Módulos
            </h2>
            <div className="w-24 h-0.5 bg-brass mx-auto mt-6" />
          </div>

          <div className="space-y-4">
            {[
              {
                n: "01",
                title: "O que é crime?",
                desc: "Aspectos sociais e literários do crime",
              },
              {
                n: "02",
                title: "Romances de Newgate e Sensação (1830–1860)",
                desc: "A origem do crime fiction entre 1830 e 1860",
              },
              {
                n: "03",
                title: "Poe e o nascimento do romance policial",
                desc: "Como Poe criou o gênero detetivesco",
              },
              {
                n: "04",
                title: "O que é thriller?",
                desc: "A estrutura narrativa do thriller e seus subgêneros",
              },
              {
                n: "05",
                title: "Mulheres e crime fiction",
                desc: "O papel das mulheres na literatura de crime",
              },
              {
                n: "06",
                title: "Vozes Vitorianas do Mistério",
                desc: "A produção vitoriana de mistério e suas pioneiras",
              },
            ].map((mod) => (
              <div
                key={mod.n}
                className="bg-coal/50 backdrop-blur border border-brass/20 rounded-sm p-6 md:p-7 hover:border-gaslight/40 transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <Pin className="w-5 h-5 text-blood flex-shrink-0 mt-1 group-hover:text-gaslight transition-colors" />
                  <div className="flex-1">
                    <div className="font-fell text-gaslight text-sm tracking-widest mb-1">
                      Módulo {mod.n}
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-parchment mb-1">
                      {mod.title}
                    </h3>
                    <p className="text-parchment-dim text-lg">{mod.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ O QUE JÁ LEMOS JUNTOS ============ */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-ink via-coal to-ink">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="stamp text-blood mb-6">Arquivo do Clube</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-parchment">
              O que já lemos juntos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                img: "/morte_nilo.jpg",
                title: "Morte no Nilo",
                author: "Agatha Christie",
              },
              {
                img: "/o_nome_da_rosa.jpg",
                title: "O Nome da Rosa",
                author: "Umberto Eco",
              },
              {
                img: "/dragao_vermelho.jpg",
                title: "Dragão Vermelho",
                author: "Thomas Harris",
              },
            ].map((book) => (
              <div
                key={book.title}
                className="bg-soot/60 backdrop-blur border border-brass/20 rounded-sm overflow-hidden hover:border-gaslight/40 transition-all duration-300 group engraving-frame"
              >
                <div className="relative aspect-[2/3] overflow-hidden bg-ink flex items-center justify-center">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-display text-2xl font-bold text-gaslight mb-1">
                    {book.title}
                  </h4>
                  <p className="font-fell text-parchment-dim tracking-wide">
                    {book.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-fell text-gaslight tracking-wide text-lg">
              <Pin className="inline w-4 h-4 mr-2 -mt-1" />
              Todas as discussões foram gravadas e estão disponíveis na
              plataforma.
            </p>
          </div>
        </div>
      </section>

      {/* ============ VOCÊ VAI CONHECER ============ */}
      <section className="relative py-24 px-6 bg-ink overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-20 hidden lg:block">
          <img
            src="/engraving-detective.png"
            alt="Gravura vitoriana"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <p className="stamp text-blood mb-6">Dossiê nº 03</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-parchment">
              <span className="highlight-marker">Vozes Vitorianas do Mistério</span>
            </h2>
            <p className="font-display text-2xl md:text-3xl text-parchment/90 mt-6">
              Você vai conhecer:
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto">
            {[
              "As obras que inspiraram os grandes detetives da ficção moderna",
              "Autores e autoras fundamentais que muitas vezes ficam fora das listas tradicionais",
              "Uma leitura crítica da produção vitoriana de mistério, articulando contexto histórico, teoria literária e análise textual",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-coal/40 backdrop-blur border border-brass/15 rounded-sm p-6"
              >
                <Pin className="w-5 h-5 text-blood flex-shrink-0 mt-1" />
                <p className="text-xl text-parchment leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ O QUE VAMOS LER ============ */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-ink via-coal to-ink">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="stamp text-blood mb-6">Cronograma de Investigação</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-parchment">
              O que vamos ler
            </h2>
          </div>

          {/* Setembro */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="relative aspect-[2/3] w-full max-w-md mx-auto overflow-hidden rounded-sm engraving-frame">
              <img
                src="/loveday-brooke.png"
                alt="Loveday Brooke"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />
            </div>
            <div>
              <p className="font-fell text-gaslight tracking-[0.2em] uppercase mb-3">
                Setembro
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-parchment mb-2">
                Loveday Brooke
              </h3>
              <p className="font-fell text-parchment-dim text-lg mb-4">
                Autora: Catherine L. Pirkis &nbsp;|&nbsp; Gênero: literatura policial
              </p>
              <span className="inline-block bg-gaslight/15 border border-gaslight/30 text-gaslight-bright px-4 py-2 rounded-sm font-fell tracking-wide text-sm mb-6">
                A primeira detetive mulher escrita por uma autora
              </span>
              <p className="text-lg text-parchment/80 leading-relaxed">
                Loveday Brooke ocupa um lugar de destaque na história da
                literatura policial não apenas por sua habilidade em solucionar
                mistérios, mas também por seu pioneirismo. Sua presença
                consolidou a ideia de que o talento investigativo não depende do
                gênero, tornando-se um marco para a representação das mulheres
                no romance de detetive.
              </p>
            </div>
          </div>

          {/* Out/Nov */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16 md:flex-row-reverse">
            <div className="md:order-2 relative aspect-[2/3] w-full max-w-md mx-auto overflow-hidden rounded-sm engraving-frame">
              <img
                src="/o-segredo-de-lady-audrey.png"
                alt="O Segredo de Lady Audley"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />
            </div>
            <div className="md:order-1">
              <p className="font-fell text-gaslight tracking-[0.2em] uppercase mb-3">
                Outubro e Novembro
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-parchment mb-2">
                O Segredo de Lady Audley
              </h3>
              <p className="font-fell text-parchment-dim text-lg mb-4">
                Autora: Mary Elizabeth Braddon &nbsp;|&nbsp; Gênero: romance de sensação
              </p>
              <span className="inline-block bg-gaslight/15 border border-gaslight/30 text-gaslight-bright px-4 py-2 rounded-sm font-fell tracking-wide text-sm mb-6">
                Mistério, suspense e crítica social
              </span>
              <p className="text-lg text-parchment/80 leading-relaxed">
                Uma das obras mais importantes da literatura de sensação
                (sensation novel), gênero que conquistou enorme popularidade na
                Inglaterra vitoriana e exerceu forte influência sobre o
                desenvolvimento da literatura policial.
              </p>
            </div>
          </div>

          {/* Dezembro */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[2/3] w-full max-w-md mx-auto overflow-hidden rounded-sm engraving-frame">
              <img
                src="/o-segredo-morto.png"
                alt="O Segredo Morto"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />
            </div>
            <div>
              <p className="font-fell text-gaslight tracking-[0.2em] uppercase mb-3">
                Dezembro
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-parchment mb-2">
                O Segredo Morto
              </h3>
              <p className="font-fell text-parchment-dim text-lg mb-4">
                Autor: Wilkie Collins &nbsp;|&nbsp; Gênero: romance de sensação
              </p>
              <span className="inline-block bg-gaslight/15 border border-gaslight/30 text-gaslight-bright px-4 py-2 rounded-sm font-fell tracking-wide text-sm mb-6">
                As origens do suspense moderno
              </span>
              <p className="text-lg text-parchment/80 leading-relaxed">
                Uma trama de cartas ocultas, identidades encobertas e verdades
                enterradas pelo tempo, demonstrando como um único segredo pode
                transformar o destino de gerações. Um clássico crucial para
                compreender a evolução do romance de mistério e as origens da
                ficção policial moderna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ POR QUE COMIGO ============ */}
      <section className="relative py-24 px-6 bg-ink">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="stamp text-blood mb-6">Investigadora-chefe</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-parchment">
              Por que comigo?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center bg-coal/50 backdrop-blur border border-brass/20 rounded-sm overflow-hidden engraving-frame">
            <div className="relative h-96 md:h-full min-h-[24rem] overflow-hidden">
              <img
                src="/sabrinna.jpg"
                alt="Sabrinna Talks"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-coal/80" />
            </div>

            <div className="p-8 md:p-12">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-8 text-parchment">
                Sabrinna Talks
              </h3>

              <div className="space-y-6 text-parchment/90 leading-relaxed text-lg">
                <div>
                  <p className="text-gaslight font-semibold mb-1">
                    Bacharel em Ciências Sociais
                  </p>
                  <p className="font-fell text-parchment-dim">
                    Universidade Federal do Amazonas (UFAM)
                  </p>
                </div>
                <div>
                  <p className="text-gaslight font-semibold mb-1">
                    Licenciada em Letras — Língua e Literatura Inglesa
                  </p>
                  <p className="font-fell text-parchment-dim">
                    Universidade Federal do Amazonas (UFAM)
                  </p>
                </div>
                <div>
                  <p className="text-gaslight font-semibold mb-1">
                    Mestre em Estudos Literários
                  </p>
                  <p className="font-fell text-parchment-dim">
                    Universidade Federal do Amazonas (UFAM)
                  </p>
                </div>

                <p className="pt-6 border-t border-brass/20 text-parchment">
                  Sabrinna é apaixonada por desvendar os mistérios por trás das
                  histórias que nos mantêm acordados até tarde. Ela traz uma
                  perspectiva única que combina análise acadêmica com paixão
                  genuína pela literatura de mistério.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-ink via-coal to-ink">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-fell text-parchment-dim tracking-[0.3em] uppercase mb-6">
            Dossiê Final
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 text-parchment">
            Os maiores mistérios da literatura policial começaram na Era
            Vitoriana. Está na hora de descobri-los.
          </h2>

          <p className="text-xl text-parchment/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Garanta sua vaga e venha investigar as origens das narrativas de
            mistério conosco!
          </p>

          <div className="mb-10">
            <div className="inline-block relative">
              <div className="font-display text-6xl md:text-7xl font-bold text-gaslight-bright mb-2 drop-shadow-[0_0_24px_rgba(240,180,41,0.35)]">
                R$ 15,50
              </div>
              <div className="absolute -top-6 -right-10 bg-blood text-parchment px-3 py-1 rounded-sm text-sm font-bold rotate-12 font-fell tracking-wide">
                12x de
              </div>
            </div>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gaslight hover:bg-gaslight-bright text-ink font-display font-bold text-lg md:text-xl px-12 py-5 rounded-sm tracking-wide transition-all duration-300 transform hover:scale-105 gaslight-glow flicker mb-10"
          >
            GARANTIR MINHA VAGA AGORA
          </a>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-parchment-dim">
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-gaslight" />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gaslight" />
              <span>Certificado de conclusão</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-gaslight" />
              <span>Pagamento seguro</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-coal border-t border-brass/15 py-10 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-fell text-parchment-dim tracking-widest text-sm mb-3">
            @sabrinnatalks
          </p>
          <p className="text-parchment-dim text-sm">
            &copy; 2025 Vozes Vitorianas do Mistério — Sabrinna Talks. Todos os
            direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
