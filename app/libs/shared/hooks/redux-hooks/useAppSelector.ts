import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
