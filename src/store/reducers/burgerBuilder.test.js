import reducer from './burgerBuilder';
import * as actionTypes from '../actions/actionTypes';

describe('burgerBuilder reducer', () => {
    it('should return the inital state', () => {
        expect(reducer(undefined, {})).toEqual({
            ingredients: null,
            totalPrice: 4,
            error: false,
            building: false
        });
    });

    it('should set the ingredients', () => {
        expect(reducer({
            ingredients: null,
            totalPrice: 4,
            error: false,
            building: false
        }, {
            type: actionTypes.SET_INGREDIENTS,
            ingredients: 'some-ingredients'
        })).toEqual({
            ingredients: 'some-ingredients',
            totalPrice: 4,
            error: false,
            building: false
        });
    });
});