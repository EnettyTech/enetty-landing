import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50/80 text-stone-900">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-amber-200/60 bg-amber-50/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 ">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-stone-800 transition hover:text-orange-600 flex items-center gap-2"
          >
            <Image src="/logo.png" alt="Sổ tay nấu ăn" width={30} height={30} />
            <span>Sổ tay nấu ăn</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="#features"
              className="hidden text-sm font-medium text-stone-600 transition hover:text-orange-600 sm:inline"
            >
              Tính năng
            </Link>
            <Link
              href="#cta"
              className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-orange-600 active:scale-[0.98]"
            >
              Tải app ngay
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-36">
        {/* Decorative background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-200/40 blur-3xl" />
          <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute bottom-20 left-0 h-64 w-64 rounded-full bg-yellow-200/30 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-orange-300 bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-800">
            Lưu công thức • Lên thực đơn • Nấu ngon mỗi ngày
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            Sổ tay nấu ăn
            <span className="block text-orange-500">của riêng bạn</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600 sm:text-xl">
            Lưu công thức yêu thích, lên thực đơn theo tuần và nấu ăn dễ dàng
            hơn với ứng dụng sổ tay nấu ăn thông minh.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#cta"
              className="w-full rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-orange-600 active:scale-[0.98] sm:w-auto"
            >
              Dùng thử miễn phí
            </Link>
            <Link
              href="#features"
              className="w-full rounded-full border-2 border-stone-300 bg-white px-8 py-4 text-lg font-semibold text-stone-700 transition hover:border-orange-400 hover:bg-amber-50 sm:w-auto"
            >
              Xem tính năng
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-t border-amber-200/60 bg-white py-20 sm:py-28"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Mọi thứ bạn cần để nấu ăn ngon
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
              Công cụ đơn giản, mạnh mẽ giúp bạn quản lý công thức và bữa ăn
              hàng ngày.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="group rounded-2xl border border-amber-100 bg-amber-50/50 p-6 transition hover:border-orange-200 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl group-hover:bg-orange-200">
                📝
              </div>
              <h3 className="mt-4 text-xl font-semibold text-stone-900">
                Lưu công thức
              </h3>
              <p className="mt-2 text-stone-600">
                Lưu công thức từ web, sách hay tự viết. Phân loại theo món, nguyên
                liệu và thời gian nấu.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-2xl border border-amber-100 bg-amber-50/50 p-6 transition hover:border-orange-200 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl group-hover:bg-orange-200">
                📅
              </div>
              <h3 className="mt-4 text-xl font-semibold text-stone-900">
                Thực đơn theo tuần
              </h3>
              <p className="mt-2 text-stone-600">
                Lên thực đơn sáng – trưa – tối theo tuần. Gợi ý món ăn và danh
                sách mua sắm tự động.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-2xl border border-amber-100 bg-amber-50/50 p-6 transition hover:border-orange-200 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl group-hover:bg-orange-200">
                🛒
              </div>
              <h3 className="mt-4 text-xl font-semibold text-stone-900">
                Danh sách mua sắm
              </h3>
              <p className="mt-2 text-stone-600">
                Tự động tạo danh sách nguyên liệu từ thực đơn. Tick khi mua xong,
                đồng bộ trên mọi thiết bị.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group rounded-2xl border border-amber-100 bg-amber-50/50 p-6 transition hover:border-orange-200 hover:shadow-lg sm:col-span-2 lg:col-span-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl group-hover:bg-orange-200">
                ⏱️
              </div>
              <h3 className="mt-4 text-xl font-semibold text-stone-900">
                Hẹn giờ nấu
              </h3>
              <p className="mt-2 text-stone-600">
                Bấm giờ từng bước trong công thức. Nhắc bạn đảo, tắt bếp đúng
                lúc.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group rounded-2xl border border-amber-100 bg-amber-50/50 p-6 transition hover:border-orange-200 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl group-hover:bg-orange-200">
                📱
              </div>
              <h3 className="mt-4 text-xl font-semibold text-stone-900">
                Mọi thiết bị
              </h3>
              <p className="mt-2 text-stone-600">
                Dùng trên điện thoại, tablet và máy tính. Dữ liệu đồng bộ, nấu ở
                đâu cũng có sổ tay.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group rounded-2xl border border-amber-100 bg-amber-50/50 p-6 transition hover:border-orange-200 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl group-hover:bg-orange-200">
                👨‍👩‍👧‍👦
              </div>
              <h3 className="mt-4 text-xl font-semibold text-stone-900">
                Chia sẻ với gia đình
              </h3>
              <p className="mt-2 text-stone-600">
                Chia sẻ công thức và thực đơn với người thân. Cùng lên thực đơn
                và nấu ăn vui hơn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="relative overflow-hidden bg-gradient-to-br from-orange-500 to-amber-600 py-20 sm:py-28"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Bắt đầu nấu ăn có tổ chức
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-orange-100">
            Tải app miễn phí. Không cần thẻ tín dụng. Hủy bất cứ lúc nào.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-orange-600 shadow-lg transition hover:bg-orange-50 sm:w-auto"
            >
              <span className="text-2xl">🍎</span>
              Tải trên App Store
            </a>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/80 bg-transparent px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              <span className="text-2xl">🤖</span>
              Tải trên Google Play
            </a>
          </div>
          <p className="mt-6 text-sm text-orange-200">
            Cũng có phiên bản web — dùng ngay trên trình duyệt.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-200/60 bg-amber-100/50 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <Link
              href="/"
              className="text-lg font-bold text-stone-800 transition hover:text-orange-600 flex items-center gap-2"
            >
              <Image src="/logo.png" alt="Sổ tay nấu ăn" width={30} height={30} />
              <span>Sổ tay nấu ăn</span>
            </Link>
            <div className="flex gap-8 text-sm text-stone-600">
              <Link href="/privacy.html" className="transition hover:text-orange-600">
                Điều khoản
              </Link>
              <Link href="/privacy.html" className="transition hover:text-orange-600">
                Chính sách
              </Link>
              <Link href="/contact" className="transition hover:text-orange-600">
                Liên hệ
              </Link>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-stone-500">
            © {new Date().getFullYear()} Sổ tay nấu ăn. Made with ❤️ for home
            cooks.
          </p>
        </div>
      </footer>
    </div>
  );
}
