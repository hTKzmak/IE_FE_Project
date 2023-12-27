const defaultState = JSON.parse(localStorage.getItem('basket'))?.Basket || [];
const beginState = [];

// {id, title, image, price, count}

const saveBasket = (basket) => {
    localStorage.setItem('basket', JSON.stringify({ Basket: basket }));
};

const ADD_NEW_ITEM = 'ADD_NEW_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'
const CHANGE_COUNT = 'CHANGE_COUNT'
const ORDER_ITEMS = 'ORDER_ITEMS'

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


export const cartReducer = (state = defaultState, action) => {

    switch (action.type) {
        case ADD_NEW_ITEM:
            const { id, title, price, discont_price, image, count } = action.payload;

            if (state.find((el) => el.id === id)) {
                return changeCountItem(state, id, count);
            } else {
                const newItem = {
                    id,
                    title,
                    price,
                    discont_price,
                    image,
                    count,
                };
                const updatedBasket = [...state, newItem];
                saveBasket(updatedBasket);
                return updatedBasket;
            }

        case CHANGE_COUNT:
            const newBasket = changeCountItem(state, action.payload.id, action.payload.count);
            saveBasket(newBasket);
            return newBasket;

        case DELETE_ITEM:
            let deleteItem = state.filter(elem => elem.id !== action.payload) 
            saveBasket(deleteItem);
            return deleteItem

        case ORDER_ITEMS:
            saveBasket(beginState)
            return beginState

        default:
            return state
    }
}

export const addNewItemAction = (payload) => ({ type: ADD_NEW_ITEM, payload })
export const deleteItemAction = (payload) => ({ type: DELETE_ITEM, payload })
export const changeCountAction = (payload) => ({ type: CHANGE_COUNT, payload })
export const orderItemsAction = () => ({ type: ORDER_ITEMS })

export const incrAction = (payload) => ({ type: INCR, payload })
export const decrAction = (payload) => ({ type: DECR, payload })