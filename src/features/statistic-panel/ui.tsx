import { useEffect } from "react"
import { useGetUsersQuery } from "../../shared/api";
import { useAppDispatch } from "../../shared/model/hooks/useAppDispatch";
import { setCounts } from "../../entities/statistic";
import { FullCounter } from "./counters/fullCounter";
import { WithFormCounter } from "./counters/withFormCounter";
import { WithoutFormCounter } from "./counters/withoutFormCounter";
import { PaidCounter } from "./counters/paidCounter";
import { SumCounter } from "./counters/sumCounter";
import { CameCounter } from "./counters/cameCounter";

export const StatisticPanel = () => {
  const {data} = useGetUsersQuery();
  const dispatch = useAppDispatch();

  useEffect(()=>{
    if (data) {
      dispatch(setCounts(data))
    }
  }, [data])

  return (
    <div className="flex gap-5 p-3 text-zinc-400">
      <FullCounter />
      <WithFormCounter />
      <WithoutFormCounter />
      <PaidCounter />
      <SumCounter />
      <CameCounter />
    </div>
  )
}