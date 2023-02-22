import { ClickAwayListener } from "@mui/material";
import React from "react";
import Preloader from "../../common/preloader/Preloader";
import style from './UserInfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        statusChangingProcess: false,
        status: this.props.status,
        get changingText() { return this.status }
    }

    //современный способ записи метода, при котором не теряется контекст и нет необходимости биндить вызов функции.
    onClickChangeStatus = () => {
        this.setState(
            { statusChangingProcess: true }
        )
    }
    //способ при котором есть необходимость биндить контекст при вызове
    changingTextStatus(event) {
        this.setState(
            { changingText: event.target.value }
        )
    }

    saveChangeStatus() {
        this.setState(
            {
                statusChangingProcess: false,
            }
        )
        this.props.onSetUsersStatus(this.state.changingText)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status })
            console.log('новые пропсы пришли и компонента перерисовалась')
        }
    }

    render() {
        return (
            <div>
                {!this.state.statusChangingProcess
                    ?
                    <div>
                        <span onDoubleClick={this.onClickChangeStatus}>{this.state.status || 'Without status'}</span>
                    </div>
                    :
                    <ClickAwayListener onClickAway={() => this.setState({ statusChangingProcess: false, changingText: this.state.status })}>
                        <div >
                            <input onChange={this.changingTextStatus.bind(this)} autoFocus={true} type="text" value={this.state.changingText} />
                            <button onClick={this.saveChangeStatus.bind(this)}>change</button>
                        </div>
                    </ClickAwayListener>
                }
            </div>)
    }

}

export default ProfileStatus