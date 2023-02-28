import React, {useEffect, useState} from 'react';
import {localStoreService} from "../../function/hook";
import {format} from "date-fns";


const OrderDetails = ({s}) => {

    // const ID = s.line_items[0].product_id;

    // console.log('order', s )


    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     let ob = { get: `products/${ID}/`, type : `product` };
    //     const response = await fetch(`${process.env.GATSBY_SERVERLESS_URL}/sendGetData`, {
    //         method: 'POST',
    //         headers: {
    //             'content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(ob),
    //     });
    //     const data = await response.json();
    //     setData(data);
    //
    //     console.log('data product >>>', data.result )
    // };


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
                                <div style={{width: `19rem`}} className="tableTitle">
                                    Hashrate Name
                                </div>
                            </div>
                            <div className="col-auto">
                                <div style={{width: `20rem`}} className="tableTitle">
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
                                <div  style={{width: `19rem`}} className="tableTitle">
                                    { s.meta_data.map((item, index) => { if (item.key === 'hashrate_name') {
                                       return ( <span key={`hashrate_name-${index}`}>{item.value}</span> )
                                    }})}
                                </div>
                            </div>
                            <div className="col-auto">
                                <div style={{width: `20rem`}} className="tableTitle">
                                    { s.meta_data.map((item, index) => { if (item.key === 'Type') {
                                        return ( <span key={`Type-${index}`}>{item.value}</span> )
                                    }})}
                                </div>
                            </div>
                            <div className="col">
                                <div style={{width: `12rem`}} className="tableTitle">
                                    { s.meta_data.map((item, index) => { if (item.key === 'currency') {
                                        return ( <span key={`currency-${index}`}>{item.value}</span> )
                                    }})}
                                </div>
                            </div>
                            <div className="col-auto">
                                <div style={{width: `24.5rem`}} className="tableTitle">
                                    { s.meta_data.map((item, index) => { if (item.key === 'pool') {
                                        return ( <span key={`pool-${index}`}>{item.value}</span> )
                                    }})}
                                </div>
                            </div>
                            <div className="col-auto">
                                <div style={{width: `16rem`}} className="tableTitle">
                                    { s.meta_data.map((item, index) => { if (item.key === 'revenue_address') {
                                        return ( <span key={`revenue_address-${index}`}>{item.value}</span> )
                                    }})}
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
                                <div style={{width: `25rem`}} className="tableTitle">
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
                                    { s.meta_data.map((item, index) => { if (item.key === 'id') {
                                        return ( <span key={`id-${index}`}>{item.value}</span> )
                                    }})}
                                </div>
                            </div>
                            <div className="col-auto">
                                <div style={{width: `25rem`}} className="tableTitle">
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





                        <div style={{minWidth: `90rem`}} className="table list-result-1">

                            <div className="row">
                                <div className="col-auto">
                                    <div style={{width: `23rem`}} className="tableTitle">
                                        Hashrate Fee
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div style={{width: `23rem`}}  className="tableTitle">
                                        { s.meta_data.map((item, index) => { if (item.key === 'hashrate_fee') {
                                            return ( <span key={`hashrate_fee-${index}`}>{item.value}</span> )
                                        }})}
                                        /T/Days
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div style={{width: `18rem`}} className="tableTitle">
                                        {s.line_items[0].quantity * 10} T
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="tableTitle">
                                        { s.meta_data.map((item, index) => { if (item.key === 'days') {
                                            return ( <span key={`days-${index}`}>{item.value}</span> )
                                        }})}
                                        Days
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="tableTitle">
                                        {s.currency_symbol} {s.line_items[0].total}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{minWidth: `90rem`}} className="table list-result-1">

                            <div className="row">
                                <div className="col-auto">
                                    <div style={{width: `23rem`}} className="tableTitle">
                                        Service Chargers
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div style={{width: `23rem`}}  className="tableTitle">
                                        { s.meta_data.map((item, index) => { if (item.key === 'service_fee') {
                                            return ( <span key={`service_fee-${index}`}>{item.value}</span> )
                                        }})}
                                        /T/Days
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div style={{width: `18rem`}} className="tableTitle">
                                        {s.line_items[0].quantity * 10} T
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="tableTitle">
                                        {/*.toFixed(5)*/}
                                        { s.meta_data.map((item, index) => { if (item.key === 'days') {
                                            return ( <span key={`days-${index}`}>{item.value}</span> )
                                        }})}
                                        Days
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="tableTitle">
                                        {s.currency_symbol} {s.line_items[1].total}
                                    </div>
                                </div>
                            </div>
                        </div>

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