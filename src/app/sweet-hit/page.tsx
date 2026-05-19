"use client";

import Image from "next/image";
import Link from "next/link";
import { SWEET_HIT_LOGO } from "@/lib/sweet-hit-metadata";
import { motion } from "motion/react";

const features = [
  {
    emoji: "🎯",
    title: "Ngắm & phóng",
    description:
      "Chạm để bắn nến vào đúng chỗ trên bánh gato đang xoay. Một chạm — một nến, đơn giản mà gây nghiện!",
  },
  {
    emoji: "🎂",
    title: "Bánh ngọt xoay vòng",
    description:
      "Mỗi màn là một chiếc bánh mới: tốc độ xoay khác nhau, thử thách tăng dần khiến bạn không thể dừng tay.",
  },
  {
    emoji: "✨",
    title: "Hiệu ứng ngọt ngào",
    description:
      "Màu pastel hồng – xanh – trắng, âm thanh vui tai và hiệu ứng khi cắm trúng nến — cảm giác như tiệc sinh nhật!",
  },
  {
    emoji: "🏆",
    title: "Phá kỷ lục",
    description:
      "Càng nhiều nến cắm được, điểm càng cao. Thử vượt qua chính mình và chia sẻ thành tích với bạn bè.",
  },
  {
    emoji: "🍬",
    title: "Skin & chủ đề",
    description:
      "Mở khóa bánh kem, cupcake, macaron… Mỗi chủ đề một vibe ngọt ngào riêng.",
  },
  {
    emoji: "😊",
    title: "Chơi mọi lúc",
    description:
      "Vài phút giải trí lúc rảnh rỗi. Không cần học luật phức tạp — mở game là chơi ngay!",
  },
];

