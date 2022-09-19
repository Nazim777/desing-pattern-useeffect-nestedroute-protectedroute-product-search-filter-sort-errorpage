import React,{useState,useEffect} from 'react'
const url = 'https://jsonplaceholder.typicode.com/users'

const CacheData = {}

const SingleUser = ()=>{

  const [isLoading,setIsLoadin] = useState(true)
  const [singleUser,setSingleUser] = useState({})
  const [id,setId] = useState(1)
  const maxId = 10;
  useEffect(()=>{
    if(CacheData[`user-${id}`]){
      setSingleUser(CacheData[`user-${id}`])
      return
    }
    let isCancelled = false;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((resp)=>resp.json()).then((data)=>{
      if(!isCancelled){
        setSingleUser({...data})
        setIsLoadin(false)
        CacheData[`user-${id}`] = data

      }

    })

    return(()=>{
      isCancelled= true
    })
  },[id])
  if(isLoading){
    return<h1>Loading...</h1>
  }
  return(
    <div>
      <h1>Single User</h1>
      <div>name: {singleUser.name}</div>
      <div>email: {singleUser.email}</div>
      <div>phone: {singleUser.phone}</div>
      <div>
        <button disabled={id===1} onClick={()=> setId(id-1)}>previous user</button>
        <button disabled={id===maxId} onClick={()=> setId(id+1)}>next user</button>
      </div>
    </div>
  )
}



const Page2 = () => {
const [user,setUser] = useState([])
const [isLoading,setIsLoadin] = useState(true)
const [isError,setIsError]  = useState(false)
useEffect(()=>{
  let isCancelled = false;
  fetch(url).then((resp)=>resp.json()).then((data)=>{
    if(!isCancelled){
      setUser([...data])
      setIsLoadin(false)
    }
  })

  return(()=>{
    isCancelled = true
  })
},[])

if(isLoading){
  return<h1>Loading...</h1>
}
  return (
    <div>

      <div><h1>All user</h1></div>
      {user&& user.map((item)=><li key={item.id}>{item.name}</li>)}
      <SingleUser/>
     

      
    </div>
  )
}

export default Page2
