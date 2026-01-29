import Link from "next/link";

const posts = [
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
