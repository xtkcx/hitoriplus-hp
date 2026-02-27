"use client";

import { useEffect } from "react";

export default function RakutenAd() {
  useEffect(() => {
    // ① グローバル設定（windowに確実に入れる）
    (window as any).rakuten_design = "slide";
    (window as any).rakuten_affiliateId =
      "51640869.9fbadec3.5164086b.b27e15c2";
    (window as any).rakuten_items = "ctsmatch";
    (window as any).rakuten_genreId = "0";
    (window as any).rakuten_size = "468x160";
    (window as any).rakuten_target = "_blank";
    (window as any).rakuten_theme = "gray";
    (window as any).rakuten_border = "off";
    (window as any).rakuten_auto_mode = "on";
    (window as any).rakuten_genre_title = "off";
    (window as any).rakuten_recommend = "on";
    (window as any).rakuten_ts = "1772196415730";

    // ② 既に読み込まれてたら二重読み込みしない
    if (document.getElementById("rakuten-widget-js")) return;

    // ③ 楽天JSをDOMに直挿し
    const s = document.createElement("script");
    s.id = "rakuten-widget-js";
    s.src =
      "https://xml.affiliate.rakuten.co.jp/widget/js/rakuten_widget.js?20230106";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return <div className="flex justify-center py-6" />;
}