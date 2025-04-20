import loc from '../images/location.png'
import '../index.css'

const Entry = ({img,name,country,gmaps,desc,date}) => {
    return (
        <article className="entry">
            <div>
                <img className="main-image" src={img} alt={name} />
            </div>

            <div className='main-image-container'>
                <div className="location-header">
                    <img className="loc-img" src={loc} alt="map marker icon" />
                    <h2 className='country'>{country}</h2>
                    <a href={gmaps}>View on Google Maps</a>
                </div>
                <br/>
                <h2>{name}</h2>
                <b><p>{date}</p></b>
                <p>{desc}</p>
            </div>
        </article>
    )
}

export default Entry;
