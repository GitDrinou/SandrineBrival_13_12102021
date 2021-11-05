import '../sass/user.scss'
import '../sass/form.scss'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userDataCancelled, userDatasUpdated} from '../features/accountSlice'
import { useSelector } from 'react-redux'
import { fetchUser } from '../features/loginSlice'
import { secureKey } from '../utils/constants'


const AccountsHeaderEdit = (props) => {

    const [firstName, setnewFirstName] = useState('')
    const [lastName, setnewLastName] = useState('')

    const onChangeFirstName = (e) => { setnewFirstName(e.target.value) }
    const onChangeLastName = (e) => { setnewLastName(e.target.value) }

    const canSave = Boolean(firstName) || Boolean(lastName) 

    const dispatch = useDispatch()

    const loginKey = useSelector(state => state.login.token)
    const sessionKey = sessionStorage.getItem(secureKey)

    const keyPass = loginKey ? loginKey : sessionKey


    const handleClickSave = () => {
        sessionStorage.removeItem('isEdited')
        if(canSave) {
            dispatch(userDatasUpdated({ firstName, lastName, keyPass }))
            dispatch(fetchUser(keyPass))
        }        
    }

    const handleClickCancel = () => {
       dispatch(userDataCancelled())
    }


    return (
        <div className="header header-edit">
            <h1>Welcome back</h1>
            <form className="frmEditUser">
                <div className="input-group">
                    <input type="text" placeholder={props.firstName} size="15" onChange={onChangeFirstName} value={firstName} />
                    <input type="text" placeholder={props.lastName} size="15" onChange={onChangeLastName} value={lastName} />
                </div>
                
                <div className="button-group">
                    <button  type="button" className="save-button" onClick={handleClickSave}>Save</button>
                    <button  type="button" className="cancel-button" onClick={handleClickCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default AccountsHeaderEdit