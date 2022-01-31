import { FunctionComponent, useCallback, useState } from "react";
import { useAddUserMutation, useGetUsersQuery } from "../redux/services/api";
import { User } from "../redux/types";

interface AddUserProps {
    
}
 
const AddUser: FunctionComponent<AddUserProps> = () => {
    const [newUser, setNewUser] = useState({
        id: Date.now(),
        name: "",
        username: "",
        email: "",
        address: null,
        phone: null,
        website: null,
        company: null,
    });
    const [addUser] = useAddUserMutation()
    const {refetch} = useGetUsersQuery()
    const AddNewUser = async (e:React.FormEvent<HTMLFormElement>):Promise<void> => {
        e.preventDefault();
        const {name, email, username}:User = newUser
        if(!name || !email || !username) return;
        await addUser(newUser)

        setNewUser({
            id: Date.now(),
            name: "",
            username: "",
            email: "",
            address: null,
            phone: null,
            website: null,
            company: null,
        })
        refetch()
    }
    const handleChangeName = useCallback(
        (e:React.ChangeEvent<HTMLInputElement>) => {
            setNewUser({...newUser, name: e.target.value})
        }, [newUser]
    )
    const handleChangeUsername = useCallback(
        (e:React.ChangeEvent<HTMLInputElement>) => {
            setNewUser({...newUser, username: e.target.value})
        }, [newUser]
    )
    const handleChangeEmail = useCallback(
        (e:React.ChangeEvent<HTMLInputElement>) => {
            setNewUser({...newUser, email: e.target.value})
        }, [newUser]
    )
    console.log('name =>', newUser.name);
    console.log('username =>', newUser.username);
    console.log('email =>', newUser.email);
    return ( 
        <div className="">
            <form onSubmit={AddNewUser} action="">
                <div className=''>
                    <label htmlFor="">Name:</label>
                    <input value={newUser.name} onChange={handleChangeName} type="text" />
                </div>
                <div className=''>
                    <label htmlFor="">Username:</label>
                    <input value={newUser.username} onChange={handleChangeUsername} type="text" />
                </div>
                <div className=''>
                    <label htmlFor="">email:</label>
                    <input value={newUser.email} onChange={handleChangeEmail}type="text" />
                </div>
                <button type="submit">Add User</button>
            </form>
        </div>
     );
}
 
export default AddUser;