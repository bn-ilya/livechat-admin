import { useAppSelector } from "../../../shared/model/hooks/useAppSelector"

export const WithoutFormCounter = () => {
  const countRegisteredWithoutForm = useAppSelector(state => state.statistic.countRegisteredWithoutForm);

  return (
    <div>
      <span>Зарегистрированно без формы: </span>
      <span>{countRegisteredWithoutForm}</span>
    </div>
  )
}