import AvailableStacks from "./AvailableStacks";
import { use, useState } from "react";
import SelectedStacks from "./SelectedStacks";

const Stacks = ({ stackPromise }) => {
  const stacks = use(stackPromise);

  const [selectedStacks, setSelectedStacks] = useState([]);

  return (
    <div className="flex gap-5 md:gap-11 lg:flex-row lg:gap-20 justify-center items-start flex-col">
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
