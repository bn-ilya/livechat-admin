import { SubmitHandler } from "react-hook-form";
import { FormDataToSend } from "../types/form-data-to-send";
import { useErrorReq } from "../../../../shared/model";
import { usePostLiveChatClientsMutation, usePostUsersMutation } from "../../../../shared/api";
import { useMemo } from "react";

export const useCreateUserOnSubmit = () => {
  const [createUser, {isLoading: isCreatingUser, error: errorUpload}] = usePostUsersMutation();
  const [createLiveChatForm, {isLoading: isCreatingLiveChatForm, isSuccess, data, error: errorUpdateLc}] = usePostLiveChatClientsMutation();
  const errorInfoUpload = useErrorReq(errorUpload);
  const errorInfoUpdateLc = useErrorReq(errorUpdateLc);

  const isLoading = useMemo(()=>{
    return isCreatingUser || isCreatingLiveChatForm;
  }, [isCreatingUser, isCreatingLiveChatForm]);

  const onSubmit: SubmitHandler<FormDataToSend> = async (formData) => {     
    const liveChatFormData = {
      liveChatClientRequest: {
        data: {
          city: formData.city,
          comment: formData.comment,
          count: 1,
          debt: formData.debt,
          paid: formData.paid
        }
      }
    };
    
    const responeCreateLiveChat = await createLiveChatForm(liveChatFormData).unwrap();

    const userData = {
      body: {
        name: formData.name,
        lc_form_id: String(responeCreateLiveChat.data?.id)
      }
    };

    await createUser(userData).unwrap();
  };

  return {onSubmit, isSuccess, errors: [errorInfoUpdateLc, errorInfoUpload], isLoading, data};
}