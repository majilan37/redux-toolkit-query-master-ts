import { useEffect, useState } from "react";
import { Location, useLocation, useParams } from "react-router-dom";
import { User } from '../redux/types';

export interface LocationParams<Data> {
    pathname: string;
    state: Data;
    search: string;
    hash: string;
    key: string;
  }

export default function UserInfo() {
    const {id} = useParams()
    const location:Location = useLocation()
    const {state}:any = location
    const [userInfo, setUserInfo] = useState<User | null>();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false)
        setUserInfo(state)
        return () => {
            setUserInfo(null)
            setLoading(true)
        }
    }, [id, state]);
    
  return (
    <div>
        <h2>User Info</h2>
        <div className="">
            <p>Name: {loading ? 'Loading...' : userInfo?.name}</p> 
            <p>Email: {loading ? 'Loading...' : userInfo?.email}</p> 
        </div>
    </div>
  );
}
