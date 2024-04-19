import * as yup from "yup";

export const signInSchema= yup.object().shape({
    name:yup.string().required("Please add your username or email address..."),
    password:yup.string().required("Please add your password")
})