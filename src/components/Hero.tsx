import { ChevronRight, } from "lucide-react";
import logo from "../assets/logo_locs_simples_branca.png";

export function Hero() {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Neon accents */}
      <div className="absolute top-20 left-0 w-1 h-64 bg-gradient-to-b from-blue-400 via-white-500 to-green-500"></div>
      <div className="absolute top-40 right-0 w-1 h-48 bg-gradient-to-b from-green-400 via-white-500 to-blue-500"></div>

      <nav className="relative container mx-auto px-4 py-6 border-b-4 border-white-400">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center">
              <img src={logo} alt="Logo" className="w-40 h-12 object-contain" />
            </div>
            <div>
              <div className="text-xs text-white-400 tracking-widest">
                LABORATÓRIO DE OTIMIZAÇÃO, CONTROLE E SIMULAÇÃO DE PROCESSOS
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 uppercase text-sm tracking-wide">
            <a
              href="#sobre"
              className="hover:text-green-400 transition-colors"
            >
              Sobre
            </a>
            <a
              href="#recursos"
              className="hover:text-blue-400 transition-colors"
            >
              Recursos
            </a>
            <a
              href="#tutoriais"
              className="hover:text-green-400 transition-colors"
            >
              Tutoriais
            </a>
            <a
              href="#comunidade"
              className="hover:text-blue-400 transition-colors"
            >
              Comunidade
            </a>
          </div>
        </div>
      </nav>

      <div className="relative container mx-auto px-4 py-20 md:py-10">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-white text-black px-6 py-2 mb-8 uppercase tracking-wider text-sm skew-x-[-5deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="inline-block skew-x-[5deg]">
              Acesso Livre • Projeto Universitário
            </span>
          </div>


          <h1 className="text-6xl md:text-8xl mb-6 uppercase leading-none">
            <span className="inline-block bg-gradient-to-r from-green-400 via-white-500 to-blue-400 text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(0,255,100,0.5)]">
              Simulação
            </span>
            <br />
            <span className="text-white">de Processos</span>
            <br />
            <span className="text-blue-400">Químicos</span>
          </h1>

          <div className="border-l-4 border-cyan-400 pl-6 mb-10">
            <p className="text-xl md:text-2xl text-gray-300">
              Repositório educacional com simulações práticas em AVEVA,
              DWSIM e outras ferramentas essenciais. Materiais didáticos
              e tutoriais focados na formação de engenheiros.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-8 py-4 uppercase tracking-wider hover:bg-cyan-400 transition-all hover:translate-x-1 hover:translate-y-[-4px] shadow-[4px_4px_0px_0px_rgba(0,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,255,255,1)] flex items-center justify-center gap-2">
              Acessar Materiais
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="border-4 border-red-500 text-white px-8 py-4 uppercase tracking-wider hover:bg-red-500 transition-all">
              Ver Tutoriais
            </button>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-green-400 via-blue-500 to-red-400"></div>
    </div>
  );
}