export default function SweetHitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-sky-50 text-rose-900">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-pink-200/70 bg-white/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/sweet-hit"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-rose-600 transition hover:text-pink-500"
          >
            <Image
              src={SWEET_HIT_LOGO}
              alt="Phi tiêu ngọt ngào"
              width={36}
              height={36}
              className="rounded-xl shadow-md"
            />
            <span>Phi tiêu ngọt ngào</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="#features"
              className="hidden text-sm font-medium text-rose-500/90 transition hover:text-pink-600 sm:inline"
            >
              Cách chơi
            </Link>
            <Link
              href="#cta"
              className="rounded-full bg-gradient-to-r from-pink-400 to-rose-400 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-pink-200/80 transition hover:from-pink-500 hover:to-rose-500 active:scale-[0.98]"
            >
              Chơi ngay
            </Link>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-36">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-8 top-24 h-48 w-48 rounded-full bg-pink-200/50 blur-3xl" />
          <div className="absolute right-0 top-16 h-64 w-64 rounded-full bg-sky-200/50 blur-3xl" />
          <div className="absolute bottom-10 left-1/3 h-56 w-56 rounded-full bg-emerald-100/60 blur-3xl" />
          <span className="absolute left-[8%] top-32 text-4xl opacity-40 animate-bounce sm:text-5xl">
            🍬
          </span>
          <span className="absolute right-[12%] top-40 text-3xl opacity-35 sm:text-4xl">
            ✨
          </span>
          <span className="absolute bottom-32 left-[15%] text-3xl opacity-30">
            🎂
          </span>
          <span className="absolute bottom-40 right-[18%] text-4xl opacity-35">
            🕯️
          </span>
        </div>

        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-pink-200 bg-white px-4 py-1.5 text-sm font-semibold text-pink-600 shadow-sm">
            <span>🎮</span>
            Game casual • Ngọt ngào • Vui nhộn
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-pink-500 via-rose-400 to-fuchsia-400 bg-clip-text text-transparent">
              Phi tiêu ngọt ngào
            </span>
            <span className="mt-2 block text-2xl font-bold text-sky-600 sm:text-3xl lg:text-4xl">
              Phóng nến vào bánh gato!
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-rose-600/90 sm:text-xl">
            Bánh gato xoay tròn, nến bay tới tấp — cắm trúng thì vui, cắm trùng thì game over.
            Một game siêu dễ chơi, siêu khó bỏ tay!
          </p>

          <div className="mx-auto mt-12 flex max-w-md items-center justify-center">
            <div className="relative">
              <motion.img animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} src="/sweet-hit/cake.png" alt="Phi tiêu ngọt ngào" width={200} height={200} className="rounded-lg" />
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#cta"
              className="w-full rounded-full bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-pink-300/50 transition hover:brightness-105 active:scale-[0.98] sm:w-auto"
            >
              🎂 Tải game miễn phí
            </Link>
            <Link
              href="#features"
              className="w-full rounded-full border-2 border-sky-200 bg-white px-8 py-4 text-lg font-semibold text-sky-600 transition hover:border-sky-300 hover:bg-sky-50 sm:w-auto"
            >
              Xem cách chơi
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-pink-100 bg-white/70 py-12 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 px-4 text-center sm:gap-12">
          {[
            { stat: "1 chạm", label: "Để bắn nến" },
            { stat: "∞", label: "Màn chơi thử thách" },
            { stat: "100%", label: "Ngọt ngào" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-2xl font-extrabold text-pink-500 sm:text-3xl">
                {item.stat}
              </p>
              <p className="mt-1 text-sm font-medium text-rose-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="features"
        className="py-20 sm:py-28"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-rose-700 sm:text-4xl">
              Chơi thế nào? 🤔
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-rose-500/90">
              Luật chơi đơn giản như ăn bánh — nhưng để thắng thì cần phản xạ
              nhanh và canh timing chuẩn!
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl border-2 border-pink-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-pink-200 hover:shadow-lg hover:shadow-pink-100/80"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-sky-100 text-3xl transition group-hover:scale-110">
                  {feature.emoji}
                </div>
                <h3 className="mt-4 text-xl font-bold text-rose-700">
                  {feature.title}
                </h3>
                <p className="mt-2 leading-relaxed text-rose-500/85">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border-2 border-dashed border-emerald-200 bg-gradient-to-r from-emerald-50/80 via-white to-sky-50/80 p-8 text-center sm:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-500">
              Mẹo pro
            </p>
            <p className="mt-3 text-xl font-semibold text-rose-700 sm:text-2xl">
              Đợi bánh xoay đúng góc — bắn nhanh quá dễ đâm trùng nến cũ!
            </p>
          </div>
        </div>
      </section>

      <section
        id="cta"
        className="relative overflow-hidden bg-gradient-to-br from-pink-400 via-rose-300 to-sky-300 py-20 sm:py-28"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M20 20h20v20H20zM0 0h20v20H0z\'/%3E%3C/g%3E%3C/svg%3E')]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white drop-shadow-sm sm:text-4xl">
            Sẵn sàng cắm nến chưa? 🎂
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/95">
            Tải Phi tiêu ngọt ngào miễn phí. Chơi vài phút là muốn &ldquo;thêm
            một màn nữa thôi&rdquo;.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-pink-600 shadow-lg transition hover:bg-pink-50 sm:w-auto"
              aria-label="Tải trên App Store — sắp ra mắt"
            >
              <Image src="/apple.png" alt="" width={20} height={20} />
              App Store
            </a>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-sky-600 shadow-lg transition hover:bg-sky-50 sm:w-auto"
              aria-label="Tải trên Google Play — sắp ra mắt"
            >
              <Image src="/play.png" alt="" width={20} height={20} />
              Google Play
            </a>
          </div>
          <p className="mt-6 text-sm font-medium text-white/90">
            🍭 Sắp có mặt trên cửa hàng ứng dụng
          </p>
        </div>
      </section>

      <footer className="border-t border-pink-100 bg-pink-50/50 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <Link
              href="/sweet-hit"
              className="flex items-center gap-2 text-lg font-bold text-rose-600 transition hover:text-pink-500"
            >
              <Image
                src={SWEET_HIT_LOGO}
                alt="Phi tiêu ngọt ngào"
                width={32}
                height={32}
                className="rounded-lg"
              />
              Phi tiêu ngọt ngào
            </Link>
            <div className="flex gap-8 text-sm text-rose-500">
              <Link href="/" className="transition hover:text-pink-600">
                Enetty
              </Link>
              <Link href="/sweet-hit/privacy.html" className="transition hover:text-pink-600">
                Chính sách
              </Link>
              <Link href="/contact?product=sweet-hit" className="transition hover:text-pink-600">
                Liên hệ
              </Link>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-rose-400">
            © {new Date().getFullYear()} Phi tiêu ngọt ngào · Sweet Hit by Enetty
          </p>
        </div>
      </footer>
    </div>
  );
}
