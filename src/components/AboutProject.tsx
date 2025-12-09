import React from 'react';
import { GraduationCap, Globe, Users, Heart } from 'lucide-react';

const AboutProject = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      
      {/* Padrão de Fundo (Listras Cinzas Sutis) */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-12">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold text-brand-yellow bg-black border-l-4 border-brand-yellow uppercase">
            🎓 Projeto Universitário
          </span>
          <h2 className="text-5xl font-black text-black uppercase tracking-tighter">
            Sobre o <span className="relative inline-block">
              Projeto
              <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-pink/30 -z-10"></span>
            </span>
          </h2>
        </div>

        {/* Card Principal Preto */}
        <div className="relative p-8 md:p-12 mb-20 bg-black border-l-8 border-brand-cyan shadow-2xl">
          {/* Decoração de Losango Amarelo */}
          <div className="absolute top-4 right-4 w-7 h-7 border-4 border-brand-yellow transform rotate-45 hidden md:block"></div>

          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            O <strong className="text-brand-yellow">ENGSIM </strong> é uma iniciativa acadêmica desenvolvida na Universidade Federal dos Vales do Jequitinhonha e Mucuri com o 
            objetivo de democratizar o acesso ao conhecimento em simulação de processos químicos 
            utilizando AVEVA Process Simulation.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Este repositório educacional reúne simulações prontas, tutoriais detalhados e materiais de apoio 
            criados por professores e alunos, promovendo o aprendizado colaborativo e prático em engenharia 
            de processos.
          </p>

          <p className="text-gray-300 text-lg">
            Todo o conteúdo é disponibilizado <span className="bg-green-500 text-black font-bold px-2 py-0.5">GRATUITAMENTE</span> para estudantes, 
            professores e entusiastas da área, contribuindo para a formação de profissionais mais capacitados.
          </p>
        </div>

        {/* Grid de Cards Coloridos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1 - Educacional */}
          <div className="bg-[#00BFFF] p-6 text-center border-b-8 border-black hover:-translate-y-2 transition-transform duration-300">
            <GraduationCap className="w-12 h-12 mx-auto mb-4 text-black" strokeWidth={1.5} />
            <h3 className="text-xl font-black text-black uppercase mb-2">Educacional</h3>
            <p className="text-sm text-black/80 font-medium">100% focado no ensino e aprendizado prático</p>
          </div>

          {/* Card 2 - Acesso Livre */}
          <div className="bg-[#D946EF] p-6 text-center border-b-8 border-black hover:-translate-y-2 transition-transform duration-300">
            <Globe className="w-12 h-12 mx-auto mb-4 text-black" strokeWidth={1.5} />
            <h3 className="text-xl font-black text-black uppercase mb-2">Acesso Livre</h3>
            <p className="text-sm text-black/80 font-medium">Sem logins bloqueados ou custos ocultos</p>
          </div>

          {/* Card 3 - Colaborativo */}
          <div className="bg-[#FFA500] p-6 text-center border-b-8 border-black hover:-translate-y-2 transition-transform duration-300">
            <Users className="w-12 h-12 mx-auto mb-4 text-black" strokeWidth={1.5} />
            <h3 className="text-xl font-black text-black uppercase mb-2">Colaborativo</h3>
            <p className="text-sm text-black/80 font-medium">Criado pela comunidade para a comunidade</p>
          </div>

          {/* Card 4 - Sem Fins Lucrativos */}
          <div className="bg-[#00E676] p-6 text-center border-b-8 border-black hover:-translate-y-2 transition-transform duration-300">
            <Heart className="w-12 h-12 mx-auto mb-4 text-black" strokeWidth={1.5} />
            <h3 className="text-xl font-black text-black uppercase mb-2">Sem Fins Lucrativos</h3>
            <p className="text-sm text-black/80 font-medium">Feito por paixão à engenharia química</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutProject;