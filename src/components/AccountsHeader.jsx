
const AccountsHeader = (props) => {

    return (
        <div className="header">
            <h1>Welcome back<br />{props.firstName} !</h1>
            <button type="button" onClick={props.handleClicked} className="edit-button">Edit Name</button>
        </div>   
    )
}

export default AccountsHeader