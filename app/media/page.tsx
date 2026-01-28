import Link from "next/link";

export default function MediaPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">
        メディア
      </h1>

      <p className="text-gray-700 leading-relaxed">
        現在運営しているメディア一覧です。今後も順次追加していきます。
      </p>

      <div className="rounded-xl border border-gray-200 bg-white p-5 space-y-3">
        <h2 className="text-lg font-bold text-gray-900">
          ひとりぷらす｜生活サブスク研究室
        </h2>

        <p className="text-gray-700 text-sm leading-relaxed">
          宅配・動画・家計管理など、一人暮らしをラクにする
          サブスクを実体験ベースでまとめています。
        </p>

        <Link
          href="#"
          className="inline-flex items-center text-sm font-medium text-emerald-600 hover:underline"
        >
          ブログを見る →
        </Link>
      </div>
    </div>
  );
}
