import Link from "next/link";

const posts = [
  {
    title: "暮らしに合う動画配信サービスの選び方",
    description: "  使ってわかった違い",
    url: "https://ring-straw-4b3.notion.site/2fa900854a3a80aaa0bdf49bf8c7d3d8?source=copy_link",
    date: "2026.02.01",
  },
  {
    title: "それでも残したサブスク3つ",
    description: "暮らしにプラスだったもの",
    url: "https://ring-straw-4b3.notion.site/3-2fa900854a3a80fd9cafd71e631a21f7?source=copy_link",
    date: "2026.02.01",
  },
  {
    title: "正直、解約してよかったサブスクの話",
    description: "解約理由と気づいたこと",
    url: "https://ring-straw-4b3.notion.site/2fa900854a3a8087a9d9f123eba5da56?source=copy_link",
    date: "2026.02.01",
  },
  {
    title: "今まで使ったことあるサブスクを全部まとめてみた",
    description: "使っている理由と率直な感想",
    url: "https://ring-straw-4b3.notion.site/2fa900854a3a80f5a2ebfca94386ab36?source=copy_link",
    date: "2026.02.01",
  },
  {
    title: "Notionでブログを始めてみた",
    description: "ひとりぷらすのブログ運用方針と、ブログを始めた理由。",
    url: "https://ring-straw-4b3.notion.site/a80900854a3a83058d9f81e4a7aa4849",
    date: "2026.01.29",
  },
];

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">
        ブログ
      </h1>

      <p className="text-gray-700 leading-relaxed">
        ひとりぷらすで運営しているブログ記事一覧です。
      </p>

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.url}
            className="rounded-xl border border-gray-200 bg-white p-5 space-y-2"
          >
            <div className="text-xs text-gray-500">
              {post.date}
            </div>

            <h2 className="text-lg font-bold text-gray-900">
              {post.title}
            </h2>

            <p className="text-sm text-gray-700 leading-relaxed">
              {post.description}
            </p>

            <a
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm font-medium text-emerald-600 hover:underline"
            >
              記事を読む →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
