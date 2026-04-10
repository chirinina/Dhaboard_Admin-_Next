"use client";

import { useTranslations } from "next-intl";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/common/shadcn/card";
import { Label } from "@/components/common/shadcn/label";
import { Switch } from "@/components/common/shadcn/switch";

/**
 * Showcase of toggle switch states: default, checked,
 * disabled, and disabled-checked.
 *
 * @component
 */
export const ToggleSwitchForm = () => {
  const t = useTranslations("forms");

  return (
    <Card id="toggleSwitch">
      <CardHeader variant="divider">
        <CardTitle>{t("toggleSwitch")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <div className="flex items-center space-x-4">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode" withPointer>
              Switch por defecto
            </Label>
          </div>
          <div className="flex items-center space-x-4">
            <Switch id="checked-switch" defaultChecked />
            <Label htmlFor="checked-switch" withPointer>
              Switch activado
            </Label>
          </div>
          <div className="flex items-center space-x-4">
            <Switch id="disabled-switch" disabled />
            <Label htmlFor="disabled-switch">Switch desactivado</Label>
          </div>
          <div className="flex items-center space-x-4">
            <Switch id="disabled-checked-switch" disabled defaultChecked />
            <Label htmlFor="disabled-checked-switch">
              Switch desactivado y activado
            </Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
