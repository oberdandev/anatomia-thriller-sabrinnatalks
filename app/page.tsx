import Image from "next/image";
import { Search, BookOpen, Users, CheckCircle, Clock, PlayCircle } from 'lucide-react';

export default function Home() {
  return (
   <div className="min-h-screen bg-black text-gray-100">
      <div className="relative">
        <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-red-600 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-900 rounded-full blur-3xl" />
          </div>


          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="mb-8 inline-block">
              <div className="relative">
                <Search className="w-16 h-16 text-red-600 mx-auto mb-4" strokeWidth={1.5} />
                <div className="absolute -inset-4 bg-red-600/20 rounded-full blur-xl" />
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              <span className="text-gray-100">ANATOMIA</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                DE UM THRILLER
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Desvende os segredos das histórias que aceleram seu coração e roubam seu sono.
              Uma imersão profunda na arte do suspense.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-5 h-5 text-red-500" />
                <span>2-5 horas de conteúdo</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
              <div className="flex items-center gap-2 text-gray-300">
                <PlayCircle className="w-5 h-5 text-red-500" />
                <span>Acesso imediato</span>
              </div>
            </div>

            <div className="mb-8">
              <div className="inline-block relative">
                <div className="text-gray-500 line-through text-2xl mb-2">R$ 150,00</div>
                <div className="text-5xl font-bold text-red-500 mb-2">R$ 99,99</div>
                <div className="absolute -top-2 -right-16 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold rotate-12">
                  -33%
                </div>
              </div>
            </div>

            <a
              href="https://chk.eduzz.com/VWGZ2PZ407"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-12 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/50"
            >
              QUERO GARANTIR MINHA VAGA
            </a>

            <p className="text-sm text-gray-500 mt-4">
              Você já sentiu seu coração acelerar ao virar uma página de um romance policial?
            </p>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative">
          <div className="absolute inset-0 opacity-5 pointer-events-none"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
               }} />

          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              O que é este curso?
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-12" />

            <div className="bg-gray-950/50 backdrop-blur border border-gray-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 relative z-10">
                Este <span className="text-red-500 font-semibold">não é apenas um curso sobre livros de mistério</span>.
                É uma imersão na história e na teoria literária do suspense.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed relative z-10">
                Aprenda sobre o contexto social e histórico por detrás dos romances policiais, desde a sua formação
                até a contemporaneidade, bem como os aspectos teóricos que moldam o gênero.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-black relative">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Para quem é este curso  ?
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-12" />

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "Leitores Apaixonados",
                  description: "Para quem ama romances policiais e quer conhecer o gênero a fundo"
                },
                {
                  icon: Users,
                  title: "Fãs de Thriller",
                  description: "Admiradores de séries, filmes e livros de thriller que buscam mais profundidade"
                },
                {
                  icon: Search,
                  title: "Escritores & Curiosos",
                  description: "Aspirantes a escritores e curiosos por narrativas que exploram a mente humana"
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-950/50 backdrop-blur border border-gray-800 rounded-xl p-8 hover:border-red-600/50 transition-all duration-300 group">
                  <item.icon className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold mb-3 text-gray-100">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-black via-red-950/10 to-black relative">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Módulos do Curso
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-12" />

            <div className="space-y-4">
              {[
                { number: "01", title: "O que é crime?", description: "Aspectos sociais e literários do crime" },
                { number: "02", title: "Romances de Newgate e sensação", description: "A origem do crime fiction no período entre 1830 a 1860" },
                { number: "03", title: "Poe e o nascimento do romance policial", description: "Como Poe criou o gênero detetivesco e suas características" },
                { number: "04", title: "O que é thriller?", description: "Descubra a estrutura narrativa de um thriller e os seus subgêneros" },
                { number: "05", title: "Mulheres e crime fiction", description: "O papel das mulheres na literatura de crime" }
              ].map((module, index) => (
                <div key={index} className="bg-gray-950/50 backdrop-blur border border-gray-800 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300 group">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-600/20 rounded-lg flex items-center justify-center border border-red-600/30 group-hover:bg-red-600/30 transition-colors">
                      <span className="text-2xl font-bold text-red-500">{module.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-gray-100">{module.title}</h3>
                      <p className="text-gray-400">{module.description}</p>
                    </div>
                    <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        <section className="py-20 px-4 bg-black relative">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              BÔNUS EXCLUSIVO
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-12" />

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "Recomendações dos Meus Thrillers Favoritos",
                  description: "Uma curadoria exclusiva dos melhores thrillers que moldam o gênero"
                },
                {
                  icon: Search,
                  title: "Resenhas Exclusivas de Livros do Gênero",
                  description: "Análises profundas que exploram técnicas narrativas e construção do suspense"
                },
                {
                  icon: Users,
                  title: "Leituras Conjuntas com Discussões ao Vivo",
                  description: "Veja na prática a construção das narrativas de mistério com discussões ao vivo"
                }
              ].map((bonus, index) => (
                <div key={index} className="bg-gray-950/50 backdrop-blur border border-gray-800 rounded-xl p-8 hover:border-red-600/50 transition-all duration-300 group">
                  <bonus.icon className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold mb-3 text-gray-100">{bonus.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{bonus.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <h3 className="text-3xl font-bold text-center mb-12 text-gray-100">Leituras Conjuntas do Curso</h3>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-950/50 backdrop-blur border border-gray-800 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden bg-black flex items-center justify-center">
                    <img src="/morte_nilo.jpg" alt="Morte no Nilo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-2xl font-bold text-red-500 mb-2">Morte no Nilo</h4>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-5 h-5 text-red-500" />
                      <span className="font-semibold">Período: Dezembro</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-950/50 backdrop-blur border border-gray-800 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden bg-black flex items-center justify-center">
                    <img src="/o_nome_da_rosa.jpg" alt="O Nome da Rosa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-2xl font-bold text-red-500 mb-2">O Nome da Rosa</h4>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-5 h-5 text-red-500" />
                      <span className="font-semibold">Período: Janeiro e Fevereiro</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-950/50 backdrop-blur border border-gray-800 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden bg-black flex items-center justify-center">
                    <img src="/dragao_vermelho.jpg" alt="Dragão Vermelho" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-2xl font-bold text-red-500 mb-2">Dragão Vermelho</h4>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-5 h-5 text-red-500" />
                      <span className="font-semibold">Período: Março</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-black relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Sobre mim
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-12" />

            <div className="bg-gray-950/50 backdrop-blur border border-gray-800 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-96 md:h-full min-h-80 overflow-hidden">
                  <img src="/sabrinna.jpg" alt="Sabrinna Talks" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
                </div>

                <div className="p-8 md:p-12">
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-100">Sabrinna Talks</h3>
                  <div className="space-y-6 text-gray-300 leading-relaxed">

                      <div>
                      <p className="text-lg text-gray-200 mb-2">
                        <span className="text-red-500 font-semibold">Bacharel em Ciências Sociais</span>
                      </p>
                      <p>pela Universidade Federal do Amazonas (UFAM)</p>
                    </div>

                    <div>
                      <p className="text-lg text-gray-200 mb-2">
                        <span className="text-red-500 font-semibold">Formada em Letras - Língua e Literatura Inglesa</span>
                      </p>
                      <p>pela Universidade Federal do Amazonas (UFAM)</p>
                    </div>

                    <div>
                      <p className="text-lg text-gray-200 mb-2">
                        <span className="text-red-500 font-semibold">Mestre em Estudos Literários</span>
                      </p>
                      <p>pela Universidade Federal do Amazonas (UFAM)</p>
                    </div>

                    <p className="text-xl text-gray-100 pt-4 border-t border-gray-700">
                        Sabrinna é apaixonada por desvendar os mistérios por trás das histórias que nos mantêm acordados até tarde da noite. Ela traz uma perspectiva única que combina análise acadêmica com paixão genuína pela literatura de mistério.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-black via-red-950/20 to-black relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Quer mudar a forma como você lê thrillers?
            </h2>

            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
               Você nunca mais vai olhar para um livro de suspense da mesma forma.
            </p>

            <div className="mb-8">
              <div className="inline-block relative">
                <div className="text-gray-500 line-through text-2xl mb-2">R$ 150,00</div>
                <div className="text-5xl font-bold text-red-500 mb-2">R$ 99,99</div>
                <div className="absolute -top-2 -right-16 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold rotate-12">
                  -33%
                </div>
              </div>
            </div>

            <a
              href="https://chk.eduzz.com/VWGZ2PZ407"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-12 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/50"
            >
              GARANTIR MINHA VAGA AGORA
            </a>

            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Certificado de conclusão</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Pagamento seguro</span>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gray-950 border-t border-gray-800 py-8 px-4">
          <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
            <p>&copy; 2025 Anatomia de Um Thriller - Sabrinna Talks. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
