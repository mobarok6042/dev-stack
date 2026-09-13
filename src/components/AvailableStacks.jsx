import { toast } from "react-toastify";

const AvailableStacks = ({ stacks, selectedStacks, setSelectedStacks }) => {
  const handleAddStack = (stack) => {
    const isAlreadyAdded = selectedStacks.some(
      (selectedStack) => selectedStack.name === stack.name,
    );

    if (isAlreadyAdded) {
      toast.error(`${stack.name} has already been added to your stack.`);
      return;
    }

    setSelectedStacks((prev) => [...prev, stack]);
    toast.success(`${stack.name} added to your stack.`);
  };

  return (
    <div className="lg:w-1/2 mx-20 mt-20">
      <p className="text-5xl">
        Explore the <span className="text_gradient">Technologies</span>{" "}
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Pick one per category to build your ideal stack.
      </p>
      <div className="p-4 grid grid-cols-1 md:grid-cols-[repeat(2,320px)] lg:grid-cols-[repeat(3,320px)] gap-x-2 gap-y-4 justify-start ">
        {stacks.map((stack) => {
          const isAdded = selectedStacks.some(
            (selectedStack) => selectedStack.id === stack.id,
          );
          return (
            <div key={stack.id}>
              <div className="card w-80 h-80 bg-base-100 shadow-sm hover:shadow-lg transition-shadow duration-300 p-3 flex flex-col justify-between">
                <div className="card-body">
                  <div className="flex items-center justify-between">
                    <img
                      src={stack.icon}
                      alt={`${stack.name} icon`}
                      className="w-10 h-12"
                    />
                    <div className="badge badge-soft badge-primary">
                      {stack.badge}
                    </div>
                  </div>
                  <h2 className="card-title">{stack.name}</h2>
                  <p>{stack.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="badge badge-ghost">{stack.category}</div>
                    <span className="badge">{stack.difficulty}</span>
                    <span className="badge">{stack.rating}</span>
                  </div>
                  <button
                    onClick={() => handleAddStack(stack)}
                    className={`btn btn-wide ${
                      isAdded
                        ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    {isAdded ? "Added to Stack" : "Add to Stack"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableStacks;
