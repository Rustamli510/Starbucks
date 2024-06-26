import React, { useContext, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Shopping from '../img/shopping-bag.png'
import './scss/ChooseStore.css'
import { IoBag } from "react-icons/io5";
import { Link } from 'react-router-dom';
import DataContext from './Context/DataContext';

function ChooseStore({ coffeeStyle }) {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const {data,setData} = useContext(DataContext)

    return (
        <div>
            <section className='choose-store'>
                <div className="two-div">
                    <div className="choose">
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Choose a store</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={age}
                                onChange={handleChange}
                                label="Age"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Baku</MenuItem>
                                <MenuItem value={20}>Istanbul</MenuItem>
                                <MenuItem value={30}>New York</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <Link to='/bucket'><div className="busket">
                        <IoBag style={{ color: coffeeStyle ? '#00a862' : "#fff" }} className='busket' />
                        <span style={{ display: coffeeStyle ? 'inline-block' : 'none' }}>{data.length}</span>
                    </div></Link>

                </div>

            </section>
        </div>

    )
}

export default ChooseStore