import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './scss/AllCards.css'

function AllCards() {
    const { id } = useParams();
    console.log(id);
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        AllData();
    }, []);
    
    function AllData() {
        axios.get(`http://localhost:3000/giftcard`).then((res) => {
            console.log(res.data);
            const selectedData = res.data.find(item=>item.category===id).cards;
            console.log(selectedData);
            setAllData(selectedData);
        });
    }

    return (
        <div>
            <section className="see-all">
                <div className="allcards">
                    {allData?.map((item) => (
                        <Link to={`/gift/${item.id}`}>
                            <div className="allcard" key={item.id}>
                                <img src={item.img} alt="" />
                            </div>
                        </Link>

                    ))}
                </div>
            </section>

        </div>
    );
}

export default AllCards;
