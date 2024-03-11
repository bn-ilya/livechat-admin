import { useAppSelector } from "../../../shared/model/hooks/useAppSelector"

export const WithFormCounter = () => {
  const countRegisteredWithForm = useAppSelector(state => state.statistic.countRegisteredWithForm);

  return (
    <div>
      <span>Зарегистрированно с формой: </span>
      <span>{countRegisteredWithForm}</span>
    </div>
  )
}