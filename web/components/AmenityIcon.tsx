/**
 * A line icon for the amenity names used in the dataset. Anything without a
 * dedicated glyph falls back to a check mark, so new amenities still render.
 */
const PATHS: Record<string, string> = {
  ac: "M12 3v18M12 7.5 8.5 5M12 7.5 15.5 5M12 16.5 8.5 19M12 16.5l3.5 2.5M3.9 7.5l15.6 9M7.4 7.9 6.5 3.6M7.4 7.9 3.2 8.9M16.6 16.1l.9 4.3M16.6 16.1l4.2-1M20.1 7.5 4.5 16.5M16.6 7.9l4.2 1M16.6 7.9l.9-4.3M7.4 16.1l-4.2 1M7.4 16.1l-.9 4.3",
  tv: "M3 6.5h18v11H3zM8 21h8M12 17.5V21",
  wifi: "M2.5 9a15 15 0 0 1 19 0M6 12.6a10 10 0 0 1 12 0M9.5 16.2a5 5 0 0 1 5 0M12 19.8h.01",
  generator: "M13 2 4.5 13.5H11L10 22l8.5-11.5H12z",
  cctv: "M4 6.5 18 4l1 5.5L5 12zM6.5 12v3.5a3 3 0 0 0 3 3H13M13 15.5h4v6h-4z",
  restaurant: "M6 3v8a2 2 0 0 0 4 0V3M8 11v10M17 3c-1.5 1.5-2 3.5-2 5.5 0 1.6.7 2.5 2 2.5M17 3v18",
  "food court": "M6 3v8a2 2 0 0 0 4 0V3M8 11v10M17 3c-1.5 1.5-2 3.5-2 5.5 0 1.6.7 2.5 2 2.5M17 3v18",
  "coffee shop": "M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM17 9h1.5a2.5 2.5 0 0 1 0 5H17M5 3.5v1.5M9 3v2M13 3.5v1.5",
  "prayer room": "M12 3c3.5 2.5 5.5 5.5 5.5 9V21h-11v-9c0-3.5 2-6.5 5.5-9ZM12 12.5v4M4.5 21h15",
  "life jackets": "M8 3h8l1.5 8.5V21h-4v-6h-3v6h-4v-9.5zM10 3v6h4V3",
  "medical service": "M12 8v8M8 12h8M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z",
  "medical kit": "M12 9v6M9 12h6M3 7h18v13H3zM9 7V4h6v3",
  "fire safety": "M12 3s5 4.5 5 9a5 5 0 0 1-10 0c0-1.6.7-3 1.5-4 .3 1.4 1 2 2 2 .8 0 1.5-.7 1.5-2 0-2-.5-3.6-.5-5Z",
  "vip suite": "M4 8l3.5 3L12 5l4.5 6L20 8l-1.5 10h-13zM6 21h12",
  lift: "M6 3h12v18H6zM12 3v18M9 8.5 10.5 7 12 8.5M12 15.5 13.5 17 15 15.5",
  atm: "M4 6h16v12H4zM4 10h16M8 14h3",
  radar: "M12 12 19 5M12 21a9 9 0 1 1 9-9M12 16.5A4.5 4.5 0 1 1 16.5 12M3 21h18",
  gps: "M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21ZM12 12a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z",
  "echo sounder": "M12 3v6M12 15v6M4 8.5C6 11 6 13 4 15.5M20 8.5c-2 2.5-2 4.5 0 7M9 11.5c-.8 1-.8 1 0 2M15 11.5c.8 1 .8 1 0 2",
};

const FALLBACK = "m4.5 12.5 5 5 10-11";

export default function AmenityIcon({ name, className }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={PATHS[name.toLowerCase()] ?? FALLBACK} />
    </svg>
  );
}
