// const defaultState = JSON.parse(localStorage.getItem('basket'))?.Basket || [];
const defaultState = [];

// {id, title, image, price, count}

const ADD_NEW_ITEM = 'ADD_NEW_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'

const INCR = 'INCR'
const DECR = 'DECR'

function changeCountItem(array, id, count) {
    return array.map(elem => {
        if (elem.id === id) {
            elem.count += count
        }
        return elem
    })
}

// const saveBasket = (basket) => {
//     localStorage.setItem('basket', JSON.stringify({ Basket: basket }));
// };

export const cartReducer = (state = defaultState, action) => {

    switch (action.type) {
        case ADD_NEW_ITEM:

            let { id, title, image, price, discont_price, count } = action.payload

            if (state.find(elem => elem.id === id)) {
                changeCountItem(state, id, count)
            }

            else {
                let new_item = {
                    id,
                    title,
                    image,
                    price,
                    discont_price,
                    count,
                }

                const updatedBasket = [...state, new_item];
                // saveBasket(updatedBasket);
                return updatedBasket;

                // return [...state, new_item]
            }
        case INCR:
            return state.map(elem => {
                if (elem.id === action.payload) {
                    return { ...elem, count: elem.count + 1 }
                }
                // saveBasket(elem);
                return elem
            })
        case DECR:

            const zeroCount = state.findIndex(el => el.id === action.payload)

            if (state[zeroCount].count === 1) {
                return state.slice(0, zeroCount).concat(state.slice(zeroCount + 1))
            }

            return state.map(elem => {
                if (elem.id === action.payload) {
                    return { ...elem, count: elem.count - 1 }
                }
                // saveBasket(elem);
                return elem
            })
        case DELETE_ITEM:
            // saveBasket([]);
            return state.filter(elem => elem.id !== action.payload)
        default:
            return state
    }
}

export const addNewItemAction = (payload) => ({ type: ADD_NEW_ITEM, payload })
export const deleteItemAction = (payload) => ({ type: DELETE_ITEM, payload })

export const incrAction = (payload) => ({ type: INCR, payload })
export const decrAction = (payload) => ({ type: DECR, payload })