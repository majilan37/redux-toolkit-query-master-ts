import * as React from 'react';

export interface LoadingProps {
    isLoading: boolean
}

export default function Loading ({isLoading}: LoadingProps) {
  return (
    <>
        {isLoading && (
        <>
          {new Array(50).fill(50).map(() => (
                <div className='post__item'>
                <div className="">
                    <div className="loader">Loading...</div>
                </div>
                </div>
            ))}
            </>
        )}
    </>
  );
}
