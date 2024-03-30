import { FC, useEffect, useRef } from "react";
import { ICellPaidProps } from "./ui.props";
import { Input } from "@nextui-org/react";
import { useColorPrice } from "../../../model/hooks/useColorPrice";
import { usePutLiveChatClientsByIdMutation } from "../../../../../shared/api";
import { ErrorModal } from "../../../../../shared/ui/error-modal";
import { useErrorReq } from "../../../../../shared/model/hooks/useErrorReq";

export const CellPaid: FC<ICellPaidProps> = ({paid, debt, id}) => {
  const refDebtInput = useRef<HTMLInputElement>(null);
  const refPaidInput = useRef<HTMLInputElement>(null);

  const [putUser, {error}] = usePutLiveChatClientsByIdMutation();
  const {errorMsg} = useErrorReq(error);
  
  paid = paid || 0;
  debt = debt || 0;

  const {color} = useColorPrice(paid, debt, refPaidInput, refDebtInput);

  const handleChangePaid = () => {
    const request = {
      id,
      liveChatClientRequest: {
        data: {paid: Number(refPaidInput.current?.value) || 0}
      }
    }

    putUser(request);
  }

  const handleChangeDebt = () => {
    const request = {
      id,
      liveChatClientRequest: {
        data: {debt: Number(refDebtInput.current?.value) || 0}
      }
    }

    putUser(request);
  }

  useEffect(()=>{
    if(refDebtInput.current && refPaidInput.current) {
      const debtInput = refDebtInput.current;
      const paidInput = refPaidInput.current;

      debtInput.addEventListener("change", handleChangeDebt);
      paidInput.addEventListener("change", handleChangePaid);

      return () => {
        debtInput.removeEventListener("change", handleChangeDebt);
        paidInput.removeEventListener("change", handleChangePaid);
      }
    }
  }, [refDebtInput, refPaidInput])

  return (
    <>
    <div className="flex gap-2 items-center">
      <div className="w-[70px]">
        <Input ref={refPaidInput} color={color} defaultValue={String(paid)} size="sm" endContent={<span className="text-zinc-400">₽</span>}/>
      </div>
      <div className="text-zinc-400 font-bold">/</div>
      <div  className="w-[70px]">
        <Input ref={refDebtInput} color={color} defaultValue={String(debt)} size="sm" endContent={<span className="text-zinc-400">₽</span>} />
      </div>
    </div>

    <ErrorModal error={errorMsg} textBtn="Понятно" />
    </>
  );
}