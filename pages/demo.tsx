import React from 'react';
import {NextPage} from 'next';
import {State} from '../store/authReducer';
import {useSelector, useDispatch} from 'react-redux'

// you can also use `connect()` instead of hooks
const Page: NextPage = () => {
    const {userId} = useSelector<State, State>(state => state);
    const dispatch = useDispatch()
    return (
        <>
        <div>{userId}</div>
    	<button onClick={() => dispatch({type: 'TICK', payload: 'hello world'})}>Click me</button>
    	</>
    );

};

Page.getInitialProps = async ({store, pathname, req, res}) => {
    console.log('2. Page.getInitialProps uses the store to dispatch things');

    return {}
};

export default Page;

