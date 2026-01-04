export default function Panel({ title, children, isActive, onActive }) {
  return (
    <section className="w-full mb-4 rounded-xl border border-gray-200 bg-blue-50 shadow-sm">
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

        {isActive ? (
          <></>
        ) : (
          <button
            onClick={onActive}
            className="rounded-md bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-700 transition"
          >
            Show
          </button>
        )}
      </div>

      <div className="px-5 pb-4">
        {isActive ? (
          <div className="text-sm leading-relaxed text-gray-600">
            {children}
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
