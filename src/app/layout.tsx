
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Unica Jewelry",
  description: "Ecommerce di Unica",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={inter.className}>
        <p>ciao da layout</p>
        {children}
      </body>
    </html>
  );
}

async function NavBar({ user }: { user?: DecodedIdToken }) {
  const categories = await getCategories()
  if (categories instanceof Error)
    return <div>Errore: {categories.message}</div>

  //const itemsInCart = await getCookie<CartType[]>("cart")
  return <NavBarStyled categories={categories} account={user} />
}