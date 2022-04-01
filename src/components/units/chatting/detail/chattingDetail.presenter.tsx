import { useContext } from "react";
import { TextArea } from "../../../commons/textarea/textarea";
import { ChattingDetailContext } from "./chattingDetail.container";
import * as S from "./chattingDetail.styles";
import Sidebar from "./sidebar/sidebar";
import { ChattingContext } from "../chatting.container";
import { IPropsChattingDetailUI } from "./chattingDetail.types";
import { v4 as uuidv4 } from "uuid";
import useFetchUser from "../../../commons/hooks/useFetchUser";

export default function ChattingDetailUI(props: IPropsChattingDetailUI) {
  const {
    onClickSetPosition,
    isToggle,
    data,
    onChangeChatInput,
    onClickSendMessage,
  } = useContext(ChattingDetailContext);
  const { data: loginInfo } = useFetchUser();
  const { onClickChangePosition } = useContext(ChattingContext);
  return (
    <S.Wrapper>
      <S.Opacity isToggle={isToggle} onClick={onClickSetPosition} />
      <Sidebar />
      <S.ChattingBox>
        <S.TitleBox>
          <S.RightBox>
            <S.LeftArrowImg
              src="/img/commons/leftArrow1.svg"
              onClick={onClickChangePosition}
            />
            <S.Tag>Project</S.Tag>
            <S.ProjectName>프로젝트 단톡방</S.ProjectName>
            <S.Count>5</S.Count>
          </S.RightBox>
          <S.DotImgBox onClick={onClickSetPosition}>
            <S.DotToggleImg src="/img/commons/dotToggle.svg" />
          </S.DotImgBox>
        </S.TitleBox>
        <S.ChattingContainer>
          <S.ChattingList ref={props.ChattingBoxRef} className="chatting-list">
            {data?.fetchChats.map((el) =>
              el.user.name === loginInfo?.fetchUser.name ? (
                <li className="sent" key={uuidv4()}>
                  <span className="message">{el.content}</span>
                  <span className="time">{el.createdAt}</span>
                </li>
              ) : (
                <li className="received" key={uuidv4()}>
                  <span className="profile">
                    <img
                      className="image"
                      src="https://placeimg.com/50/50/any"
                      alt="any"
                    />
                    <span className="user">
                      <span className="name">{el.user.name}</span>
                      <span className="message-box">
                        <span className="message">{el.content}</span>
                        <span className="time">{el.createdAt}</span>
                      </span>
                    </span>
                  </span>
                </li>
              )
            )}
            <li className="received">
              <span className="profile">
                <img
                  className="image"
                  src="https://placeimg.com/50/50/any"
                  alt="any"
                />
                <span className="user">
                  <span className="name">유저1</span>
                  <span className="message-box">
                    <span className="message">
                      테스트테스트테스트테스트테스트
                    </span>
                    <span className="time">1:00 pm</span>
                  </span>
                </span>
              </span>
            </li>
            <li className="received">
              <span className="continue-message">연속 채팅 테스트</span>
              <span className="time">1:00 pm</span>
            </li>
            <li className="sent">
              <span className="message">테스트테스트테스트테스트테스트</span>
              <span className="time">1:00 pm</span>
            </li>
          </S.ChattingList>
        </S.ChattingContainer>
      </S.ChattingBox>
      <div>
        <S.FunctionBox>
          <S.InputBox>
            <S.UploadImgBtn>
              <img src="/img/chatting/camera.svg" />
            </S.UploadImgBtn>
            <S.MsgInput>
              <TextArea onChange={onChangeChatInput} />
            </S.MsgInput>
          </S.InputBox>
          <S.SendButton onClick={onClickSendMessage}>
            <img src="/img/chatting/send.svg" />
          </S.SendButton>
        </S.FunctionBox>
      </div>
    </S.Wrapper>
  );
}
