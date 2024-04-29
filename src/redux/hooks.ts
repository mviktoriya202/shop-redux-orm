import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from './store'
import {IRootState} from "../entities/types";
import {OrmState} from "redux-orm";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = (selectCartItems: (state: OrmState<{}>) => any[]) => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector