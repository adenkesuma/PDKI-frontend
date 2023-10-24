"use client";
import { RiArrowDownSLine } from "react-icons/ri"
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next-intl/client";
import { ChangeEvent, useTransition } from "react";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  
  const [isPending, startTransition] = useTransition();

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    startTransition(() => {
      router.replace(`/${event.target.value}${pathname}`);
    });
  }

  return (
    <div
      className={clsx(
        "relative border border-gray-400 rounded-xl px-2 text-gray-700 flex justify-center items-center flex-row",
        isPending && "transition-opacity [&:disabled]:opacity-30"
      )}
    >
      <p className="sr-only">{t("label")}</p>
      <select
        className="inline-flex cursor-pointer text-sm appearance-none bg-transparent py-2 outline-none"
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {["en", "id"].map((cur) => (
          <option key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </option>
        ))}
      </select>
      <div className="text-gray-700">
        <RiArrowDownSLine className="text-[26px]" />
      </div>
    </div>
  );
}