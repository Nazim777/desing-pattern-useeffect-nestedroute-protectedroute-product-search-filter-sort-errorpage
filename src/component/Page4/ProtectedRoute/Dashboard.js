import React from 'react'

const Dashboard = ({user}) => {
   
  return (
    <div>
        <h1>hello this is a dashboard page</h1>
        <h4>hello , {user?.name}</h4>
      
    </div>
  )
}

export default Dashboard
