"use client";
import Image from "next/image";
import NavbarLocationProvince from "@/components/elements/navbar/NavbarLocationProvince";
import React, { useState } from "react";
import NavbarLocationCity from "@/components/elements/navbar/NavbarLocationCity";

const NavbarLocationModal = ({ onClose, provinces }) => {
  const [isProvinces, setIsProvinces] = useState(true);
  const [cities, setCities] = useState({});

  return (
    <div className="absolute w-full h-full top-0 right-0 z-[402] bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)] flex items-center justify-center">
      <div className="w-full h-full md:w-[340px] md:h-[65%] bg-white p-5 md:p-6 md:rounded-[20px] flex flex-col">
        <div className="mb-3 flex justify-between">
          <span className="font-peyda-bold text-scales-body">انتخاب شهر</span>
          <Image
            src="/images/map/Close_LG.svg"
            alt="Close"
            width={24}
            height={24}
            onClick={() => onClose(false)}
            className="cursor-pointer md:w-4 md:h-4"
          />
        </div>
        {isProvinces && (
          <div className="overflow-y-auto modal-scrollbar relative">
            <ul>
              {provinces.map((province) => (
                <NavbarLocationProvince
                  key={province.id}
                  province={province}
                  setCities={setCities}
                  isProvinces={setIsProvinces}
                />
              ))}
            </ul>
          </div>
        )}
        {!isProvinces && (
          <div className="overflow-y-auto modal-scrollbar relative">
            <div className="flex items-center">
              <Image
                src="/images/map/Chevron_Right.svg"
                alt="Close"
                width={24}
                height={24}
                onClick={() => setIsProvinces(true)}
                className="cursor-pointer ml-2"
              />
              <h6 className="text-gray-900 font-peyda-bold">
                انتخاب از شهرهای استان {cities.province}
              </h6>
            </div>
            <ul>
              {cities.citiesList.map(({ id, name }) => (
                <NavbarLocationCity
                  key={id}
                  cityName={name}
                  provinceName={cities.province}
                  onClose={onClose}
                  isProvinces={setIsProvinces}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarLocationModal;
