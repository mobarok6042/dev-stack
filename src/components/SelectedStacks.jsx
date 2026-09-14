import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";

const SelectedStacks = ({ selectedStacks, setSelectedStacks }) => {
  const handleRemoveStack = (stackId) => {
    const removedStack = selectedStacks.find((stack) => stack.id === stackId);

    setSelectedStacks((prev) => prev.filter((stack) => stack.id !== stackId));

    if (removedStack) {
      toast.success(`${removedStack.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (selectedStacks.length === 0) {
      return;
    }

    setSelectedStacks([]);
    toast.success("All stacks removed.");
  };

  return (
    <div className="mt-8 w-full max-w-md px-4 sm:px-6 lg:mt-20 lg:w-1/3 lg:px-0">
      <div className="text-center lg:text-left">
        <p className="text-4xl font-bold sm:text-5xl">Your stacks</p>
        <p className="text-lg text-gray-600">
          {selectedStacks.length} stacks selected
        </p>
      </div>
      <div>
        {selectedStacks.map((stack) => (
          <div
            key={stack.id}
            className="flex flex-row justify-between items-center gap-4 p-4 border-b border-gray-300"
          >
            <div className="flex flex-row items-center gap-4 justify-center">
              <img
                className="w-5 h-5"
                src={stack.icon}
                alt={`${stack.name} icon`}
              />
              <div className="flex flex-col">
                <h3>{stack.name}</h3>
                <p>{stack.category}</p>
              </div>
            </div>
            <button
              type="button"
              aria-label={`Remove ${stack.name}`}
              onClick={() => handleRemoveStack(stack.id)}
            >
              <RxCross1 />
            </button>
          </div>
        ))}
      </div>
      <button type="button" onClick={handleRemoveAll} className="btn btn-outline btn-error mt-4">
        Remove All
      </button>
    </div>
  );
};

export default SelectedStacks;
