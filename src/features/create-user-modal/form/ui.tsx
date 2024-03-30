import { Button, Divider } from "@nextui-org/react"
import { Input } from "../input/ui"
// import { Paid } from "../paid/ui";
import { useForm } from 'react-hook-form';
import { FormDataToSend } from "../model/types/form-data-to-send";
import { useCreateUserOnSubmit } from "../model/hooks/useCreateUserOnSubmit";
import { ErrorModal } from "../../../shared/ui/error-modal";

export const Form = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<FormDataToSend>();
  const {onSubmit, isLoading, errors: errorsSubmit} = useCreateUserOnSubmit();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 w-full">
        <Input
          isRequired
          {...register("name", {required: 'Заполните имя фамилию'})}
          isInvalid={!!errors?.name}
          errorMessage={errors?.name?.message}
          type="text"
          label="Имя, фамилия"
          placeholder="Иван Иванов"
        />
        <Input
          isRequired
          {...register("city", {required: 'Заполните город'})}
          isInvalid={!!errors?.city}
          errorMessage={errors?.city?.message}
          type="text"
          label="Город"
          placeholder="г. Кропоткин"
        />
        <Input
          {...register("comment")}
          isInvalid={!!errors?.comment}
          errorMessage={errors?.comment?.message}
          label="Комментарий"
          placeholder="Не обязательно"
        />
        <Divider className="col-span-2 my-2" />
        <div className="col-span-2 flex flex-col gap-2 items-center mb-2s">
          <span className="text-base font-bold">Оплата</span>
          <div className="flex gap-2 items-center">
            <div className="w-[70px]">
              <Input {...register("paid")} isInvalid={!!errors?.paid} errorMessage={errors?.paid?.message} defaultValue={"0"} size="sm" endContent={<span>₽</span>}/>
            </div>
            <div className="text-zinc-400 font-bold">/</div>
            <div  className="w-[70px]">
              <Input {...register("debt")} defaultValue={"600"} size="sm" endContent={<span>₽</span>} />
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