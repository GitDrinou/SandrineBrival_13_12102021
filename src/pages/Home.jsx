import '../sass/home.scss'
import { useEffect } from 'react'
import { TITLE_PAGE_HOME } from '../utils/constants'
import { homeFeatures } from '../utils/constants'
import HomeCard from '../components/HomeCard'


/**
 * COMPONENT FUNCTION
 * @returns DOM elements for the home page
 */
function Home() {

    // React hook use to display the page title
    useEffect(() => {
        document.title = TITLE_PAGE_HOME
    }, [])

    return (
        <div>
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