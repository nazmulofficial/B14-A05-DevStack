import type { TechType } from "../../type/TechType";

interface YourStackProps {
  stack: TechType[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-5">
      {/* Header */}
      <h2 className="text-lg font-bold text-slate-900">
        Your Stack
      </h2>

      <p className="mt-1 text-xs text-slate-400">
        {stack.length} Technology{stack.length !== 1 ? "s" : ""} Selected
      </p>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="mt-4 flex h-24 items-center justify-center rounded-xl border border-dashed border-slate-200">
          <p className="text-xs text-slate-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <>
          {/* Selected Technologies */}
          <div className="mt-4 space-y-2">
            {stack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-white px-3 py-2"
              >
                {/* Left */}
                <div className="flex items-center gap-3">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-7 w-7 object-contain"
                  />

                  <div>
                    <h3 className="text-xs font-semibold text-slate-800">
                      {tech.name}
                    </h3>

                    <p className="text-[9px] text-slate-400">
                      {tech.category}
                    </p>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() => onRemove(tech.id)}
                  className="text-lg font-light text-slate-400 hover:text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-lg border border-red-300 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default YourStack;