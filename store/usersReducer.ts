import { HYDRATE } from 'next-redux-wrapper'
import { AnyAction } from 'redux'

// create your reducer
export interface State {
	token: string,
	user: object
}

const InitialState: State = { 
	token: '',
	user: {},
}

const usersReducer = (state: State = InitialState, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            // Attention! This will overwrite client state! Real apps should use proper reconciliation.
            return {...state, ...action.payload};
        case 'AUTH':
            return {
            	...state, 
            	token: action.payload.token, 
            	user: { 
            		...action.payload.user 
            	}
            };
        default:
            return state;
    }
};

export default usersReducer
