import Script from "next/script";
import "./globals.css";
import Link from "next/link";
import Nav from "./components/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="h-full bg-white">
      <head>
        {/* google search Console */}
        <meta
          name="google-site-verification"
          content="r0Obiw0qs81BqLnzIIdRbkAEtpUlUrtXE9nkMBs8zsk"
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-43ZBRV2PCX');
          `}
        </Script>
      </head>

      <body className="min-h-screen bg-white text-gray-900 flex flex-col">
        {/* ヘッダー */}
        <header className="border-b border-emerald-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-emerald-600"
            >
              ひとりぷらす
            </Link>
            <Nav />
          </div>
        </header>

        {/* メイン */}
        <main className="flex-1 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            {children}
          </div>
        </main>

        {/* フッター */}
        <footer className="border-t bg-slate-100">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-500">
            © {new Date().getFullYear()} ひとりぷらす
          </div>
        </footer>
      </body>
    </html >
  );
}
