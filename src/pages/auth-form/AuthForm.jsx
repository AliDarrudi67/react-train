import { useState } from "react";

export default function AuthForm() {
  const [formStatus, setFormStatus] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login(event) {
    event.preventDefault();
    console.log(username);
    console.log(password);
  }
  return (
    <>
      <div className="w-full max-w-md mx-auto space-y-6 p-4" dir="rtl">
        {formStatus === "login" && (
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">ورود</h2>
            <form className="space-y-3">
              <input
                type="text"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                placeholder="نام کاربری یا ایمیل"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                placeholder="رمز عبور"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={login}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 text-sm font-medium transition"
              >
                ورود
              </button>
            </form>
            <a
              onClick={() => {
                setFormStatus("register");
              }}
            >
              برو به ثبت نام
            </a>
          </div>
        )}
        {formStatus === "register" && (
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">ثبت‌نام</h2>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="ایمیل"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="password"
                placeholder="رمز عبور"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 text-sm font-medium transition"
              >
                ثبت‌نام
              </button>
            </form>
            <a
              onClick={() => {
                setFormStatus("login");
              }}
            >
              برو به لاگین
            </a>
          </div>
        )}
      </div>
    </>
  );
}
