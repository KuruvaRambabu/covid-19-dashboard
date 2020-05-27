import React from "react"
import SignInPage from "../../components/SignInPage/"
import { observer, inject } from "mobx-react"
import { observable } from "mobx";
import {COVID_19_DASHBOARD_PATH} from "../../../Common/routes/RouteConstants"
import { getAccessToken } from "../../../Common/utils/StorageUtils";
import { Redirect, withRouter } from "react-router-dom";



@inject("authenticationStore")
@observer
class SignInRoute extends React.Component {
    @observable userName;
    @observable password;
    @observable errorMessage;
    @observable token;
    @observable passwordErrorMessage;
    @observable userNameErrorMessage;

    constructor(props) {
        super(props)
        this.userName = "";
        this.password = "";
        this.errorMessage = "";
        this.token = false
    }


    onChangeUserName = (event) => {
        this.userName = event.target.value
    }

    onChangePassword = (event) => {
        this.password = event.target.value
    }

    onSignInSuccess = () => {
        const { history } = this.props;
        history.push(COVID_19_DASHBOARD_PATH);
      };


      onSignInFailure = () => {
        const { getUserSignInAPIError: apiError } = this.props.authenticationStore;
        if (apiError !== null && apiError !== undefined) {
          this.errorMessage = apiError;
        }
      };

    onClickSignIn = async (event) => {
        event.preventDefault()
        if (this.userName === "") {
            this.userNameErrorMessage = "Please enter username"
            this.passwordErrorMessage=""

        }
        else if (this.password === "") {
            this.userNameErrorMessage=""
            this.passwordErrorMessage = "Please enter password"

        }
        else {
            this.userNameErrorMessage=""
            this.passwordErrorMessage=""
            this.errorMessage = ""
            const { userSignIn } = this.props.authenticationStore
            userSignIn(
                {
                    username: this.username,
                    password: this.password,
                },
                this.onSignInSuccess,
                this.onSignInFailure
            );
        }

    }

    
    renderCovid19DashBoard = () => {
        return <Redirect to={COVID_19_DASHBOARD_PATH} />;
    };


    
    render() {
        if (getAccessToken()) {
            this.renderCovid19DashBoard()
        }
        return (
            <SignInPage
                userName={this.userName}
                password={this.password}
                errorMessage={this.errorMessage}
                onChangePassword={this.onChangePassword}
                onChangeUserName={this.onChangeUserName}
                onClickSignIn={this.onClickSignIn}
                passwordErrorMessage={this.passwordErrorMessage}
                userNameErrorMessage={this.userNameErrorMessage}
            />
        )
    }
}

export default withRouter(SignInRoute)