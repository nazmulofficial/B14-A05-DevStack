import React from "react";
import YourStack from "./YourStack";

const TechnologyCard = ({ TechData }: { TechData: any[] }) => {
  const [stack, setStack] = React.useState<any[]>([]);

  // Add technology to stack
  const handleAddToStack = (tech: any) => {
    setStack((currentStack) =>
      currentStack.some((item) => item.id === tech.id)
        ? currentStack
        : [...currentStack, tech],
    );
  };

  // Remove one technology
  const handleRemove = (id: string | number) => {
    setStack((currentStack) =>
      currentStack.filter((item) => item.id !== id),
    );
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <div className="flex flex-col gap-5 lg:flex-row">

      {/* Left side - Technology Cards */}
      <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {TechData.map((Tech) => {
          // Check whether technology is already added
          const isAdded = stack.some(
            (item) => item.id === Tech.id,
          );

          return (
            <div
              key={Tech.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              {/* Icon + Badge */}
              <div className="flex items-center justify-between">
                <img
                  src={Tech.icon}
                  alt={Tech.name}
                  className="h-10 w-10 object-contain"
                />

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                  {Tech.badge}
                </span>
              </div>

              {/* Name */}
              <h2 className="mt-4 text-xl font-bold text-slate-900">
                {Tech.name}
              </h2>

              {/* Description */}
              <p className="mt-2 min-h-[60px] text-sm leading-5 text-slate-500">
                {Tech.description}
              </p>

              {/* Category + Difficulty */}
              <div className="mt-4 flex items-center justify-between gap-2">
                <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                  {Tech.category}
                </span>

                <span className="text-xs font-medium text-slate-500">
                  {Tech.difficulty}
                </span>
              </div>

              {/* Rating */}
              <div className="mt-3 flex items-center gap-1 text-sm">
                <span className="text-yellow-400">★</span>

                <span className="font-semibold text-slate-700">
                  {Tech.rating}
                </span>

                <span className="text-slate-400">
                  / 5
                </span>
              </div>

              {/* Add to Stack / Added */}
              {isAdded ? (
                <button
                  disabled
                  className="mt-5 w-full cursor-not-allowed rounded-lg bg-green-100 py-3 text-sm font-medium text-green-700"
                >
                  ✓ Added to Stack
                </button>
              ) : (
                <button
                  onClick={() => handleAddToStack(Tech)}
                  className="mt-5 w-full rounded-lg bg-black py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Add to Stack
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Right side - Your Stack */}
      <div className=" bg-amber-500 w-full shrink-0 lg:w-[340px] flex text-center">
        <YourStack
          stack={stack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </div>

    </div>
  );
};

export default TechnologyCard;