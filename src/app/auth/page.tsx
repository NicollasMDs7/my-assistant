"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div 
    className="flex min-h-screen items-center justify-center p-4 sm:p-6 relative bg-cover bg-center bg-fixed"
    style={{ backgroundImage: "url('/images/bg-login.jpg')" }}
  >
      <Card className="w-full max-w-sm rounded-lg shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">
            {isLogin ? "Entrar na sua conta" : "Criar uma conta"}
          </CardTitle>
          <CardDescription>
            {isLogin
              ? "Insira seu e-mail e senha abaixo para acessar."
              : "Preencha os campos para criar sua nova conta."}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="email@exemplo.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          {!isLogin && (
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirmar Senha</Label>
              <Input id="confirm-password" type="password" placeholder="••••••••" />
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">
            {isLogin ? "Entrar" : "Cadastrar"}
          </Button>
          <Button
            variant="link"
            onClick={handleToggle}
            className="w-full text-sm text-center text-gray-500 hover:text-gray-900"
          >
            {isLogin ? "Não tem uma conta? Cadastre-se" : "Já tem uma conta? Faça login"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
