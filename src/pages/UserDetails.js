import { Drawer } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditForm from './EditForm';
import { deleteUser, getAllUsers } from './Redux/action';

const UserDetails = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state?.UserReducer?.getAllUserdetails);
    console.log("userData",users);
    const [user, setUser] = useState("");
    const [open, setOpen] = useState(false);
    console.log("user", user);
    useEffect(() => {
        dispatch(getAllUsers());
    }, [])
    return (
        <div className='flex justify-center item-center mt-12'>
            <table className='table'>
                <thead className="tableHeader">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>phoneNo</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="tableBody">
                    {users?.data?.map((item) => {
                        return (
                            <tr key={item._id}>
                                <td> {item.firstName} </td>
                                <td> {item.lastName}</td>
                                <td>{item.phoneNumber} </td>
                                <td> {item.age}</td>
                                <td
                                    onClick={() => {
                                        console.log("edit user", item);
                                        setUser(item);
                                    }}>
                                    <button
                                        className="rounded-md bg-blue-300 m-2 py-1 px-4"
                                        onClick={() => {
                                            if (user) {
                                                setOpen(true);
                                            }
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="rounded-md bg-red-400 m-2 py-1 px-4"
                                        onClick={() => {
                                            dispatch(deleteUser(item._id));
                                            alert("user deleted..")
                                            dispatch(getAllUsers());
                                        }}>
                                        {" "}
                                        Delete{" "}
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Drawer width={"50%"} placement="right" onClose={() => { setOpen(false) }} open={open}>
                <EditForm user={user} setOpen={setOpen} />
            </Drawer>
        </div>
    )
}

export default UserDetails