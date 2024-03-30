import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useEffect, useState } from "react";
import { Error } from "../../api/api-generate";

type TError =  FetchBaseQueryError | SerializedError | undefined; 

export const useErrorReq = (error: TError) => {
  const [errorMsg, setErrorMsg] = useState('');
  const [errorCode, setErrorCode] = useState<number | string>(0);

  const clearErrorMsg = () => {
    setErrorMsg('');
  }
  
  useEffect(() => {
    if (error) {
      if ('status' in error) {
        const [errMsg, errCode] = 'error' in error ? [error.error, error.status] : [(error.data as Error).error.message, (error.data as Error).error.status];
        setErrorMsg(errMsg);
        setErrorCode(errCode);
      } else {
        error.message && setErrorMsg(error.message);
        error.code && setErrorMsg(error.code);
      }
    }

    return clearErrorMsg
  }, [error])

  return {errorMsg, errorCode};
}