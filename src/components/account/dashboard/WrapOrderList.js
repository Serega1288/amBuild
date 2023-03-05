import React, {useEffect, useState} from "react";
import {localStoreService} from "../../../function/hook";
import IconCurrency from "../../../styles/IconCurrency";
// import {format} from "date-fns";
import { formatInTimeZone, format } from 'date-fns-tz';
import TimerBlock from "../../../function/Timer";

const WrapOrderList = () => {

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

  return (
      <div style={{margin: `0`}} className="PayList WrapAccountList style-3">
          <IconCurrency className="row">
              {
                  isLoadingData === false ? (

                      data.map((item, index)=>{

                          console.log('------ item 0 >>>',
                              new Date( item.date_created ),
                          )

                          console.log('------ item 1 >>>',
                              format( new Date( item.date_created ), 'yyyy-MM-dd HH:mm:ss zzz'),
                          )

                          console.log('------ item 2 >>>',
                              formatInTimeZone( new Date( item.date_created ), 'America/New_York', 'yyyy-MM-dd HH:mm:ss zzz' )
                          )

                          console.log('------ item 3 >>>',
                              formatInTimeZone( new Date( item.date_created ), 'America/New_York', 'yyyy-MM-dd HH:mm:ss zzz' )
                          )

                          // console.log('------ item 2 >>>',
                          //     format( new Date( item.date_created ).getDate(new Date( item.date_created ).getDate() + 1 ) , 'yyyy/MM/dd')
                          // )
                          // HH:mm:ss
                          const T = item.date_created;
                          return (

                              <div  key={`PayList-${index}`} className="col-12 col-sm-6 col-md-4">


                                  {
                                      item?.meta_data?.map((item, index) => {
                                          if (item.key === 'status_work_machine') {
                                              if (item.value === '1' || item.value === '3') {
                                                  return (
                                                      <span key={`PayListIcon-${item.key}`} className='TimeActive'/>)
                                              }
                                          }
                                      })
                                  }

                                  <div className={`item d-flex flex-column pos`}>
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
                                                  <strong>
                                                      {
                                                          item?.meta_data?.map((item, index) => {
                                                              if ( item.key === 'currency' ) {  return (<span key={`PayListItem-${item.key}`}> {item.value} </span>)}
                                                          })
                                                      }
                                                  </strong>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="text-1 WrapItem">
                                          <div className="row">
                                              <div className="col">
                                                  <strong>Hashrate</strong>
                                              </div>
                                              <div className="col-auto">
                                                  <strong>
                                                      {
                                                          item?.meta_data?.map((item, index) => {
                                                              if ( item.key === 'hashrate' ) {  return (<span key={`Hashrate-${item.key}`}> {item.value} </span>)}
                                                          })
                                                      }
                                                      TH/s
                                                  </strong>
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
                                                  Status:
                                              </div>
                                              <div className="col-auto">
                                                  <strong>
                                                      {
                                                          item?.meta_data?.map((item, index) => {
                                                              if ( item.key === 'status_work_machine' ) {
                                                                  return (
                                                                      <span key={`status_work_machine-${index}`} >
                                                                    {/*{console.log('item.value', item.value)}*/}
                                                                          { item.value === '1' && ( 'Activation process' ) }
                                                                          { item.value === '2' && ( 'Active' ) }
                                                                          { item.value === '3' && ( 'Disactive' ) }
                                                                </span>
                                                                      // <span key={`Hashrate-${item.key}`}> {item.value} </span>
                                                                  )
                                                              }
                                                          })
                                                      }
                                                  </strong>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="text-2 WrapItem">
                                          <div className="row">
                                              <div className="col">
                                                  Ends after:
                                              </div>
                                              <div className="col-auto">
                                                  <strong>3 days</strong>
                                              </div>
                                          </div>
                                      </div>
                                      {
                                          item?.meta_data?.map((item, index) => {
                                              if ( item.key === 'status_work_machine' ) {
                                                  if ( item.value === '1'  ) {
                                                      return (
                                                          <div className="Timer">
                                                              <div className="row">
                                                                  <div className="col">
                                                                      <span className="text-3">Activates after:</span>
                                                                  </div>
                                                                  <div className="col-auto">
                                                                      <div className="text-1">
                                                                          {/*<TimerBlock timeStart={T} />*/}
                                                                          {/*3d : 21h : 43m : 12s*/}
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      )
                                                  }
                                                  if ( item.value === '3'  ) {
                                                      return (
                                                          <div className="Timer">
                                                              <span className="text-3">Deactivated has expired</span>
                                                          </div>
                                                      )
                                                  }

                                              }
                                          })
                                      }
                                  </div>
                              </div>
                          )
                      })

                  ) : ('')
              }

          </IconCurrency>
      </div>
  )
}
export default WrapOrderList;