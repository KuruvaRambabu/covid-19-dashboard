import React from 'react'
import {
   render,
   fireEvent,
   waitFor,
   getByLabelText,
   getByRole,
   findAllByText,
   wait,
   getByTestId
} from '@testing-library/react'
import { Provider } from 'mobx-react'
import { createMemoryHistory } from 'history'
import strings from '../../i18n/strings.json'

import Covid19DataStore from '../../stores/Covid19StateStore'
import Covid19APIService from '../../services/Covid19API/index.fixtures'

import cumulativeStateAndDistictData from '../../fixtures/covid19StateAndDistrictData.json'
import stateDataWithDates from '../../fixtures/stateDataWithDates.json'
import stateDailyData from '../../fixtures/stateDailyData.json'
import stateDailyGraphsData from '../../fixtures/stateDailyGraphsData.json'
import ZonalDashboard from '.'
import { Router } from 'react-router-dom'
import { COVID_19_DASHBOARD_PATH } from '../../../Common/routes/RouteConstants'

describe('test cases for zonal dash board', () => {
   let covid19DataStore
   let covid19APIService

   beforeEach(() => {
      covid19APIService = new Covid19APIService()
      covid19DataStore = new Covid19DataStore(covid19APIService)
   })

   afterEach(() => {
      jest.resetAllMocks()
   })

   it('should test the success state zonal dashboard cumulative covid data ', async () => {
      const mockSuccessPromiseCumulative = new Promise(resolve => {
         resolve(cumulativeStateAndDistictData)
      })
      const mockSuccessPromiseCumulativeGraphData = new Promise(resolve => {
         resolve(stateDataWithDates)
      })

      const mockStateCumulativeCovidDataAPI = jest.fn()
      mockStateCumulativeCovidDataAPI.mockReturnValue(
         mockSuccessPromiseCumulative
      )
      covid19APIService.Covid19DataAPI = mockStateCumulativeCovidDataAPI

      const mockDistrictAnalysisDataAPI = jest.fn()
      mockDistrictAnalysisDataAPI.mockReturnValue(
         mockSuccessPromiseCumulativeGraphData
      )
      covid19APIService.stateCumulativeReportData = mockDistrictAnalysisDataAPI

      const { getAllByText, getByTestId } = render(
         <Provider >
            <ZonalDashboard covid19DataStore={covid19DataStore} />
         </Provider>
      )

      await waitFor(() => {
         getAllByText(/Confirmed/i)
         getAllByText(/Active/i)
         getAllByText(/Recovered/i)
         getAllByText(/Deaths/i)
         getAllByText(/District Wise Report/i)
         getAllByText(/CUMULATIVE CASES REPORT/i)
         expect(getByTestId('confirmedCasesBarChart')).toBeInTheDocument()
         expect(getByTestId('cumulativeCasesGraphReport')).toBeInTheDocument()
         expect(getByTestId('dataInTheTableFormat')).toBeInTheDocument()
      })
   })
   it('should test data fetching state of state cumulative graph data', () => {
      const mockLoadingPromise = new Promise(() => {})
      const mockCovid19DataAPI = jest.fn()
      mockCovid19DataAPI.mockReturnValue(mockLoadingPromise)
      covid19APIService.Covid19DataAPI = mockCovid19DataAPI
      const { getByLabelText, getByText, findAllByText } = render(
            <ZonalDashboard  covid19DataStore={covid19DataStore}/>
      )

      waitFor(() => {
         getByLabelText('audio-loading')
      })
   })

   it('should test the failure state of state data ', async () => {
      const mockFailurePromiseCumulative = new Promise(reject => {
         reject(new Error('error'))
      })
      const mockFailurePromiseCumulativeGraphData = new Promise(reject => {
         reject(new Error('error'))
      })

      const mockStateCumulativeCovidDataAPI = jest.fn()
      mockStateCumulativeCovidDataAPI.mockReturnValue(
         mockFailurePromiseCumulative
      )
      covid19APIService.Covid19DataAPI = mockStateCumulativeCovidDataAPI

      const mockDistrictAnalysisDataAPI = jest.fn()
      mockDistrictAnalysisDataAPI.mockReturnValue(
         mockFailurePromiseCumulativeGraphData
      )
      covid19APIService.stateCumulativeReportData = mockDistrictAnalysisDataAPI

      const { getByText } = render(
         
            <ZonalDashboard  covid19DataStore={covid19DataStore}/>
        
      )

      await waitFor(() => {
         getByText(
            /We're having some trouble completing your request. Please try again/i
         )
         getByText(/Retry/i)
      })
   })

   it('should  test on change cumulative mode to daily mode and also data fetching state', () => {
      const mockLoadingPromise = new Promise(() => {})
      const mockCovid19DataLoadingAPI = jest.fn()
      mockCovid19DataLoadingAPI.mockReturnValue(mockLoadingPromise)
      covid19APIService.stateDailyData = mockCovid19DataLoadingAPI
      const mockSuccessPromiseStateDailyGraphData = new Promise(() => {})

      const mockStateDailyGraphData = jest.fn()
      mockStateDailyGraphData.mockReturnValue(
         mockSuccessPromiseStateDailyGraphData
      )
      covid19APIService.stateDailyVerticalGraphsAPI = mockStateDailyGraphData

      const {
         getByLabelText,

         getByRole
      } = render(
            <ZonalDashboard  covid19DataStore={covid19DataStore}/>
      )
      const dailyModeBtn = getByRole('button', {
         name: 'Daily'
      })
      fireEvent.click(dailyModeBtn)
      waitFor(() => {
         getByLabelText('audio-loading')
      })
   })

   it('should test the success state state daily data', async () => {
      const mockSuccessPromiseDaily = new Promise(resolve => {
         resolve(stateDailyData)
      })

      const mockStateDailyCovidDataAPI = jest.fn()
      mockStateDailyCovidDataAPI.mockReturnValue(mockSuccessPromiseDaily)
      covid19APIService.stateDailyData = mockStateDailyCovidDataAPI

      const mockSuccessPromiseStateDailyGraphData = new Promise(resolve => {
         resolve(stateDailyGraphsData)
      })
      const mockStateDailyGraphData = jest.fn()
      mockStateDailyGraphData.mockReturnValue(
         mockSuccessPromiseStateDailyGraphData
      )
      covid19APIService.stateDailyVerticalGraphsAPI = mockStateDailyGraphData

      const {
         getAllByText,
         getByTestId,
         getAllByTestId,
         debug,
         findAllByTestId,
         getByRole
      } = render(
            <ZonalDashboard covid19DataStore={covid19DataStore} />
      )
      const dailyModeBtn = getByRole('button', {
         name: 'Daily'
      })
      fireEvent.click(dailyModeBtn)

      await waitFor(() => {
         getAllByText(/Confirmed/i)
         getAllByText(/Active/i)
         getAllByText(/Recovered/i)
         getAllByText(/Deaths/i)
         getAllByText(/District Wise Report/i)
         getAllByText(/DAILY CONFIRMED CASES/i)
         expect(getByTestId('confirmedCasesBarChart')).toBeInTheDocument()
         expect(getByTestId('dataInTheTableFormat')).toBeInTheDocument()
         getAllByTestId('dailyCasesBarChartData')
      })
   })

   it('shouuld test on change daily mode to cumulative mode ', async () => {
      const mockSuccessPromiseCumulative = new Promise(resolve => {
         resolve(cumulativeStateAndDistictData)
      })
      const mockSuccessPromiseCumulativeGraphData = new Promise(resolve => {
         resolve(stateDataWithDates)
      })

      const mockStateCumulativeCovidDataAPI = jest.fn()
      mockStateCumulativeCovidDataAPI.mockReturnValue(
         mockSuccessPromiseCumulative
      )
      covid19APIService.Covid19DataAPI = mockStateCumulativeCovidDataAPI

      const mockDistrictAnalysisDataAPI = jest.fn()
      mockDistrictAnalysisDataAPI.mockReturnValue(
         mockSuccessPromiseCumulativeGraphData
      )
      covid19APIService.stateCumulativeReportData = mockDistrictAnalysisDataAPI

      const { getAllByText, getByTestId, getByRole } = render(
            <ZonalDashboard covid19DataStore={covid19DataStore} />
      )
      const dailyModeBtn = getByRole('button', {
         name: 'Daily'
      })
      fireEvent.click(dailyModeBtn)
      const cumulativeModeBtn = getByRole('button', {
         name: 'Cumulative'
      })
      fireEvent.click(cumulativeModeBtn)

      await waitFor(() => {
         getAllByText(/Confirmed/i)
         getAllByText(/Active/i)
         getAllByText(/Recovered/i)
         getAllByText(/Deaths/i)
         getAllByText(/District Wise Report/i)
         getAllByText(/CUMULATIVE CASES REPORT/i)
         expect(getByTestId('confirmedCasesBarChart')).toBeInTheDocument()
         expect(getByTestId('cumulativeCasesGraphReport')).toBeInTheDocument()
         expect(getByTestId('dataInTheTableFormat')).toBeInTheDocument()
      })
   })

   it('should test the failure state of state daily data ', async () => {
      const mockSuccessPromiseDaily = new Promise(reject => {
         reject(new Error('error'))
      })

      const mockStateDailyCovidDataAPI = jest.fn()
      mockStateDailyCovidDataAPI.mockReturnValue(mockSuccessPromiseDaily)
      covid19APIService.stateDailyData = mockStateDailyCovidDataAPI

      const mockSuccessPromiseStateDailyGraphData = new Promise(reject => {
         reject(new Error('error'))
      })
      const mockStateDailyGraphData = jest.fn()
      mockStateDailyGraphData.mockReturnValue(
         mockSuccessPromiseStateDailyGraphData
      )
      covid19APIService.stateDailyVerticalGraphsAPI = mockStateDailyGraphData

      const { getByText, getByRole } = render(
            <ZonalDashboard  covid19DataStore={covid19DataStore}/>
      )
      const dailyModeBtn = getByRole('button', {
         name: 'Daily'
      })
      fireEvent.click(dailyModeBtn)

      await waitFor(() => {
         getByText(
            /We're having some trouble completing your request. Please try again/i
         )
         getByText(/Retry/i)
      })

      const retryBtn = getByRole('button', {
         name: 'Retry'
      })
      fireEvent.click(retryBtn)
   })
})
