"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Calendar as CalendarIcon } from "lucide-react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, parse } from "date-fns";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [birthDate, setBirthDate] = useState<Date | undefined>(undefined);
  const [formValues, setFormValues] = useState({
    Name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
  });

  const router = useRouter();

  const handleToggle = () => setIsLogin(!isLogin);
  const handleHomeClick = () => router.push("/");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "birthDate") {
      const parsedDate = e.target.value
        ? parse(e.target.value, "dd/MM/yyyy", new Date())
        : undefined;
      setBirthDate(parsedDate);
    }
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleGoogleAuth = (response: any) => {
    console.log("Google login response:", response);
  };

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-950 to-slate-900 font-inter text-white">
        {/* Cabeçalho */}
        <header className="fixed top-0 left-0 w-full z-20 bg-gray-950/80 backdrop-blur-sm p-4 border-b border-gray-800">
          <div className="container mx-auto flex items-center justify-between">
            <span className="text-2xl font-bold tracking-tighter text-blue-400">
              AI Assistant
            </span>
            <Button
              onClick={handleHomeClick}
              className="rounded-full px-6 py-2 hover:scale-105 transition-transform"
            >
              Home
            </Button>
          </div>
        </header>

        {/* Conteúdo */}
        <main className="flex-1 flex items-center justify-center p-4 sm:p-6 pt-20">
          <Card className="w-full max-w-md rounded-lg shadow-2xl bg-gray-900 border border-gray-800 text-white animate-fade-in-scale">
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
              {!isLogin && (
                <>
                  <div className="grid gap-2">
                    <Label htmlFor="Name" className="text-gray-300">
                      Nome
                    </Label>
                    <Input
                      id="Name"
                      value={formValues.Name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-md"
                    />
                  </div>

                  {/* Data de Nascimento com input e botão de calendário */}
                  <div className="grid gap-2 relative">
                    <Label htmlFor="birthDate" className="text-gray-300">
                      Data de Nascimento
                    </Label>
                    <div className="relative">
                      <Input
                        id="birthDate"
                        value={birthDate ? format(birthDate, "dd/MM/yyyy") : ""}
                        onChange={handleChange}
                        placeholder="dd/mm/yyyy"
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-md pr-10"
                      />
                      <Popover>
                        <PopoverTrigger asChild>
                          <button
                            type="button"
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-400"
                          >
                            <CalendarIcon size={20} />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={birthDate}
                            onSelect={(date) => {
                              setBirthDate(date || undefined);
                              if (date) {
                                setFormValues({
                                  ...formValues,
                                  birthDate: format(date, "dd/MM/yyyy"),
                                });
                              }
                            }}
                            className="border-0"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone" className="text-gray-300">
                      Telefone
                    </Label>
                    <Input
                      id="phone"
                      value={formValues.phone}
                      onChange={handleChange}
                      placeholder="(99) 99999-9999"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-md"
                    />
                  </div>
                </>
              )}

              {/* Email */}
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-gray-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="email@exemplo.com"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-md"
                />
              </div>

              {/* Senha */}
              <div className="grid gap-2 relative">
                <Label htmlFor="password" className="text-gray-300">
                  Senha
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formValues.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-md pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-400"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirmar senha */}
              {!isLogin && (
                <div className="grid gap-2 relative">
                  <Label htmlFor="confirmPassword" className="text-gray-300">
                    Confirmar Senha
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formValues.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-md pr-10"
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-400"
                      onClick={handleShowConfirmPassword}
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {isLogin && (
                <Button
                  variant="link"
                  className="text-sm text-gray-400 hover:text-blue-400 justify-start"
                >
                  Esqueci minha senha
                </Button>
              )}
            </CardContent>

            <CardFooter className="flex flex-col gap-4">
              <Button className="w-full bg-blue-500 hover:bg-blue-600 rounded-md">
                {isLogin ? "Entrar" : "Cadastrar"}
              </Button>

              <div className="w-full flex justify-center">
                <GoogleLogin
                  onSuccess={handleGoogleAuth}
                  onError={() => console.log("Erro ao logar com Google")}
                />
              </div>

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
    </GoogleOAuthProvider>
  );
}
