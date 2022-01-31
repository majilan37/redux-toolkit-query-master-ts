import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useGetUsersQuery, useDeleteUserMutation} from '../redux/services/api'
import Loading from './Loading';

export default function Users() {
    const {data, isLoading, isSuccess, isError} = useGetUsersQuery()
    const [deleteUser] = useDeleteUserMutation()
    const [searchUsers, setSearchUsers] = useState('');
    const initialData = useMemo(() => data, [data])
    const [users, setUsers] = useState(initialData);
    const onSearchedUsersChange = useCallback(
        (e:React.ChangeEvent<HTMLInputElement>) => setSearchUsers(e.target.value)
    , [searchUsers])
    const navigate = useNavigate()
    useEffect(() => {
        if (searchUsers && isSuccess) {
            const newUsers = data?.filter((user) => {
                if(user.username.toLocaleLowerCase().includes(searchUsers.toLocaleLowerCase())) return user;
            })
            setUsers(newUsers)
        } else {
            setUsers(initialData)
        }
        
    }, [searchUsers, isSuccess])
    console.log(data);
  return (
    <div>
      <Loading isLoading={isLoading} />
        {isError && (
            <h2>Something went wrong</h2>
            )}
        {isSuccess && (
          <>
            <input 
                type="text" 
                placeholder='Search by username' 
                value={searchUsers}
                onChange={onSearchedUsersChange}
            />
            {users?.map((user) => (
                <>
                    <div key={user.id} onClick={() => navigate(`/users/${user.id}`, {state: user})} className="post__item" style={{ cursor: 'pointer' }} >
                        <p>id: {user.id}</p>
                        <p>name: {user.name}</p>
                        <p>username: {user.username}</p>
                        <p>email: {user.email}</p>
                    </div>
                    <button onClick={() => deleteUser(user.id)}>Delete User</button>
                </>
            ))}
          </>
      )}
    </div>
  );
}
