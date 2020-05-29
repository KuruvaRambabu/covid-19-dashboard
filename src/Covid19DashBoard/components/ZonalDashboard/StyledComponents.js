import styled from "@emotion/styled"
import tw from "tailwind.macro"

export const ZonalDashboardMainContainer = styled.div`
    ${tw``}
`

export const ZonalDashboardCasesMapAndGraphContainer = styled.div`
display: flex;
flex-direction: row;
@media (max-width: 992px) {
      width:100%;
      flex-direction: column;
      justify-content:center;
      align-items:center;
      
}
@media (min-width: 993px) {
  width:100%;
  justify-content:space-around;
  
}

    ${tw` `}
    
`

export const CumulativeCasesGraphReportMainContainer = styled.div`
background:#13263a;
    ${tw`shadow-lg p-5 `}

`

export const CumulativeReportGraphs = styled.div`
@media (max-width: 992px) {
    width: 90%;
    display:flex;
    justify-content:center;
    flex-direction: column;
    align-items:center;
   
}

@media (min-width: 993px) {
    width: 45%;
}

    ${tw` font-serif font-medium`}
`


export const GraphName = styled.h1`
    ${tw`text-xl  	`}
`
export const ZonalDashboardLeftContainer = styled.div`
    ${tw``}
`
export const CasesAndMapContainer = styled.div`
@media (max-width: 992px) {
    width: 90%;
    display:flex;
    justify-content:center;
    margin:2px;
    
}

@media (min-width: 993px) {
    width: 50%;
  
}
    ${tw`w-full   `}; 
`
export const DistrictWiseTableData = styled.div`
@media (max-width: 992px) {
    width: 90%;
    display:flex;
    justify-content:center;
    margin:2px;
    
}

@media (min-width: 993px) {
    width: 50%;
  
}
    background:#13263a;
    ${tw` p-5 shadow-lg  `} height:300px;
`

export const ZonalDashboardTableFormatDataAndChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 992px) {
        width:100%;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        
  }
  @media (min-width: 993px) {
    width:100%;
    justify-content:space-around;
}

    ${tw` mt-4`}
`
export const TableContainer = styled.table`
    ${tw`w-full  `}
`
export const TableRow = styled.tr`
        ${tw``}
`

export const TableHeader = styled.th`
        ${tw`border cursor-pointer`}
`


export const ConfirmedCasesBarChartContainer = styled.div`
@media (max-width: 992px) {
    width: 90%;
    display:flex;
    justify-content:center;
    flex-direction: column;
    align-items:center;
}

@media (min-width: 993px) {
    width: 45%;
    
}
    background:#13263a;
    ${tw` shadow-lg  font-serif font-medium`};
    
`

export const DistrictWIseReportName = styled.div`
    ${tw`p-5 text-xl font-bold`}
`



