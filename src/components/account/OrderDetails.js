import React from 'react';


const OrderDetails = (s) => {
    console.log('s', s)
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
                                    KDA 90Days
                                </div>
                            </div>
                            <div className="col-auto">
                                <div style={{width: `20.5rem`}} className="tableTitle">
                                    Full Revenue
                                </div>
                            </div>
                            <div className="col">
                                <div style={{width: `12rem`}} className="tableTitle">
                                    KDA
                                </div>
                            </div>
                            <div className="col-auto">
                                <div style={{width: `24.5rem`}} className="tableTitle">
                                    AntPool
                                </div>
                            </div>
                            <div className="col-auto">
                                <div style={{width: `16rem`}} className="tableTitle">
                                    Personal Wallet
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
                                KDA202211112287632502822
                            </div>
                        </div>
                        <div className="col-auto">
                            <div style={{width: `23rem`}} className="tableTitle">
                                2022-11-11  22:31
                            </div>
                        </div>
                        <div className="col-auto">
                            <div style={{width: `16rem`}} className="tableTitle">
                                $ 281.52
                            </div>
                        </div>
                        <div className="col-auto">
                            <div style={{width: `12rem`}} className="tableTitle">
                                Canceled
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
                                        $ 0.2628/T/Days
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div style={{width: `18rem`}} className="tableTitle">
                                        10 T
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="tableTitle">
                                        90 Days
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="tableTitle">
                                        $ 236.52
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
                                    <div style={{width: `23rem`}} className="tableTitle">
                                        $ 0.0500/T/Days
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div style={{width: `18rem`}} className="tableTitle">
                                        10 T
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="tableTitle">
                                        90 Days
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="tableTitle">
                                        $ 45.00
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
                                <strong>$ 281.52</strong>
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
                                            Unpaid
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="tableTitle">
                                            —
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="tableTitle">
                                            —
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="tableTitle">
                                            —
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div style={{width: `14rem`}} className="tableTitle">
                                            —
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