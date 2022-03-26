import { useDispatch } from 'react-redux';
import { AppDispatcher } from '@/redux/store';

export const useAppDispatcher = () => useDispatch<AppDispatcher>();
