import Headshot from './assets/alexheadshot2022.jpg'

function ProfilePhoto(){

    return (
       <img src={Headshot} style={{height:"40px", width:"40px", borderRadius:"50%"}}/>
       
    )
}

export default ProfilePhoto