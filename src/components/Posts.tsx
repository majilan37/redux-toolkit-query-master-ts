import {  useMemo } from "react";
import { useGetPostsQuery } from "../redux/services/api";
import Loading from "./Loading";

function Posts () {
    const { data , isLoading, isSuccess, isError } = useGetPostsQuery()
    const posts = useMemo(() => data, [data])
    return (
        <div className="app">
        {isError && (
            <h2>Something went wrong</h2>
        )}
        <Loading isLoading={isLoading} />
        {isSuccess && (
            <>
            {posts?.slice(0, 15).map((post) => (
                <div key={post.id} className="post__item">
                <p>{post.id}</p>
                <p>{post.title}</p>
                <p>{post.body}</p>
                </div>
            ))}
            </>
        )}
        </div>
    );
}


export default Posts