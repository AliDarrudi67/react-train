import { useState } from "react";

export default function TaskForm({ closeTaskForm, addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isImportant, setIsImportant] = useState(false);

  function saveForm(event) {
    event.preventDefault();
    addTask({
      title,
      description,
      id: Date.now(),
      status: "pending",
      isImportant,
    });
    closeTaskForm();
  }
  return (
    <div>
      <div
        dir="rtl"
        className="fixed inset-0 bg-black/40 flex items-center justify-center p-4"
      >
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 space-y-5">
          {/* هدر */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-800">ثبت تسک جدید</h2>
            <button
              type="button"
              onClick={closeTaskForm}
              className="text-gray-400 hover:text-gray-600 text-xl leading-none"
            >
              ×
            </button>
          </div>

          {/* فرم */}
          <form className="space-y-4" onSubmit={saveForm}>
            <div className="space-y-1.5">
              <label className="text-sm text-gray-700 font-medium">
                عنوان تسک
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="مثلاً طراحی هدر سایت"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-gray-700 font-medium">
                توضیحات
              </label>
              <textarea
                rows={4}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="توضیحات تسک را بنویس..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer w-fit">
              <input
                type="checkbox"
                className="accent-green-600 w-4 h-4"
                onChange={(e) => {
                  setIsImportant(e.target.checked);
                }}
              />
              این تسک مهم است
            </label>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                onClick={saveForm}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg py-2.5 transition"
              >
                ثبت تسک
              </button>
              <button
                type="button"
                className="flex-1 border border-gray-300 text-gray-600 hover:bg-gray-50 text-sm font-medium rounded-lg py-2.5 transition"
              >
                انصراف
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
