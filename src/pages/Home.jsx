import '../sass/home.scss'
import Header from '../components/common/Header'
import { homeFeatures } from '../utils/constants'
import HomeCard from '../components/HomeCard'

function Home() {

    return (
        <div>
            <Header />
            <div className="hero">
                <div className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </div>
            </div>
            <div className="features">
                <h2 className="sr-only">Features</h2>
                {
                    homeFeatures && homeFeatures.map((card) => (
                        <HomeCard 
                            key = {card.id}
                            feature = {card.name}
                            title = {card.title}
                            text = {card.text}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home