"use client";

import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import * as React from "react";

import { EyeIcon } from "@/assets/icons/EyeIcon";
import { EyeOffIcon } from "@/assets/icons/EyeOffIcon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/common/shadcn/card";
import { Input } from "@/components/common/shadcn/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/common/shadcn/input-group";
import { Label } from "@/components/common/shadcn/label";

/**
 * Showcase of input variants: default, active, password
 * with visibility toggle, error, disabled, and icon-prefixed.
 *
 * @component
 */
export const InputFieldsForm = () => {
  const t = useTranslations("forms");
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Card id="inputFields">
      <CardHeader variant="divider">
        <CardTitle>{t("inputFields")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <div className="grid w-full max-w-sm items-center gap-[0.8rem]">
            <Label htmlFor="email">Campo de texto</Label>
            <Input type="text" id="email" placeholder="Campo de texto" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-[0.8rem]">
            <Label htmlFor="active">Campo activo</Label>
            <Input
              type="text"
              id="active"
              placeholder="Campo activo"
              className="border-focusVisibleBorder hover:border-focusVisibleBorder focus:!border-focusVisibleBorder"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-[0.8rem]">
            <Label htmlFor="password">Campo de contraseña</Label>
            <InputGroup>
              <InputGroupInput
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Campo de contraseña"
              />
              <InputGroupAddon align="inline-end" className="pr-1">
                <InputGroupButton
                  className="h-7 px-1"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div className="grid w-full max-w-sm items-center gap-[0.8rem]">
            <Label htmlFor="error">Campo de error</Label>
            <Input
              type="text"
              id="error"
              placeholder="Campo de error"
              className="border-red-500 hover:border-red-500 focus:!border-red-500"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-[0.8rem]">
            <Label htmlFor="disabled">Campo deshabilitado</Label>
            <Input
              disabled
              type="text"
              id="disabled"
              placeholder="Campo deshabilitado"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-[0.8rem]">
            <Label htmlFor="email-icon">Campo de correo electrónico</Label>
            <div className="relative">
              <Mail className="absolute left-2.5 top-[0.725rem] h-4 w-4 text-secondaryText" />
              <Input
                type="email"
                placeholder="Campo de correo electrónico"
                className="pl-8"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
