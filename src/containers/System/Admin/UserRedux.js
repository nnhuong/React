import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { escapeRegExp } from 'lodash';
import { LANGUAGES } from '../../../utils';
import * as actions from '../../../store/actions';
class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: []
        }
    }


    async componentDidMount() {
        this.props.getGenderStart();

        try {
            let res = await getAllCodeService('gender');
            if (res && res.errCode === 0) {
                this.setState({
                    genderArr: res.data
                })
            }
            console.log('check res: ', res)
        } catch (e) {
            console.log(e)
        }
    }

    //     componentDidUpdate (prevProps, prevState, snapshot) {
    //         if (prevProps.gender !== this.props.genderRedux){
    //             this.setState({
    //                 genderArr: this.props.genderRedux
    //         })
    //     }
    // }
    render() {
        let genders = this.state.genderArr;
        let language = this.props.language;
        console.log('check props from redux: ', this.props.genderRedux)
        return (
            <div className="user-redux-container">
                <div className="title">
                    Manager User
                </div>
                <div className="user-redux-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <label>Email</label>
                                <input className="form-control" type="email" />
                            </div>
                            <div className="col-3">
                                <label>Password</label>
                                <input className="form-control" type="password" />
                            </div>
                            <div className="col-3">
                                <label>First name</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-3">
                                <label>Last name</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-3">
                                <label>Phone number</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-9">
                                <label>Address</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-3">
                                <label>Gender</label>
                                <select className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart())
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
