export const ROUTE_HOME = '/'
export const ROUTE_PROFILE = '/profile/'
export const ROUTE_LOGIN = '/login'
export const ROUTE_TRANSACTION = '/transaction/:idTransaction'

export const TITLE_PAGE_HOME = 'Argent Bank - Home'
export const TITLE_PAGE_SIGNIN = 'Argent Bank - Sign In'
export const TITLE_PAGE_PROFILE = 'Argent Bank - Profile'


export const LOGIN_ACT = 'user/login'
export const LOGIN_API = 'http://localhost:3001/api/v1/user/login'
export const USER_API = 'http://localhost:3001/api/v1/user/profile'

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

export const fakeAccounts = [
    {   
        id: 1,
        userId: "61547c495e7af3e2b1d25aeb",
        type: "Checking",
        accountId: "x8349",
        amount: "4672.53",
        currency: "USD",
        status: "available"
    },
    {
        id: 2,
        userId: "61547c495e7af3e2b1d25aeb",
        type: "Saving",
        accountId: "x6712",
        amount: "35743.09",
        currency: "USD",
        status: "available"
    },
    {
        id: 3,
        userId: "61547c495e7af3e2b1d25aeb",
        type: "Credit Card",
        accountId: "x8349",
        amount: "552.65",
        currency: "USD",
        status : "current"
    },
    {   
        id: 4,
        userId: "61547c495e7af3e2b1d25aed",
        type: "Checking",
        accountId: "x9438",
        amount: "2082.79",
        currency: "USD",
        status: "available"
    },
    {
        id: 5,
        userId: "61547c495e7af3e2b1d25aed",
        type: "Saving",
        accountId: "x2176",
        amount: "10928.42",
        currency: "USD",
        status: "available"
    },
    {
        id: 6,
        userId: "61547c495e7af3e2b1d25aed",
        type: "Credit Card",
        accountId: "x9438",
        amount: "184.30",
        currency: "USD",
        status: "current"
    },
]