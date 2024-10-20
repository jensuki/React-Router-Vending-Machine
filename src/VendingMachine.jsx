import { Link } from 'react-router-dom';
import './VendingMachine.css';

const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <h1>Vending Machine</h1>
            <div className="VendingMachine-body">
                <div className="VendingMachine-items">
                    <Link className="Chips" to="/chips">Chips</Link>
                    <Link className="Soda" to="/soda">Soda</Link>
                    <Link className="Candy" to="/candy">Candy</Link>
                    <div className="VendingMachine-select"></div>
                </div>
            </div>
        </div>
    )
}

export default VendingMachine;