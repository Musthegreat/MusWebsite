import "/src/styles/common.css";

function PrettyBox(props) {

    return(
        <div id="feature1">
            <div id="feature1_A">
                <h4 id="featureTitle">{props.title}</h4>
                <p>{props.body}</p>
            </div>
        </div>
    );
}

export default PrettyBox;

