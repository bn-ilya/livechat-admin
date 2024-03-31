import { SubmitHandler } from "react-hook-form";
import { FormDataToSend } from "../types/form-data-to-send";
import { useErrorReq } from "../../../../shared/model";
import { UsersPermissionsUser, usePostLiveChatClientsMutation, usePutLiveChatClientsByIdMutation, usePutUsersByIdMutation } from "../../../../shared/api";
import { useMemo } from "react";

export const useEditUserOnSubmit = (user: UsersPermissionsUser) => {
  const [editUser, {isLoading: isEditingUser, error: errorUpload}] = usePutUsersByIdMutation();
  const [editForm, {isLoading: isEditingForm, isSuccess, data, error: errorUpdateLc}] = usePutLiveChatClientsByIdMutation();
  const [createLiveChatForm, {isLoading: isCreatingLiveChatForm, error: errorCreateLc}] = usePostLiveChatClientsMutation();
  const errorInfoUpload = useErrorReq(errorUpload);
  const errorInfoUpdateLc = useErrorReq(errorUpdateLc);
  const errorInfoCreateLiveChat = useErrorReq(errorCreateLc);

  const isLoading = useMemo(()=>{
    return isEditingUser || isEditingForm || isCreatingLiveChatForm;
  }, [isEditingUser, isEditingForm]);

  const onSubmit: SubmitHandler<FormDataToSend> = async (formData) => { 
    if (!user.lc_form_id) {
      const liveChatFormData = {
        liveChatClientRequest: {
          data: {
            city: formData.city,
            comment: formData.comment,
            count: 1,
            debt: formData.debt,
            paid: formData.paid,
          }
        }
      };

      const responeCreateLiveChat = await createLiveChatForm(liveChatFormData).unwrap();
      
      const userData = {
        id: String(user.id),
        body: {
          name: formData.name,
          phone: formData.phone,
          lc_form_id: String(responeCreateLiveChat.data?.id)
        }
      };

      await editUser(userData);   
    } else {
      const liveChatFormData = {
        id: user.lc_form_id,
        liveChatClientRequest: {
          data: {
            city: formData.city,
            comment: formData.comment,
            count: user.lc_form.count,
            debt: formData.debt,
            paid: formData.paid,
          }
        }
      };

      await editForm(liveChatFormData);

      const userData = {
        id: String(user.id),
        body: {
          name: formData.name,
          phone: formData.phone,
        }
      };

      await editUser(userData);  
    }
    
  };

  return {onSubmit, isSuccess, errors: [errorInfoUpdateLc, errorInfoUpload, errorInfoCreateLiveChat], isLoading, data};
}