"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { products } from "@/app/constant/products";

type ProductSelectProps = {
  value: string;
  onChange: (productId: string) => void;
};

export function ProductSelect({ value, onChange }: ProductSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const selected = products.find((p) => p.id === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectProduct = (productId: string) => {
    onChange(productId);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        id="productId"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center gap-3 rounded-lg border border-stone-300 bg-white px-4 py-3 text-left outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200"
      >
        {selected ? (
          <>
            <Image
              src={selected.icon}
              alt=""
              width={28}
              height={28}
              className="shrink-0 rounded-md"
            />
            <span className="flex-1 font-medium text-stone-800">
              {selected.name}
            </span>
          </>
        ) : (
          <span className="flex-1 text-stone-400">— Chọn sản phẩm —</span>
        )}
        <svg
          className={`h-5 w-5 shrink-0 text-stone-400 transition ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-stone-200 bg-white py-1 shadow-lg"
        >
          <li role="option" aria-selected={value === ""}>
            <button
              type="button"
              onClick={() => selectProduct("")}
              className="flex w-full items-center gap-3 px-4 py-3 text-left text-stone-500 transition hover:bg-stone-50"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-stone-100 text-xs">
                —
              </span>
              Chọn sản phẩm
            </button>
          </li>
          {products.map((product) => (
            <li
              key={product.id}
              role="option"
              aria-selected={value === product.id}
            >
              <button
                type="button"
                onClick={() => selectProduct(product.id)}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-indigo-50 ${
                  value === product.id ? "bg-indigo-50/80" : ""
                }`}
              >
                <Image
                  src={product.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="shrink-0 rounded-md"
                />
                <span className="font-medium text-stone-800">{product.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
