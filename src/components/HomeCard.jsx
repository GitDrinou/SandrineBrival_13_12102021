import ChatIconIllustration from '../assets/icon-chat.png'
import MoneyIconIllustration from '../assets/icon-money.png'
import SecurityIconIllustration from '../assets/icon-security.png'

const HomeCard = (props) => {

    let pictureIcon

    switch(props.feature){
        case 'Chat':
            pictureIcon = ChatIconIllustration            
            break
        case 'Money':
            pictureIcon = MoneyIconIllustration
            break
        case 'Security':
            pictureIcon = SecurityIconIllustration
            break
        default:break
    }

    return (
        <div className="feature-item">
            <img src={pictureIcon} alt='Icon' className="feature-icon" />
            <h3 className="feature-item-title">{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default HomeCard