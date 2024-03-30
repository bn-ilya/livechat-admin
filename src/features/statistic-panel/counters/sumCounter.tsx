import { useAppSelector } from "../../../shared/model/hooks/useAppSelector"

export const SumCounter = () => {
  const counterSum = useAppSelector(state => state.statistic.sum);

  return (
    <div>
      <span>Сумма: </span>
      <span>{counterSum}</span>
    </div>
  )
}