import { Outlet, Link } from 'react-router-dom'


export default function SearchBarRoute() {
    return (
        <div>
            <nav>
                <ul className=''>
                    <li><Link to='/'>SearchForm</Link></li>
                    <li><Link to='/SearchFormMain'>SearchFormMain</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )


} 