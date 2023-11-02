import './globals.css';
import Footer from '@app/components/Layout/Footer';
import Header from '@app/components/Layout/Header';

/**
 * Using force dynamic so changes in business assets (e.g. services) are immediately reflected.
 * If you prefer having it reflected only after redeploy (not recommended) please remove it
 * **/
export const revalidate = 0;

export default function RootLayout(layoutProps: any) {
  const { children } = layoutProps;
  return (
    <html lang="en">
      <head>
        <title>MeuPin - Não mais perder seu arganel</title>
        <meta
          name="description"
          content="Não mais perder seu arganel, trunfo ou pin"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </head>
      
        <body className="parallax-background">
          <Header />
          <main className="bg-transparent min-h-[600px]">{children}</main>
          <Footer />
        </body>
    </html>
  );
}
