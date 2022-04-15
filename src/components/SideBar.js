import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.png'
import Hes from '../assets/images/hes.png'
import Token from '../assets/images/token.png'
import Payment from '../assets/images/payment.png'
import Stake from '../assets/images/stake.png'
import Calculator from '../assets/images/calculator.png'
import News from '../assets/images/news.png'
import Disclaimer from '../assets/images/disclaimer.png'
import Partners from '../assets/images/partners.png'
import Team from '../assets/images/team.png'


function SideBar()
{
    return <>
    <div className="sidebar">
        <div className="logo">
            <img src={Logo}/>
            <h4>User Name</h4>
        </div>
        <div className="sidebar-scroll">
        <ul className="sidebar-ul">
            <li>
                <Link to={"/"}><img src={Hes}/><span>Buy hes</span></Link>
            </li>
            <li>
                <Link to={"/token-overview"}><img src={Token}/><span>Token Overview</span></Link>
            </li>
            <li>
                <Link to={"/coming-payments"}><img src={Payment}/><span>Coming Payments</span></Link>
            </li>
            <li>
                <Link to={"#"}><img src={Stake}/><span>Stake</span></Link>
            </li>
            <li>
                <Link to={"#"}><img src={Calculator}/><span>Calculator</span></Link>
            </li>
            <li>
                <Link to={"#"}><img src={News}/><span>News</span></Link>
            </li>
            <li>
                <Link to={"#"}><img src={Disclaimer}/><span>Disclaimer</span></Link>
            </li>
            <li>
                <Link to={"#"}><img src={Partners}/><span>Partners</span></Link>
            </li>
            <li>
                <Link to={"#"}><img src={Team}/><span>Team</span></Link>
            </li>
        </ul>
        </div>
    </div>
</>
}
export default SideBar;