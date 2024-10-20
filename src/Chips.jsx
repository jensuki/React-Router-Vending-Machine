import { Link } from 'react-router-dom';

const Chips = () => {
    return (
        <div className="Chips">
            <p>Enjoy your chips!</p>
            <img src="https://pngimg.com/uploads/potato_chips/potato_chips_PNG4.png" />
            <Link to="/">Go back</Link>
        </div>
    )
}

export default Chips;