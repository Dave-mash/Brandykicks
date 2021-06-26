/**
* This file contains the validation schema for authentication
**/

import * as Yup from "yup";
import Filter from 'bad-words';


const filter = new Filter();

export const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
        .test('cleanName', 'Profane words are not allowed!', value => !filter.isProfane(value))
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('First name is required'),
    lastName: Yup.string()
        .test('cleanName', 'Profane words are not allowed!', value => !filter.isProfane(value))
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Last name is required'),
    phoneNumber: Yup.number()
        .test('cleanName', 'Profane words are not allowed!', value => !filter.isProfane(value))
        .min(8, 'Too Short!')
        .required("Phone number is required"),
    email: Yup.string()
        .test('cleanName', 'Profane words are not allowed!', value => !filter.isProfane(value))
        .email("Invalid email address format")
        .required("Email is required"),
    password: Yup.string()
        .test('cleanName', 'Profane words are not allowed!', value => !filter.isProfane(value))
        .min(6, "Password must be 6 characters at minimum")
        .required("Password is required")
})

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .test('cleanName', 'Profane words are not allowed!', value => !filter.isProfane(value))
        .email("Invalid email address format")
        .required("Email is required"),
    password: Yup.string()
        .test('cleanName', 'Profane words are not allowed!', value => !filter.isProfane(value))
        .min(6, "Password must be 6 characters at minimum")
        .required("Password is required")
});

export const CheckoutSchema = Yup.object().shape({
    firstName: Yup.string()
        .test('cleanName', 'Profane words are not allowed!', value => !filter.isProfane(value))
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('First name is required'),
    lastName: Yup.string()
        .test('cleanName', 'Profane words are not allowed!', value => !filter.isProfane(value))
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Last name is required'),
    phoneNumber: Yup.number()
        .test('cleanName', 'Profane words are not allowed!', value => !filter.isProfane(value))
        .min(8, 'Too Short!')
        .required("Phone number is required"),
    address: Yup.string()
        .test('cleanName', 'Profane words are not allowed!', value => !filter.isProfane(value))
        .min(8, 'Too Short!')
        .required("Address is required")
});