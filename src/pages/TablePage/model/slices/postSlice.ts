import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import {PostSchema} from "../../../../app/Entities/Post/PostSchema";
import {StateSchema} from "../../../../app/Providers/StoreProvider";
import {fetchPostsPage} from "../actions";
import {PostPageSchema} from "../types/postPageSchema";


const postAdapter = createEntityAdapter<PostSchema>({
    selectId: (post) => post.id,
});

export const getArticles = postAdapter.getSelectors<StateSchema>(
    (state) => state.postPage || postAdapter.getInitialState(),
);
const postPageSlice = createSlice({
    name: 'postSlice',
    initialState: postAdapter.getInitialState<PostPageSchema>({
        isLoading: false,
        error: undefined,
        entities: {},
        page: 1,
        limit: 10,
        hasMore: true,
        posts: [{
            userId: 1,
            id: 1,
            title: '',
            body: '',
        }],
        foundedPost: [{
            userId: 1,
            id: 1,
            title: '',
            body: '',
        }],
        search: '',
        countPages: 10,
        ids: [],
        _inited: false,
    }),
    reducers: {

            setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setSearchBy: (state, { payload }: PayloadAction<string>) => {
               state.foundedPost =  state.posts.filter((p) =>  {
                   for (const value of Object.values(p)) {
                       if (value.toString().toLowerCase().includes(payload)) {
                           return true;
                       }
                   }
                   return false;
               })
            },
        sortByColumn: (state, {payload}: PayloadAction<{field: keyof PostSchema, sortType: string}>) => {
            const { field, sortType } = payload;
            const sortValue = typeof state.posts[0][field] === 'number' ? 'number' : 'string';
               if(sortType==='ASC') {
                    if(sortValue==='number') {
                        state.foundedPost = state.foundedPost.sort((a, b) =>   a[field]- b[field])
                    } else {
                        state.foundedPost = state.foundedPost.sort((a, b) => a[field].localeCompare(b[field]));
                    }
               } else {
                   if(sortValue==='number') {
                       state.foundedPost = state.foundedPost.sort((a, b) =>   b[field]- a[field])
                   } else {
                       state.foundedPost = state.foundedPost.sort((a, b) => b[field].localeCompare(a[field]));
                   }
               }
        }
        },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostsPage.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;

            })
            .addCase(fetchPostsPage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.data.length >= state.limit;
                state.posts = action.payload.data;
                state.foundedPost = action.payload.data;
                state.countPages = action.payload.totalCount / 10;
            })
            .addCase(fetchPostsPage.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});
export const {setPage, setSearchBy, sortByColumn} = postPageSlice.actions;
export const { reducer: postPageReducer, actions:postPageActions } =
    postPageSlice;
