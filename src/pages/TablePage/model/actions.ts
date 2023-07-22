import { createAsyncThunk } from '@reduxjs/toolkit';
import {ThunkConfig} from "../../../app/Providers/StoreProvider";
import {PostSchema} from "../../../app/Entities/Post/PostSchema";
import {FIELDS, NAMES, SORT} from "../const/Table.constants";


interface TablePostProps {
    limit: string;
    page: string;
}


export type Title = {
    name: NAMES;
    field: FIELDS;
};

export type SortParams = {
    field: FIELDS;
    sortTo: SORT;
};

export const fetchPostsPage = createAsyncThunk<
    {data: PostSchema[], totalCount: number } ,
    TablePostProps,
    ThunkConfig<string>
>('articlesPage/fetchPostsPage', async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    try {
        const {data,headers} = await extra.api.get<PostSchema[]>('/posts', {
            params: {
                _limit: props.limit,
                _page: props.page,
            },
        });
        if (!data) {
            throw new Error();
        }
        const totalCount:number = headers['x-total-count'] as number;
        return { data, totalCount };
    } catch (e) {
        return rejectWithValue('error');
    }
});
