import Image from "next/image";

type AppScreenProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export function AppScreen({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 768px) 88vw, 440px",
  className = "",
}: AppScreenProps) {
  console.log("AppScreen src:", src);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[2rem] bg-white shadow-card ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={1080}
        height={2400}
        priority={priority}
        sizes={sizes}
        className="block h-auto w-full object-contain"
      />
    </div>
  );
}