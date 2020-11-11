import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Home = ({history}) => {

  const [data,setData] = useState([]);
  const [loding,setLoding]=useState(1);

  const changeLiga=(id,name)=>{
    history.push("liga/detail/"+id+"/"+name)
  }
  const getData = () =>{
    axios.get('/db/liga.json',{
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res)=>{
      setData(res.data.data)
      setLoding(0);
    }) .catch(err => console.log(err));

  }
  useEffect(()=>{
     getData();
    },[])


  return (
    <div>
      <h1 className='judul mt-5'>FOOTBALL LEAGUES INFO</h1>
      <div className="col col-lg-12 mt-5">
        <div className="row">

          {
            loding===0 && (
              data.map((a,b)=>{
                if(a.strSport=='Soccer'){
                  return(<div className="col col-lg-6 mb-4" style={{cursor:"pointer"}} onClick={()=>changeLiga(a.idLeague,a.strLeague)}>
                    <div className="card">
                        <div className="card-body">
                          <div className="d-flex flex-row justify-content-between">
                            <div className='image-left'>
                            <img width={100} src="/db/ball.jpeg" alt=""/>
                            </div>
                            <h4 className="card-title align-self-center">{a.strLeague}</h4>
                          </div>

                        </div>
                    </div>
                  </div>)
                }
              })

            )
          }


        </div>
      </div>
    </div>
  )
}

export default Home
