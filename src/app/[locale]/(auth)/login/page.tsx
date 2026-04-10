// =========================
// LOGIN PAGE
// =========================
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

      <div className="fixed inset-0 z-0 bg-authPageBg" />

      <ThemeButtonAuth />

      <main className="relative z-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 py-8">
        <section className="w-full max-w-6xl grid lg:grid-cols-2 overflow-hidden backdrop-blur-xl shadow-xl">
          <div className="hidden lg:flex flex-col justify-center px-16 py-20 border-r border-mainBorder">
            <div className="max-w-md space-y-6">
              <AuthLogo />
              <h1 className="text-4xl font-bold text-primaryText leading-tight">
                Bienvenido de nuevo
              </h1>
              <p className="text-base text-secondaryText leading-7">
                Accede a tu cuenta y continúa
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center px-6 xsm:px-10 sm:px-14 py-12 sm:py-16">
            <div className="lg:hidden flex justify-center mb-8">
              <AuthLogoMobile />
            </div>
            <LoginForm />
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
