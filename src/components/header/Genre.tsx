import { ChevronDown } from "lucide-react";
export const Genre = () => {
  return (
    <div className=" flex items-center border border-slate-300 py-1 px-3">
      <ChevronDown />
      <span className="hidden md:block">Genre</span>
    </div>
  );
};
