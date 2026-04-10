import { Metadata } from "next";

import { AuthLogo } from "@/components/auth/AuthLogo";
import { AuthLogoMobile } from "@/components/auth/AuthLogoMobile";
import { SignUpForm } from "@/components/auth/SignUpForm";
import { ThemeButtonAuth } from "@/components/layout/ThemeButtonAuth";

const Register = () => {
  return (
    <>
      <div
        className="fixed inset-0 z-0 bg-authPageBg transition-colors duration-300"
        style={{ backgroundImage: "none" }}
      />

      <ThemeButtonAuth />

      <div className="relative z-20 min-h-dvh grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-center px-16 xl:px-24">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold text-primaryText leading-tight">
              Crea tu cuenta
            </h1>
            <p className="mt-6 text-lg text-secondaryText leading-8">
              Regístrate para empezar a organizar tus tareas
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-10 sm:px-10">
          <div className="w-full max-w-md backdrop-blur-xl px-6 sm:px-10 py-10 shadow-xl transition-colors duration-300">
            <div className="hidden sm:flex justify-center mb-8">
              <AuthLogo />
            </div>
            <div className="sm:hidden flex justify-center mb-6">
              <AuthLogoMobile />
            </div>
            <SignUpForm />
          </div>
        </div>
      </div>
    </>
  );
};

export const metadata: Metadata = { title: "Register" };

export default Register;
