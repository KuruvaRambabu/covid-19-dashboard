import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const TotalCasesMainContainer = styled.div`
   ${tw` w-full  flex-wrap md:flex md:justify-between`}
`

export const CaseContainer = styled.div`
background-image: linear-gradient(-230deg,  #001a33,#000d33,#b3d9ff);
   ${tw`w-full font-bold font-serif md:w-1/2 lg:w-1/4 h-20 flex flex-col justify-center items-center`}
`

export const CaseType = styled.p`

   ${tw``}
`

export const CasesNumber = styled.p`
   ${tw`text-xl font-bold`}
`

// export const ConfirmedCasesContainer = styled.div`
//     ${tw `w-40 bg-red-500 h-20  flex flex-col justify-center items-center`}
// `
//linear-gradient( #1bace2 34.48%,#00004d 30%, #00e2ed 100%);
// export const ConfirmedName = styled.p`
//     ${tw``}
// `

// export const ConfirmedNumber = styled.p`
//     ${tw`text-xl font-bold`}
// `

// export const ActiveCasesContainer = styled.div`
//     ${tw `w-40 bg-orange-500 h-20  flex flex-col justify-center items-center`}
// `

// export const ActiveName = styled.p`
//     ${tw``}
// `

// export const ActiveCasesNumber = styled.p`
//     ${tw`text-xl font-bold`}
// `

// export const RecoveredCasesContainer = styled.div`
//     ${tw `w-40 bg-green-500 h-20  flex flex-col justify-center items-center`}
// `

// export const RecoveredName = styled.p`
//     ${tw``}
// `

// export const RecoveredCasesNumber = styled.p`
//     ${tw`text-xl font-bold`}
//background:radial-gradient(50% 50%, circle cover, red 0, blue 100%);
// `
