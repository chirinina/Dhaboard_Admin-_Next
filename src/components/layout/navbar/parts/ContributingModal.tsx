import { Facebook, Github, Globe, Instagram, Linkedin } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/common/shadcn/dialog";

import { useModalKeyboardScroll } from "../hooks/useModalKeyboardScroll";
import { AboutModalProps } from "../types";

export const ContributingModal = ({
  closeModal,
  returnFocusRef,
}: AboutModalProps) => {
  const { scrollRef, handleKeyDown, handleOpenAutoFocus } =
    useModalKeyboardScroll();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Diolay",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      icon: Instagram,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
      icon: Facebook,
    },
    {
      name: "Sitio web",
      href: "https://diolay.com",
      icon: Globe,
    },
  ];

  return (
    <Dialog open={true} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent
        className="md:max-w-130 md:w-130 1xl:w-152 1xl:max-w-152 px-5 xsm:px-5 sm:px-6 md:px-10 1xl:px-12 pr-0 xsm:pr-0 sm:pr-0 pt-0 sm:pt-0 md:pt-10 1xl:pt-12 pb-0 md:pb-10 1xl:pb-12"
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
          className="w-full h-full max-h-none md:max-h-[65vh] overflow-y-auto pl-1 pr-0 md:pr-4 [&>*]:pr-4 md:[&>*]:pr-0 pt-12 md:pt-0 focus:outline-none focus-visible:outline-none"
        >
          <DialogHeader>
            <DialogTitle className="text-primaryText text-3xl md:text-2xl 1xl:text-3xl w-full text-left mb-4">
              Guía de contribución
            </DialogTitle>
          </DialogHeader>

          <DialogDescription asChild>
            <div className="text-primaryText text-base md:text-sm 1xl:text-base w-full text-left">
              <p className="mb-4 leading-relaxed">
                Hola, gracias por revisar este proyecto.
                <br />
                Toda forma de contribución aporta valor. A continuación se
                muestran las principales maneras de participar.
              </p>

              <h3 className="text-xl md:text-lg 1xl:text-xl font-semibold mt-6 mb-3">
                1. Comparte tus ideas
              </h3>

              <ul className="list-disc list-inside mb-4 pl-3 text-primaryText space-y-2">
                <li>
                  Usa las{" "}
                  <a
                    href="https://github.com/Diolay/Diolay/discussions/1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-coloredLinkText hover:underline"
                  >
                    discusiones
                  </a>{" "}
                  de GitHub para compartir sugerencias, comentarios o nuevas
                  ideas.
                </li>

                <li>
                  Abre un{" "}
                  <a
                    href="https://github.com/Diolay/Diolay/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-coloredLinkText hover:underline"
                  >
                    issue
                  </a>{" "}
                  si encuentras errores o detectas mejoras.
                </li>
              </ul>

              <h3 className="text-xl md:text-lg 1xl:text-xl font-semibold mt-6 mb-3">
                2. Apoya el desarrollo
              </h3>

              <p className="mb-4 leading-relaxed">
                Si deseas apoyar el crecimiento continuo del proyecto, puedes
                hacerlo a través de{" "}
                <a
                  href="https://github.com/sponsors/chirinina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coloredLinkText hover:underline"
                >
                  GitHub Sponsors
                </a>
                .
              </p>

              <h3 className="text-xl md:text-lg 1xl:text-xl font-semibold mt-6 mb-3">
                3. Contribuye con código
              </h3>

              <p className="mb-4 leading-relaxed">
                Puedes bifurcar el repositorio y enviar una solicitud de fusión.
                Si detectas algo que se puede mejorar o corregir, tu aporte será
                bien recibido.
              </p>

              <p className="mb-4 leading-relaxed">
                Para más detalles sobre configuración, estándares de código y
                proceso de revisión, consulta{" "}
                <a
                  href="https://github.com/Diolay/Diolay/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coloredLinkText hover:underline"
                >
                  CONTRIBUTING.md
                </a>
                .
              </p>

              <h3 className="text-xl md:text-lg 1xl:text-xl font-semibold mt-6 mb-3">
                Redes y canales oficiales
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-mainBorder bg-cardBg px-4 py-3 transition-all duration-200 hover:border-coloredLinkText hover:bg-hoverBg"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondaryBg text-coloredLinkText">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="flex flex-col">
                      <span className="font-medium text-primaryText">
                        {name}
                      </span>
                      <span className="text-sm text-secondaryText">
                        Visitar perfil oficial
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              <h3 className="text-xl md:text-lg 1xl:text-xl font-semibold mt-6 mb-3">
                Información de licencia
              </h3>

              <p className="mb-4 leading-relaxed">
                Al enviar una contribución, aceptas que tu aporte quede
                licenciado bajo la Licencia MIT.
              </p>
            </div>
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
};
