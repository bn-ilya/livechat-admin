import { Input } from "@nextui-org/react";
import { useRef } from "react";
import { useColorPrice } from "../../../shared/model";

export const Paid = () => {
  const refDebtInput = useRef<HTMLInputElement>(null);
  const refPaidInput = useRef<HTMLInputElement>(null);

  const {color} = useColorPrice(0, 0, refPaidInput, refDebtInput);

  return (
   <div className="col-span-2 flex flex-col gap-2 items-center mb-2s">
     <span className="text-base font-bold">Оплата</span>
     <div className="flex gap-2 items-center">
      <div className="w-[70px]">
        <Input ref={refPaidInput} color={color} defaultValue={"0"} size="sm" endContent={<span>₽</span>}/>
      </div>
      <div className="text-zinc-400 font-bold">/</div>
      <div  className="w-[70px]">
        <Input ref={refDebtInput} color={color} defaultValue={"700"} size="sm" endContent={<span>₽</span>} />
      </div>
    </div>
   </div>
  )
}