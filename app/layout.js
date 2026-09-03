import "./globals.css";

export const metadata = {
  title: "NOVA — Build what's next",
  description: "A modern, conversion-focused Next.js landing page starter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
