import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10">
      {/* ヒーロー */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          ひとりぷらす
        </h1>
        <p className="text-gray-600 text-lg">
          一人暮らしを、ちょっとラクに。
        </p>
      </section>

      {/* カード3つ */}
      <section className="grid gap-8 px-4 sm:px-0 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          title="宅配・食"
          desc="自炊が面倒な日に頼れるサービスを、実体験ベースで紹介。"
          href="/media"
        />
        <Card
          title="動画・娯楽"
          desc="インドアな一人暮らしを快適にするサブスクを比較。"
          href="/media"
        />
        <Card
          title="家計・管理"
          desc="サブスク整理や無駄を減らす考え方をまとめています。"
          href="/media"
        />
      </section>
    </div>
  );
}

function Card({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
    >
      <div className="flex h-full flex-col">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          {desc}
        </p>

        {/* 下に寄せるためのスペーサー */}
        <div className="mt-auto pt-4 text-sm font-medium text-emerald-600">
          詳しく見る →
        </div>
      </div>
    </Link>
  );
}

