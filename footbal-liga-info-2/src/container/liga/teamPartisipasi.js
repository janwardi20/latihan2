import React,{useState,useEffect} from 'react'
import axios from 'axios';

const TeamPartisipasi = ({history,match}) => {

  const [data,setData]=useState([]);
  const [loding,setLoding]=useState(1);

  const getData = () =>{
      axios.get('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id='+match.params.id)
      .then((res)=>{
          setData(res.data.teams);
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
                    <h4 className="card-title align-self-center">{match.params.name}</h4>
                  </div>

                </div>
            </div>
          </div>

          {
            loding===0 && (
              data.map((a,b)=>(
                <div className="col col-lg-4 mb-4">
                  <div className="card card">
                      <div className="card-body">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                          <div className='image-left-card'>
                          <img width={100} src={a.strTeamLogo} alt=""/>
                          </div>
                          <strong className="card-title align-self-center">{a.strTeam}</strong>
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

export default TeamPartisipasi
