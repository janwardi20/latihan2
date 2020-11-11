import React,{useEffect,useState} from 'react'
import axios from 'axios'


const Klasmen = ({history,match}) => {

  const [data,setData]=useState([]);
  const [loding,setLoding]=useState(1);

  const getData = () =>{
      axios.get('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=2020-2021&l='+match.params.id)
      .then((res)=>{
          setData(res.data.table);
          setLoding(0);
       })
  }
  useEffect(()=>{
      getData()
  },[])

  return (
    <div>
      <h1 className='judul mt-5'>FOOTBALL LEAGUES INFO</h1>
      <div className="col col-lg-12 mt-5">
        <button onClick={()=>history.goBack()} class='btn btn-danger mb-4'>Back</button>
        <div className="row">
          <div className="col col-lg-12 mb-4">
            <div className="card card">
                <div className="card-body">
                  <div className="d-flex flex-row justify-content-start">
                    <div className='image-left'>
                    <img width={100} src="/db/ball.jpeg" alt=""/>
                    </div>
                    <h4 className="card-title align-self-center">Klasmen {match.params.name}</h4>
                  </div>

                </div>
            </div>
          </div>

          <div className="col col-lg-12 mb-2">
            <div className="">
                <div className="card-body">
                  <div className="d-flex flex-row align-items-center justify-content-between">
                     <span></span>
                   <div style={{color:"#FFF"}}>
                       <strong style={{marginRight:40}}>P</strong>
                       <strong style={{marginRight:40}}>W</strong>
                       <strong style={{marginRight:40}}>D</strong>
                       <strong style={{marginRight:40}}>L</strong>
                       <strong style={{marginRight:40}}>PTS</strong>
                     </div>
                  </div>
                </div>
            </div>
          </div>
          {
            loding===0 && (

            data.map((a,b)=>(
              <div className="col col-lg-12 mb-2">
                <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-row align-items-center justify-content-between">
                         <strong className="card-title">{b+1}. {a.name}</strong>
                         <div>
                           <strong style={{marginRight:40}}>{a.played}</strong>
                           <strong style={{marginRight:40}}>{a.win}</strong>
                           <strong style={{marginRight:40}}>{a.draw}</strong>
                           <strong style={{marginRight:40}}>{a.loss}</strong>
                           <strong style={{marginRight:40}}>{a.total}</strong>
                         </div>
                      </div>
                    </div>
                </div>
              </div>
            ))

          ) || (
            <div className="col col-lg-6 mb-4">
              <div className="card card">
                  <div className="card-body">
                    <img width={100} src="https://lh3.googleusercontent.com/proxy/nQVeKOmZa9gz0-l6it-LWExsCrO-1g_pvJHKB0Sqd7mLZBEeDCyd4en0gHOffMdHRCYMy1d29SGGwHy0-OOvYhDL-nlvI4uuuN0GHv5lG9CByL8XQw" alt=""/> Loading Resources...
                  </div>
              </div>
            </div>
          )
          }


        </div>
      </div>
    </div>
  )
}

export default Klasmen
