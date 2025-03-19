import { Button, Divider } from "@nextui-org/react"
import { Input } from "../input/ui"
// import { Paid } from "../paid/ui";
import { useForm } from 'react-hook-form';
import { FormDataToSend } from "../model/types/form-data-to-send";
import { ErrorModal } from "../../../shared/ui/error-modal";
import { FC, FormEvent, useEffect, useState } from 'react';
import { IFormProps } from "./ui.props";
import { useEditUserOnSubmit } from "../model/hooks/useCreateUserOnSubmit";
import { useDeleteUsersByIdMutation } from "../../../shared/api";

export const Form: FC<IFormProps> = ({handleEditUser, user}) => {
  const {register, handleSubmit, formState: {errors}} = useForm<FormDataToSend>({mode: "onChange"});
  const {onSubmit, isLoading, isSuccess, errors: errorsSubmit} = useEditUserOnSubmit(user);
  const [deleteUser, {isLoading: isLoadingDelete}] = useDeleteUsersByIdMutation();
  const [phone, setPhone] = useState('');

  const handleChangePhone = (e: FormEvent<HTMLInputElement>) => {
    const onlyNumber = e.currentTarget.value.match(/\d+/g)?.join("");
    setPhone(onlyNumber || '');
  } 

  const handleClickDelete = () => {
    deleteUser({id: String(user.id)})
    handleEditUser()
  }

  useEffect(()=>{
    if (isSuccess) handleEditUser();
  }, [isSuccess])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 w-full">
        <Input
          isRequired
          defaultValue={user?.name}
          {...register("name", {required: 'Заполните имя фамилию'})}
          isInvalid={!!errors?.name}
          errorMessage={errors?.name?.message}
          type="text"
          label="Имя, фамилия"
          placeholder="Иван Иванов"
        />
        <Input
          isRequired
          defaultValue={user?.lc_form?.city}
          {...register("city", {required: 'Заполните город'})}
          isInvalid={!!errors?.city}
          errorMessage={errors?.city?.message}
          type="text"
          label="Город"
          placeholder="г. Кропоткин"
        />
        <Input
          defaultValue={user?.phone}
          {...register("phone", {onChange: handleChangePhone, pattern: {value: /^[0-9+-]+$/, message: "Используются недопустимые символы"}, minLength: {value: 10, message: "Недостаточно символов. Требуется 10"}, maxLength: {value: 10, message: "Лишние символы. Требуется 10"}})}
          isInvalid={!!errors?.phone}
          errorMessage={errors?.phone?.message}
          type="tel"
          value={phone}
          label="Номер телефона"
          placeholder="(xxx) xxx-xx-xx"
        />
        <Input
          defaultValue={user?.lc_form?.comment}
          {...register("comment")}
          isInvalid={!!errors?.comment}
          errorMessage={errors?.comment?.message}
          label="Комментарий"
          placeholder="Не обязательно"
        />
        <Button isLoading={isLoadingDelete} onClick={handleClickDelete} type="button" color="danger" className="col-span-2">
          Удалить
        </Button>
        <Divider className="col-span-2 my-2" />
        <div className="col-span-2 flex flex-col gap-2 items-center mb-2s">
          <span className="text-base font-bold">Оплата</span>
          <div className="flex gap-2 items-center">
            <div className="w-[70px]">
              <Input defaultValue={user?.lc_form?.paid ? String(user.lc_form.paid) : '0'} {...register("paid")} isInvalid={!!errors?.paid} errorMessage={errors?.paid?.message} size="sm" endContent={<span>₽</span>}/>
            </div>
            <div className="text-zinc-400 font-bold">/</div>
            <div  className="w-[70px]">
              <Input defaultValue={user?.lc_form?.debt ? String(user.lc_form.debt) : '0'} {...register("debt")} size="sm" endContent={<span>₽</span>} />
            </div>
          </div>
        </div>
        <Button isLoading={isLoading} type="submit" color="primary" className="col-span-2">
          Отправить
        </Button>
      </form>

      {errorsSubmit.map((error, index) => {
        return <ErrorModal error={error.errorMsg} key={index} />
      })}
    </>
  )
}