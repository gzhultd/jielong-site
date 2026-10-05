import type { Metadata } from "next";

import "../globals.css";

import { SiteShell } from "@/components/site/site-shell";
import { getDict } from "@/lib/i18n";

const dict = getDict("zh");

export const metadata: Metadata = {
  metadataBase: new URL("https://jielong.gzhu.co.nz"),
  title: dict.meta.home.title,
  description: dict.meta.home.description,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="zh">{children}</SiteShell>;
}
