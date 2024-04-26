import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './scss/AllCards.css'

function AllCards() {
    const { id } = useParams();
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        AllData();
    }, []);
    
    function AllData() {
        axios.get(`http://localhost:3000/giftcard`).then((res) => {
            const selectedData = res.data.filter((card) => card.category === id);
            setAllData(selectedData[0]);
        });
    }
    const data = allData.cards;

    return (
        <div>
            <section className="see-all">
                <div className="allcards">
                    {data?.map((item) => (
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
