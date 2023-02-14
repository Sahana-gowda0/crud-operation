import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { getAllUsers, updateUsers } from './Redux/action';
import { UserValidationSchema } from './UserValidationSchema';

const EditForm = ({user,setOpen}) => {
    const dispatch = useDispatch();
    const initialValues = {
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        age: user.age,
    };
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: UserValidationSchema,
            onSubmit: (val) => {
                dispatch(updateUsers(user._id,val));
                console.log(val);
                setOpen(false);
                dispatch(getAllUsers());
            },
        });
    return (
        <div className='m-6 '>
            <form onSubmit={handleSubmit}>
                <h1 className='font-bold text-2xl flex justify-center mb-6'>Edit User</h1>
                <div className="relative mb-4">
                    <input
                        type={"text"}
                        name="firstName"
                        className="h-10 block px-2.5 pb-2.5 pt-2 w-full text-textcolor text-sm font-normal bg-transparent rounded-md border focus:outline-none"
                        placeholder='First Name'
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.firstName && touched.firstName && (
                        <span className="text-red-500 font-bold text-sm"> {errors.firstName} </span>
                    )}
                </div>
                <div className="relative mb-4">
                    <input
                        type={"text"}
                        name="lastName"
                        className="h-10 block px-2.5 pb-2.5 pt-2 w-full text-textcolor text-sm font-normal bg-transparent rounded-md border focus:outline-none"
                        placeholder='Last Name'
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.lastName && touched.lastName && (
                        <span className="text-red-500 font-bold text-sm"> {errors.lastName} </span>
                    )}
                </div>
                <div className="relative mb-4">
                    <input
                        type={"text"}
                        name="phoneNumber"
                        className="h-10 block px-2.5 pb-2.5 pt-2 w-full text-textcolor text-sm font-normal bg-transparent rounded-md border focus:outline-none"
                        placeholder='Phone Number'
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.phoneNumber && touched.phoneNumber && (
                        <span className="text-red-500 font-bold text-sm"> {errors.phoneNumber} </span>
                    )}
                </div>
                <div className="relative mb-4">
                    <input
                        type={"text"}
                        name="age"
                        className="h-10 block px-2.5 pb-2.5 pt-2 w-full text-textcolor text-sm font-normal bg-transparent rounded-md border focus:outline-none"
                        placeholder='Age'
                        value={values.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.age && touched.age && (
                        <span className="text-red-500 font-bold text-sm"> {errors.age} </span>
                    )}
                </div>
                <div className='bg-blue-500 mb-4'>
                    <button type='submit' className='h-10 block px-2.5 pb-2.5 pt-2 w-full text-textcolor text-sm font-normal bg-transparent border focus:outline-none'>Update</button>
                </div>
            </form>
        </div>
    )

}

export default EditForm