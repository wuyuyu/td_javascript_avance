/*
 * action types
 */

export const STORE_SCORE = 'STORE_SCORE';

/*
 * action creators
 */

/**
 * Add student to store
 *
 * @param      {String}  {type}  Reducer action
 * @param      {Object}  {game:{name, number, score}}  Score datas
 * @return     {Object}  Redux Store Object
 */

export function storeScore(game) {
    return { type: STORE_SCORE, game };
}