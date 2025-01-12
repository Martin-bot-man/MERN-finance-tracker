import {useUser} from '@clerk/clerk-react'

export const Dashboard =()=>{
    const{user} = useUser();
    return (<div className="dashboard-container">
         <h1>Welcome{}!Here are you finances:</h1>
    </div>)
}