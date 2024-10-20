import { Link } from 'react-router-dom';

const Soda = () => {
    return (
        <div className="Soda">
            <p>Enjoy your candy bar!</p>
            <img src="https://www.pngmart.com/files/22/Snickers-PNG-Isolated-HD-Pictures.png" />
            <Link to="/">Go back</Link>
        </div >
    )
}

export default Soda;