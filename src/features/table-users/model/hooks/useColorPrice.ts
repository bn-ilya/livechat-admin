import { RefObject, useEffect, useState } from "react"

enum EColors {
  DEFAULT = "default",
  SUCCESS = "success",
  WARNING = "warning"
}

function determineColor(paid: number, debt: number) {
  if (paid === 0 && debt === 0) {
    return EColors.DEFAULT;
  } else if (paid === debt) {
    return EColors.SUCCESS;
  } else {
    return EColors.WARNING;
  }
}

export const useColorPrice = (paid: number, debt: number, refPaidInput: RefObject<HTMLInputElement>, refDebtInput: RefObject<HTMLInputElement>) => {
  const [color, setColor] = useState<EColors>(EColors.DEFAULT);

  function handleChange() {
    const color = determineColor(Number(refPaidInput.current?.value) || 0, Number(refDebtInput.current?.value) || 0)
    setColor(color);
  }

  useEffect(()=>{
    if(refDebtInput.current && refPaidInput.current) {
      const debtInput = refDebtInput.current;
      const paidInput = refPaidInput.current;

      debtInput.addEventListener("change", handleChange);
      paidInput.addEventListener("change", handleChange);

      return () => {
        debtInput.removeEventListener("change", handleChange);
        paidInput.removeEventListener("change", handleChange);
      }
    }
  }, [refDebtInput, refPaidInput])

  useEffect(()=>{
    const color = determineColor(paid, debt);
    setColor(color);
  }, [paid, debt])

  return {color};
}