"use client";
import Script from "next/script";

export default function RakutenAd() {
  return (
    <div className="flex justify-center py-6">
      <div id="rakuten-area" />

      <Script id="rakuten-config" strategy="afterInteractive">
        {`
          window.rakuten_design="slide";
          window.rakuten_affiliateId="51640869.9fbadec3.5164086b.b27e15c2";
          window.rakuten_items="ranking";
          window.rakuten_genreId="0";
          window.rakuten_size="468x160";
          window.rakuten_target="_blank";
          window.rakuten_theme="gray";
          window.rakuten_border="on";
          window.rakuten_auto_mode="on";
          window.rakuten_genre_title="off";
          window.rakuten_recommend="on";
          window.rakuten_ts="1772198780920";
        `}
      </Script>

      <Script
        src="https://xml.affiliate.rakuten.co.jp/widget/js/rakuten_widget.js?20230106"
        strategy="afterInteractive"
      />
    </div>
  );
}