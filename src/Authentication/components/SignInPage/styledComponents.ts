import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../../themes/Colors'
import { Typo12SteelHKGrotesk } from '../../../StyleGuide/Typos'

export const SignInPageMainContainer = styled.div`
   ${tw`min-h-screen w-full flex justify-center items-center`}
   background:black;
`
export const SignInCardContanier = styled.div`
   @media only screen and (max-width: 767px) {
      height: 500px;
      width: 400px;
   }

   @media only screen and (min-width: 768px) {
      height: 550px;
      width: 400px;
   }

   ${tw`  flex  rounded shadow flex-col justify-center items-center `};
   background: ${colors.white};
`

export const Form = styled.form`
   ${tw`flex flex-col  w-4/5   justify-center `};
`
export const CompanyLogo = styled.img`
   ${tw`w-full h-20`}
`
export const ImageContainer = styled.div`
   ${tw` w-full flex justify-center `}
`

export const Heading = styled.p`
   color: ${colors.darkBlueGrey};
   font-family: Rubik;
   font-size: 32px;
   ${tw` w-3/4 text-center  `}
`

export const PrimarySignInButton = styled.button`
   ${tw`w-full h-8 mt-4 text-white rounded focus:outline-none`};
   background: ${colors.brightBlue};
   font-family: Rubik;
   font-size: 14px;
   font-weight: 800;
`

export const ErrorMessage = styled.span`
   ${tw`text-red-500 text-center h-6  `}
`
export const LabelField = styled(Typo12SteelHKGrotesk)``

export const DontHaveAccount = styled.p`
   color: ${colors.darkBlueGrey};
   line-height: 2;
   font-family: HKGrotesk;
   font-size: 14px;
   font-weight: normal;
   ${tw``}
`
