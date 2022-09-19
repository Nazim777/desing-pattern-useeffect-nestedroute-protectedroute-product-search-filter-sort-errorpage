import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children,user}) => {

if(!user){
    return <Navigate to='/'/>
}
  return (
    <div>
        {children}

      
    </div>
  )
}

export default ProtectedRoute
