import UserRow from "./UserRow"

export const UserList = ({users,onDelete,onToggle}) => {



    return (
        <>
           {console.log(users.length)}
            {
           
            users.map((user)=>(
                <UserRow key={user.id}
                user={user}
                onDelete={onDelete}
                onToggle={onToggle}
    
                />
            ))}
        </>
    )
}



export default UserList