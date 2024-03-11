import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../../app/providers/store-provider/config/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector