import { connect } from "react-redux";

import { logout } from '../redux/actions/auth';


const Unauthorized = () => {
    return (<></>);
}

const mapDispatchToProps = (dispatch) => ({
    logout: (router, removeCookie) => dispatch(logout(router, removeCookie))
})

export default connect(null, mapDispatchToProps)(Unauthorized);