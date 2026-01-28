export default function AboutPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">
        ひとりぷらすについて
      </h1>

      <p className="text-gray-900 leading-relaxed">
        ひとりぷらすは、一人暮らしの「めんどくさい」を減らすために、
        生活サブスクや便利なサービスを実際に使って検証・発信するサイトです。
      </p>

      <div className="rounded-xl border border-gray-200 bg-white p-5">
        <h2 className="mb-2 text-lg font-bold text-gray-900">
          大事にしてること
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-gray-900">
          <li>良い点だけじゃなく、微妙な点も書く</li>
          <li>合う人・合わない人を分けて説明する</li>
          <li>無理におすすめしない（ラクになりたい人向け）</li>
        </ul>
      </div>

      <p className="text-gray-700 leading-relaxed">
        ※ 収益化のためアフィリエイトリンクを含む場合がありますが、
        内容の正直さは崩さない方針です。
      </p>
    </div>
  );
}
