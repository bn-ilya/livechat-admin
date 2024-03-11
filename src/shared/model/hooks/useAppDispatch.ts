import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/providers/store-provider/config/store";

export const useAppDispatch: () => AppDispatch = useDispatch