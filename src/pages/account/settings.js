import React, {useEffect, useState} from 'react'
import {navigate} from "gatsby"
import Layout from "../../components/Layout"
import {AuthLayout} from "../../function/AuthLayout"
import WrapAccount from "../../components/account/WrapAccount"
import ItemBlock from "../../components/account/settings/ItemBlock"
import AccountData from "../../function/accountData";
import {CopyToClipboard} from 'react-copy-to-clipboard';


const WrapSectionSettings = () => {


    const { dataAccountStatus, dataAccount, fetchDataAccount, isLoadingDataAccount } = AccountData();
    useEffect(() => {
        fetchDataAccount()
    }, []);

    const [sBlock, setSBlock ] = useState(null);
    const settingBlock = (style, scroll) => {
        setSBlock(style)
        console.log('settingBlock', style, scroll)
        navigate(`#s-block-${scroll}`)
    }

    const scroll = (scroll) => {
      navigate(`#s-block-${scroll}`)
    }

    // console.log('dataAccount', dataAccount.result.meta_data )

    // function GetMetaData({arr, k}) {
    //     return k;
    //     if (arr) {
    //         arr?.forEach((element) => {
    //             if (element.key === k) {
    //                 console.log('element.value', element.value)
    //                 return 'j1';
    //             }
    //         })
    //     }
    // }

    // const GetMetaData = (arr, k) => {
    //     // return k;
    //     arr?.map((item, index) => {
    //         console.log('item.key', item.key)
    //         // return element.key;
    //         if ( item.key === k ) {
    //             return (<span key={`GetMetaData-${item.key}`}> {item.value} </span>)
    //         }
    //     })
    // }

    const [CopyC, setCopyC ] = useState(0);
    const CopyClipboard = (op) => {
        setCopyC(op)
    }

    // const uid =
    //     dataAccount?.result?.meta_data?.map((item, index) => {
    //     if ( item.key === 'uid' ) {  return (<span key={`GetMetaData-${item.key}`}> {item.value} </span>)}
    // })

    const uid = dataAccount?.result?.meta_data?.filter(element => element.key === 'uid')[0].value
    const withdrawalVerification = isLoadingDataAccount === false && ( dataAccount?.result?.meta_data?.filter(element => element.key === 'withdrawal_verification')?.slice(0, 1)[0] )
    const PasswordSet = isLoadingDataAccount === false && ( dataAccount?.result?.meta_data?.filter(element => element.key === 'Password-set')?.slice(0, 1)[0] )
    const DefLang = isLoadingDataAccount === false && ( dataAccount?.result?.meta_data?.filter(element => element.key === 'notification_language')?.slice(0, 1)[0] )

    // console.log('data ACCOUNT', uid, withdrawalVerification, PasswordSet , dataAccount?.result?.meta_data )

    return (
        <AuthLayout logIn={false} statusAccount={dataAccountStatus} page='account/settings' go='sign-in'>
            <Layout title="Account settings" desc="desc">
                <WrapAccount status={dataAccountStatus} >
                    {
                        sBlock === null ? (
                            <>
                                <div className="Wrap">
                                    <div className="title">
                                        Account settings
                                    </div>
                                    <div className="WrapAccountList">
                                        <div className="row">

                                            <div className="col-12 col-sm-6 col-md-6">
                                                <div className="item text-1 d-flex flex-column">
                                                        <div className="row">
                                                            <div className="col">
                                                                <strong  style={{cursor: "pointer"}} onClick={()=>scroll('3Wrap') }>
                                                                    {isLoadingDataAccount === false ? (
                                                                        dataAccount.result.email
                                                                    ) : ('Loading...') }
                                                                </strong>
                                                            </div>
                                                            <div className="col-auto">
                                                                <svg  style={{cursor: "pointer"}} onClick={()=>scroll('3Wrap') } width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                    <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" fill="black"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="row d-flex align-items-center" style={{marginTop: `auto`}}>
                                                            <div className="col">
                                                                UID:
                                                                <strong>
                                                                    {isLoadingDataAccount === false ? (
                                                                        // dataAccount?.result?.meta_data?.map((item, index) => {
                                                                        //     if ( item.key === 'uid' ) {  return (<span key={`GetMetaData-${item.key}`}> {item.value} </span>)}
                                                                        // })
                                                                        uid
                                                                    ) : ('Loading...') }
                                                                </strong>
                                                            </div>
                                                            <div className="col-auto">

                                                                <div onClick={()=>CopyClipboard(1)} className={CopyC === 1 ? 'WrapCopiedActive CopiedActive' : "WrapCopiedActive"}>
                                                                    <CopyToClipboard  text={uid}>
                                                                        <svg
                                                                            style={{cursor: "pointer"}} width="18" height="20"
                                                                            viewBox="0 0 18 20" fill="none"
                                                                        >
                                                                            <path d="M4 4V1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V15C18 15.2652 17.8946 15.5196 17.7071 15.7071C17.5196 15.8946 17.2652 16 17 16H14V19C14 19.552 13.55 20 12.993 20H1.007C0.875127 20.0008 0.744397 19.9755 0.622322 19.9256C0.500247 19.8757 0.389233 19.8022 0.295659 19.7093C0.202084 19.6164 0.127793 19.5059 0.0770543 19.3841C0.0263156 19.2624 0.000129374 19.1319 0 19L0.00300002 5C0.00300002 4.448 0.453 4 1.01 4H4ZM2.003 6L2 18H12V6H2.003ZM6 4H14V14H16V2H6V4Z" fill="black"/>
                                                                        </svg>
                                                                    </CopyToClipboard>
                                                                </div>

                                                            </div>
                                                        </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-6 col-md-6">
                                                <div className="item text-1 d-flex flex-column">
                                                    <div style={{cursor: `pointer`}} className="row">
                                                        <div className="col">
                                                            <strong onClick={()=>scroll('1Wrap') } >Withdrawal Verification</strong>
                                                        </div>
                                                        <div className="col-auto">
                                                            <svg onClick={()=>scroll('1Wrap') }  width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" fill="black"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="row" style={{marginTop: `auto`}}>
                                                        <div className="col">
                                                            <div className="icon-list">

                                                                <div onClick={()=>scroll(1) } className="icon active">
                                                                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                                                                        <path d="M1.25 0.25H14.75C14.9489 0.25 15.1397 0.329018 15.2803 0.46967C15.421 0.610322 15.5 0.801088 15.5 1V13C15.5 13.1989 15.421 13.3897 15.2803 13.5303C15.1397 13.671 14.9489 13.75 14.75 13.75H1.25C1.05109 13.75 0.860322 13.671 0.71967 13.5303C0.579018 13.3897 0.5 13.1989 0.5 13V1C0.5 0.801088 0.579018 0.610322 0.71967 0.46967C0.860322 0.329018 1.05109 0.25 1.25 0.25ZM14 3.4285L8.054 8.7535L2 3.412V12.25H14V3.4285ZM2.38325 1.75L8.04575 6.7465L13.6265 1.75H2.38325Z" fill="white"/>
                                                                    </svg>
                                                                </div>


                                                                <div onClick={()=>scroll(2) } className={`icon ${  withdrawalVerification?.value === '1' && ('active') }` } >
                                                                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M7 0.75L13.1627 2.1195C13.3293 2.15652 13.4782 2.24922 13.585 2.3823C13.6918 2.51538 13.75 2.68089 13.75 2.8515V10.3417C13.7499 11.0826 13.567 11.8119 13.2174 12.465C12.8678 13.1181 12.3624 13.6749 11.746 14.0858L7 17.25L2.254 14.0858C1.63771 13.6749 1.13235 13.1183 0.782761 12.4653C0.433177 11.8124 0.250177 11.0832 0.25 10.3425V2.8515C0.250029 2.68089 0.308228 2.51538 0.414992 2.3823C0.521756 2.24922 0.670703 2.15652 0.83725 2.1195L7 0.75ZM7 2.28675L1.75 3.453V10.3417C1.75001 10.8356 1.87193 11.3218 2.10495 11.7572C2.33796 12.1926 2.67486 12.5638 3.08575 12.8378L7 15.4478L10.9142 12.8378C11.325 12.5639 11.6619 12.1928 11.8949 11.7575C12.1279 11.3223 12.2499 10.8362 12.25 10.3425V3.453L7 2.2875V2.28675ZM7 5.25C7.33025 5.24985 7.65133 5.35869 7.9134 5.55965C8.17548 5.7606 8.36392 6.04243 8.44947 6.3614C8.53503 6.68038 8.51293 7.01868 8.38659 7.32381C8.26025 7.62895 8.03675 7.88386 7.75075 8.049L7.75 11.25H6.25V8.049C5.96406 7.88389 5.74058 7.62905 5.61423 7.32399C5.48788 7.01893 5.46572 6.6807 5.55118 6.36177C5.63664 6.04283 5.82495 5.761 6.0869 5.55999C6.34885 5.35898 6.66981 5.25001 7 5.25Z" fill="white"/>
                                                                    </svg>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="s-block-1Wrap" className="Wrap">
                                    <div className="title">
                                        Verification Settings
                                    </div>

                                    <div id="s-block-1" className="block">
                                        <div className="row">
                                            <div className="col">
                                                <div className="title" style={{padding: 0}}>
                                                    <strong>Email</strong>
                                                </div>
                                                <div className="text-2">Verification passed</div>
                                                <div className="text-1">
                                                    <strong>
                                                        {isLoadingDataAccount === false ? (
                                                            dataAccount.result.email
                                                        ) : ('Loading...') }
                                                    </strong>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                {/*<span onClick={()=>settingBlock(1, 0)} className="btn style-6">*/}
                                                {/*    Change*/}
                                                {/*</span>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div id="s-block-2" className="block">
                                        <div className="row">

                                            <div className="col">
                                                <div className="title" style={{padding: 0}}>
                                                    <strong>Withdrawal Verification</strong>
                                                </div>
                                                <div className="text-2">For the security verification when withdrawing currency, at least 2 verification methods need to be enabled.</div>
                                                <div className="text-1">
                                                    <strong>
                                                        {isLoadingDataAccount === false ? (
                                                            <>
                                                                {
                                                                    withdrawalVerification?.value === '1' ? ('Set') : ('Not Set')
                                                                }
                                                            </>
                                                        ) : ('Loading...') }
                                                    </strong>
                                                </div>

                                            </div>
                                            <div className="col-auto">
                                                {isLoadingDataAccount === false && (
                                                    <>
                                                        {
                                                            withdrawalVerification?.value === '1' ? ('') : (
                                                                <span onClick={()=>settingBlock(2, 0)} className="btn style-6">
                                                                    Set
                                                                </span>
                                                            )
                                                        }
                                                    </>
                                                ) }
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div id="s-block-3Wrap" className="Wrap">
                                    <div className="title">
                                        Security Setting
                                    </div>

                                    <div id="s-block-3" className="block">
                                        <div className="row">
                                            <div className="col">
                                                <div className="title" style={{padding: 0}}>
                                                    <strong>Password</strong>
                                                </div>
                                                <div className="text-2">Protect your account</div>
                                                <div className="text-1">
                                                    <strong>
                                                        {isLoadingDataAccount === false ? (
                                                            <>
                                                                {
                                                                    PasswordSet?.value === '1' ? ('Set') : ('Not Set')
                                                                }
                                                            </>
                                                        ) : ('Loading...') }
                                                    </strong>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                {isLoadingDataAccount === false && (
                                                    PasswordSet?.value === '1' ? ('') : (
                                                        <span onClick={()=>settingBlock(3, 0)} className="btn style-6">
                                                            Change
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/*<div  id="s-block-5" className="block">*/}
                                    {/*    <div className="row">*/}
                                    {/*        <div className="col">*/}
                                    {/*            <div className="title" style={{padding: 0}}>*/}
                                    {/*                <strong>Fund Password</strong>*/}
                                    {/*            </div>*/}
                                    {/*            <div className="text-2">Protect your asset pin</div>*/}
                                    {/*            <div className="text-1">*/}
                                    {/*                <strong>Not Set</strong>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="col-auto">*/}
                                    {/*            <span onClick={()=>settingBlock(5, 0)} className="btn style-6">*/}
                                    {/*                Change*/}
                                    {/*            </span>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}


                                </div>
                                {/*<div className="Wrap">*/}
                                {/*    <div className="title">*/}
                                {/*        Security Setting*/}
                                {/*    </div>*/}

                                {/*    <div id="s-block-6" className="block">*/}
                                {/*        <div className="row">*/}
                                {/*            <div className="col">*/}
                                {/*                <div className="title" style={{padding: 0}}>*/}
                                {/*                    <strong>Password</strong>*/}
                                {/*                </div>*/}
                                {/*                <div className="text-2">Protect your account</div>*/}
                                {/*                <div className="text-1">*/}
                                {/*                    <strong>Not Set</strong>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*            <div className="col-auto">*/}
                                {/*                <span onClick={()=>settingBlock(6, 0)} className="btn style-6">*/}
                                {/*                    Change*/}
                                {/*                </span>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}

                                {/*    <div  id="s-block-7" className="block">*/}
                                {/*        <div className="row">*/}
                                {/*            <div className="col">*/}
                                {/*                <div className="title" style={{padding: 0}}>*/}
                                {/*                    <strong>Fund Password</strong>*/}
                                {/*                </div>*/}
                                {/*                <div className="text-2">Protect your asset pin</div>*/}
                                {/*                <div className="text-1">*/}
                                {/*                    <strong>Not Set</strong>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*            <div className="col-auto">*/}
                                {/*                <span onClick={()=>settingBlock(7, 0)} className="btn style-6">*/}
                                {/*                    Change*/}
                                {/*                </span>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}

                                {/*</div>*/}
                                <div className="Wrap">
                                    <div className="title">
                                        Personal Setting
                                    </div>

                                    <div id="s-block-4" className="block">
                                        <div className="row">
                                            <div className="col">
                                                <div className="title" style={{padding: 0}}>
                                                    <strong>Notification Language</strong>
                                                </div>
                                                <div className="text-2">Email push notification language settings</div>
                                                <div className="text-1">
                                                    <strong>
                                                        {isLoadingDataAccount === false ? (
                                                            <>
                                                                {
                                                                    DefLang?.value ? ( DefLang?.value ) : ('Not Set')
                                                                }
                                                            </>
                                                        ) : ('Loading...') }
                                                    </strong>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <span onClick={()=>settingBlock(4, 0)} className="btn style-6">
                                                    Change
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/*<div id="s-block-9" className="block">*/}
                                    {/*    <div className="row">*/}
                                    {/*        <div className="col">*/}
                                    {/*            <div className="title" style={{padding: 0}}>*/}
                                    {/*                <strong>Marketing Emails</strong>*/}
                                    {/*            </div>*/}
                                    {/*            <div className="text-2">Select whether you want to receive marketing emails from us</div>*/}
                                    {/*            <div className="text-1">*/}
                                    {/*                <strong>On</strong>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="col-auto">*/}
                                    {/*            <span onClick={()=>settingBlock(9, 0)} className="btn style-6">*/}
                                    {/*                Set*/}
                                    {/*            </span>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                </div>
                            </>
                        ) : (
                            <>
                                <span className='btn style-7' onClick={()=>settingBlock(null, sBlock )}>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M3.21932 6.66664L6.79532 10.2426L5.85265 11.1853L0.667318 5.99997L5.85265 0.814636L6.79532 1.7573L3.21932 5.3333L11.334 5.3333L11.334 6.66664L3.21932 6.66664Z" fill="#CBCBCB"/>
                                    </svg>
                                    Back
                                </span>
                                <div className="Wrap">
                                    <ItemBlock style={sBlock} />
                                </div>
                            </>
                        )
                    }
                </WrapAccount>
            </Layout>
        </AuthLayout>
    );
};
export default WrapSectionSettings;

