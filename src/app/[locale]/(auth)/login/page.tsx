import { Metadata } from "next";

import { AuthLogo } from "@/components/auth/AuthLogo";
import { AuthLogoMobile } from "@/components/auth/AuthLogoMobile";
import { AuthPageBackground } from "@/components/auth/AuthPageBackground";
import { LoginForm } from "@/components/auth/LoginForm";
import { ThemeButtonAuth } from "@/components/layout/ThemeButtonAuth";

export const metadata: Metadata = { title: "Login" };

const Login = () => {
  return (
    <>
      <AuthPageBackground />

      {/* Capa de fondo suave */}
      <div className="fixed inset-0 z-0 bg-authPageBg" />

      {/* Botón de tema en una esquina superior */}
      <div className="fixed top-5 right-5 z-50">
        <ThemeButtonAuth />
      </div>

      <main className="relative z-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 py-8">
        <section className="w-full max-w-6xl grid lg:grid-cols-2 overflow-hidden backdrop-blur-xl rounded-2xl">
          {/* LADO IZQUIERDO: DISEÑO PROFESIONAL */}
          <div className="hidden lg:flex flex-col justify-between px-16 py-20 border-r border-mainBorder/50 relative">
            {/* Espaciador superior para empujar el texto al centro */}
            <div className="flex-grow flex flex-col justify-center">
              <div className="max-w-md space-y-4">
                <h1 className="text-4xl font-extrabold text-primaryText tracking-tight leading-tight">
                  Bienvenido
                </h1>
                <p className="text-lg text-secondaryText/80 font-medium">
                  Inicia sesión para continuar.
                </p>
              </div>
            </div>

            {/* EL LOGO: Posicionado abajo, pequeño y elegante */}
            <div className="pt-10 flex items-center opacity-80 hover:opacity-100 transition-opacity">
              <div className="scale-75 origin-left">
                <AuthLogo />
              </div>
            </div>
          </div>

          {/* LADO DERECHO: FORMULARIO */}
          <div className="flex flex-col justify-center px-6 xsm:px-10 sm:px-14 py-12 sm:py-16">
            {/* Logo solo para móviles (centrado arriba) */}
            <div className="lg:hidden flex justify-center mb-10">
              <AuthLogoMobile />
            </div>

            <div className="w-full max-w-md mx-auto">
              <LoginForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
