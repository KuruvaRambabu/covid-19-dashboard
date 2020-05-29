import styled from "@emotion/styled"
import tw from "tailwind.macro"

export const Covid19DashBoardMainContainer = styled.div`
    background:#001a33;
    
    ${tw`text-white min-h-screen`}
`

export const SignOutBtn = styled.button`
    ${tw`focus:outline-none  border border-gray-500  rounded`}
`

export const SignOutBtnContainer = styled.div`
    ${tw` pt-2 w-full sticky h-12 bg-gray-800 text-right text-white `}
`


export const ZonalAndDistrictWiseContainer = styled.div`
    ${tw`h-12 flex  items-center justify-center md:justify-start `}
`

export const DistrictWiseBtn = styled.button`
background:${props=>props.color ? "gray" : ""};

    ${tw`ml-4 focus:outline-none  h-8 w-56 font-serif rounded shadow-lg `}
`

export const ZonalWiseBtn = styled.button`
background:${props=>props.color ? "gray" : ""};
    ${tw`focus:outline-none h-8 w-40 rounded font-serif shadow-lg `}
`
