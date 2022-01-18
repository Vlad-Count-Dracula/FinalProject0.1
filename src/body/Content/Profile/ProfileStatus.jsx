import React from "react";
import s from './Profile.module.css';


class ProfileStatus extends React.Component {

    state = {
        aditMode : false,
        status : this.props.status,
    };

    activateAditMode = () => {
        this.setState({
            aditMode: true,
        })
    };

    deActivateAditMode = () => {
        this.setState({
            aditMode: false,
        })
        this.props.updateStatusThunk(this.state.status)
    };
    
    onChangeStatus = (change) => {
        this.setState({
            status : change.target.value
        })
    };

    componentDidUpdate(prevProps , prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status : this.props.status
            })
        }
    }

    render() {
        return (
            <div className={s.profileStatus}>
                {!this.state.aditMode &&
                    <div>
                        <p onDoubleClick={this.activateAditMode} >{this.props.status || "Status not detected"}</p>
                    </div>
                }
                {this.state.aditMode &&
                    <div>
                        <input onBlur={this.deActivateAditMode} autoFocus={true} value={this.state.status} onChange={this.onChangeStatus}/>
                    </div>
                }
            </div>
        )
    }
};

export default ProfileStatus;