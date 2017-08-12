import { getMealsFinished, getMeals } from './action';
import localStorage from '../localStorageMock';

// var localStorageMock = (function() {
//   var store = {};
//   return {
//     getItem: function(key) {
//       return store[key];
//     },
//     setItem: function(key, value) {
//       store[key] = value.toString();
//     },
//     clear: function() {
//       store = {};
//     },
//     removeItem: function(key) {
//       delete store[key];
//     }
//   };
// })();

// Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('getMeals', () => {
    it('Should dispatch getMealsFinished', () => {
        const meals = [];

        global.fetch = jest.fn().mockImplementation(() => {
            Promise.resolve({
                ok: true,
                json() {
                    return meals;
                }
            });
        });
        
        const dispatch = jest.fn();
        return getMeals()(dispatch).then(()=>{
            expect(fetch).toHaveBeenCalledWith('http//localhost:8080/meals');
            expect(dispatch).toHaveBeenCalledWith(getMealsFinished)

        });
    });
});
