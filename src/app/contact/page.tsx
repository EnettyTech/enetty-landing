import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200/80 bg-stone-50/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-stone-900 transition hover:text-indigo-600"
          >
            <Image
              src="/logo.png"
              alt="Enetty"
              width={36}
              height={36}
              className="rounded-lg"
            />
            Enetty
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-stone-600 transition hover:text-indigo-600"
          >
            Về trang chủ
          </Link>
        </nav>
      </header>

      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-200/30 blur-3xl" />
          <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-violet-200/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
              Liên hệ với chúng tôi
            </h1>
            <p className="mt-4 text-lg text-stone-600">
              Gửi tin nhắn cho chúng tôi, chúng tôi sẽ phản hồi sớm nhất có thể.
            </p>
          </div>

          <Suspense
            fallback={
              <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center text-stone-600 shadow-lg">
                Đang tải form...
              </div>
            }
          >
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
