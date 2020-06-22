import {
   API_FAILED,
   API_FETCHING,
   API_SUCCESS,
   API_INITIAL
} from '@ib/api-constants'

import AuthenticationService from '../../services/AuthenticationService'

import AuthenticationStore from '.'
import getUserSignInRepsonse from '../../fixtures/getUserSignInRepsonse.json'

describe('test for AuthenticationStore', () => {
   let authAPI
   let authStore

   beforeEach(() => {
      authAPI = new AuthenticationService()
      authStore = new AuthenticationStore(authAPI)
   })

   it('should test for initializing all the varaibles', () => {
      expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL)
      expect(authStore.getUserSignInAPIError).toBe(null)
   })

   it('should test for data fetching state', () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()

      const requestObject = {
         username: 'test-user',
         password: 'test-password'
      }

      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockLoadingPromise)
      authAPI.signInAPI = mockSignInAPI
      authStore.userSignIn(requestObject, onSuccess, onFailure)
      expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING)
      expect(onSuccess).not.toBeCalled()
      expect(onFailure).not.toBeCalled()
   })

   it('should test userSignInAPI success state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()

      const requestObject = {
         email: 'test-user',
         password: 'test-password'
      }

      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(getUserSignInRepsonse)
      })

      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockSuccessPromise)
      authAPI.signInAPI = mockSignInAPI

      await authStore.userSignIn(requestObject, onSuccess, onFailure)
      expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS)
      expect(onSuccess).toBeCalled()
   })

   it('should test userSignInAPI failure state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()

      const requestObject = {
         username: 'test-user',
         password: 'test-password'
      }
      const mockFailurePromise = new Promise((resolve, reject) => {
         reject(new Error('error'))
      })

      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockFailurePromise)
      authAPI.signInAPI = mockSignInAPI

      await authStore.userSignIn(requestObject, onSuccess, onFailure)

      expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED)
      expect(authStore.getUserSignInAPIError).toBe('error')
      expect(onFailure).toBeCalled()
   })

   it('should test user sign-out', () => {
      authStore.userSignOut()
      expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL)
      expect(authStore.getUserSignInAPIError).toBe(null)
   })
})
