import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

export function ScreenshotFrame({
  src,
  alt,
  width,
  height,
  className,
  priority,
}: {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/10",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-border/60 bg-slate-50 px-3 py-2.5">
        <span className="size-2.5 rounded-full bg-slate-300" />
        <span className="size-2.5 rounded-full bg-slate-300" />
        <span className="size-2.5 rounded-full bg-slate-300" />
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full"
        priority={priority}
      />
    </div>
  );
}
