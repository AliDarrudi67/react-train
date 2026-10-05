import { useState } from "react";
import Navbar from "../../components/shop-project/navbar/Navbar";
import Product from "../../components/shop-project/product/Product";

export default function Shop() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "کوله پشتی سفری",
      desc: "جنس ضدآب، مناسب سفرهای چند روزه",
      color: "#3b82f6",
      isFav: false,
    },
    {
      id: 2,
      title: "هدفون بی‌سیم",
      desc: "حذف نویز فعال، ۳۰ ساعت شارژ",
      color: "#f59e0b",
      isFav: false,
    },
    {
      id: 3,
      title: "ماگ سرامیکی",
      desc: "طرح مینیمال، ظرفیت ۳۵۰ میلی‌لیتر",
      color: "#10b981",
      isFav: false,
    },
    {
      id: 4,
      title: "دفترچه یادداشت",
      desc: "جلد چرمی، ۲۰۰ برگ خط‌دار",
      color: "#ef4444",
      isFav: false,
    },
    {
      id: 5,
      title: "ساعت هوشمند",
      desc: "ردیابی خواب و ضربان قلب",
      color: "#6366f1",
      isFav: false,
    },
    {
      id: 6,
      title: "عینک آفتابی",
      desc: "لنز پلاریزه با محافظ UV۴۰۰",
      color: "#0ea5e9",
      isFav: false,
    },
  ]);
  const [cart, setCart] = useState([]);
  // const [favCount, setFavCount] = useState(0);

  function addToCart(product) {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index >= 0) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item,
        ),
      );
    } else {
      const object = {
        ...product,
        count: 1,
      };
      setCart((prev) => {
        const newCart = [...prev, object];
        return newCart;
      });
    }
  }

  function deleteProductFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function addToFav(product) {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, isFav: !item.isFav } : item,
      ),
    );
  }

  const favCount = products.filter((item) => item.isFav).length;
  return (
    <>
      <header className="max-w-6xl mx-auto px-4 pt-8 pb-4">
        <h1 className="text-2xl font-bold">محصولات</h1>
        <p className="text-neutral-500 text-sm mt-1">فروشگاه انلاین</p>
      </header>

      <main className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addToCart={() => {
                addToCart(product);
              }}
              addToFav={() => {
                addToFav(product);
              }}
            />
          ))}
        </div>
      </main>

      <Navbar
        cart={cart}
        deleteProductFromCart={deleteProductFromCart}
        addToFavorite={addToFav}
        products={products}
        favCount={favCount}
      />
    </>
  );
}
