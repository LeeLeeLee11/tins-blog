import { HYDRATE } from 'next-redux-wrapper'
import { AnyAction } from 'redux'

// create your reducer
export interface State {
	auth: string
}

const InitialState: State = { 
	auth: 'default'
}

const usersReducer = (state: State = InitialState, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            // Attention! This will overwrite client state! Real apps should use proper reconciliation.
            return {...state, ...action.payload};
        case 'TICK':
            return {...state, auth: action.payload};
        default:
            return state;
    }
};

export default usersReducer
