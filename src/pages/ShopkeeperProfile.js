import React from 'react'
import Dashboard from '../components/Dashboard'
import ShopkeeperDashboard from '../components/ShopkeeperDashboard'
import ShopkeeperTable from '../components/ShopkeeperTable'
import ShopkeeperReview from '../components/ShopkeeperReview'

const ShopkeeperProfile = () => {
  return (
    <div >
    <div className='flex'> 
    <div><Dashboard/></div>
    <div><ShopkeeperDashboard/></div>
    </div>
    <div><ShopkeeperTable/></div>
    <div><ShopkeeperReview/></div>
    
     
     
    </div>
  )
}

export default ShopkeeperProfile
