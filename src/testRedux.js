import { createStore, applyMiddleware } from 'redux'
import passwordApp from './reducers'
import thunk from 'redux-thunk';
import {
    addPassword,
    removePassword,
    updatePasswordAction,
    addPasswordAction,
    removePasswordAction
} from './actions'

const store = createStore(
    passwordApp, 
    window.STATE_FROM_SERVER,
    applyMiddleware(thunk)
    )

const storeTest = () => {
    console.log(store.getState())

    const unsuscrive = store.subscribe(() => console.log(store.getState()))

    console.log('1')
    store.dispatch(addPassword({id: '1', pass:'asdfasd', name:'adasffds'}))
    console.log('2')
    store.dispatch(addPassword({id: '2', pass:'aaaa', name:'cvxvcx'}))
    console.log('3')
    store.dispatch(addPassword({id: '3', pass:'vvvv', name:'sfwwee'}))
    console.log('4')
    store.dispatch(addPasswordAction("google","hello123"))
    console.log('5')
    store.dispatch(removePassword({id: '2', pass:'vvvv', name:'sfwwee'}))
    console.log('6')
    store.dispatch(updatePasswordAction({id: '1', pass:'aaaaaa', name:'ccccccc'}))
    console.log('7')
    store.dispatch(removePasswordAction('1'))
    console.log('8')
    console.log(store.getState())

    unsuscrive()
}

export default storeTest