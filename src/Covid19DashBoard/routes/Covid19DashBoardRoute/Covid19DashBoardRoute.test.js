import React from "react"
import {
    render,
    fireEvent,
    waitFor,
    getByLabelText,
    getByRole,
    findAllByText,
    wait
} from "@testing-library/react"
import { Provider } from "mobx-react"
import { createMemoryHistory } from "history"
import strings from "../../i18n/strings"

import Covid19DataStore from "../../stores/Covid19StateStore"
import Covid19APIService from "../../services/Covid19API/index.fixtures"
import Covid19DashBoardRoute from "."
import Covid19DashBoard from "../../components/Covid19DashBoard"
import AuthenticationStore from "../../../Authentication/stores/AuthenticationStore"
import AuthenticationService from "../../../Authentication/services/AuthenticationService/index.fixutes"

import cumulativeStateAndDistictData from '../../fixtures/covid19StateAndDistrictData.json'
import districtAnalysisData from '../../fixtures/districtAnalysisData.json'
import stateDataWithDates from '../../fixtures/stateDataWithDates.json'



describe("Test cases for covi19 dash board route", () => {
    let covid19DataStore
    let covid19APIService
    let authenticationStore;
    let authenticationService
    beforeEach(() => {
        covid19APIService = new Covid19APIService()
        covid19DataStore = new Covid19DataStore(covid19APIService)
        authenticationService = new AuthenticationService()
        authenticationStore = new AuthenticationStore(authenticationService)

    });

    afterEach(() => {
        jest.resetAllMocks()
    });

    // it("should test the sign out button click ", () => {
    //     const mockSignOutBtn = jest.fn()
    //     const { getByRole, debug, getByText } = render(
    //         <Provider authenticationStore={authenticationStore} 
    //covid19DataStore={covid19DataStore} >
    //             <Covid19DashBoardRoute />
    //         </Provider>
    //     )
    //     const clickOnSignOutBtn = getByRole("button", {name:strings.signOutBtnName})
    //     fireEvent.click(clickOnSignOutBtn)
    //     debug()

    // })

    it("should test the data loading state of covi19DashBoard Route ", () => {

        const {
            getByLabelText,
            getByRole,
            findAllByText,
            debug,
            getByText } = render(
                <Provider authenticationStore={authenticationStore} covid19DataStore={covid19DataStore} >
                    <Covid19DashBoardRoute />
                </Provider>
            )
        const mockLoadingPromise = new Promise(() => { })
        const mockCovid19DataLoadingAPI = jest.fn()
        mockCovid19DataLoadingAPI.mockReturnValue(mockLoadingPromise)
        covid19APIService.Covid19DataAPI = mockCovid19DataLoadingAPI
        findAllByText(/Zonal Dashboard/i)
        waitFor(() => {
            getByLabelText("audio-loading")
        })
        findAllByText(/District wise Case Analysis/i)
    })

    it("should test data fetching state of state cumulative graph data", () => {
        const {
            getByLabelText,
            findAllByText,
        } = render(
            <Provider authenticationStore={authenticationStore} covid19DataStore={covid19DataStore} >
                <Covid19DashBoardRoute />
            </Provider>
        )
        const mockLoadingPromise = new Promise(() => { })
        const mockCovid19DataAPI = jest.fn()
        mockCovid19DataAPI.mockReturnValue(mockLoadingPromise)
        covid19APIService.stateCumulativeReportData = mockCovid19DataAPI

        findAllByText(/Zonal Dashboard/i)
        waitFor(() => {
            getByLabelText("audio-loading")
        })
        findAllByText(/District wise Case Analysis/i)
    })

    it("should test for changing the zonal dashboard view to district analysisView", () => {
        const {
            getByLabelText,
            findAllByText,
            debug,
            getByRole
        } = render(
            <Provider authenticationStore={authenticationStore} covid19DataStore={covid19DataStore} >
                <Covid19DashBoardRoute />
            </Provider>
        )
        const districtAnalysisPage = getByRole("button", { name: "District wise Case Analysis" })
        fireEvent.click(districtAnalysisPage)

        const mockLoadingPromise = new Promise(() => { })
        const mockCovid19DataAPI = jest.fn()
        mockCovid19DataAPI.mockReturnValue(mockLoadingPromise)
        covid19APIService.districtAnalysisData = mockCovid19DataAPI
        waitFor(() => {
            getByLabelText("audio-loading")
        })
    })

    it("should test the success state of district wise case analysis ", async () => {
        const {
            findAllByText,
            debug,
            queryByText,
            getByText,
            getByRole
        } = render(
            <Provider authenticationStore={authenticationStore} covid19DataStore={covid19DataStore} >
                <Covid19DashBoardRoute />
            </Provider>
        )

        const districtAnalysisPage = getByRole("button", { name: "District wise Case Analysis" })
        fireEvent.click(districtAnalysisPage)
       
        const mockSuccessPromise = new Promise((resolve) => {
            resolve(districtAnalysisData)
        })

        const mockDistrictAnalysisDataAPI = jest.fn()
        mockDistrictAnalysisDataAPI.mockReturnValue(mockSuccessPromise)
        covid19APIService.districtAnalysisData = mockDistrictAnalysisDataAPI
                                                                                                  
        await waitFor(() => {
            getByText(/CUMULATIVE CONFIRMED CASES - KURNOOL/i)
            getByText(/CUMULATIVE CONFIRMED CASES - PRAKASAM/i)
            getByText(/CUMULATIVE CONFIRMED CASES - KADAPA/i)
            getByText(/CUMULATIVE CONFIRMED CASES - CHITTOOR/i)
        })
    })

    it("should test the failure state district wise case analysis",async()=>{
        const {
            findAllByText,
            debug,
            queryByText,
            getByText,
            getByRole
        } = render(
            <Provider authenticationStore={authenticationStore} covid19DataStore={covid19DataStore} >
                <Covid19DashBoardRoute />
            </Provider>
        )

        const districtAnalysisPage = getByRole("button", { name: "District wise Case Analysis" })
        fireEvent.click(districtAnalysisPage)
       
        const mockFailurePromise = new Promise((reject) => {
            reject(new Error("error"))
        })

        const mockDistrictAnalysisDataAPI = jest.fn()
        mockDistrictAnalysisDataAPI.mockReturnValue(mockFailurePromise)
        covid19APIService.districtAnalysisData = mockDistrictAnalysisDataAPI

        await waitFor(()=>{
            console.log("failure state", covid19DataStore.getDistrictWiseCaseAnalysisDataAPIError)
            console.log("failure state", covid19DataStore.getDistrictWiseCaseAnalysisDataAPIStatus)
        })
    })
})