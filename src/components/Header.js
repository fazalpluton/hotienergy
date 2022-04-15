import { useWeb3React } from "@web3-react/core";
import { connectWallet } from "../utils/connectWallet";
import Metamask from '../assets/images/metamask.png'

function Header(props) {

    const {
        active,
        activate,
    } = useWeb3React();
    
    return (
    <>
    <div className="header">
        <div className="inner">
            <div className="address-section">
                <span>0x3b9bA781797b57872687Ce5d5219A1A4Bc0e85ea</span>
                <img src={Metamask}/>
            </div>
            <button className="head-btn">Connect Wallet</button>
        </div>
    </div>
    </>
    );
}

export default Header;
