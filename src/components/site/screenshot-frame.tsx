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
        "overflow-hidden rounded-[2rem] border-[6px] border-slate-900 bg-white shadow-xl",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full"
        loading={priority ? "eager" : undefined}
        fetchPriority={priority ? "high" : undefined}
      />
    </div>
  );
}
