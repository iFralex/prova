
export const metadata: Metadata = {
  title: "Next.js on Firebase App Hosting",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark-theme">
      <body>
        <p>Ciao da layout</p>
        {children}
      </body>
    </html>
  );
}
