import {
   API_FAILED,
   API_INITIAL,
   API_SUCCESS,
   API_FETCHING
} from '@ib/api-constants'
import Covid19APIService from '../../services/Covid19API/index.fixtures'

import cumulativeStateAndDistictData from '../../fixtures/covid19StateAndDistrictData.json'
import districtAnalysisData from '../../fixtures/districtAnalysisData.json'
import stateDataWithDates from '../../fixtures/stateDataWithDates.json'
import Covid19DataStore from '.'
import covid19StateAndDistrictDataModel from '../models/covid19StateAndDistrictDataModel/covid19StateAndDistrictDataModel'
import stateDailyData from '../../fixtures/stateDailyData.json'
import stateDailyVerticalGraphsData from '../../fixtures/stateDailyGraphsData.json'
import selectedDistrictCovidData from "../../fixtures/selectedDistrictCovidData.json"
import selectedDistrictGraphData from "../../fixtures/selectedDistrictGraphData.json"
import selectedDistrictDailyData from "../../fixtures/selectedDistrictDailyData.json"
import selectedDistrictDailyGraphData from "../../fixtures/selectedDistrictDailyGraphData.json"



describe('Test for covid19 data store', () => {
   let covid19DataStore
   let covid19APIService
   beforeEach(() => {
      covid19APIService = new Covid19APIService()
      covid19DataStore = new Covid19DataStore(covid19APIService)
   })

   it('it sholud test the store initialisation of covid19 data store', () => {
      expect(covid19DataStore.covid19Data).toStrictEqual([])
      expect(covid19DataStore.getCovid19DataAPIStatus).toBe(API_INITIAL)
      expect(covid19DataStore.getCovid19DataAPIError).toBe(null)
      expect(covid19DataStore.districtAnalysisData).toStrictEqual([])
      expect(covid19DataStore.sortByCase).toBe('')
      expect(covid19DataStore.totalRecoveredCases).toBe(0)
      expect(covid19DataStore.totalDeathCases).toBe(0)
      expect(covid19DataStore.totalConfirmedCases).toBe(0)
      expect(covid19DataStore.totalActiveCases).toBe(0)
      expect(covid19DataStore.getDistrictWiseCaseAnalysisDataAPIStatus).toBe(
         API_INITIAL
      )
      expect(covid19DataStore.getDistrictWiseCaseAnalysisDataAPIError).toBe(
         null
      )
      expect(covid19DataStore.stateCumulativeReportData).toStrictEqual([])
      expect(covid19DataStore.getStateCumulativeReportDataAPIStatus).toBe(
         API_INITIAL
      )
   })

   it('should test covid 19 data fetching state', () => {
      const mockLoadingPromise = new Promise(function (resolve, reject) { })
      const mockcovid19DataAPI = jest.fn()
      mockcovid19DataAPI.mockReturnValue(mockLoadingPromise)
      covid19APIService.Covid19DataAPI = mockcovid19DataAPI

      covid19DataStore.getCovid19Data()
      expect(covid19DataStore.getCovid19DataAPIStatus).toBe(API_FETCHING)
   })
   it('should test district analysis data fetching state', () => {
      const mockLoadingPromise = new Promise(function (resolve, reject) { })
      const mockDistrictAnalysisDataAPI = jest.fn()
      mockDistrictAnalysisDataAPI.mockReturnValue(mockLoadingPromise)
      covid19APIService.districtAnalysisData = mockDistrictAnalysisDataAPI

      covid19DataStore.getDistrictWiseCaseAnalysisData()
      expect(covid19DataStore.getDistrictWiseCaseAnalysisDataAPIStatus).toBe(
         API_FETCHING
      )
   })

   it('sholud test covid19data succes state', async () => {
      const mockSuccessPromise = new Promise(function (resolve, reject) {
         resolve(cumulativeStateAndDistictData)
      })

      const covidDataAPI = jest.fn()

      covidDataAPI.mockReturnValue(mockSuccessPromise)
      covid19APIService.Covid19DataAPI = covidDataAPI

      await covid19DataStore.getCovid19Data()
      expect(covid19DataStore.getCovid19DataAPIStatus).toBe(API_SUCCESS)
   })

   it('should test districtwise data analysis success state', async () => {
      const mockSuccessPromise = new Promise(function (resolve, reject) {
         resolve(districtAnalysisData)
      })

      const districtAnalysisDataAPI = jest.fn()
      districtAnalysisDataAPI.mockReturnValue(mockSuccessPromise)
      covid19APIService.districtAnalysisData = districtAnalysisDataAPI

      await covid19DataStore.getDistrictWiseCaseAnalysisData()
      expect(covid19DataStore.getDistrictWiseCaseAnalysisDataAPIStatus).toBe(
         API_SUCCESS
      )
   })

   it('should test the cumulative data failure state', async () => {
      const mockFailurePromise = new Promise(function (resolve, reject) {
         reject(new Error('error'))
      })

      const covidDataAPI = jest.fn()
      covidDataAPI.mockReturnValue(mockFailurePromise)
      covid19APIService.Covid19DataAPI = covidDataAPI

      await covid19DataStore.getCovid19Data()
      expect(covid19DataStore.getCovid19DataAPIStatus).toBe(API_FAILED)
      expect(covid19DataStore.getCovid19DataAPIError).toBe('error')
   })

   it('should test disrtictwise data analysis failure state', async () => {
      const mockFailurePromise = new Promise(function (resolve, reject) {
         reject(new Error('error'))
      })

      const districtAnalysisDataAPI = jest.fn()
      districtAnalysisDataAPI.mockReturnValue(mockFailurePromise)
      covid19APIService.districtAnalysisData = districtAnalysisDataAPI

      await covid19DataStore.getDistrictWiseCaseAnalysisData()
      expect(covid19DataStore.getDistrictWiseCaseAnalysisDataAPIStatus).toBe(
         API_FAILED
      )
      expect(covid19DataStore.getDistrictWiseCaseAnalysisDataAPIError).toBe(
         'error'
      )
   })

   it('should test the sorted sortBySelectedCase type', () => {
      covid19DataStore.sortBySelectedCase('totalConfirmed')
      expect(covid19DataStore.sortByCase).toBe('totalConfirmed')

      covid19DataStore.sortBySelectedCase('totalActive')
      expect(covid19DataStore.sortByCase).toBe('totalActive')

      covid19DataStore.sortBySelectedCase('totalRecovered')
      expect(covid19DataStore.sortByCase).toBe('totalRecovered')
      covid19DataStore.sortBySelectedCase('totalDeaths')
      expect(covid19DataStore.sortByCase).toBe('totalDeaths')
   })
   it('should test the barChart data', () => {
      const data = [
         { totalConfirmed: 90 },
         { totalConfirmed: 60 },
         { totalConfirmed: 180 },
         { totalConfirmed: 200 },
         { totalConfirmed: 10 }
      ]
      const sortedData = [
         { totalConfirmed: 200 },
         { totalConfirmed: 180 },
         { totalConfirmed: 90 },
         { totalConfirmed: 60 },
         { totalConfirmed: 10 }
      ]
      const type = ""
      covid19DataStore.covid19Data = data
      expect(covid19DataStore.barChartData).toStrictEqual(sortedData)
   })



   it('should test the total districts in a table format by sorted order', () => {
      const initailData = [
         {
            totalActive: 20,
            totalRecovered: 30,
            totalConfirmed: 90,
            totalDeaths: 0,
            districtName: 'Kadapa',
            districtId: 'kdp'
         },
         {
            totalActive: 30,
            totalRecovered: 0,
            totalConfirmed: 30,
            totalDeaths: 1,
            districtName: 'Kurnool',
            districtId: 'knl'
         },
         {
            totalActive: 0,
            totalRecovered: 0,
            totalConfirmed: 180,
            totalDeaths: 0,
            districtName: 'Nellore',
            districtId: 'nlr'
         }
      ]

      const confirmedOutput = [
         {
            totalActive: 0,
            totalRecovered: 0,
            totalConfirmed: 180,
            totalDeaths: 0,
            districtName: 'Nellore',
            districtId: 'nlr'
         },
         {
            totalActive: 20,
            totalRecovered: 30,
            totalConfirmed: 90,
            totalDeaths: 0,
            districtName: 'Kadapa',
            districtId: 'kdp'
         },
         {
            totalActive: 30,
            totalRecovered: 0,
            totalConfirmed: 30,
            totalDeaths: 1,
            districtName: 'Kurnool',
            districtId: 'knl'
         }
      ]
      const caseType = 'totalConfirmed'
      covid19DataStore.covid19Data = initailData
      covid19DataStore.sortByCase = caseType
      expect(covid19DataStore.totalDistrictCases).toStrictEqual(confirmedOutput)
   })

   it('should test the totalActive cases in a sorted Way', () => {
      const initailData = [
         { totalActive: 0 },
         { totalActive: 20 },
         { totalActive: 30 }
      ]

      const expectedOutput = [
         { totalActive: 30 },
         { totalActive: 20 },
         { totalActive: 0 }
      ]
      const caseType = 'totalActive'
      covid19DataStore.covid19Data = initailData
      covid19DataStore.sortByCase = caseType
      expect(covid19DataStore.totalDistrictCases).toStrictEqual(expectedOutput)
   })

   it('should test for total Deaths in sorted order', () => {
      const initailData = [
         { totalDeaths: 0 },
         { totalDeaths: 20 },
         { totalDeaths: 30 }
      ]

      const expectedOutput = [
         { totalDeaths: 30 },
         { totalDeaths: 20 },
         { totalDeaths: 0 }
      ]
      const caseType = 'totalDeaths'
      covid19DataStore.covid19Data = initailData
      covid19DataStore.sortByCase = caseType
      expect(covid19DataStore.totalDistrictCases).toStrictEqual(expectedOutput)
   })

   it('should test the totalRecovered casses in a sorted order', () => {
      const initailData = [
         { totalRecovered: 0 },
         { totalRecovered: 20 },
         { totalRecovered: 30 }
      ]

      const expectedOutput = [
         { totalRecovered: 30 },
         { totalRecovered: 20 },
         { totalRecovered: 0 }
      ]
      const caseType = 'totalRecovered'
      covid19DataStore.covid19Data = initailData
      covid19DataStore.sortByCase = caseType
      expect(covid19DataStore.totalDistrictCases).toStrictEqual(expectedOutput)
   })
   it('should test data fetching state of cumulative report data', () => {
      const mockLoadingPromise = new Promise(function (resolve, reject) { })
      const cumulativeReportDataAPI = jest.fn()
      cumulativeReportDataAPI.mockReturnValue(mockLoadingPromise)
      covid19APIService.stateCumulativeReportData = cumulativeReportDataAPI

      covid19DataStore.getStateCumulativeReportData()
      expect(covid19DataStore.getStateCumulativeReportDataAPIStatus).toBe(
         API_FETCHING
      )
   })
   it('should test the success state of cumulative report data', async () => {
      const mockSuccessPromise = new Promise(function (resolve, reject) {
         resolve(stateDataWithDates)
      })

      const cumulativeReportData = jest.fn()
      cumulativeReportData.mockReturnValue(mockSuccessPromise)
      covid19APIService.stateCumulativeReportData = cumulativeReportData

      await covid19DataStore.getStateCumulativeReportData()
      expect(covid19DataStore.getStateCumulativeReportDataAPIStatus).toBe(
         API_SUCCESS
      )
   })

   it('should test the failure state of cumulative report data', async () => {
      const mockFailurePromise = new Promise(function (resolve, reject) {
         reject(new Error('error'))
      })

      const cumulativeReportDataAPI = jest.fn()
      cumulativeReportDataAPI.mockReturnValue(mockFailurePromise)
      covid19APIService.stateCumulativeReportData = cumulativeReportDataAPI

      await covid19DataStore.getStateCumulativeReportData()
      expect(covid19DataStore.getStateCumulativeReportDataAPIStatus).toBe(
         API_FAILED
      )
      expect(covid19DataStore.getStateCumulativeReportDataAPIError).toBe(
         'error'
      )
   })
   it('should test the data fetching state of stateDailyData', () => {
      const mockLoadingPromise = new Promise(function (resolve, reject) { })
      const StateDailyData = jest.fn()
      StateDailyData.mockReturnValue(mockLoadingPromise)
      covid19APIService.stateDailyData = StateDailyData

      covid19DataStore.getStateDailyData()
      expect(covid19DataStore.getStateDailyDataAPIStatus).toBe(API_FETCHING)
   })
   it('should test the data success state of statedailyData', async () => {
      const mockSuccessPromise = new Promise((resolve, reject) => {
         resolve(stateDailyData)
      })

      const stateDailyDataAPI = jest.fn()
      stateDailyDataAPI.mockReturnValue(mockSuccessPromise)
      covid19APIService.stateDailyData = stateDailyDataAPI

      await covid19DataStore.getStateDailyData()
      expect(covid19DataStore.getStateDailyDataAPIStatus).toBe(API_SUCCESS)
   })

   it('should test the failure state of stateDailyData', async () => {
      const mockFailurePromise = new Promise(function (resolve, reject) {
         reject(new Error('error'))
      })

      const stateDailyDataAPI = jest.fn()
      stateDailyDataAPI.mockReturnValue(mockFailurePromise)
      covid19APIService.stateDailyData = stateDailyDataAPI

      await covid19DataStore.getStateDailyData()
      expect(covid19DataStore.getStateDailyDataAPIStatus).toBe(API_FAILED)
   })





   it('should test the failure state of stateDailyVerticalGraphData', async () => {
      const mockFailurePromise = new Promise(function (resolve, reject) {
         reject(new Error('error'))
      })

      const stateDailyGraphsDataAPI = jest.fn()
      stateDailyGraphsDataAPI.mockReturnValue(mockFailurePromise)
      covid19APIService.stateDailyVerticalGraphsAPI = stateDailyGraphsDataAPI

      await covid19DataStore.getStateDailyVerticalGraphData()
      expect(covid19DataStore.getStateDailyVerticalGraphDataAPIStauts).toBe(
         API_FAILED
      )
   })
   it('should test the state daily graphs data fetching state ', () => {
      const mockLoadingPromise = new Promise(() => { })
      const stateDailyGraphsDataAPI = jest.fn()
      stateDailyGraphsDataAPI.mockReturnValue(mockLoadingPromise)
      covid19APIService.stateDailyVerticalGraphsAPI = stateDailyGraphsDataAPI

      covid19DataStore.getStateDailyVerticalGraphData()
      expect(covid19DataStore.getStateDailyVerticalGraphDataAPIStauts).toBe(
         API_FETCHING
      )
   })
   it('should test the data success state of statedailyVerticalGraph data', async () => {
      const mockSuccessPromise = new Promise((resolve, reject) => {
         resolve(stateDailyVerticalGraphsData)
      })

      const stateDailyGraphsDataAPI = jest.fn()
      stateDailyGraphsDataAPI.mockReturnValue(mockSuccessPromise)
      covid19APIService.stateDailyVerticalGraphsAPI = stateDailyGraphsDataAPI

      await covid19DataStore.getStateDailyVerticalGraphData()
      expect(covid19DataStore.getStateDailyVerticalGraphDataAPIStauts).toBe(
         API_SUCCESS
      )
   })

   it("should test fetching state of selected district data", () => {
      const mockLoadingPromise = new Promise(() => { })
      const selectedDistrictCovidDataAPI = jest.fn()
      selectedDistrictCovidDataAPI.mockReturnValue(mockLoadingPromise)
      covid19APIService.districtCumulativeDataAPI = selectedDistrictCovidDataAPI
      covid19DataStore.getDistrictCumulativeData()
      expect(covid19DataStore.getCovid19DataAPIStatus).toBe(API_FETCHING)
   })

   it("should test the success state of selected district covid19 data ", async () => {
      const mockSuccessPromise = new Promise(resolve => {
         resolve(selectedDistrictCovidData)
      })

      const selectedDistrictCovidDataAPI = jest.fn()
      selectedDistrictCovidDataAPI.mockReturnValue(mockSuccessPromise)
      covid19APIService.districtCumulativeDataAPI = selectedDistrictCovidDataAPI
      await covid19DataStore.getDistrictCumulativeData()
      expect(covid19DataStore.getCovid19DataAPIStatus).toBe(API_SUCCESS)
   })

   it("should test the failure state of selected district covid 19 data", async () => {
      const mockFailurePromise = new Promise((reject, resolve) => {
         reject(new Error("error"))
      })
      const selectedDistrictCovidDataAPI = jest.fn()
      selectedDistrictCovidDataAPI.mockReturnValue(mockFailurePromise)
      covid19APIService.districtCumulativeDataAPI = selectedDistrictCovidDataAPI
      await covid19DataStore.getDistrictCumulativeData()
      expect(covid19DataStore.getCovid19DataAPIStatus).toBe(API_FAILED)
      expect(covid19DataStore.getCovid19DataAPIError).toEqual(expect.any(String))
   })

   it("should test the data fetching state of selected district graph data", () => {
      const mockLoadingPromise = new Promise(() => { })
      const selectedDistrictGraphDataAPI = jest.fn()
      selectedDistrictGraphDataAPI.mockReturnValue(mockLoadingPromise)
      covid19APIService.getDistrictCumulativeGraphDataAPI = selectedDistrictGraphDataAPI
      covid19DataStore.getDistrictCumulativeGraphData()
      expect(covid19DataStore.getStateCumulativeReportDataAPIStatus).toBe(API_FETCHING)
   })

   it("should test the success state of selected district graph data", async () => {
      const mockSuccessPromise = new Promise((resolve, reject) => {
         resolve(selectedDistrictGraphData)
      })
      const selectedDistrictGraphDataAPI = jest.fn()
      selectedDistrictGraphDataAPI.mockReturnValue(mockSuccessPromise)
      covid19APIService.getDistrictCumulativeGraphDataAPI = selectedDistrictGraphDataAPI
      await covid19DataStore.getDistrictCumulativeGraphData()
      expect(covid19DataStore.getStateCumulativeReportDataAPIStatus).toBe(API_SUCCESS)
   })

   it("should test the failure state of selcted district graph data", async () => {
      const mockFailurePromise = new Promise((resolve, reject) => {
         reject(new Error("error"))
      })
      const selectedDistrictGraphDataAPI = jest.fn()
      selectedDistrictGraphDataAPI.mockReturnValue(mockFailurePromise)
      covid19APIService.getDistrictCumulativeGraphDataAPI = selectedDistrictGraphDataAPI
      await covid19DataStore.getDistrictCumulativeGraphData()
      expect(covid19DataStore.getStateCumulativeReportDataAPIStatus).toBe(API_FAILED)
      expect(covid19DataStore.getStateCumulativeReportDataAPIError).toEqual(expect.any(String))
   })

   it("should test the data fetching state of selected district daily data", () => {
      const mockLoadingPromise = new Promise(() => { })
      const selectedDistrictDailyDataAPI = jest.fn()
      selectedDistrictDailyDataAPI.mockReturnValue(mockLoadingPromise)
      covid19APIService.selectedDistrictDailyDataAPI = selectedDistrictDailyDataAPI
      covid19DataStore.getSelectedDistrictDailyData()
      expect(covid19DataStore.getStateDailyDataAPIStatus).toBe(API_FETCHING)
   })

   it("should test the data succes state of selected district daily data", async () => {
      const mockLoadingPromise = new Promise((resolve, reject) => {
         resolve(selectedDistrictDailyData)
      })
      const selectedDistrictDailyDataAPI = jest.fn()
      selectedDistrictDailyDataAPI.mockReturnValue(mockLoadingPromise)
      covid19APIService.selectedDistrictDailyDataAPI = selectedDistrictDailyDataAPI
      await covid19DataStore.getSelectedDistrictDailyData()
      expect(covid19DataStore.getStateDailyDataAPIStatus).toBe(API_SUCCESS)
   })
   it("should test the data failure state of selected district daily data", async () => {
      const mockLoadingPromise = new Promise((resolve, reject) => {
         reject(new Error("error"))
      })
      const selectedDistrictDailyDataAPI = jest.fn()
      selectedDistrictDailyDataAPI.mockReturnValue(mockLoadingPromise)
      covid19APIService.selectedDistrictDailyDataAPI = selectedDistrictDailyDataAPI
      await covid19DataStore.getSelectedDistrictDailyData()
      expect(covid19DataStore.getStateDailyDataAPIStatus).toBe(API_FAILED)
      expect(covid19DataStore.getStateDailyDataAPIError).toEqual(expect.any(String))
   })
   it("should test the data fetching state of selected district daily vertical graph data", () => {
      const mockLoadingPromise = new Promise(() => { })
      const selectedDistrictDailyVerticalGraphDataAPI = jest.fn()
      selectedDistrictDailyVerticalGraphDataAPI.mockReturnValue(mockLoadingPromise)
      covid19APIService.selectedDistrictDailyVerticalGraphAPI = selectedDistrictDailyVerticalGraphDataAPI
      covid19DataStore.getSelectedDistictDailyVerticalGraphsData()
      expect(covid19DataStore.getStateDailyVerticalGraphDataAPIStauts).toBe(API_FETCHING)
   })
   it("should test the data success state of selected district daily vertical graph data", async () => {
      const mockLoadingPromise = new Promise((resolve, reject) => {
         resolve(selectedDistrictDailyGraphData)
      })
      const selectedDistrictDailyVerticalGraphDataAPI = jest.fn()
      selectedDistrictDailyVerticalGraphDataAPI.mockReturnValue(mockLoadingPromise)
      covid19APIService.selectedDistrictDailyVerticalGraphAPI = selectedDistrictDailyVerticalGraphDataAPI
      await covid19DataStore.getSelectedDistictDailyVerticalGraphsData()
      expect(covid19DataStore.getStateDailyVerticalGraphDataAPIStauts).toBe(API_SUCCESS)
   })
   it("should test the data failure state of selected district daily vertical graph data", async () => {
      const mockLoadingPromise = new Promise((resolve, reject) => {
         reject(new Error("error"))
      })
      const selectedDistrictDailyVerticalGraphDataAPI = jest.fn()
      selectedDistrictDailyVerticalGraphDataAPI.mockReturnValue(mockLoadingPromise)
      covid19APIService.selectedDistrictDailyVerticalGraphAPI = selectedDistrictDailyVerticalGraphDataAPI
      
      await covid19DataStore.getSelectedDistictDailyVerticalGraphsData()
      expect(covid19DataStore.getStateDailyVerticalGraphDataAPIStauts).toBe(API_FAILED)
      expect(covid19DataStore.getStateDailyVerticalGraphDataAPIError).toEqual(expect.any(String))
   })

   it("should the onChangeCurrentDate method ", () => {
      covid19DataStore.currentDate = new Date()
      const date ="2020-05-15T15:59:33.729Z"
      covid19DataStore.onChangeCurrentDate(date)
      expect(covid19DataStore.currentDate).toBe(date)
   })

   it("should test the given mandals in descending order by confirmed cases",()=>{
      const data = [
         { totalConfirmed: 90 },
         { totalConfirmed: 60 },
         { totalConfirmed: 180 },
         { totalConfirmed: 200 },
         { totalConfirmed: 10 }
      ]
      const sortedData = [
         { totalConfirmed: 200 },
         { totalConfirmed: 180 },
         { totalConfirmed: 90 },
         { totalConfirmed: 60 },
         { totalConfirmed: 10 }
      ]
      
      covid19DataStore.selectedDistrictDailyData = data
      expect(covid19DataStore.selectedDistrictBarChartData).toStrictEqual(sortedData)
   })
   it("should test the name of the selected type",()=>{
      const name = "Kurnool"
      covid19DataStore.onChangeName(name)
      expect(covid19DataStore.name).toBe(name)
   })

})
