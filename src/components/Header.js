import logo from '../images/logo.svg';

const Header = ({ searchHandle }) => (<header>
        <img src={logo} alt="Timescale"/>
        <input
            onChange={e => searchHandle(e.target.value.trim())}
            className='search'
            type="text"
            placeholder="Search for a movie"
        />
    </header>
)

export default Header;
