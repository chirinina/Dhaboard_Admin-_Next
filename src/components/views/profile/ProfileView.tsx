"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import { Card, CardContent } from "@/components/common/shadcn/card";
import { Switch } from "@/components/common/shadcn/switch";

import { ProfileHeaderCard } from "./ProfileHeaderCard";
import { ProfileSidebar } from "./ProfileSidebar";

export const ProfileView = () => {
  const t = useTranslations("profile");
  const [isEditing, setIsEditing] = useState(false);

  const [userData, setUserData] = useState({
    name: "Efrain Chiriv",
    email: "chiri@example",
    phone: "+57 311 222 3333",
    role: "Administrator",
    joinDate: "Junio 2024",
    location: "Santa Cruz Bolivia",
    bio: "Desarrollador de software con experiencia en el desarrollo de aplicaciones web y móviles.",
  });

  return (
    <div className="w-full flex flex-col gap-6 max-3xl:gap-5 max-2xl:gap-4">
      {/* Profile Header Card */}
      <ProfileHeaderCard
        userData={userData}
        isEditing={isEditing}
        onToggleEdit={() => setIsEditing(!isEditing)}
      />

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-3xl:gap-5 max-2xl:gap-4">
        {/* Left Column - Contact Info */}
        <ProfileSidebar userData={userData} />

        {/* Right Column - Main Content */}
        <div className="lg:col-span-2 flex flex-col gap-6 max-3xl:gap-5 max-2xl:gap-4">
          {/* About Section Card */}
          <Card id="about">
            <CardContent>
              <h2 className="text-xl max-3xl:text-lg max-2xl:text-base font-semibold text-primaryText mb-4 max-3xl:mb-3 max-2xl:mb-2">
                {t("about")}
              </h2>
              {isEditing ? (
                <textarea
                  className="w-full h-24 px-3 py-2 bg-inputBg border border-inputBorder rounded-md text-primaryText text-base resize-none focus:border-inputBorderHover focus:outline-none"
                  value={userData.bio}
                  onChange={(e) =>
                    setUserData({ ...userData, bio: e.target.value })
                  }
                />
              ) : (
                <p className="text-base max-xl:text-sm text-secondaryText leading-relaxed">
                  {userData.bio}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Account Settings Card */}
          <Card id="accountSettings">
            <CardContent>
              <h2 className="text-xl max-3xl:text-lg max-2xl:text-base font-semibold text-primaryText mb-4 max-3xl:mb-3 max-2xl:mb-2">
                {t("accountSettings")}
              </h2>
              <div className="space-y-4 max-2xl:space-y-3">
                <div className="flex items-center justify-between py-3 border-b border-mainBorder">
                  <div>
                    <p className="text-base max-xl:text-sm font-medium text-primaryText">
                      {t("emailNotifications")}
                    </p>
                    <p className="text-sm text-subtitleText mt-1">
                      {t("emailNotificationsDesc")}
                    </p>
                  </div>
                  <Switch className="max-md:ml-4" defaultChecked />
                </div>
                <div className="flex items-center justify-between py-3 border-b border-mainBorder">
                  <div>
                    <p className="text-base max-xl:text-sm font-medium text-primaryText">
                      {t("twoFactorAuth")}
                    </p>
                    <p className="text-sm text-subtitleText mt-1">
                      {t("twoFactorAuthDesc")}
                    </p>
                  </div>
                  <Switch className="max-md:ml-4" />
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-base max-xl:text-sm font-medium text-primaryText">
                      Comunicaciones de marketing
                    </p>
                    <p className="text-sm text-subtitleText mt-1">
                      Recibir actualizaciones sobre nuevas funciones y
                      promociones
                    </p>
                  </div>
                  <Switch className="max-md:ml-4" defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity Card */}
          <Card id="recentActivity">
            <CardContent>
              <h2 className="text-xl max-3xl:text-lg max-2xl:text-base font-semibold text-primaryText mb-4 max-3xl:mb-3 max-2xl:mb-2">
                {t("recentActivity")}
              </h2>
              <div className="space-y-3 max-2xl:space-y-2">
                {[
                  {
                    action: "Actualizó el precio del producto",
                    time: "2 horas ago",
                    type: "update",
                  },
                  {
                    action: "Procesó el pedido del cliente #4521",
                    time: "5 horas ago",
                    type: "order",
                  },
                  {
                    action: "Agregó una nueva categoría de producto",
                    time: "1 day ago",
                    type: "create",
                  },
                  {
                    action: "Generó el informe mensual",
                    time: "2 days ago",
                    type: "report",
                  },
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 py-2 hover:bg-navItemBgHover rounded-md px-2 -mx-2 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-chartPrimaryBg mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-base max-xl:text-sm text-primaryText">
                        {activity.action}
                      </p>
                      <p className="text-sm text-subtitleText mt-0.5">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
