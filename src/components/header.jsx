import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../App'

function Header() {
    const [theme, setTheme] = useContext(ThemeContext)


    function handleChange(e) {
        setTheme(e.target.value)
    }

    return (
        <div className="header">

            <Link to={'/'} className="logo">M.J DESIGNS</Link>
            <Link to={'/'} className="link">HOME</Link>
            <Link to={'/services'} className="link">SERVICES</Link>
            <div className='toggle'>
                <select onChange={handleChange} className='toggle' >
                    <option >light</option>
                    <option >dark</option>
                    <option >chaos😅</option>
                </select>
            </div>

        </div>
    )
}
export default Header