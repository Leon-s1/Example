import React from 'react';
import {useGetAllPostsQuery} from "../../app/services/postsApi";

export const Posts = () => {
    const {data} = useGetAllPostsQuery()

    return (
        <>
            <div className='mb-10 w-full'>
                
            </div>
        </>
    );
};
