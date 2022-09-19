import React,{useState,useEffect} from 'react'

const CacheData = {}

const SingleUser =()=>{

  const [isLoading,setIsloading] = useState(true)
  const [singleUSer,setSingleUser] = useState({})
  const [id,setId] = useState(1)
  const maxId = 10
  useEffect(()=>{
    let isCancelled = false;
    if(CacheData[`user-${id}`]){
      setSingleUser(CacheData[`user-${id}`])
      return
    }
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((resp)=>resp.json()).then((data)=>{
      if(!isCancelled){
        setSingleUser({...data})
        CacheData[`user-${id}`] = data
        setIsloading(false)
       // console.log('data fetch complete')
      }
    })

    return(()=>{
      isCancelled= true
     // console.log('useEffect clean')
    })

  },[id])

  if(isLoading){
    return <h1>Loading...</h1>
  }

  return(
    <div>

      <h1>Single User</h1>
      <div>
     name: {singleUSer?.name} <br />
     email: {singleUSer?.email} <br />
     phone: {singleUSer?.phone}
      </div>
      <button disabled={id===1} onClick={()=>setId(id-1)}>previous user</button>
      <button disabled={id===maxId} onClick={()=>setId(id+1)}>next user</button>
    </div>
  )
}


const Page1 = () => {
  const [isLoading,setIsloading] = useState(true)
  const [isError,setIsError] = useState(false)
  const [user,setUser] =useState([])


    useEffect(()=>{
let isCancelled =false
fetch('https://jsonplaceholder.typicode.com/users').then((resp)=>resp.json()).then((data)=>{
 if(!isCancelled){
  setUser([...data])
  setIsloading(false)

 }
 return(()=>{
  isCancelled= true
 })
})

},[])
  


  if(isLoading){
    return<h1>Loading...</h1>
  }
  if(isError){
    return<h1>Error...</h1>
  }
  return (
    <div>
      {user&&user.map((item)=><li key={item.id}>{item.name}</li>)}
      <SingleUser/>
      
      
      
    </div>
   
  )
}

export default Page1
