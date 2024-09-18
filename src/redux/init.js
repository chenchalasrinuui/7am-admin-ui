import { AppCookies } from "@/common/services/cookies";

export const init = {
    isLoggedIn: AppCookies.isUserLoggedIn(),
    isShowLoader: false,
    toaster: {
        isShowToaster: false,
        toasterMsg: '',
        color: ''
    }
}