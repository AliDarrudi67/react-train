export default function Product({ product, addToCart, addToFav }) {
  return (
    <>
      <div className="bg-white rounded-xl border border-neutral-200 p-3 flex flex-col">
        <div className="h-32 rounded-lg flex items-center justify-center text-white text-3xl font-bold bg-[#3b82f6]">
          ک
        </div>
        <h3 className="mt-3 font-semibold text-sm">{product.title}</h3>
        <p className="text-neutral-500 text-xs mt-1 flex-1">{product.desc}</p>
        <div className="flex gap-2 mt-3 justify-between">
          <button
            className="bg-green-600 rounded px-2 py-1 text-white"
            onClick={addToCart}
          >
            <span> افزودن به سبد</span>
          </button>
          <button
            className="text-xs border border-neutral-300 rounded-lg px-3 py-2 cursor-pointer"
            onClick={addToFav}
          >
            {product.isFav ? "بدم میاد" : " خوشم میاد"}
          </button>
        </div>
      </div>
    </>
  );
}
