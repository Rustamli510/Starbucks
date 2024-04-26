import React from 'react'
import './scss/Sign.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { signInSchema } from './schema';
import { Link } from '@mui/material';
function Sign() {
    const formik = useFormik({
        initialValues: {
            name: "",
            password: ""
        },
        validationSchema: signInSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    })
    console.log(formik);
    console.log(formik.errors);
    return (
        <div>
            <section className='sign-in'>
                <h1>Sign in or create an account</h1>
                <div className="form">
                    <p><span>* </span>indicates required field</p>

                    <form onSubmit={formik.handleSubmit}>
                        <TextField id="outlined-basic" label="*Username or email address" value={formik.values.name} onChange={formik.handleChange} variant="outlined" name='name' className={`${formik.errors.name && 'error'}`} />
                        <p className={`${formik.errors.name && 'error-text'}`}>{formik.errors.name && 'Enter an email or username'}</p>

                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            name='password'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            className={`${formik.errors.password && 'error'}`}
                        />
                        <p className={`${formik.errors.password && 'error-text'}`}>{formik.errors.password && 'Enter password'}</p>

                        <div className="keep">
                            <div className="check">
                                <input type="checkbox" name="" id="" />
                                <p>Keep me signed in.<Link>Details</Link></p>
                            </div>

                            <div className="forgot">
                                <Link>Forgot your username?</Link>
                                <Link>Forgot your password?</Link>
                            </div>
                        </div>
                        <div className="sign-button">
                            <button type='submit'>Sign in</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Sign