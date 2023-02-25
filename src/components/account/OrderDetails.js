import React, {useEffect, useState} from 'react';
import {localStoreService} from "../../function/hook";
import {format} from "date-fns";


const OrderDetails = ({s}) => {

    const ID = s.line_items[0].product_id;

    console.log('order', s )


    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let ob = { get: `products/${ID}/`, type : `product` };
        const response = await fetch(`${process.env.GATSBY_SERVERLESS_URL}/sendGetData`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(ob),
        });
        const data = await response.json();
        setData(data);
        console.log('data product >>>', data.result )
    };

    return (
        <>
            <div className="WrapTable-1">
                <div className="title">
                    Order Details
                </div>

                <div className="WrapScrollTable">
                    <div style={{minWidth: `95rem`}} className="table">
                        <div className="row">
                            <div className="col-auto">
                                <div style={{width: `18.5rem`}} className="tableTitle">
                                    Hashrate Name
                                </div>
                            </div>
                            <div className="col-auto">
                                <div style={{width: `20.5rem`}} className="tableTitle">
                                    Type
                                </div>
                            </div>
                            <div className="col">
                                <div style={{width: `12rem`}} className="tableTitle">
                                    Currency
                                </div>
                            </div>
                            <div className="col-auto">
                                <div style={{width: `24.5rem`}} className="tableTitle">
                                    Mining Pool Options
                                </div>
                            </div>
                            <div className="col-auto">
                                <div style={{width: `16rem`}} className="tableTitle">
                                    Revenue Address
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{minWidth: `95rem`}} className="table list-result-1">
                        <div className="row">
                            <div className="col-auto">
                                <div  style={{width: `17rem`}} className="tableTitle">
                                    {s.line_items[0].name}
                                </div>
                            </div>
                            <div className="col-auto">
                                <div style={{width: `20.5rem`}} className="tableTitle">
                                    ! Full Revenue
                                </div>
                            </div>
                            <div className="col">
                                <div style={{width: `12rem`}} className="tableTitle">
                                    ! KDA
                                </div>
                            </div>
                            <div className="col-auto">
                                <div style={{width: `24.5rem`}} className="tableTitle">
                                    ! AntPool
                                </div>
                            </div>
                            <div className="col-auto">
                                <div style={{width: `16rem`}} className="tableTitle">
                                    ! Personal Wallet
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="WrapTable-1">
                <div className="title">
                    Order Information
                </div>

                <div className="WrapScrollTable">
                    <div style={{minWidth: `82rem`}} className="table">
                        <div className="row">
                            <div className="col">
                                <div className="tableTitle">
                                    ID
                                </div>
                            </div>
                            <div className="col-auto">
                                <div style={{width: `23rem`}} className="tableTitle">
                                    Time
                                </div>
                            </div>
                            <div className="col-auto">
                                <div style={{width: `16rem`}} className="tableTitle">
                                    Total
                                </div>
                            </div>
                            <div className="col-auto">
                                <div style={{width: `12rem`}} className="tableTitle">
                                    Order Status
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{minWidth: `82rem`}} className="table list-result-1">
                        <div className="row">
                            <div className="col">
                                <div className="tableTitle">
                                    {s.id}
                                </div>
                            </div>
                            <div className="col-auto">
                                <div style={{width: `23rem`}} className="tableTitle">
                                    {format( new Date(s.date_created), 'yyyy-mm-dd H:mma')}
                                </div>
                            </div>
                            <div className="col-auto">
                                <div style={{width: `16rem`}} className="tableTitle">
                                    {s.currency_symbol} {s.total}
                                </div>
                            </div>
                            <div className="col-auto">
                                <div style={{width: `12rem`}} className="tableTitle">
                                    {s.status}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="WrapTable-2">

                <div className="table">

                    <div className="WrapScrollTable">

                        <div style={{minWidth: `90rem`}}>
                            <div className="row">
                                <div className="col-auto">
                                    <div style={{width: `23rem`}} className="tableTitle">
                                        Cost Summary
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div style={{width: `23rem`}} className="tableTitle">
                                        Price
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div style={{width: `18rem`}} className="tableTitle">
                                        Amount
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="tableTitle">
                                        Days
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="tableTitle">
                                        Total
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            s.line_items.map((item, index) => (
                                <div key={`list-result-1-${index}`} style={{minWidth: `90rem`}} className="table list-result-1">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div style={{width: `23rem`}} className="tableTitle">
                                                {item.name}
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div style={{width: `23rem`}}  className="tableTitle">
                                                !  $ 0.2628/T/Days
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div style={{width: `18rem`}} className="tableTitle">
                                                ! 10 T
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="tableTitle">
                                                ! 90 Days
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="tableTitle">
                                                {item.price}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                    <div className="row">
                        <div className="col">
                        </div>
                        <div className="col-auto">
                            <div className="tableTitle">
                                <strong style={{marginRight: `1.2rem`}} >Total:</strong>
                                <strong>{s.currency_symbol} {s.total}</strong>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="WrapTable-3">

                <div className="title">
                    Payment Information
                </div>

                <div className="Wrap">

                    <div className="WrapScrollTable">
                        <div style={{minWidth: `70rem`}} className="table">
                            <div className="row">
                                <div className="col">
                                    <div className="tableTitle">
                                        Status:
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="tableTitle">
                                        Currency:
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="tableTitle">
                                        Payment:
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="tableTitle">
                                        Total:
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div style={{width: `14rem`}} className="tableTitle">
                                        Payment date:
                                    </div>
                                </div>
                            </div>
                            <div className="table list-result-2">
                                <div className="row">
                                    <div className="col">
                                        <div className="tableTitle">
                                            ! Unpaid
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="tableTitle">
                                            !  —
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="tableTitle">
                                            !  —
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="tableTitle">
                                            ! —
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div style={{width: `14rem`}} className="tableTitle">
                                            ! —
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
export default OrderDetails;