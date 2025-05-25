import { useEffect, useState} from "react";
import "./Modal.css";

function Modal({onClose}) {
    const [seconds, setSeconds] = useState(5); //5초 카운트

    useEffect(() => {
        const timer = setInterval(() => { //수업시간에 배운 코드
            setSeconds((prev) => prev - 1);
        }, 1000);

        if (seconds === 0) { 
            clearInterval(timer);
            setTimeout(() => {
                onClose(); //모달 닫는 코드
            }, 1000);
        }
        return () => clearInterval(timer); //setInterval() 반복 작업 취소
    }, [seconds]);

    return (
        <div className="modal">
            <div className="content">
                <p className="font">멋사 프엔 모두 화이팅!!</p>
                {seconds > 0 ? (
                    <p>{seconds}초 후에 폭파됩니다</p>
                ) : (
                    <p>현승님 바보</p> //ㅎㅎ 넣어보고 싶었어요
                )}
            </div>
        </div>
    );
}

export default Modal;