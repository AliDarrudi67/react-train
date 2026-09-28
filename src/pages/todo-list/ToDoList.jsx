import { useState } from "react";
import Task from "../../components/task/Task";

export default function ToDoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "طراحی هدر سایت",
      description: "هدر سایت را طراحی کنید به زیباترین شکل ممکن زودباش!!",
      status: "pending",
      isImportant: true,
    },
    {
      id: 2,
      title: "طراحی باتوم شیت ها",
      description: "یک سری باتوم شیت داریم لینک فیگما رو ببین بدو...",
      status: "pending",
      isImportant: false,
    },
    {
      id: 3,
      title: "رفع مشکل خطای 404",
      description: "هم هر جای سایت بازمیکنی 404 میده این چه وضعشههههههههه ؟؟؟",
      status: "pending",
      isImportant: true,
    },
  ]);
  return (
    <>
      <div dir="rtl" className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          {/*  هدر */}
          <header className="space-y-1">
            <h1 className="text-2xl font-bold text-gray-800">مدیریت تسک‌ها</h1>
            <p className="text-sm text-gray-500">
              کارهای روزانه‌ات را ثبت کن، اولویت‌بندی کن و پیشرفتت را دنبال کن.
            </p>
          </header>

          {/* فیلتر و ثبت تسک */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input type="checkbox" className="accent-green-600" />
                فقط تسک‌های مهم
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input type="checkbox" className="accent-green-600" />
                نمایش تسک‌های کامل‌شده
              </label>
            </div>

            <button
              type="button"
              className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg px-4 py-2 transition"
            >
              ثبت تسک
            </button>
          </div>

          {/* تسک‌های موجود */}
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-gray-600">
              تسک‌های موجود
            </h2>

            {tasks
              .filter((task) => task.status == "pending")
              .map((item) => (
                <Task key={item?.id} task={item} />
              ))}
          </section>

          {/* تسک‌های کامل‌شده */}
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-gray-600">
              تسک‌های کامل‌شده
            </h2>

            {tasks
              .filter((item) => item.status == "done")
              .map((task) => (
                <Task key={task?.id} task={task} />
              ))}
          </section>
        </div>
      </div>
    </>
  );
}
