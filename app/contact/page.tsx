export default function ContactPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">
        お問い合わせ
      </h1>

      <p className="text-gray-700 leading-relaxed">
        ご連絡は以下のメールアドレス宛にお願いします。
        内容を確認のうえ、必要に応じて返信いたします。
      </p>

      <div className="rounded-xl border border-gray-200 bg-white p-5 space-y-2">
        <div className="text-sm text-gray-500">
          メールアドレス
        </div>
        <div className="font-mono text-gray-900">
          your-email@example.com
        </div>
        <p className="text-sm text-gray-600">
          ※ スパム対策のため、必要に応じて変更する予定です
        </p>
      </div>
    </div>
  );
}
