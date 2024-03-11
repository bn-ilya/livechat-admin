import { useAppSelector } from "../../../shared/model/hooks/useAppSelector"

export const PaidCounter = () => {
  const countRegisteredPaid = useAppSelector(state => state.statistic.countRegisteredPaid);

  return (
    <div>
      <span>Оплатило: </span>
      <span>{countRegisteredPaid}</span>
    </div>
  )
}