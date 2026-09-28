export default function Task({ task }) {
  console.log(task);
  return (
    <div>
      <div className="flex items-center justify-between gap-4 bg-white border border-gray-200 rounded-xl p-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-medium text-gray-800">{task?.title}</h3>
          </div>
          <p className="text-xs text-gray-500">{task?.description}</p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            className="text-xs bg-green-600 hover:bg-green-700 text-white rounded-lg px-3 py-1.5 transition"
          >
            اتمام
          </button>
          <button
            type="button"
            className="text-xs border border-red-300 text-red-600 hover:bg-red-50 rounded-lg px-3 py-1.5 transition"
          >
            حذف
          </button>
        </div>
      </div>
    </div>
  );
}
