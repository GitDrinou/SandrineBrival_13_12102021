export const ROUTE_HOME = '/'
export const ROUTE_PROFILE = '/profile'
export const ROUTE_LOGIN = '/login'
export const ROUTE_TRANSACTION = '/transaction'

export const TITLE_PAGE_HOME = 'Argent Bank - Home'
export const TITLE_PAGE_SIGNIN = 'Argent Bank - Sign In'
export const TITLE_PAGE_PROFILE = 'Argent Bank - Profile'
export const TITLE_PAGE_TRANSACTION = 'Argent Bank - Transactions'


export const LOGIN_ACT = 'user/login'
export const LOGIN_API = 'http://localhost:3001/api/v1/user/login'
export const USER_API = 'http://localhost:3001/api/v1/user/profile'
export const ACCOUNT_API = 'http://localhost:3001/api/v1/user/account'
export const TRANSACTION_API = 'http://localhost:3001/api/v1/user/transaction'

export const secureKey = "tokenArgentBank"
export const accountsSession = "accounts"
export const userLogs = "logsAB"

const currentDate = new Date()
export const currentMonth = currentDate.getMonth()+1

/** @constant { array } homeFeatures
 * List of home features (Chat, Money, Security,...). Use it if you want to add a new features.
*/ 
export const homeFeatures = [
        {
            id: 1,
            name: 'Chat',
            title: 'You are our #1 priority',
            text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes'
        },
        {
            id: 2,
            name: 'Money',
            title: 'More savings means higher rates',
            text: ' The more you save with us, the higher your interest rate will be!'
        },
        {
            id: 3,
            name: 'Security',
            title: 'Security you can trust',
            text: 'We use top of the line encryption to make sure your data and money is always safe.'
        } 
]
