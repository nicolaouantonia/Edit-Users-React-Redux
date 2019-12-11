import { EDIT_USER, GET_USERS, GET_USERS_LOADING } from '../actionTypes/userTypes'
import { UserData } from '../../model/user'
import axios from 'axios'

export const editUser = (data: UserData) => ({
  payload: data,
  type: EDIT_USER,
})

export const getUsers = (data: UserData[]) => ({
  payload: data,
  type: GET_USERS,
})

export const getUsersLoading = () => ({
  type: GET_USERS_LOADING,
})

export function retrieveUsers(dispatch: any): void {
  dispatch(getUsersLoading())
  axios
    .get('../usersMockResposne.json')
    .then( response => {
      dispatch(getUsers(response.data))
    })
    .catch(error => {
      console.log(error)
    })
}
