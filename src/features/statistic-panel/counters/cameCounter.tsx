import { useAppSelector } from "../../../shared/model/hooks/useAppSelector"

export const CameCounter = () => {
  const countCame = useAppSelector(state => state.statistic.came);

  return (
    <div>
      <span>Пришло на конференцию: </span>
      <span>{countCame}</span>
    </div>
  )
}