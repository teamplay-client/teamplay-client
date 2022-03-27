import { Wrapper } from "../../../../../commons/styles/commonStyls";
import SubmitButton from "../../../../commons/inputs/component/submitbutton/submit.container";
import TypingInput from "../../../../commons/inputs/component/typinginput/typinginput.container";
import styled from "@emotion/styled";

const BoardAddStyle = styled.div`
    width: 100%;
    background-color: #fff;
    flex-direction: column;
    border-radius:20px 20px 0 0;
    display: flex;
    align-items: center;
    position: fixed;
    transition: 0.4s;
    bottom: -100%;
    left: 0;
    opacity: 0;
    &.onClick{
        bottom: 0;
        opacity: 1;
    }
    z-index: 2;
`

const DragBar = styled.div`
    width: 80px;
    height: 3px;
    border-radius: 2px;
    background-color: #C0C1C2;
    margin: 5px 0 30px;
    cursor: pointer;
`

const ModalBackground = styled.div`
    width: 100%;
    height:100%;
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: none;
    &.onClick{
        display: block;
    }
`


export default function BoardAdd() {

    const onClickoffAdd = () => {
        const onAddref = document.getElementById('onBoardAdd')
        const modalref = document.getElementById('modalBackground')
        onAddref?.classList.remove("onClick")
        modalref?.classList.remove("onClick")
    }
    
    return (
        <>
         <ModalBackground id="modalBackground"></ModalBackground>
         <BoardAddStyle id="onBoardAdd">
            <DragBar onClick={onClickoffAdd}></DragBar>
            <Wrapper paddingTop="5px">
                    <TypingInput
                        label="제목"
                        type="text"
                        placeholder="제목을 입력해주세요."
                    />
                   <TypingInput
                        label="내용"
                        type="text"
                        placeholder="내용을 입력해주세요."
                    />
                <SubmitButton btnvalue="게시글 올리기"/>
            </Wrapper>
        </BoardAddStyle>
        </>
       
    )
}