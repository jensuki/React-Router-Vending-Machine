import { Link } from 'react-router-dom';

const Soda = () => {
    return (
        <div className="Soda">
            <p>Enjoy your Soda!</p>
            <img src="https://static.vecteezy.com/system/resources/previews/036/573/453/large_2x/a-can-of-coca-cola-drink-isolated-free-png.png" />
            <Link to="/">Go back</Link>
        </div>
    )
}

export default Soda;