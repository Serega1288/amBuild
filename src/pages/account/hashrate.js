import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout"
import {AuthLayout} from "../../function/AuthLayout"
import WrapAccount from "../../components/account/WrapAccount"
import IconInfo from "../../function/IconInfo";
import KDA from "../../assets/img/pay/KDA.png";
import AccountData from "../../function/accountData";
import {graphql, useStaticQuery} from "gatsby";
import {localStoreService} from "../../function/hook";
import TimerBlock from "../../function/Timer";
import IconCurrency from "../../styles/IconCurrency";

const WrapSectionHashrate = () => {

    const { dataAccountStatus, dataAccount, fetchDataAccount } = AccountData();
    useEffect(() => {
        fetchDataAccount()
    }, []);


    const dataOption = useStaticQuery(graphql`
        {
            wp {
                themeGeneralSettings {
                    ACFoptionThemes {
                        hashrate {
                            hashrateDetailsInfo
                        }
                    }
                }
            }
        }
    `);
    const dPayList = dataOption.wp.themeGeneralSettings.ACFoptionThemes;
    console.log('dPayList', dPayList )

    const [data, setData] = useState([]);
    const [isLoadingData, setIsLoadingData] = useState(true);

    useEffect(() => {
        // fetchDataAccount()
        fetchData();

    }, []);

    const fetchData = async () => {
        let ob = { get: `orders?customer=${localStoreService.getLocal(process.env.LOCAL_TOKEN).name.split('ud=')[1]}`, type : `order` };
        const response = await fetch(`${process.env.GATSBY_SERVERLESS_URL}/sendGetData`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(ob),
        });
        const d = await response.json();
        if (d) {
            setData(d.result);
            setIsLoadingData(false)

            // console.log('data >>>', localStoreService.getLocal(process.env.LOCAL_TOKEN).name.split('ud=')[1], d )
        }

    };


    const [dataOrderFilter, setDataOrderFilter] = useState(null);
    // const [dataOrderIcon, setDataOrderIcon] = useState(null);
    const orderFilter = (order, icon) => {
      console.log('order', order, icon)
        setDataOrderFilter(order)
        // setDataOrderIcon(icon)
    }

    return (
        <AuthLayout logIn={false} statusAccount={dataAccountStatus} page='account/hashrate' go='sign-in'>
            <Layout title="Account hashrate" desc="desc">
                <WrapAccount status={dataAccountStatus}>

                    <div className="WrapTextTitle">
                        <div className="title">
                            <div className="WrapIconInfo">
                                <strong style={{marginRight: `0.9rem`}}>Hashrate Plans</strong>
                                <IconInfo  position="right" style="1" text={dPayList.hashrate.hashrateDetailsInfo} />
                            </div>
                            <div style={{padding: `0.8rem 0 0`}} className="title up">
                                $ 0
                            </div>
                            <div className="text-2">
                                <div className="row align-items-center">
                                    <div className="col">
                                        Approximately 0 BTC
                                    </div>
                                    {/*<div className="col-auto">*/}
                                    {/*    <span className="btn style-10">Purchase Hashrate</span>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="PayList WrapAccountList style-4">
                        <div className="row">

                            {
                                isLoadingData === false ? (

                                    data.map((item, index)=>{

                                        // console.log('------ item 0 >>>',
                                        //     new Date( item.date_created )
                                        // )
                                        //
                                        // console.log('------ item 1 >>>',
                                        //     format( new Date( item.date_created ), 'yyyy-MM-dd HH:mm:ss zzz'),
                                        // )
                                        //
                                        // console.log('------ item 2 >>>',
                                        //     formatInTimeZone( new Date( item.date_created ), 'America/New_York', 'yyyy-MM-dd HH:mm:ss zzz' )
                                        // )
                                        //
                                        // console.log('------ item 3 >>>',
                                        //     formatInTimeZone( new Date( item.date_created ), 'America/New_York', 'yyyy-MM-dd HH:mm:ss zzz' )
                                        // )

                                        // console.log('------ item 2 >>>',
                                        //     format( new Date( item.date_created ).getDate(new Date( item.date_created ).getDate() + 1 ) , 'yyyy/MM/dd')
                                        // )
                                        // HH:mm:ss
                                        const T = item.date_created;
                                        // const iconActive = item?.meta_data?.map((item, index) => { if ( item.key === 'currency'  ) { return ( item.value ) } })
                                        return (

                                            <IconCurrency key={`PayList-${index}`} className="col-12 col-sm-6 col-md-4">

                                                {/*key={`dPayList-${index}`}*/}
                                                {/*{console.log('PayList >>>', index , item )}*/}

                                                <div style={{cursor: `pointer`}} onClick={()=>orderFilter(item.id  )}
                                                     className={`item d-flex flex-column ${ dataOrderFilter === item.id && ('active') }`}>
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            {
                                                                item?.meta_data?.map((item, index) => {
                                                                    if ( item.key === 'currency' ) {  return (<span className={`iCurrency ${item.value}`} key={`PayListIcon-${item.key}`} />)}
                                                                })
                                                            }
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="text-3">
                                                                { item?.meta_data?.map((item, index) => { if ( item.key === 'currency' ) {  return ( item.value )} }) }
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="text-2 WrapItem">
                                                        <div className="row">
                                                            <div className="col">
                                                                Latest Output:
                                                            </div>
                                                            <div className="col-auto">
                                                                <strong>0 KDA</strong>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="text-2 WrapItem">
                                                        <div className="row">
                                                            <div className="col">
                                                                Hashrate
                                                            </div>
                                                            <div className="col-auto">
                                                                <strong>0 TH/s</strong>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>


                                            </IconCurrency>
                                        )
                                    })

                                ) : ('')
                            }




                        </div>
                    </div>

                    <div className="title">
                        <div className="row d-flex align-items-center">
                            <div className="col">
                                <div className="text-3 d-flex align-items-center">
                                    {/*<img style={{marginRight: `1rem`}} src={dataOrderIcon} alt=""/>*/}

                                    <strong>Hashrate list</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="orderList">
                        <div className="table">
                            <div className="row">
                                <div className="col">
                                    <div className="tableTitle">
                                        Hashrate Name
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="tableTitle">
                                        Status
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="tableTitle">
                                        Service Fee Remaining
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="tableTitle">
                                        Latest Output
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="tableTitle">
                                        Earnings
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tableList no">
                            <div>No Data</div>
                        </div>
                    </div>

                </WrapAccount>
            </Layout>
        </AuthLayout>
    );
};
export default WrapSectionHashrate;
