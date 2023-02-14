
import * as Yup from "yup";
const phoneRegExp = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
export const UserValidationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone Number is required"),
  age: Yup.number().required("Age is required"),
});
