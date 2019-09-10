// import micro
import session from 'micro-cookie-session'

export default session({
    name: 'eventjuicer-site',
    keys: ['32441asd','127dfa342'],
    //Cookie Options,
    maxAge: 180 * 24 * 60 * 60 * 1000 // 180 days
})