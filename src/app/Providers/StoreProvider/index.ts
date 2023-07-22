import { StoreProvider } from './ui/StoreProvider';
import { AppDispatch } from './config/store';
import type {
    StateSchema,
    ThunkConfig,
    StateSchemaKey,
    ReduxStoreWithManager,
} from './config/StateSchema';

export { StoreProvider };

export type {
    StateSchema,
    AppDispatch,
    ThunkConfig,
    ReduxStoreWithManager,
    StateSchemaKey,
};
