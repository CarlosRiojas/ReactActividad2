import Button from "./Button"




 const Header = ({onAdd,showAdd,usrLength}) => {
    
    
    

   

    return (
        <header className='HeaderCont'>
          <h1>User Manager({usrLength})</h1>
        <Button 
            text={showAdd ? 'Close': 'Add'}
            onClick={onAdd}/>
          
        </header>
    )
}
export default Header