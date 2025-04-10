import profilePic from './assets/blue.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} height ="200" alt="profile picture"></img>
            <h2 className="card-title">Kan Mengnuo</h2>
            <p className="card-text">I am my mother's daughter</p>
        </div>
    )
}

export default Card