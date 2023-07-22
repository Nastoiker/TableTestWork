import { EntityState } from '@reduxjs/toolkit';

import {PostSchema} from "../../../../app/Entities/Post/PostSchema";

export interface PostPageSchema extends EntityState<PostSchema> {
    isLoading?: boolean;
    error?: string;
    ids: [];
    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    countPages: number;
    // filters
    search: string;
    foundedPost: PostSchema[],
    posts: PostSchema[];
    _inited: boolean;
}
