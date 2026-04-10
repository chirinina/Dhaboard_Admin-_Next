import Link from "next/link";

import { GithubIcon } from "@/assets/icons/GithubIcon";
import { LinkedinIcon } from "@/assets/icons/LinkedinIcon";
import { MailIcon } from "@/assets/icons/MailIcon";
import { TwitterIcon } from "@/assets/icons/TwitterIcon";
import { Button } from "@/components/common/shadcn/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/common/shadcn/dialog";

import { useModalKeyboardScroll } from "../hooks/useModalKeyboardScroll";
import { AboutModalProps } from "../types";

export const AboutModal = ({ closeModal, returnFocusRef }: AboutModalProps) => {
  const { scrollRef, handleKeyDown, handleOpenAutoFocus } =
    useModalKeyboardScroll();

  return (
    <Dialog open={true} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent
        className="md:w-130 1xl:w-152 px-5 xsm:px-5 sm:px-6 md:px-10 1xl:px-12 pr-0 xsm:pr-0 sm:pr-0 pt-0 sm:pt-0 md:pt-10 1xl:pt-12 pb-0 md:pb-10 1xl:pb-12"
        onOpenAutoFocus={handleOpenAutoFocus}
        onCloseAutoFocus={(e) => {
          if (returnFocusRef?.current) {
            e.preventDefault();
            returnFocusRef.current.focus();
          }
        }}
        onKeyDown={handleKeyDown}
      >
        <div
          ref={scrollRef}
          tabIndex={-1}
          className="w-full h-full max-h-none md:max-h-[65vh] overflow-y-auto pl-1 pr-0 md:pr-4 [&>*]:pr-4 md:[&>*]:pr-0 pt-12 md:pt-0 focus:outline-none focus-visible:outline-none will-change-[scroll-position]"
        >
          <DialogHeader>
            <DialogTitle className="text-primaryText text-3xl md:text-2xl 1xl:text-3xl w-full text-left mb-4">
              Acerca de
            </DialogTitle>
          </DialogHeader>
          <DialogDescription asChild>
            <div className="text-primaryText text-base md:text-sm 1xl:text-base w-full text-left">
              <p className="mb-4 text-base md:text-sm 1xl:text-base">
                Diolay es un dashboard de código abierto diseñado para construir
                productos SaaS modernos, herramientas internas y paneles de
                administración ricos en datos. Proporciona los componentes de
                UI, páginas y patrones que le darán un buen comienzo para
                construir su propia aplicación.
              </p>
            </div>
          </DialogDescription>

          <Link
            href="https://Diolay.kit.com/"
            target="_blank"
            tabIndex={0}
            className="inline-flex items-center gap-2 mt-1 text-coloredLinkText hover:underline font-medium"
          >
            <span className="stroke-coloredLinkText w-[18px] h-[18px] [&>svg]:w-[18px] [&>svg]:h-[18px]">
              <MailIcon />
            </span>
            Suscríbete al boletín
          </Link>
          <div className="text-primaryText text-base md:text-sm 1xl:text-base w-full text-left">
            <p className="text-left w-full mt-4 text-xl md:text-lg 1xl:text-xl">
              Tecnologías utilizadas:
            </p>
            <div className="mt-4">
              <p className="text-primaryText mb-2">Front-End:</p>
            </div>
            <ul className="list-disc list-inside mb-4 pl-3 text-primaryText">
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>TypeScript</li>
              <li>Tailwind</li>
              <li>Shadcn</li>
              <li>Zustand</li>
              <li>Apollo Client</li>
              <li>Recharts</li>
              <li>Better-Auth</li>
              <li>Vitest</li>
            </ul>
            <div>
              <p className="text-primaryText mb-2">Back-End:</p>
            </div>
            <ul className="list-disc list-inside pl-3 mb-4">
              <li>NodeJS</li>
              <li>Fastify</li>
              <li>PostgreSQL</li>
              <li>Prisma</li>
              <li>Better-Auth</li>
              <li>GraphQL</li>
            </ul>
          </div>
          <div className="text-primaryText text-base md:text-sm 1xl:text-base w-full text-left mt-2">
            <p className="text-left w-full text-xl md:text-lg 1xl:text-xl mb-4">
              Recursos adicionales:
            </p>
            <ul className="list-disc list-inside pl-3 mb-4">
              <li>
                <Link
                  href="https://storybook.Diolay.com/"
                  target="_blank"
                  tabIndex={0}
                  className="text-coloredLinkText hover:underline font-medium"
                >
                  Storybook
                </Link>
              </li>
              <li>
                <Link
                  href="https://auth.Diolay.com/"
                  target="_blank"
                  tabIndex={0}
                  className="text-coloredLinkText hover:underline font-medium"
                >
                  Documentación de autenticación
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Diolay/Diolay-layout"
                  target="_blank"
                  tabIndex={0}
                  className="text-coloredLinkText hover:underline font-medium"
                >
                  Versión ligera
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4 mt-6 mb-6 pt-5 border-t border-mainBorder">
            <span className="text-primaryText text-base md:text-sm 1xl:text-base">
              Hecho por chirinina
            </span>
            <div className="flex items-center gap-2.5">
              <Link
                href="https://github.com/chirinina"
                target="_blank"
                tabIndex={0}
                className="text-grayIcon hover:text-primaryText transition-colors"
                aria-label="GitHub profile"
              >
                <span className="w-[22px] h-[22px] [&>svg]:w-[22px] [&>svg]:h-[22px]">
                  <GithubIcon />
                </span>
              </Link>
              <Link
                href="https://x.com/chirinina_dev"
                target="_blank"
                tabIndex={0}
                className="text-grayIcon hover:text-primaryText transition-colors"
                aria-label="X profile"
              >
                <span className="w-[22px] h-[22px] [&>svg]:w-[22px] [&>svg]:h-[22px]">
                  <TwitterIcon />
                </span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/mateusz-wyrebek/"
                target="_blank"
                tabIndex={0}
                className="text-grayIcon hover:text-primaryText transition-colors"
                aria-label="LinkedIn profile"
              >
                <span className="w-[22px] h-[22px] [&>svg]:w-[22px] [&>svg]:h-[22px]">
                  <LinkedinIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
