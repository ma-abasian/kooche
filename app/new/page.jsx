'use client'
import RegisterAd from '@/components/elements/RegisterAd'
import { CANCEL } from '@/constants/constantNewPage'
import CancelButton from '@/components/elements/CancelButton'
import RegisterAdButton from '@/components/elements/RegisterAdButton'
import InfoGameSection from '@/components/modules/InfoGameSection'
import InfoSellerSection from '@/components/modules/InfoSellerSection'
import InfoSaleSection from '@/components/modules/InfoSaleSection'
import { REGISTERADVERTISE } from '@/constants/constantNewPage'
import { NewContext } from "@/context/NewPageContext"
import { useState } from 'react'

export default function page() {
   
   const insertData = {
    name: '', platformId: '', cityId: '', provinceId: null, locId:'', statusId: '', price: '', moreInfo: '', data: ''
    , exchange: false, preferedExchange: '',
};
   const[isSale, setIsSale] = useState(false)
   const[isExchange, setIsExchange] = useState(false)
   const relatedCities =[];
   const disable = false;
   const [validPhoneNumber, setValidPhoneNumber] = useState(true)
  return (
    <NewContext.Provider value={{insertData,relatedCities,disable, isSale,setIsSale,isExchange, setIsExchange,validPhoneNumber, setValidPhoneNumber}}>

  
    <div className='flex flex-col justify-center items-center mt-30 mb-10 '>
      <div className='flex flex-col gap-8'>
        <div className=' flex flex-col gap-8'>
          <RegisterAd />
          <InfoGameSection />
          <InfoSellerSection />
          <InfoSaleSection />
        </div>
        <div className='flex justify-end gap-6 w-full '>
          <CancelButton text={CANCEL} />
          <RegisterAdButton text={REGISTERADVERTISE} />
        </div>
      </div>
    </div>
    </NewContext.Provider>
  )
}
