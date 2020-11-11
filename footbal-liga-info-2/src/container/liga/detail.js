import React,{useState,useEffect} from 'react'

const DetailLiga = ({history,match}) => {

  useEffect(()=>{
    console.log(match.params.name)
  })
  return (
    <div>
      <h1 className='judul mt-5'>FOOTBALL LEAGUES INFO</h1>
      <div className="col col-lg-12 mt-5">
        <button onClick={()=>history.goBack()} class='btn btn-danger mb-4'>Back</button>

        <div className="row">
          <div className="col col-md-12 mb-4">
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

          <div className="col col-md-6 mb-4" onClick={()=>history.push('/liga/partisipasi/'+match.params.id+'/'+match.params.name)}>
            <div className="card card-green">
                <div className="card-body">
                  <div className="d-flex flex-row justify-content-between">
                    <div className='image-left'>
                    <img width={100} src="https://media.gettyimages.com/vectors/vector-soccer-ball-icon-with-german-national-flag-on-white-vector-id1173105925" alt=""/>
                    </div>
                    <h4 className="card-title align-self-center">TEAM PARTISIPASI</h4>
                  </div>

                </div>
            </div>
          </div>
          <div className="col col-md-6 mb-4" onClick={()=>history.push('/liga/klasmen/'+match.params.id+'/'+match.params.name)}>
            <div className="card card-blue">
                <div className="card-body">
                  <div className="d-flex flex-row justify-content-between">
                    <div className='image-left'>
                    <img width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDnw2bw9yH1nahEq0KjZJPxlJjG44OeDj_8A&usqp=CAU" alt=""/>
                    </div>
                    <h4 className="card-title align-self-center">DATA KLASMEN </h4>
                  </div>

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailLiga
