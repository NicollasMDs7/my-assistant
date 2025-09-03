"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/auth");
  };
  const handleCtaClick = () => {
    router.push("#cta");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-950 to-slate-900 text-white font-inter">
      {/* Cabeçalho com efeito de transparência e blur */}
      <header className="fixed top-0 left-0 w-full z-20 bg-gray-950/80 backdrop-blur-sm p-4 border-b border-gray-800">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter text-blue-400">
              Aiden Assistant
            </span>
          </div>
          <Button
            onClick={handleLoginClick}
            className="rounded-full px-6 py-2 transition-transform transform hover:scale-105"
          >
            Login
          </Button>
        </div>
      </header>

      {/* Conteúdo Principal (Hero Section) */}
      <main className="flex-1 flex flex-col items-center justify-center text-center p-8 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-4 leading-tight">
            Seu Negócio <span className="text-blue-400">Simplificado.</span>
          </h1>
          <p className="max-w-prose text-lg text-gray-400 mb-8 mx-auto">
            Liberte-se da rotina e maximize sua produtividade, automatizamos
            suas tarefas, organizamos compromissos, respondemos mensagens,
            gerenciamos finanças e muito mais, tudo de forma prática e
            eficiente. Foque no que realmente importa enquanto a automação cuida
            do resto, transformando sua rotina em algo simples e inteligente.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              onClick={handleLoginClick}
              size="lg"
              className="rounded-full px-8 py-3 bg-blue-500 hover:bg-white hover:text-blue-500 transition-colors"
            >
              Começar Agora
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-3 text-blue-500 border-white hover:bg-blue-500 hover:text-white transition-colors"
              onClick={handleCtaClick}
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </main>

      {/* Seção de Recursos (Features) */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Como o Aiden te Ajuda
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card de Automação de Tarefas */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
              <div className="text-blue-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-9 0V3m0 2a2 2 0 002 2h4a2 2 0 002-2V3m-6 0a2 2 0 00-2 2h4a2 2 0 00-2-2h-4zM9 5V3m0 2a2 2 0 002 2h4a2 2 0 002-2V3m-6 0a2 2 0 00-2 2h4a2 2 0 00-2-2h-4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Automação de Tarefas</h3>
              <p className="text-gray-400 text-sm">
                Automatize tarefas repetitivas e libere seu tempo para
                atividades estratégicas que exigem sua atenção.
              </p>
            </div>
            {/* Card de Gestão de Finanças */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
              <div className="text-blue-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-2.485 0-4.5 1.79-4.5 4s2.015 4 4.5 4 4.5-1.79 4.5-4-2.015-4-4.5-4zM12 21a9 9 0 100-18 9 9 0 000 18z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Gestão de Finanças</h3>
              <p className="text-gray-400 text-sm">
                Acompanhe suas finanças, crie relatórios e otimize seus gastos
                com análises inteligentes.
              </p>
            </div>
            {/* Card de Comunicação */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
              <div className="text-blue-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4 0h-4M7 8h10a2 2 0 012 2v6a2 2 0 01-2 2h-4v4l-4-4H7a2 2 0 01-2-2V8a2 2 0 012-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Comunicação Inteligente
              </h3>
              <p className="text-gray-400 text-sm">
                Responda a e-mails e mensagens de forma automatizada, mantendo
                seus clientes sempre informados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Chamada para Ação (CTA) */}
      <section className="py-20 px-4" id="cta">
        <div className="container mx-auto text-center">
          <div className="bg-blue-600 rounded-2xl p-8 sm:p-12 shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
              Pronto para Simplificar sua Rotina?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de profissionais que estão transformando a
              forma como trabalham. Comece a usar o **Aiden Assistant** hoje
              mesmo e liberte seu verdadeiro potencial.
            </p>
            <Button
              onClick={handleLoginClick}
              size="lg"
              className="rounded-full px-10 py-4 bg-white text-blue-600 font-bold hover:bg-gray-100 transition-colors"
            >
              Começar Agora
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
