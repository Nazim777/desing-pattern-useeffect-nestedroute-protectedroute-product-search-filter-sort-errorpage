import React,{useState, useEffect} from 'react'
import axios from 'axios'
const Page3 = () => {
    const [user,setUser] = useState([])
    const [id,setId] = useState(0)
    const [post,setPost] = useState({
        title:'',
        body:''
    })
    

    const [updatepost,setUpdatePost] =useState({
        title:'',
        body:''

    })
    const [update,setUpdate] = useState(false)
    const [postId,setPostId] = useState(null)
    useEffect(()=>{
        

        let isCancelled = false
fetch('https://jsonplaceholder.typicode.com/posts').then((resp)=>resp.json()).then((data)=>{
if(!isCancelled){
    setUser([...data])
}
})
return(()=>{
    isCancelled = true
})
    },[])



    // delete data
    useEffect(()=>{
        // async function deletePost() {
        //     await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            
        // }
    
        // deletePost();
        const data = user.filter((item)=>item.id!==id)
        setUser([...data])
        

    },[id])

    const handleChange= (e)=>{
        setPost({
            ...post,
            [e.target.name]:e.target.value
        })

    }


    // create data
    const handleClick=(e)=>{
        e.preventDefault()
        const submitPost = {
            userId : user.length+1,
            id:user.length+1,
            title:post.title,
            body:post.body
        }
        // axios.post('https://jsonplaceholder.typicode.com/posts',submitPost).then((response)=>{
        //     console.log(response)
        // })
        setUser([...user,{...submitPost}])

    }
    const updatePost =(postid)=>{
        setUpdate(true)
        setPostId(postid)

    }
    

   // console.log(update)

    const handleChange2=(e)=>{
        setUpdatePost({
            ...updatepost,
            [e.target.name]:e.target.value

        })
    }
//console.log(updatepost)


// update data
const hanldeSubmit2 =()=>{
    setUpdate(false)
   let updatedData = user.find((item)=>item.id===postId)
     
   

   Object.keys(updatedData).forEach((key,index)=>{
    updatedData['title'] = updatepost.title
    updatedData['body'] = updatepost.body
    updatedData['id'] =updatedData['id']
    updatedData['userId'] = updatedData['userId']
   })
//    console.log(updatedData)
if(user){
     user.filter((item)=>{
        if(item.id===updatedData.id){
            item=updatedData
        }

    })
   
}
//setUser([...user,updatedData])

     
    

}

// object update
// const obj = {
//     country: 'Chile',
//     city: 'Santiago',
//     address: 'Example',
//   };
  
//  Object.keys(obj).forEach((key, index) => {
// obj['city'] = 'Dhaka'
//   });
// console.log(obj)

  return (
    <div>
        {user&& user.map((item)=><li key={item.id}>
            <div><h1>postId: {item.id}</h1></div>
            <div>{item.title}</div>
            <div>{item.body}</div>


            {update? <div>
           <form action="" onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="title">title</label> <br />
           <input id='title' type="textarea" name='title' value={updatepost.title} onChange={handleChange2} placeholder='title' /> <br />
           <label htmlFor="body">body</label> <br />
           <input type="textarea" id='body' name='body' value={updatepost.body} onChange={handleChange2} placeholder='body' />
           <div>
            <button type='submit' onClick={hanldeSubmit2} >submit</button>
           </div>
           </form>
        </div>:''}





            <div>
                <button onClick={()=>updatePost(item.id)}>update</button>
                <button onClick={()=>setId(item.id)}>delete</button>
            </div>
        </li>)}

        <div><h1>Create Post</h1></div>


        <div>
           <form action="">
            <label htmlFor="title">title</label> <br />
           <input id='title' type="textarea" name='title' value={post.title} onChange={handleChange} placeholder='title' /> <br />
           <label htmlFor="body">body</label> <br />
           <input type="textarea" id='body' name='body' value={post.body} onChange={handleChange} placeholder='body' />
           <div>
            <button type='submit' onClick={handleClick}>submit</button>
           </div>
           </form>
        </div>

        

      
    </div>
  )
}

export default Page3
