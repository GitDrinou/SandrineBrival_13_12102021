import '../sass/user.scss'
import WorkerIllustration from '../assets/worker.svg'

const TransactionsList = (props) => {

    return (
        <div className="transaction-list">
            <span className="temporary-text">The transactions's list is not available yet. </span>
            <img src={WorkerIllustration} alt="Under construction" className="img-worker" />
        </div>
    ) 
}

export default TransactionsList