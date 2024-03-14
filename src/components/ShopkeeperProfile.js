import React from 'react'
import Dashboard from '../component/Dashboard'
import ShopkeeperDashboard from '../component/ShopkeeperDashboard'
import ShopkeeperTable from '../component/ShopkeeperTable'
import ShopkeeperReview from '../component/ShopkeeperReview'

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
