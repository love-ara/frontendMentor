import style from './index.module.css';
import drawers from '././../../images/drawers.jpg';
import   avatar     from '././../../images/avatar-michelle.jpg';
import   icon     from '././../../images/icon-share.svg';
import {Link} from "react-router-dom";


const Preview = () => {

    return(
        <>
            <article className={style.container}>

                <figure>
                    <img src={ drawers } alt="drawer" className={style.image}/>

                </figure>
                <div className={style.texts}>
                    <h1>Shift the overall look and feel by<br/> adding these wonderful touches to<br/> furniture in your
                        home<br/>
                    </h1>
                    <p> Ever been in a room and felt like something was missing?<br/>
                        Perhaps it felt slightly bare and uninviting. I’ve got some<br/>
                        simple tips to help you make any room feel complete.</p>

                    <div style={{display:"flex"}}>
                        <figure style={{display: "flex", gap: "10px", marginLeft: "9px"}}>
                            <img src={avatar} alt="avatar" width="23" height="30"
                                 style={{borderRadius: "50px"}} />
                            <figcaption>Michelle Appleton<br/>28 Jun 2020</figcaption>
                        </figure>

                        <Link to='/share'>
                            <img src={icon} alt="share" width="12" height="12"
                                 style={{
                                     marginTop: "35px",
                                     marginLeft: "150px",
                                     borderRadius: "15px",
                                     border: "white solid ",
                                 }}/>
                        </Link>

                    </div>
                </div>


            </article>
        </>
    )


}


export default Preview