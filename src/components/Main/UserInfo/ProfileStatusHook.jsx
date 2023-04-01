import { ClickAwayListener } from "@mui/material";
import React, { useEffect, useState } from "react";
import Preloader from "../../common/preloader/Preloader";
import style from './UserInfo.module.css'


const ProfileStatusHook = (props) => {
    const [status, setStatus] = useState(props.status);
    const [changingProcess, setChangingProcess] = useState(false);
    const [localStatus, setLocalStatus] = useState(status);

    useEffect(() => {
        if (props.status !== status) {
            setStatus(props.status);
            setLocalStatus(props.status)
        }
    }, [status, props.status])


    const saveChangeStatus = () => {
        props.onSetUsersStatus(localStatus);
        setChangingProcess(false)
    }

    const onChangeStatus = (event) => {
        setLocalStatus(event.target.value);
    }

    return (
        <div>
            {!changingProcess
                ?
                <div>
                    <span onDoubleClick={() => setChangingProcess(true)}>{status || 'Without status'}</span>
                </div>
                :
                <ClickAwayListener onClickAway={() => {
                    setStatus(props.status);
                    setLocalStatus(status);
                    setChangingProcess(false);
                }}>
                    <div >
                        <input disabled={props.authProfileId !== props.profile.userId} onChange={onChangeStatus} autoFocus={true} type="text" value={localStatus} />
                        <button disabled={props.authProfileId !== props.profile.userId} onClick={saveChangeStatus}>change</button>
                    </div>
                </ClickAwayListener>
            }
        </div>)
}


export default ProfileStatusHook

// class ProfileStatus extends React.Component {
//     state = {
//         statusChangingProcess: false,
//         status: this.props.status,
//         get changingText() { return this.status }
//     }

//     //современный способ записи метода, при котором не теряется контекст и нет необходимости биндить вызов функции.
//     onClickChangeStatus = () => {
//         this.setState(
//             { statusChangingProcess: true }
//         )
//     }
//     //способ при котором есть необходимость биндить контекст при вызове
//     changingTextStatus(event) {
//         this.setState(
//             { changingText: event.target.value }
//         )
//     }

//     saveChangeStatus() {
//         this.setState(
//             {
//                 statusChangingProcess: false,
//             }
//         )
//         this.props.onSetUsersStatus(this.state.changingText)
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({ status: this.props.status })
//             console.log('новые пропсы пришли и компонента перерисовалась')
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {!this.state.statusChangingProcess
//                     ?
//                     <div>
//                         <span onDoubleClick={this.onClickChangeStatus}>{this.state.status || 'Without status'}</span>
//                     </div>
//                     :
//                     <ClickAwayListener onClickAway={() => this.setState({ statusChangingProcess: false, changingText: this.state.status })}>
//                         <div >
//                             <input onChange={this.changingTextStatus.bind(this)} autoFocus={true} type="text" value={this.state.changingText} />
//                             <button onClick={this.saveChangeStatus.bind(this)}>change</button>
//                         </div>
//                     </ClickAwayListener>
//                 }
//             </div>)
//     }

// }
