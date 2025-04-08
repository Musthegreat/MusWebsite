import { Outlet, Link } from "react-router-dom";
import "/src/styles/musgroups.css";

function PrettyBox(props) {

    return(
        <div id="feature1">
            <div id="feature1_A">
                <h4 id="featureTitle">{props.title}</h4>
                <p>{props.body}</p>
                
                
                <Link to={props.to} id="linky">Learn more</Link>
                <p/>
            </div>

            <Outlet />
        </div>

       
    );
}

export default PrettyBox;

