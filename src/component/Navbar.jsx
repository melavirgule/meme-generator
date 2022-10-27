import trollFace from '../assets/Troll-Face.png'

export default function() {

    return(
        <header className='header'>
            <img className='header--img' src={trollFace} alt="troll face" />
            <h2 className='header--title'>Meme Generator</h2>
            <h4 className='header--project'>React Course - Project 3</h4>
        </header>
    )
}