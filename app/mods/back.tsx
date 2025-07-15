import Img from "/back.png";
import Wheel from "/back_wheel.png";

export default function Back() {
    return (
        <div>
            <a href="/">
                <img id="back-button" src={Img} width={"50px"} />
            </a>
        </div>
    );
}
