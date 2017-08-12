
export const SHOW_SNACK_BAR = 'SHOW_SNACK_BAR';
export const showSnackBar = (message) => ({
    type: SHOW_SNACK_BAR,
    payload: message
})

export const HIDE_SNACK_BAR = 'HIDE_SNACK_BAR';
export const hideSnackBar = () => ({
    type: HIDE_SNACK_BAR
})
