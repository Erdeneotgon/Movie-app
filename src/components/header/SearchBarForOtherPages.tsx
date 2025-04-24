import { Genre } from "./Genre";
import { AnimatePresence, motion } from "framer-motion";
import { searchBarAnimationVariants } from "@/constants/search-bar-input-animation";
import { SearchInputForOtherPage } from "./SearchInputForOtherPage";

export const SearchBarForOtherPages = () => {
  return (
    <div>
      <div className="hidden lg:flex">
        <Genre />
        from dsktop
        <SearchInputForOtherPage />
      </div>
      <AnimatePresence>
        <motion.div
          variants={searchBarAnimationVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex md:hidden"
        >
          <Genre />
          from mobile
          <SearchInputForOtherPage />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
