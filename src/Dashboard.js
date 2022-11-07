import React, { useState } from 'react'
import Data from "./Data.json"
import ReactPaginate from "react-paginate"

const Dashboard = () => {
  const [data, setData] = useState(Data.slice(0, 12))
  const [pageNumber, setPageNumber] = useState(0)
  const userPerPage = 1
  const pagesVisited = pageNumber * userPerPage
  const displayUsers = data
  .slice(pagesVisited, pagesVisited + userPerPage)
  .map((elem) => {
      return (
        <div className='flex'>
        <div className='box'>
          <h4>first name:{elem.first_name}</h4>
          <h4>last name:{elem.last_name}</h4>
          <img src={elem.avatar} id='img' alt='man'  />
        </div>
        </div>
      )
    })

const pageCount= Math.ceil(data.length/userPerPage)
const changePage=({selected})=>{
    setPageNumber(selected)
}

function deleteUser(user){
 const temp=data.filter((elem)=>{
  elem.email !== user && setData("")
    // if(elem.email !==user){
    //   setData("")
    // }
  
  })
setData(temp)
  
}
  return (
    <>
    <div >
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <h2 style={{backgroundColor:'burlywood',color:'black',width:'700px',height:'100px',borderRadius:'10px'}}>Dashboard Page</h2>
    </div>
      {displayUsers}
      <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationBttns"}
      previousLinkClassName={"previousBttns"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={'paginationActive'}
      />
      <button onClick={()=>{deleteUser('email')}} style={{borderRadius:'10px'}}>Delete</button>
      <button style={{borderRadius:'10px',margin:'10px'}}>Create</button>
      <button style={{borderRadius:'10px',margin:'7px'}}>Update</button>
      </div>
    </>
  )
} 

export default Dashboard