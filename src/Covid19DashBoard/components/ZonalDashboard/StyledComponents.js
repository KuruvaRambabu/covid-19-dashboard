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
    ${tw`shadow-lg mb-4 p-4  `}

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
    ${tw` text-xl 	`}
`
export const ZonalDashboardLeftContainer = styled.div`
    ${tw``}
`
export const CasesAndMapContainer = styled.div`
@media (max-width: 992px) {
    width: 90%;
    display:flex;
    justify-content:center;
    flex-direction:column;
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
    ${tw` shadow-lg mb-4 `} ;
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
background:${props=>((props.index)%2)===0 ? "#1f1f2e" : "#001133"};
        ${tw`h-16 shadow-lg `}
`

export const TableHeader = styled.th`
transition: 0.5s all ease-out;
&:hover {
  background-color: #00264d;
  top: 10px;
  color: white;
}
        ${tw` mt-4 cursor-pointer w-48 text-center `}
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
    ${tw` shadow-lg mb-4 font-serif font-medium`};
    
`

export const DistrictWIseReportName = styled.div`
    ${tw`p-5 text-xl font-bold`}
`



