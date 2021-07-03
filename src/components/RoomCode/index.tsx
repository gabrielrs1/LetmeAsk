import copyImg from "../../assets/images/copy.svg"

import { RoomCodeStyle } from "./styles"

type RoomCodeProps = {
    code: string;
    color: string;
}

export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code)
    }

    return (
        <RoomCodeStyle className="room-code" onClick={copyRoomCodeToClipboard} color={props.color}>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #{props.code}</span>
        </RoomCodeStyle>
    )
}