"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useTranslations } from "next-intl";
import * as React from "react";

import { Button } from "@/components/common/shadcn/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/common/shadcn/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/common/shadcn/command";
import { Label } from "@/components/common/shadcn/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/common/shadcn/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/common/shadcn/select";
import { cn } from "@/utils/classNames";

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

/**
 * Showcase of select variants: basic dropdown
 * and searchable combobox with keyboard navigation.
 *
 * @component
 */
export const SelectInputsForm = () => {
  const t = useTranslations("forms");
  const [openCombobox, setOpenCombobox] = React.useState(false);
  const [comboboxValue, setComboboxValue] = React.useState("");

  return (
    <Card id="selectInputs">
      <CardHeader variant="divider">
        <CardTitle>{t("selectInputs")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 w-3/4 xsm:w-1/2">
            <Label>Selecciona una fruta</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona una fruta" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Frutas</SelectLabel>
                  <SelectItem value="apple">Manzana</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Arándano</SelectItem>
                  <SelectItem value="grapes">Uvas</SelectItem>
                  <SelectItem value="pineapple">Piña</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-3 w-3/4 xsm:w-1/2">
            <Label>Selecciona un framework</Label>
            <Popover open={openCombobox} onOpenChange={setOpenCombobox}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openCombobox}
                  className="w-full justify-between"
                >
                  {comboboxValue
                    ? frameworks.find(
                        (framework) => framework.value === comboboxValue,
                      )?.label
                    : "Selecciona un framework..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-50 p-0" align="start">
                <Command>
                  <CommandInput placeholder="Busca un framework..." />
                  <CommandList>
                    <CommandEmpty>
                      No se encontro ningun framework.
                    </CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={() => {
                            setComboboxValue(
                              framework.value === comboboxValue
                                ? ""
                                : framework.value,
                            );
                            setOpenCombobox(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              comboboxValue === framework.value
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                          />
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
