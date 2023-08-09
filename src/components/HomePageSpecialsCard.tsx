export const SpecialsCard = (props: SpecialsCardProps) => {

    return (
        <div className='card-specials'>
                <div className='card-specials-container' >
                    <img className="card-specials-image" src={props.image} alt={props.text}/>
                    <div className='card-specials-content'>
                        <div className='hStack'>
                            <p className="text-card-title">{props.title}</p>
                            <p className="text-highlight">{props.price}</p>
                        </div>
                        <div className='vStack card-specials-text'>
                            <p>{props.text}</p>
                        </div>
                        <div className='hStack'>
                            <a className='card-specials-delivery' href="">Order a delivery</a>
                            <a href=""><img className='card-specials-icon' src="icons/Basket.svg" alt="icon"/></a>
                        </div>
                    </div>
            </div>
        </div>
    );
};