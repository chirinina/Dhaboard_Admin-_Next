"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Button } from "@/components/common/shadcn/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/common/shadcn/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/common/shadcn/form";
import { Input } from "@/components/common/shadcn/input";

/** Yup schema defining username (min 2 chars) and email validation rules. */
const formSchema = yup.object({
  username: yup
    .string()
    .min(2, "Username must be at least 2 characters.")
    .required("Username is required"),
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Email is required"),
});

/**
 * Showcase of form validation using react-hook-form with Yup resolver.
 * Demonstrates field-level errors and a submit confirmation state.
 *
 * @component
 */
export const FormValidationForm = () => {
  const t = useTranslations("forms");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  const onSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <Card id="formValidation">
      <CardHeader variant="divider">
        <CardTitle>{t("formValidation")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-secondaryText mb-6">
          Usando react-hook-form y yup para validación.
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primaryText">
                    Nombre de usuario
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="mt-[0.3rem]"
                      placeholder="Chiri"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Este es tu nombre de usuario público.
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primaryText">
                    Correo electrónico
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="mt-[0.3rem]"
                      placeholder="chiri@example.com"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {Object.keys(form.formState.errors).length > 0 && (
              <p className="text-sm text-errorBg">
                Por favor, complete todos los campos requeridos.
              </p>
            )}
            <Button className="mt-4" type="submit">
              Enviar
            </Button>
            {isSubmitted && (
              <p className="flex items-center gap-2 text-sm text-greenBadgeText mt-3">
                <Check className="h-4 w-4" />
                Formulario enviado correctamente
              </p>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
