import { useState } from 'react';
import  Header  from './Header';
import UserList from './UserList';
import  AddUserModal  from './AddUserModal';


function App() {
  const [isModalDisplayed,setIsModalDisplayed]=useState(true)
  const [users,setUsers] = useState(
    [
      {
        id:1,
        nombre:'Pepe',
        appelido:'Helvetico',
        email:'bebashelvetica@gimail.com',
        imagen:'',
        activo:true
      }
    ]
  )

//Add user
const addUser = (user) => {
  const id= Math.floor(Math.random()*1000)+1
  const newUser = {id, ...user}
  setUsers([...users,newUser])
}

//DeleteUser
const deleteUser = (id) => {
  setUsers(users.filter((user) => user.id!== id)
  )
}

//ToggleCheck

const ToggleCheck =(id)=> {
  setUsers(users.map((user)=>user.id === id ?
  {...user, activo:!user.activo } : user
  ))
}

  return (
    <div className="MainContainer">
        <Header onAdd={()=>setIsModalDisplayed(!isModalDisplayed)}
            usrLength={users.length}
        />
        {isModalDisplayed && <AddUserModal
        onAdd={addUser}  
        showAdd={isModalDisplayed}/>}
        {users.length > 0? (
        <UserList users={users} onDelete={deleteUser} onToggle={ToggleCheck}/>):
          ('No Users to show'
          )}   
    </div>
  );
}

export default App;
