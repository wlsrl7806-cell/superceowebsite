import type { SVGProps } from "react";

/**
 * Small, hand-drawn line icon set shared across the site.
 * Consistent stroke weight keeps the UI feeling soft and friendly rather
 * than like a generic dashboard icon library.
 */

export type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SunriseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4" />
      <path d="M5.5 8.5 8 11" />
      <path d="M18.5 8.5 16 11" />
      <path d="M3 16.5h18" />
      <path d="M6 20h12" />
      <path d="M8 16.5a4 4 0 0 1 8 0" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

export function BoxIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 8 12 4l8.5 4-8.5 4-8.5-4Z" />
      <path d="M3.5 8v8L12 20l8.5-4V8" />
      <path d="M12 12v8" />
    </svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 4h2l1.4 10.6a2 2 0 0 0 2 1.7h7.7a2 2 0 0 0 2-1.6L20 8H6" />
      <circle cx="10" cy="20" r="1.3" />
      <circle cx="17" cy="20" r="1.3" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="3" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M3.5 10h17" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
    </svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="7" width="12" height="9" rx="1.5" />
      <path d="M14.5 10h3.3L20.5 13v3h-6z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12.3 2.3 2.3 4.7-4.9" />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5.5h16v10.2H9.8L5.6 19V15.7H4Z" />
      <path d="M8 9.5h8" />
      <path d="M8 12.3h5" />
    </svg>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5.2c2-.9 4.6-.9 8 .5 3.4-1.4 6-1.4 8-.5v13c-2-.9-4.6-.9-8 .5-3.4-1.4-6-1.4-8-.5Z" />
      <path d="M12 5.7v13" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5c.5 3 1.6 4.4 4.8 5-3.2.6-4.3 2-4.8 5-.5-3-1.6-4.4-4.8-5 3.2-.6 4.3-2 4.8-5Z" />
      <path d="M18.5 15c.3 1.6.9 2.3 2.5 2.6-1.6.3-2.2 1-2.5 2.6-.3-1.6-.9-2.3-2.5-2.6 1.6-.3 2.2-1 2.5-2.6Z" />
    </svg>
  );
}

export function MessageIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="3" />
      <path d="m6 8 6 4.5L18 8" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m12 4 2.4 5.1 5.6.7-4.1 3.9 1 5.5L12 16.4l-4.9 2.8 1-5.5-4.1-3.9 5.6-.7Z" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function StoreIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 9.5 5 4.5h14l1 5" />
      <path d="M4 9.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0" />
      <path d="M5.5 9.8V19.5h13V9.8" />
      <path d="M10 19.5v-5h4v5" />
    </svg>
  );
}

export function BellIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 10.5a6 6 0 0 1 12 0c0 4 1.3 5.2 1.3 5.2H4.7S6 14.5 6 10.5Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function ThermometerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4.5a2 2 0 0 0-2 2v8.2a3.5 3.5 0 1 0 4 0V6.5a2 2 0 0 0-2-2Z" />
      <path d="M12 15v-6" />
    </svg>
  );
}

export function BroomIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m14 4-8.5 8.5" />
      <path d="M12.5 5.5 18.5 11.5" />
      <path d="M5.5 12.5 3 20l7.5-2.5" />
      <path d="M9 15 4.5 19.5" />
    </svg>
  );
}

export function CalculatorIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3.5" width="14" height="17" rx="2.5" />
      <path d="M7.5 7.5h9" />
      <path d="M7.5 12h.01" />
      <path d="M12 12h.01" />
      <path d="M16.5 12h.01" />
      <path d="M7.5 16h.01" />
      <path d="M12 16h.01" />
      <path d="M16.5 16v.01" />
    </svg>
  );
}

export function PowerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v8" />
      <path d="M7 6.3a7 7 0 1 0 10 0" />
    </svg>
  );
}

export function SendIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20.5 3.5 3 10.2l6.4 2.5 2.5 6.4Z" />
      <path d="M20.5 3.5 11.8 12.2" />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m4 10.5 8-6.5 8 6.5" />
      <path d="M5.5 9.5V19a1 1 0 0 0 1 1H10v-5.5h4V20h3.5a1 1 0 0 0 1-1V9.5" />
    </svg>
  );
}

export function MoreIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="7" height="7" rx="1.8" />
      <rect x="13" y="4" width="7" height="7" rx="1.8" />
      <rect x="4" y="13" width="7" height="7" rx="1.8" />
      <rect x="13" y="13" width="7" height="7" rx="1.8" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}
