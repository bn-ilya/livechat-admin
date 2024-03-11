import { useAppSelector } from "../../../shared/model/hooks/useAppSelector"

export const FullCounter = () => {
  const fullCountRegistered = useAppSelector(state => state.statistic.fullCountRegistered);

  return (
    <div>
      <span>Всего зарегистрированно: </span>
      <span>{fullCountRegistered}</span>
    </div>
  )
}