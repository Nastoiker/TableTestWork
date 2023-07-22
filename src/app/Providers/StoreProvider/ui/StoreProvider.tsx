import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { store } from '../config/store';
import { StateSchema } from '../config/StateSchema';
interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}


export const StoreProvider = (props: StoreProviderProps) => {

    return <Provider store={store}>{props.children}</Provider>;
};
