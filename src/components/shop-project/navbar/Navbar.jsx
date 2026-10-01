export default function Navbar({ cart, deleteProductFromCart }) {
  function deleteProduct(id) {
    deleteProductFromCart(id);
  }
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40">
        <div className="max-w-md mx-auto mb-4 px-4">
          <div className="bg-neutral-900 text-white rounded-2xl shadow-xl flex items-center justify-around py-3">
            <div className="bar-item relative flex flex-col items-center">
              <span className="relative p-2 block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 21s-6.7-4.35-9.3-8.1C1 10.2 1.6 6.7 4.6 5.2c2.2-1.1 4.6-.3 5.9 1.4l1.5 1.9 1.5-1.9c1.3-1.7 3.7-2.5 5.9-1.4 3 1.5 3.6 5 1.9 7.7C18.7 16.65 12 21 12 21z" />
                </svg>
                <span
                  id="wishBadge"
                  className="absolute -top-1 -left-1 bg-rose-500 text-white text-[10px] leading-none rounded-full min-w-[16px] h-4 flex items-center justify-center px-1"
                >
                  0
                </span>
              </span>
              <span className="text-[11px] text-neutral-300">علاقه‌مندی</span>

              <div className="popover absolute bottom-full mb-3 right-1/2 translate-x-1/2 w-64 bg-white text-neutral-900 rounded-xl shadow-2xl p-3">
                <p className="text-xs font-semibold text-neutral-500 mb-2">
                  علاقه‌مندی‌ها
                </p>
                <div className="space-y-1 text-sm max-h-48 overflow-y-auto">
                  <div id="wish-row-1" className="pop-row items-center gap-2">
                    <span className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold bg-[#3b82f6]">
                      ک
                    </span>
                    <span>کوله پشتی سفری</span>
                  </div>
                  <div id="wish-row-2" className="pop-row items-center gap-2">
                    <span className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold bg-[#f59e0b]">
                      ه
                    </span>
                    <span>هدفون بی‌سیم</span>
                  </div>
                  <div id="wish-row-3" className="pop-row items-center gap-2">
                    <span className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold bg-[#10b981]">
                      م
                    </span>
                    <span>ماگ سرامیکی</span>
                  </div>
                  <div id="wish-row-4" className="pop-row items-center gap-2">
                    <span className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold bg-[#ef4444]">
                      د
                    </span>
                    <span>دفترچه یادداشت</span>
                  </div>
                  <div id="wish-row-5" className="pop-row items-center gap-2">
                    <span className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold bg-[#6366f1]">
                      س
                    </span>
                    <span>ساعت هوشمند</span>
                  </div>
                  <div id="wish-row-6" className="pop-row items-center gap-2">
                    <span className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold bg-[#0ea5e9]">
                      ع
                    </span>
                    <span>عینک آفتابی</span>
                  </div>
                </div>
                <p id="wishEmpty" className="text-xs text-neutral-400">
                  چیزی اضافه نشده
                </p>
              </div>
            </div>

            <div className="bar-item relative flex flex-col items-center">
              <span className="relative p-2 block">
                {/* آیکون سبد خرید همون قبلی */}
                <span
                  id="cartBadge"
                  className="absolute -top-1 -left-1 bg-emerald-500 text-white text-[10px] leading-none rounded-full min-w-[16px] h-4 flex items-center justify-center px-1"
                >
                  {cart.length}
                </span>
              </span>
              <span className="text-[11px] text-neutral-300">سبد خرید</span>

              {/* wrapper جدید: فاصله رو با padding می‌سازه نه margin */}
              <div className="absolute bottom-full right-1/2 translate-x-1/2 pb-3">
                <div className="popover w-64 bg-white text-neutral-900 rounded-xl shadow-2xl p-3">
                  {cart.length > 0 && (
                    <p className="text-xs font-semibold text-neutral-500 mb-2">
                      سبد خرید
                    </p>
                  )}
                  <div className="space-y-1 text-sm max-h-48">
                    {cart.map((product) => (
                      <div
                        key={product.id}
                        id={`cart-row-${product.id}`}
                        className="pop-row items-center gap-2 justify-between flex"
                      >
                        <span>{product.title}</span>
                        <span className="mr-2.5">{product.count} عدد</span>
                        <button
                          className="bg-red-700 text-white rounded px-2 py-1 cursor-pointer"
                          onClick={() => {
                            deleteProduct(product.id);
                          }}
                        >
                          حذف
                        </button>
                      </div>
                    ))}
                  </div>

                  {!cart.length && (
                    <p id="cartEmpty" className="text-xs text-neutral-400">
                      سبد خالی است
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
