import React, { useEffect, useState } from 'react'
import Data from "./Data.json"

const Home = () => {
  const [ini, final] = useState("")

  return (
    <>
      <div className='parent'>
        <div>
          <input
            type='text'
            placeholder='search...'
            value={ini}
            onChange={(e) => { final(e.target.value) }}
          />
        </div>
        <div className='map'>
        {
          Data.filter((val) => {
            if (ini == "") {
              return val;
            }else if(val.first_name.toLocaleLowerCase().startsWith(ini.toLocaleLowerCase())){
             return val;
            }
          }).map((ele)=>{
            return(
              <div style={{width:'100%',height:'50%',background:'url()',border:'1px solid green',borderRadius:'10px',backgroundColor:'burlywood'}}>
              <img src={ele.avatar}/>
              <h4>first name:{ele.first_name}</h4>
              <h4>last name:{ele.last_name}</h4>
            </div>
            )
          })
        }
        </div>
      </div>
    </>
  )
}




export default Home