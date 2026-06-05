import Link from "next/link";
import Image from "next/image";
import { products } from "./constant/products";


const values = [
  {
    icon: "✨",
    title: "Đơn giản, dễ dùng",
    description:
      "Giao diện gọn gàng, thao tác rõ ràng — ai cũng có thể dùng ngay mà không cần hướng dẫn dài.",
  },
  {
    icon: "🔒",
    title: "Tôn trọng quyền riêng tư",
    description:
      "Dữ liệu của bạn thuộc về bạn. Chúng tôi thiết kế sản phẩm với sự minh bạch và bảo mật.",
  },
  {
    icon: "📱",
    title: "Đa nền tảng",
    description:
      "Ứng dụng chạy mượt trên iOS, Android và web — đồng bộ khi bạn cần.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200/80 bg-stone-50/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-stone-900 transition hover:text-indigo-600 flex items-center gap-2"
          >
            <Image src="/logo.png" alt="Enetty" width={36} height={36} className="rounded-lg" />
            Enetty
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="#about"
              className="hidden text-sm font-medium text-stone-600 transition hover:text-indigo-600 sm:inline"
            >
              Về chúng tôi
            </Link>
            <Link
              href="#products"
              className="hidden text-sm font-medium text-stone-600 transition hover:text-indigo-600 sm:inline"
            >
              Sản phẩm
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-stone-800 active:scale-[0.98]"
            >
              Liên hệ
            </Link>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl" />
          <div className="absolute -right-20 top-32 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl" />
          <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-sky-200/25 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-800">
            Ứng dụng di động • Thiết kế tại Việt Nam
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            Ứng dụng hữu ích
            <span className="block text-indigo-600">cho cuộc sống hàng ngày</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone-600 sm:text-xl">
            Enetty là đội ngũ phát triển ứng dụng di động, tập trung vào những
            công cụ thực tế giúp bạn quản lý công việc, thói quen và đam mê cá
            nhân một cách dễ dàng hơn.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-indigo-700 active:scale-[0.98]"
            >
              Khám phá sản phẩm
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center justify-center rounded-full border-2 border-stone-300 bg-white px-8 py-4 text-lg font-semibold text-stone-700 transition hover:border-indigo-300 hover:bg-indigo-50/50"
            >
              Tìm hiểu thêm
            </Link>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-t border-stone-200 bg-white py-20 sm:py-28"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                Chúng tôi là ai?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-stone-600">
                Enetty ra đời với mong muốn tạo ra những ứng dụng nhỏ gọn nhưng
                giải quyết đúng nhu cầu thực tế — từ việc lưu công thức nấu ăn
                đến các công cụ hỗ trợ sinh hoạt hàng ngày.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-stone-600">
                Mỗi sản phẩm được xây dựng cẩn thận: giao diện thân thiện, hiệu
                năng ổn định và cập nhật liên tục dựa trên phản hồi từ người
                dùng.
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-gradient-to-br from-indigo-50 to-violet-50 p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Sứ mệnh
              </p>
              <p className="mt-4 text-2xl font-semibold leading-snug text-stone-800">
                &ldquo;Làm cho công nghệ phục vụ cuộc sống thường ngày — không
                phức tạp hóa nó.&rdquo;
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Sản phẩm tập trung, không ô nhiễm tính năng",
                  "Hỗ trợ người dùng Việt Nam và quốc tế",
                  "Phát triển bền vững, lắng nghe cộng đồng",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-stone-700"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="products"
        className="border-t border-stone-200 bg-stone-50 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Sản phẩm của chúng tôi
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
              Các ứng dụng Enetty đang phát triển và phục vụ người dùng trên
              App Store và Google Play.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-8 shadow-sm transition hover:border-indigo-200 hover:shadow-lg"
              >
                <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                  {product.badge}
                </span>
                <div className={`mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${product.accent} text-3xl shadow-md`}>
                  <Image src={product.icon} alt={product.name} width={56} height={56} className="rounded-lg" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-stone-900 group-hover:text-indigo-600 transition">
                  {product.name}
                </h3>
                <p className="mt-3 text-stone-600 leading-relaxed">
                  {product.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">
                  Xem chi tiết
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Giá trị cốt lõi
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
              Những nguyên tắc chúng tôi theo đuổi trong mọi sản phẩm.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-stone-100 bg-stone-50/80 p-6 transition hover:border-indigo-100 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-2xl">
                  {value.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-stone-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-stone-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-stone-200 bg-gradient-to-br from-indigo-600 to-violet-700 py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.06\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Có câu hỏi hoặc góp ý?
          </h2>
          <p className="mx-auto mt-4 text-lg text-indigo-100">
            Chúng tôi luôn sẵn sàng lắng nghe. Gửi tin nhắn và đội ngũ Enetty
            sẽ phản hồi sớm nhất có thể.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-lg font-semibold text-indigo-700 shadow-lg transition hover:bg-indigo-50 active:scale-[0.98]"
          >
            Liên hệ với chúng tôi
          </Link>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-stone-100/60 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <Link
              href="/"
              className="text-lg font-bold text-stone-900 transition hover:text-indigo-600 flex items-center gap-2"
            >
              <Image src="/logo.png" alt="Enetty" width={36} height={36} className="rounded-lg" />
              Enetty
            </Link>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-stone-600 sm:gap-8">
              <Link href="/cook-note" className="transition hover:text-indigo-600">
                Sổ tay nấu ăn
              </Link>
              <Link href="/sweet-hit" className="transition hover:text-indigo-600">
                Phi tiêu ngọt ngào
              </Link>
              <Link href="/privacy.html" className="transition hover:text-indigo-600">
                Chính sách
              </Link>
              <Link href="/contact" className="transition hover:text-indigo-600">
                Liên hệ
              </Link>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-stone-500">
            © {new Date().getFullYear()} Enetty. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
