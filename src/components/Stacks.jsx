import AvailableStacks from "./AvailableStacks";
import { use, useState } from "react";
import SelectedStacks from "./SelectedStacks";

const Stacks = ({ stackPromise }) => {
  const stacks = use(stackPromise);

  const [selectedStacks, setSelectedStacks] = useState([]);

  return (
    <div className="mx-auto flex w-full max-w-[1800px] flex-col items-center justify-start gap-5 px-4 md:gap-11 lg:flex-row lg:items-start lg:justify-center lg:gap-12 lg:px-8 xl:gap-20 xl:px-16">
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
