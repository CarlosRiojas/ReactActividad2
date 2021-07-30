import { useState } from "react"

const AddUserModal = ({onAdd}) => {

        const [nombre,setNombre]=useState('')
        const [apellido,setApellido]=useState('')
        const [email,setEmail]=useState('')
        const [imagen,setImagen]=useState('')
        const [activo,setActivo]=useState(false)
        
        //const UserImageRef = useRef()
        
        const onSubmit=(e)=> {
            e.preventDefault()
            onAdd({nombre,apellido,email,imagen,activo})
            setNombre('')
            setApellido('')
            setEmail(' ')
            setImagen('')
            setActivo(false)
        }

    return (
        <div>
             <form className= 'addModal' onSubmit={onSubmit}>
                 <div className='formCtrl'>
                    <label>Nombre</label>
                    <input type = 'text' placeholder ='Agrega nombre' value= {nombre}
                     onChange={(e)=> setNombre(e.target.value)}></input>

                 </div>

                 <div className='formCtrl'>
                    <label>Apellido</label>
                    <input type = 'text' placeholder ='Agrega apellidos' value= {apellido}
                     onChange={(e)=> setApellido(e.target.value)}></input>

                 </div>
                 

                 <div className='formCtrl'>
                    <label>Email</label>
                    <input type = 'text' placeholder ='Agrega email' 
                    value= {email}
                     onChange={(e)=> setEmail(e.target.value)}></input>

                 </div>
                 <div className='formCtrl'>
                    <label>Imagen</label>
                    <input type = 'file' 
                     value={imagen}
                     onChange={(e)=> setImagen(e.target.value)} alt='image'></input>

                 </div>

                 <div className='formCtrl formCtrl-check'>
                    <label>Activo</label>
                    <input type = 'checkbox'  value= {activo}
                    checked = {activo}
                     onChange={(e)=> setActivo(e.currentTarget.checked)}></input>

                 </div>



                <input type='submit' value='Save user' className='btn-block'/>
            </form>
        </div>
    )
}

export default AddUserModal