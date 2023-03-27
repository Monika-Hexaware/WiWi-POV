import store from 'store/store'
import { menuAdded, menuDeleted, menuUpdated } from '../menuSlice'

describe('testing menu redux store reducers', () => {
    test('add menu to store test', () => {
        let state = store.getState().menu
        expect(state.entities).toHaveLength(0)
        const initialInput = {
            id: 1,
            fooditem: 'fooditem',
            description: 'description',
            toppings: 'toppings',
            price: 56,
        }
        store.dispatch(menuAdded(initialInput))
        state = store.getState().menu
        expect(state.entities).toHaveLength(1)
    })

    test('update menu from store should change the length of the entities array in redux store', () => {
        const initialInput = {
            id: 2,
            fooditem: 'fooditem',
            description: 'description',
            toppings: 'toppings',
            price: 54,
        }
        store.dispatch(menuAdded(initialInput))
        let state = store.getState().menu
        expect(state.entities).toHaveLength(2)

        const updatedInput = {
            id: initialInput.id,
            fooditem: 'fooditem1',
            description: 'description1',
            toppings: 'toppings1',
            price: 50,
        }
        store.dispatch(menuUpdated(updatedInput))
        state = store.getState().menu
        let changedMenu = state.entities.find((p) => p.id === 2)
        expect(changedMenu).toStrictEqual(updatedInput)
    })

    test('delete menu from store should reduce the length of the entities array in redux store', () => {
        const initialInput = {
            id: 3,
            fooditem: 'fooditem',
            description: 'description',
            toppings: 'toppings',
            price: 49,
        }
        store.dispatch(menuAdded(initialInput))
        let state = store.getState().menu
        expect(state.entities).toHaveLength(3)

        store.dispatch(
            menuDeleted({
                id: initialInput.id,
            })
        )
        state = store.getState().menu
        expect(state.entities).toHaveLength(2)
    })
})
