import type { Metadata } from "next";

import { HomePage } from "@/components/site/home-page";
import { getDict } from "@/lib/i18n";

const dict = getDict("en");

export const metadata: Metadata = {
  title: dict.meta.home.title,
  description: dict.meta.home.description,
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/zh" },
  },
};

export default function Home() {
  return <HomePage lang="en" />;
}
