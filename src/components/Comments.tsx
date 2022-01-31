import { useMemo } from "react"
import { useGetCommentsQuery } from "../redux/services/api"
import Loading from "./Loading"

function Comments(){
    const {data, isLoading, isSuccess, isError} = useGetCommentsQuery()
    const comments = useMemo(() => data ,[data])
    return (
      <div className="">
        <Loading isLoading={isLoading} />
        {isError && (
            <h2>Something went wrong</h2>
        )}
        {isSuccess && (
          <>
            {comments?.map(comment => (
              <div key={comment.id} className="post__item">
                <p>{comment.id}</p>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
              </div>
            ) )}
          </>
        )}
      </div>
    )
  }

export default Comments
