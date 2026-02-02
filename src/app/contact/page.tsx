"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: "Cảm ơn bạn! Chúng tôi sẽ phản hồi sớm nhất có thể.",
        });
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message:
            data.message || "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50/80 text-stone-900">
      {/* Header - same as main landing */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-amber-200/60 bg-amber-50/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-stone-800 transition hover:text-orange-600"
          >
            <Image
              src="/logo.png"
              alt="Sổ tay nấu ăn"
              width={30}
              height={30}
            />
            <span>Sổ tay nấu ăn</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-stone-600 transition hover:text-orange-600"
            >
              Về trang chủ
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

      {/* Contact Form Section */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-amber-200/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
              Liên hệ với chúng tôi
            </h1>
            <p className="mt-4 text-lg text-stone-600">
              Gửi tin nhắn cho chúng tôi, chúng tôi sẽ phản hồi sớm nhất có thể.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-lg sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-stone-700 mb-2"
                >
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-stone-700 mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-stone-700 mb-2"
                >
                  Nội dung <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-stone-300 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                  placeholder="Nhập nội dung tin nhắn..."
                />
              </div>

              {submitStatus.type && (
                <div
                  className={`rounded-lg border p-4 ${
                    submitStatus.type === "success"
                      ? "border-green-200 bg-green-50 text-green-800"
                      : "border-red-200 bg-red-50 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-orange-500 py-3 px-6 font-semibold text-white shadow-md transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98]"
              >
                {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
