import profilePicture from './assets/mus.png'

function Card(){
    return(
        <div className="card">
                <img id="pfp" src={profilePicture} alt="my handsome face"></img>
                <h2>Mus</h2>
                <p>we live in a society.</p>
        </div>
    );
}

export default Card