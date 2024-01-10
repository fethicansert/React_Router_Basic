import React from 'react'
import { Link, useNavigate ,Outlet, useSearchParams } from 'react-router-dom';

function Users() {
    //ReturnsSearchParams Obj 
    //sets Filter to Url work like useState rerender the Components
    const [searchParams, setSearchParams] = useSearchParams(); 
    const showActiveUser = searchParams.get('filter') === 'active';
    
    
  return (
    <main>
        <Link to={'1'}>User 1</Link>
        <Link to={'2'}>User 2</Link>
        <Link to={'3'}>User 3</Link>
        <Outlet />
        <button onClick={ () => setSearchParams({ filter:'active'})}>Active User</button>
        <button onClick={ () => setSearchParams({})}>Reset Filter</button>

        {showActiveUser ? <h2>Showing active users</h2> : <h2>Showing all users</h2>}
    </main>
  )
}

export default Users
