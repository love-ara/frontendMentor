import facebook from './../../images/icon-facebook.svg'
import twitter from './../../images/icon-twitter.svg'
import pinterest from './../../images/icon-pinterest.svg'

const Share = () => {
        return (
            <>
            <div style={{display: "none"}}>
                <p>SHARE</p>
                <img src={facebook} alt="facebook"/>
                <img src={twitter} alt="twitter"/>
                <img src={pinterest} alt="pinterest"/>
            </div>
         </>
        )
}
export default Share