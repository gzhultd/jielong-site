import Image from "next/image";
import Link from "next/link";

export function Logo({
  href,
  edition,
  className,
}: {
  href: string;
  edition: string;
  className?: string;
}) {
  return (
    <Link href={href} className={`flex items-center gap-2 ${className ?? ""}`}>
      <Image
        src="/icons/icon-192.png"
        alt=""
        width={32}
        height={32}
        className="size-8 rounded-lg"
        priority
      />
      <span className="flex flex-col gap-0.5 leading-tight">
        <span className="text-lg font-bold tracking-tight text-foreground">
          Jielong
        </span>
        <span className="w-fit rounded-full bg-accent px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-accent-foreground">
          {edition}
        </span>
      </span>
    </Link>
  );
}
