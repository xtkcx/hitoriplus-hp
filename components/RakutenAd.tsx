"use client";

import Script from "next/script";

export default function RakutenAd() {
  return (
    <div className="w-full flex justify-center py-6">
      <div className="max-w-[468px] w-full">
        <Script id="rakuten-config" strategy="afterInteractive">
          {`
            rakuten_design="slide";
            rakuten_affiliateId="51640869.9fbadec3.5164086b.b27e15c2";
            rakuten_items="ctsmatch";
            rakuten_genreId="0";
            rakuten_size="468x160";
            rakuten_target="_blank";
            rakuten_theme="gray";
            rakuten_border="off";
            rakuten_auto_mode="on";
            rakuten_genre_title="off";
            rakuten_recommend="on";
            rakuten_ts="1772194283288";
          `}
        </Script>

        <Script
          src="https://xml.affiliate.rakuten.co.jp/widget/js/rakuten_widget.js?20230106"
          strategy="afterInteractive"
        />
      </div>
    </div>
  );
}