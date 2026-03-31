import type { CSSProperties } from "react";

type IconProps = {
  size?: number;
  strokeWidth?: number;
  style?: CSSProperties;
};

function baseProps(size: number) {
  return {
    fill: "none",
    height: size,
    viewBox: "0 0 24 24",
    width: size,
  };
}

export function SearchIcon({
  size = 18,
  strokeWidth = 1.6,
  style,
}: IconProps) {
  return (
    <svg {...baseProps(size)} style={style}>
      <circle cx="11" cy="11" r="6.2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="m16 16 4 4" stroke="currentColor" strokeLinecap="round" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function HeartIcon({
  size = 18,
  strokeWidth = 1.6,
  style,
}: IconProps) {
  return (
    <svg {...baseProps(size)} style={style}>
      <path
        d="M12 20.2c-3.1-2.2-7.8-5.6-7.8-10.2A4.2 4.2 0 0 1 8.5 5.8c1.4 0 2.7.7 3.5 1.8a4.3 4.3 0 0 1 3.5-1.8A4.2 4.2 0 0 1 19.8 10c0 4.6-4.7 8-7.8 10.2Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function FilledHeartIcon({ size = 18, style }: IconProps) {
  return (
    <svg {...baseProps(size)} style={style}>
      <path
        d="M12 20.2c-3.1-2.2-7.8-5.6-7.8-10.2A4.2 4.2 0 0 1 8.5 5.8c1.4 0 2.7.7 3.5 1.8a4.3 4.3 0 0 1 3.5-1.8A4.2 4.2 0 0 1 19.8 10c0 4.6-4.7 8-7.8 10.2Z"
        fill="#d14d6d"
      />
    </svg>
  );
}

export function UserIcon({
  size = 18,
  strokeWidth = 1.6,
  style,
}: IconProps) {
  return (
    <svg {...baseProps(size)} style={style}>
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path
        d="M5.5 19.2a6.5 6.5 0 0 1 13 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function BagIcon({
  size = 18,
  strokeWidth = 1.6,
  style,
}: IconProps) {
  return (
    <svg {...baseProps(size)} style={style}>
      <path
        d="M6 8.5h12l-1.1 10.2a1.7 1.7 0 0 1-1.7 1.5H8.8a1.7 1.7 0 0 1-1.7-1.5L6 8.5Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <path
        d="M9 9V7.7A3.1 3.1 0 0 1 12 4.5a3.1 3.1 0 0 1 3 3.2V9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function GlobeIcon({
  size = 18,
  strokeWidth = 1.6,
  style,
}: IconProps) {
  return (
    <svg {...baseProps(size)} style={style}>
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M3.8 12h16.4" stroke="currentColor" strokeWidth={strokeWidth} />
      <path
        d="M12 3.8c2.4 2.1 3.8 5.1 3.8 8.2S14.4 18.1 12 20.2c-2.4-2.1-3.8-5.1-3.8-8.2S9.6 5.9 12 3.8Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function ChevronIcon({
  size = 14,
  strokeWidth = 1.6,
  style,
}: IconProps) {
  return (
    <svg {...baseProps(size)} style={style}>
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function InstagramIcon({
  size = 18,
  strokeWidth = 1.5,
  style,
}: IconProps) {
  return (
    <svg {...baseProps(size)} style={style}>
      <rect
        x="4.2"
        y="4.2"
        width="15.6"
        height="15.6"
        rx="4.2"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <circle cx="12" cy="12" r="3.3" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="17.2" cy="6.9" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function LinkedInIcon({
  size = 18,
  strokeWidth = 1.5,
  style,
}: IconProps) {
  return (
    <svg {...baseProps(size)} style={style}>
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="2.8"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <path d="M8.2 10.2v6.1" stroke="currentColor" strokeLinecap="round" strokeWidth={strokeWidth} />
      <circle cx="8.2" cy="7.6" r="1.05" fill="currentColor" />
      <path
        d="M12.1 16.3v-3.4a2 2 0 0 1 3.9 0v3.4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
      <path d="M12.1 10.2v6.1" stroke="currentColor" strokeLinecap="round" strokeWidth={strokeWidth} />
    </svg>
  );
}
