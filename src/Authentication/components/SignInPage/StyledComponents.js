import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { colors } from "../../themes/Colors";



export const SignInPageMainContainer = styled.div`
    
    ${tw`min-h-screen w-full flex justify-center items-center`}
    background:${colors.iceBlue}
`
export const SignInCardContanier = styled.div`
    ${tw` md:w-1/3  lg:w-1/4 w-1/2 flex flex-col justify-center items-center `};height:400px;
    background:${colors.white}
`


export const Form = styled.form`
    ${tw`flex flex-col  w-4/5  justify-center `};
`
export const CompanyLogo = styled.img`
    ${tw`w-full h-20`}
`
export const ImageContainer =styled.div`
    ${tw` w-full flex justify-center `}
`

export const Heading = styled.p`
color:${colors.darkBlueGrey};
  font-family: Rubik;
  font-size: 32px;
    ${tw` w-3/4 text-center  `}
`

export const PrimarySignInButton = styled.button`
    ${tw`w-full h-8 mt-4 text-white rounded `};
    background:${colors.brightBlue};
    font-family: Rubik;
    font-size: 14px;
    font-weight: 800;

`

export const ErrorMessage = styled.span`
    ${tw`text-red-500 text-center `}
`