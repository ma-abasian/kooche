"use client";
import Image from "next/image";
import { useCallback, useContext, useState } from "react";
import {
  ActionUserSearchContext,
  UserSearchContext,
} from "@/context/map/mapContext";
import NavbarKindFilter from "@/components/elements/NavbarKindFilter";
import NavbarPlatformsFilter from "@/components/elements/NavbarPlatformsFilter";

const NavbarFilterModal = ({ onClose }) => {
  const setSearchTerm = useContext(ActionUserSearchContext);
  const { platformsTerm, isForSell, isForExchange } =
    useContext(UserSearchContext);
  const [filters, setFilters] = useState({
    isForExchangeFilter: isForExchange,
    isForSellFilter: isForSell,
    platforms: platformsTerm,
  });

  const { isForExchangeFilter, isForSellFilter, platforms } = filters;

  const handleFilterClick = useCallback(() => {
    setSearchTerm((prevState) => {
      return {
        ...prevState,
        isForSell: isForSellFilter,
        isForExchange: isForExchangeFilter,
        platformsTerm: platforms,
      };
    });
    onClose(() => false);
  }, [isForExchangeFilter, isForSellFilter, platforms]);

  const handleClose = useCallback(() => {
    onClose(() => false);
  }, []);

  return (
    <div className="absolute w-full h-full top-0 right-0 z-[402] bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)] flex items-center justify-center">
      <div className="w-[340px] h-[420px] bg-white p-6 rounded-[20px] flex flex-col   ">
        <div className="mb-3 flex justify-between">
          <span className="font-peyda-bold text-scales-body">فیلترها</span>
          <Image
            src="/images/map/Close_LG.svg"
            alt="Close"
            width={16}
            height={16}
            onClick={handleClose}
            className="cursor-pointer"
          />
        </div>

        <NavbarKindFilter
          setFilters={setFilters}
          filters={{ isForExchangeFilter, isForSellFilter }}
        />
        <NavbarPlatformsFilter setFilters={setFilters} platforms={platforms} />

        <div className="flex justify-end mt-4 gap-4 items-center">
          <button
            onClick={handleClose}
            className="text-gray-800 py-2 px-4 font-peyda-semibold leading-leading-3 rounded-xl"
          >
            لغو
          </button>
          <button
            className="bg-primary text-white py-2 px-4 font-peyda-semibold leading-leading-3 rounded-xl"
            onClick={handleFilterClick}
          >
            اعمال فیلتر
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarFilterModal;
