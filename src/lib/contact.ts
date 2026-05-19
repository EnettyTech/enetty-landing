export function getContactHref(productId?: string): string {
  if (productId) {
    return `/contact?product=${encodeURIComponent(productId)}`;
  }
  return "/contact";
}
