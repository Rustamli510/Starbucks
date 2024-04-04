import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CoffeeCategory() {
    const params = useParams()
    console.log(params);
    const [category, setCategory] = useState()

    const getCategory = () => {
        axios.get('http://localhost:3000/coffee').then(res => {
            setCategory(res.data)
        })
    }

    useEffect(() => {
        getCategory()
    }, [])


    return (
        <div>
            {
                <div className="subcategory-text">
                    <h1>{params.id.split('-').join(' ')}</h1>
                    <h2></h2>
                </div>
            }

            {
                // console.log(
                //     category &&
                //     Object.entries(category?.filter(item => {
                //         return item.subcategory.toLowerCase().split(' ').join('-') === params.id
                //     }).reduce((prev,cur,index)=>{
                //         let key=cur['type']
                //         if(!prev[key]){
                //             prev[key]=[]
                //         }
                //         prev[key].push(cur)
                //         return prev
                        
                //     },{}))
                // )

                category &&
                    Object.entries(category?.filter(item => {
                        return item.subcategory.toLowerCase().split(' ').join('-') === params.id
                    }).reduce((prev,cur,index)=>{
                        let key=cur['type']
                        if(!prev[key]){
                            prev[key]=[]
                        }
                        prev[key].push(cur)
                        return prev
                        
                    },{})).map(item=>{
                        return <div>
                            <h2>{item[0]}</h2>
                            <div>
                                {
                                    item[1].map(a=>{
                                        return <div>
                                            <img src={a.img} alt="" />
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    })
            }
        </div>
    )
}

export default CoffeeCategory