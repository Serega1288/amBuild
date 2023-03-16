import React, {useState} from 'react'
import useFormPop from "../../../function/useFormPop";

import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDropzone} from 'react-dropzone';
import axios from 'axios';

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
});

const ItemBlock_1 = ({style}) => {

    const [popBox, setPopBox] = useState(false);
    const [popBoxThanks, setPopBoxThanks] = useState(false);

    const PopThanks = () => {
        setPopBoxThanks(!popBoxThanks)
        if (popBoxThanks === false) {
            document.body.classList.add(
                'ovh',
            );
        }
        if (popBoxThanks === true) {
            document.body.classList.remove(
                'ovh',
            );
        }
    }

    const Pop = () => {

        setPopBox(!popBox)
        if (popBox === false) {
            document.body.classList.add(
                'ovh',
            );
        }
        if (popBox === true) {
            document.body.classList.remove(
                'ovh',
            );
        }
    }


    // const ArrField = {garbage: '', firstName: '', lastName: ''  };
    // const { values, captureInput, submitForm, isLoading, error, message, setMessage} = useFormPop(ArrField, setPopBox, setPopBoxThanks);

    /********************************/


    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const [file, setFile] = useState(null);

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        maxFiles: 1,
        onDrop: acceptedFiles => {
            setFile(acceptedFiles[0]);
        },
    });

    const onSubmit = async data => {
        const formData = new FormData();
        formData.append('firstName', data.firstName);
        formData.append('lastName', data.lastName);
        formData.append('file', file);
        formData.append('type', 'file');

        try {
            const response = await axios.post(
                `${process.env.GATSBY_SERVERLESS_URL}/sendEmailFile`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                },
            );
            console.log('done >>>', response);
        } catch (error) {
            console.error('error >>>', error);
        }
    };


    return (
        <>


            <div className="Wrap">
                <div className="title">
                    Identity Verification Level
                </div>
                <span onClick={()=>Pop()} className="btn style-2">
                   Verification Level and Rights
               </span>
            </div>
            <div className="Wrap">
                <div className="title">
                    Personal Verification
                </div>
                <div className="block">
                    <div className="row">
                        <div className="col">
                            <div className="title" style={{padding: 0}}>
                                <strong>Basic Verification</strong>
                            </div>
                        </div>
                        <div className="col-auto">
                           <span className="labelStatus">
                               Not Verified
                           </span>
                        </div>
                    </div>
                </div>
                <div className="text-2" style={{marginTop: `3.2rem`}}>
                    The services provided by American Builds are not available to residents (hereinafter referred to as "restricted individuals") of the following countries,
                    including China, Crimea, Cuba, Iran, North Korea, Syria, or any entity or individual subject to restrictions under applicable trade sanctions and export
                    laws. The list above may not be exhaustive. Before using the services provided by American Builds, please ensure that you are not a "restricted individual".
                </div>
            </div>


            <div className={`pop anim PopThanks ${popBoxThanks ? 'active' : '' }`}>
                <div className="boxForm">
                    <span onClick={()=>PopThanks()} className="exit">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M6.99974 5.58599L11.9497 0.635986L13.3637 2.04999L8.41374 6.99999L13.3637 11.95L11.9497 13.364L6.99974 8.41399L2.04974 13.364L0.635742 11.95L5.58574 6.99999L0.635742 2.04999L2.04974 0.635986L6.99974 5.58599Z" fill="black"/>
                        </svg>
                    </span>
                    <div className="title">
                        Your message has been sent. <br />
                        We will contact you shortly.
                    </div>
                </div>
                <div onClick={()=>PopThanks()} className="shadow"></div>
            </div>

            <div className={`pop anim ${popBox ? 'active' : '' }`}>
                <div className="boxForm">
                    <span onClick={()=>Pop()} className="exit">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M6.99974 5.58599L11.9497 0.635986L13.3637 2.04999L8.41374 6.99999L13.3637 11.95L11.9497 13.364L6.99974 8.41399L2.04974 13.364L0.635742 11.95L5.58574 6.99999L0.635742 2.04999L2.04974 0.635986L6.99974 5.58599Z" fill="black"/>
                        </svg>
                    </span>
                    <div className="title">Contact Us</div>
                    <div className="WrapForm">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <input id="firstName" {...register('firstName')} />
                                {errors.firstName && <span>This field is required</span>}
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <input id="lastName" {...register('lastName')} />
                                {errors.lastName && <span>This field is required</span>}
                            </div>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                {file ? (
                                    <p>Selected file: {file.name}</p>
                                ) : (
                                    <p>Drag and drop a file here, or click to select a file</p>
                                )}
                            </div>
                            <button type="submit">Submit</button>
                        </form>

                        {/*<form className="input styleFormNorm" onSubmit={submitForm}>*/}
                        {/*    <input type="garbage"*/}
                        {/*           name="garbage"*/}
                        {/*           autoComplete="off"*/}
                        {/*           disabled={isLoading}*/}
                        {/*           value={values.garbage}*/}
                        {/*           onChange={captureInput}*/}
                        {/*           className="garbage"*/}
                        {/*    />*/}
                        {/*    <div className="row">*/}
                        {/*        <div className="col-12 col-sm-6">*/}
                        {/*            <div className="WrapInput">*/}
                        {/*                <input type="name"*/}
                        {/*                       required="required"*/}
                        {/*                       name="firstName"*/}
                        {/*                       disabled={isLoading}*/}
                        {/*                       value={values.firstName}*/}
                        {/*                       onChange={captureInput}*/}
                        {/*                    // isLoading={isLoading}*/}
                        {/*                       placeholder="First name"*/}
                        {/*                       className="input"*/}
                        {/*                />*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="col-12 col-sm-6">*/}
                        {/*            <div className="WrapInput">*/}
                        {/*                <input type="text"*/}
                        {/*                       required="required"*/}
                        {/*                       name="lastName"*/}
                        {/*                       disabled={isLoading}*/}
                        {/*                       value={values.lastName}*/}
                        {/*                       onChange={captureInput}*/}
                        {/*                    // isLoading={isLoading}*/}
                        {/*                       placeholder="Last name"*/}
                        {/*                       className="input"*/}
                        {/*                />*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}



                        {/*    <div className="text-right">*/}
                        {/*        <button disabled={isLoading} type="submit"*/}
                        {/*                className="style-3 btn w100">*/}
                        {/*            {isLoading ? 'Submit...' : 'Submit'}*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*    /!*{console.log('message', message)}*!/*/}
                        {/*    /!*<h3 className={` statusInfo text-center *!/*/}
                        {/*    /!*    ${error || message ? ' active ' : ''}*!/*/}
                        {/*    /!*    ${error ? ' error ' : ''} *!/*/}
                        {/*    /!*    *!/*/}
                        {/*    /!*    ${*!/*/}
                        {/*    /!*    message?.result === '01' ||*!/*/}
                        {/*    /!*    message?.result === '02' ||*!/*/}
                        {/*    /!*    message?.result === '03' || *!/*/}
                        {/*    /!*    message?.result?.status === 400 ||*!/*/}
                        {/*    /!*    message?.result === '04' ? 'error' : 'done'*!/*/}
                        {/*    /!*    }*!/*/}
                        {/*    /!*    `}>*!/*/}
                        {/*    /!*    {error ? error : ''}*!/*/}
                        {/*    /!*    {message ? message?.message : ''}*!/*/}
                        {/*    /!*</h3>*!/*/}

                        {/*</form>*/}
                    </div>
                </div>
                <div onClick={()=>Pop()} className="shadow"></div>
            </div>

        </>
    )
}
export default ItemBlock_1;

//
// import React, { useState } from "react"
// import Dropzone from "./Dropzone"
//
// function MyForm() {
//     const [file, setFile] = useState(null)
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//     })
//
//     const handleFileUpload = (uploadedFile) => {
//         setFile(uploadedFile)
//     }
//
//     const handleChange = (event) => {
//         setFormData({
//             ...formData,
//             [event.target.name]: event.target.value,
//         })
//     }
//
//     const handleSubmit = (event) => {
//         event.preventDefault()
//         const data = new FormData()
//         data.append("file", file)
//         data.append("name", formData.name)
//         data.append("email", formData.email)
//
//         // Do something with the form data, like sending it to a server
//     }
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Name:
//                 <input type="text" name="name" value={formData.name} onChange={handleChange} />
//             </label>
//             <label>
//                 Email:
//                 <input type="email" name="email" value={formData.email} onChange={handleChange} />
//             </label>
//             <Dropzone onFileUpload={handleFileUpload} />
//             <button type="submit">Submit</button>
//         </form>
//     )
// }
//
// export default MyForm