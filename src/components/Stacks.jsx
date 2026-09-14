import AvailableStacks from "./AvailableStacks";
import { use, useState } from "react";
import SelectedStacks from "./SelectedStacks";

const Stacks = ({ stackPromise }) => {
  const stacks = use(stackPromise);

  const [selectedStacks, setSelectedStacks] = useState([]);

  return (
    <div className="flex w-full flex-col items-center justify-start gap-5 px-4 md:gap-11 lg:flex-row lg:items-start lg:justify-center lg:gap-20">
      <AvailableStacks
        stacks={stacks}
        selectedStacks={selectedStacks}
        setSelectedStacks={setSelectedStacks}
      />
      <SelectedStacks
        selectedStacks={selectedStacks}
        setSelectedStacks={setSelectedStacks}
      />
    </div>
  );
};

export default Stacks;
