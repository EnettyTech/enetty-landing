"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { products } from "@/app/constant/products";
import { ProductSelect } from "@/components/ProductSelect";

const EMPTY_PRODUCT = "";

function isValidProduct(product: string): boolean {
  return products.some((p) => p.id === product);
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const productFromUrl = searchParams.get("product") ?? "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    productId: EMPTY_PRODUCT,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    if (isValidProduct(productFromUrl)) {
      setFormData((prev) => ({ ...prev, productId: productFromUrl }));
    }
  }, [productFromUrl]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
          productId: isValidProduct(productFromUrl) ? productFromUrl : EMPTY_PRODUCT,
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
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-lg sm:p-8 lg:p-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="productId"
            className="mb-2 block text-sm font-semibold text-stone-700"
          >
            Sản phẩm
          </label>
          <ProductSelect
            value={formData.productId}
            onChange={(productId) =>
              setFormData((prev) => ({ ...prev, productId }))
            }
          />
        </div>

        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-semibold text-stone-700"
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
            className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200"
            placeholder="Nhập họ và tên của bạn"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-stone-700"
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
            className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200"
            placeholder="example@email.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-stone-700"
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
            className="w-full resize-none rounded-lg border border-stone-300 px-4 py-3 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200"
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
          className="w-full rounded-full bg-indigo-600 py-3 px-6 font-semibold text-white shadow-md transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98]"
        >
          {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
        </button>
      </form>
    </div>
  );
}
