import { getMealsFinished, getMeals, getMealsStarted } from './action';
import localStorage from '../localStorageMock';
const API_URI = process.env.REACT_APP_API_URI;

describe('getMeals', () => {
    it('Should dispatch getMealsFinished', () => {
        const meals = [];
        //setting a dummy token for test
        global.localStorage.setItem('token', 'asdf12345')

        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json() {
                    return { meals };
                }
            });
        });

        const dispatch = jest.fn();

        return getMeals()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_URI}/meals`, {
                "headers": {
                    "Authorization": "JWT asdf12345",
                    "Content-Type": "application/json"
                },
                "method": "GET"
            });
            console.log(dispatch.mock.calls)
            expect(dispatch.mock.calls[0][0]).toEqual(getMealsStarted())
            expect(dispatch.mock.calls[1][0]).toEqual(getMealsFinished({meals}))
        });
    });
});
