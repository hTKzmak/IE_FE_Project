const defaultState = JSON.parse(localStorage.getItem('Basket')) || [];
const emptyState = [];

// {id, title, price, discont_price, image, count}

const saveBasket = (item) => {
    localStorage.setItem('Basket', JSON.stringify( item ));
};

const ADD_NEW_ITEM = 'ADD_NEW_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'
const CHANGE_COUNT = 'CHANGE_COUNT'
const ORDER_ITEMS = 'ORDER_ITEMS'

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
            }
            else {
                const newItem = {
                    id,
                    title,
                    price,
                    discont_price,
                    image,
                    count,
                };
                const newItemToBasket = [...state, newItem];
                saveBasket(newItemToBasket);
                return newItemToBasket;
            }

        case CHANGE_COUNT:
            const updateCount = changeCountItem(state, action.payload.id, action.payload.count);
            saveBasket(updateCount);
            return updateCount;

        case DELETE_ITEM:
            let deleteItem = state.filter(elem => elem.id !== action.payload)
            saveBasket(deleteItem);
            return deleteItem

        case ORDER_ITEMS:
            saveBasket(emptyState)
            return emptyState

        default:
            return state
    }
}

export const addNewItemAction = (payload) => ({ type: ADD_NEW_ITEM, payload })
export const changeCountAction = (payload) => ({ type: CHANGE_COUNT, payload })
export const deleteItemAction = (payload) => ({ type: DELETE_ITEM, payload })
export const orderItemsAction = () => ({ type: ORDER_ITEMS })