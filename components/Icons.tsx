type P = { className?: string; style?: React.CSSProperties };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const IconPerson = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="8" r="3.4" />
    <path d="M4.6 20c0-3.6 3.3-5.6 7.4-5.6s7.4 2 7.4 5.6" />
  </svg>
);

export const IconPath = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 20c4 0 4-6 8-6s4-6 6-6" />
    <circle cx="5" cy="20" r="1.4" />
    <circle cx="19" cy="8" r="1.4" />
  </svg>
);

export const IconCode = (p: P) => (
  <svg {...base} {...p}>
    <path d="M9 6.5 4 12l5 5.5" />
    <path d="m15 6.5 5 5.5-5 5.5" />
  </svg>
);

export const IconChat = (p: P) => (
  <svg {...base} {...p}>
    <path d="M20 12.5c0 3.6-3.6 6.5-8 6.5-1 0-2-.15-2.9-.43L4 20l1.2-3.2C4.45 15.5 4 14.05 4 12.5 4 8.9 7.6 6 12 6s8 2.9 8 6.5Z" />
  </svg>
);

export const IconGrowth = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 18 9.5 12l3.5 3.5L20 8" />
    <path d="M16 8h4v4" />
  </svg>
);

export const IconCompass = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.4" />
    <path d="m14.8 9.2-1.6 4.2-4.2 1.6 1.6-4.2 4.2-1.6Z" />
  </svg>
);

export const IconUsers = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8.5" r="2.9" />
    <path d="M3.6 19c0-3 2.4-4.8 5.4-4.8s5.4 1.8 5.4 4.8" />
    <path d="M16 6.4a2.9 2.9 0 0 1 0 5.6M17.4 14.6c2.1.5 3.4 1.9 3.4 4.4" />
  </svg>
);

export const IconSpark = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3.5 13.8 9l5.5 1.8-5.5 1.8L12 18.1l-1.8-5.5L4.7 10.8 10.2 9 12 3.5Z" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base} {...p} strokeWidth={2}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const IconArrow = (p: P) => (
  <svg {...base} {...p} strokeWidth={2}>
    <path d="M12 4.5v15" />
    <path d="m5.5 13 6.5 6.5 6.5-6.5" />
  </svg>
);
