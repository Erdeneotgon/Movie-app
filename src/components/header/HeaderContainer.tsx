"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Themeswitch } from "./ThemeSwitch";
import { SearchBarForOtherPages } from "./SearchBarForOtherPages";
import { SearchBarForSearchPage } from "./SearchBarForSearchPage";

export const HeaderContainer = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between py-[7.5px] md:py-[11.5px] px-5 md:px-20">
      <Image src="/Vector.png" width={20} height={20} alt="icon" />
      {pathname === "/search" ? (
        <SearchBarForSearchPage />
      ) : (
        <SearchBarForOtherPages />
      )}
      <div>
        <Image src="/Search.png" width={20} height={20} alt="search" />
      </div>
    </div>
  );
};
