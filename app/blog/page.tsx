/* hitoriplus-hp\app\blog\page.tsx */
"use client";

import { useState } from "react";

/**
 * カテゴリ型
 */
type Category = "お金" | "食事" | "健康" | "暮らし" | "サブスク";

/**
 * サイドメニュー用カテゴリ
 */
const CATEGORIES: Category[] = ["お金", "食事", "健康", "暮らし", "サブスク"];

/**
 * それぞれに category を追加
 */
const posts = [
    {
        title: "生活で意識したい食事習慣",
        description: "食事のあれこれ",
        url: "https://ring-straw-4b3.notion.site/303900854a3a8017bd01ec481f218a24?source=copy_link",
        date: "2026.02.23",
        category: "食事" as Category,
    },
    {
        title: "日々の貯金習慣の工夫",
        description: "みんなが気になる貯金のあれこれ",
        url: "https://ring-straw-4b3.notion.site/303900854a3a8003b90ce63d4dbd9e4f?source=copy_link",
        date: "2026.02.19",
        category: "お金" as Category,
    },
    {
        title: "お金に関しての生活の工夫",
        description: "お金と幸福とのバランス",
        url: "https://ring-straw-4b3.notion.site/303900854a3a8081a16fe87d12926f59?source=copy_link",
        date: "2026.02.10",
        category: "お金" as Category,
    },
    {
        title: "生活のサブスク、正直どう？使ってよかった＆微妙だった話",
        description: "忖度なしの正直レビュー",
        url: "https://ring-straw-4b3.notion.site/2fb900854a3a80e39f27fed170ff9b09?source=copy_link",
        date: "2026.02.06",
        category: "サブスク" as Category,
    },
    {
        title: "節約したい人ほど知っておきたい「生活サブスク」の上手な使い方",
        description: "使い方次第でむしろ節約!?",
        url: "https://ring-straw-4b3.notion.site/2fb900854a3a80ddb8b3cdfd181deab8?source=copy_link",
        date: "2026.02.06",
        category: "サブスク" as Category,
    },
    {
        title: "暮らしの節約は「サブスクの使い方」で決まる",
        description: "差が出やすいちょっとした選択",
        url: "https://ring-straw-4b3.notion.site/2fb900854a3a8092a04de558cadb0fde?source=copy_link",
        date: "2026.02.06",
        category: "サブスク" as Category,
    },
    {
        title: "暮らしに合う動画配信サービスの選び方",
        description: "使ってわかった違い",
        url: "https://ring-straw-4b3.notion.site/2fa900854a3a80aaa0bdf49bf8c7d3d8?source=copy_link",
        date: "2026.02.01",
        category: "サブスク" as Category,
    },
    {
        title: "それでも残したサブスク3つ",
        description: "暮らしにプラスだったもの",
        url: "https://ring-straw-4b3.notion.site/3-2fa900854a3a80fd9cafd71e631a21f7?source=copy_link",
        date: "2026.02.01",
        category: "サブスク" as Category,
    },
    {
        title: "正直、解約してよかったサブスクの話",
        description: "解約理由と気づいたこと",
        url: "https://ring-straw-4b3.notion.site/2fa900854a3a8087a9d9f123eba5da56?source=copy_link",
        date: "2026.02.01",
        category: "サブスク" as Category,
    },
    {
        title: "今まで使ったことあるサブスクを全部まとめてみた",
        description: "使っている理由と率直な感想",
        url: "https://ring-straw-4b3.notion.site/2fa900854a3a80f5a2ebfca94386ab36?source=copy_link",
        date: "2026.02.01",
        category: "サブスク" as Category,
    },
    {
        title: "Notionでブログを始めてみた",
        description: "ひとりぷらすのブログ運用方針と、ブログを始めた理由。",
        url: "https://ring-straw-4b3.notion.site/a80900854a3a83058d9f81e4a7aa4849",
        date: "2026.01.29",
        category: "暮らし" as Category,
    },
];

/**
 * 日付を数値化（新しい順に並べるため）
 */
function parseDateToNumber(date: string) {
    return Number(date.replaceAll(".", ""));
}

export default function BlogPage() {
    const [selected, setSelected] = useState<"ALL" | Category>("ALL");

    // カテゴリで絞る
    const filtered =
        selected === "ALL"
            ? posts
            : posts.filter((post) => post.category === selected);

    // 新着順に並べる
    const sorted = [...filtered].sort(
        (a, b) => parseDateToNumber(b.date) - parseDateToNumber(a.date)
    );

    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-gray-900">ブログ</h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
                {/* ===== サイドカテゴリ ===== */}
                <aside className="rounded-xl border border-gray-200 bg-white p-4 h-fit">
                    <div className="text-sm font-semibold text-gray-900 mb-3">カテゴリ</div>

                    {/* 縦並びにする */}
                    <div className="flex flex-col gap-1">
                        {/* すべて */}
                        <button
                            type="button"
                            onClick={() => setSelected("ALL")}
                            className={`w-full text-left rounded-lg px-3 py-2 text-sm transition
        ${selected === "ALL"
                                    ? "bg-emerald-50 text-emerald-700"
                                    : "text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            すべて
                        </button>

                        {/* 各カテゴリ */}
                        {CATEGORIES.map((c) => (
                            <button
                                key={c}
                                type="button"
                                onClick={() => setSelected(c)}
                                className={`w-full text-left rounded-lg px-3 py-2 text-sm transition
                                    ${selected === c
                                        ? "bg-emerald-50 text-emerald-700"
                                        : "text-gray-700 hover:bg-gray-50"
                                    }`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                </aside>

                <section className="space-y-4">
                    {sorted.map((post) => (
                        <a
                            key={post.url}
                            href={post.url}
                            target="_blank"
                            rel="noreferrer"
                            className="block rounded-xl border border-gray-200 bg-white p-5 space-y-2"
                        >
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>{post.date}</span>
                                <span>{post.category}</span>
                            </div>

                            <h2 className="text-lg font-bold">{post.title}</h2>
                        </a>
                    ))}
                </section>
            </div>
        </div>
    );
}