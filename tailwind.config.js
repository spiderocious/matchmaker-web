/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6",
          hover: "#2563eb",
          active: "#1d4ed8",
          disabled: "#93c5fd",
        },
        secondary: {
          DEFAULT: "#dbeafe",
          hover: "#bfdbfe",
          active: "#93c5fd",
          disabled: "#eff6ff",
          text: "#3b82f6",
        },
        error: {
          DEFAULT: "#ef4444",
          light: "#fee2e2",
          dark: "#dc2626",
        },
        success: {
          DEFAULT: "#10b981",
          light: "#d1fae5",
          dark: "#059669",
        },
        online: "#10b981",
        border: {
          DEFAULT: "#e5e7eb",
          focus: "#3b82f6",
          error: "#ef4444",
        },
      },
      borderRadius: {
        button: "0.5rem",
        input: "0.375rem",
        card: "1rem",
        pill: "9999px",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
        "card-hover": "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
