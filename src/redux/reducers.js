import {
    STORE_SCORE
} from './actions'

const initialState = {
    /**
     * Jeu datas [{Object}]
     *
     * @param      {String}  {name}
     * @param      {Number}  {number}
     * @param      {Number}  {score}
     */
    games: []
};

const arrayHasIndex = (array, index) => Array.isArray(array) && array.hasOwnProperty(index);

export default function reducer(state = initialState, action) {
    console.log('reducer', action.type);
    switch (action.type) {

        case STORE_SCORE:
            return { ...state, games: action.game };

        default:
            return state;
    }
}