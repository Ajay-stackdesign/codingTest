import axios from "axios"

export const register = (firstName, lastName, email, phoneNo, gender, image) => async (dispatch) => {
    console.log(firstName)
    try {
        dispatch({ type: "REGISTER_USER_REQUEST" });

        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const { data } = await axios.post(`/api/v1/register`, { firstName, lastName, email, phoneNo, gender, image }, config);

        dispatch({ type: "REGISTER_USER_SUCCESS", payload: data.user });
    } catch (error) {
        dispatch({
            type: "REGISTER_USER_FAIL",
            payload: error.response.data.message,
        });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: "CLEAR_ERRORS" });
};