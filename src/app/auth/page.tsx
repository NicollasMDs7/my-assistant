"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleHomeClick = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-950 to-slate-900 font-inter text-white">
      {/* Cabeçalho fixo no topo da página */}
      <header className="fixed top-0 left-0 w-full z-20 bg-gray-950/80 backdrop-blur-sm p-4 border-b border-gray-800">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter text-blue-400">AI Assistant</span>
          </div>
          <Button onClick={handleHomeClick} className="rounded-full px-6 py-2 transition-transform transform hover:scale-105">
            Home
          </Button>
        </div>
      </header>

      {/* Conteúdo principal do formulário, com padding para evitar sobreposição do cabeçalho */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 pt-20">
        <Card
          className="w-full max-w-sm rounded-lg shadow-2xl bg-gray-900 border border-gray-800 text-white animate-fade-in-scale"
          key={isLogin.toString()}
        >
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-3xl font-bold tracking-tighter">
              {isLogin ? "Entrar" : "Cadastrar"}
            </CardTitle>
            <CardDescription className="text-gray-400">
              {isLogin
                ? "Insira seu e-mail e senha abaixo para acessar sua conta."
                : "Preencha os campos para criar uma nova conta."}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-gray-300">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@exemplo.com"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-md"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-gray-300">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-md"
              />
            </div>
            {!isLogin && (
              <div className="grid gap-2 animate-fade-in">
                <Label htmlFor="confirm-password" className="text-gray-300">Confirmar Senha</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-md"
                />
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full bg-blue-500 hover:bg-blue-600 rounded-md">
              {isLogin ? "Entrar" : "Cadastrar"}
            </Button>
            <Button
              variant="link"
              onClick={handleToggle}
              className="w-full text-sm text-center text-gray-400 hover:text-blue-400"
            >
              {isLogin
                ? "Não tem uma conta? Cadastre-se"
                : "Já tem uma conta? Faça login"}
            </Button>
          </CardFooter>
        </Card>
      </main>
      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-scale {
          animation: fadeInScale 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
