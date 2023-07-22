import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {StateSchema, ThunkExtraArg} from "./StateSchema";
import {rtkApi} from "../../../../shared/api/rtkApi";
import axiosInstance from "../../../../shared/api/api";
import {postPageReducer} from "../../../../pages/TablePage/model/slices/postSlice";

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const initialValue: StateSchema = {
        postPage: {
            countPages: 0,
        isLoading: false,
        error: undefined,
        entities: {},
    // pagination
    page: 1,
        limit: 10,
            posts: [{
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }],
        hasMore: true,
        // filters
        search: '',
        ids: [],
        _inited: false,
    }
}
const extraArg: ThunkExtraArg = {
    api: axiosInstance,
};
export const store = configureStore({
    reducer: { post: postPageReducer},
        devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }).concat(rtkApi.middleware),
});
