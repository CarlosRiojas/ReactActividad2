import { FaTrash,FaCheck,FaTimes } from 'react-icons/fa'

export const UserRow = ({user,onDelete,onToggle}) => {
    return (
        
        <div className="userCard">    
            <h4>
            {' '} <img src={user.imagen} alt="profpic" />{' '}
                {user.nombre}{' '}{user.apellido}{' '}{user.email}{' '}
                {<FaCheck onDoubleClick={()=>onToggle(user.id)}/>}{' '}
               {user.activo=true ? <FaTimes onDoubleClick={()=>onToggle(user.id)}
                    style={{color:'green'}}/>:<FaTimes onDoubleClick={user.activo=false}
                    style={{color:'red'}}/>}{' '}
                <FaTrash style ={{color:'red',cursor: 'pointer'}}
                onClick={()=> onDelete(user.id)}/>{' '}
                
            </h4>
            
        </div>
    )
}

export default UserRow