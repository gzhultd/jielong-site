import Image from "next/image";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className ?? ""}`}>
      <Image
        src="/icons/icon-192.png"
        alt=""
        width={32}
        height={32}
        className="size-8 rounded-lg"
        priority
      />
      <span className="text-lg font-bold tracking-tight text-foreground">
        接龙 <span className="font-medium text-muted-foreground">Jielong</span>
      </span>
    </Link>
  );
}
