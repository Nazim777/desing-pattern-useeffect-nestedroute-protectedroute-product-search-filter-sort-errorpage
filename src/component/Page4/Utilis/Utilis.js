const Users = [

    {
        name:'Rahim Uddin',
        email:'rahim@gmail.com',
        role:'admin'
    },

]


export let UserRole = {}
Users.forEach((item)=>{
    if(!UserRole['role']){
        UserRole = {role:item.role}

    }
})


 export const AllProducts= [
    {
        id:1,
        name:'apple',
        price:20,
        

    },
    {
        id:2,
        name:'grape',
        price:30,
        

    },
    {
        id:3,
        name:'orange',
        price:40,
        

    },
    {
        id:4,
        name:'jack fruit',
        price:10,
       

    },
   
]









