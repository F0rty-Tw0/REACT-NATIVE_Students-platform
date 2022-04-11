import { useDispatch } from 'react-redux';
import { AppDispatcher } from '@/app/redux/store';

export const useAppDispatcher = () => useDispatch<AppDispatcher>();