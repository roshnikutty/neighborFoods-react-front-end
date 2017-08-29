import { getMealsFinished, getMeals } from './action';
import localStorage from '../localStorageMock';

describe('getMeals', () => {
    it('Should dispatch getMealsFinished', () => {
        const meals = [];
        //setting a dummy token for test
        global.localStorage.setItem('token', 'asdf12345')

        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json() {
                    return meals;
                }
            });
        });

        const dispatch = jest.fn();

        return getMeals()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith('http://localhost:8080/meals', {
                "headers": {
                    "Authorization": "JWT asdf12345",
                    "Content-Type": "application/json"
                },
                "method": "GET"
            });
            expect(dispatch).toHaveBeenCalledWith(getMealsFinished(meals))
        });
    });
});
