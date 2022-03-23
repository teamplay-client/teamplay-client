import SubmitBtn from "../../commons/button/Submit";
import Xmark from "../../commons/button/Xmark";
import * as S from "./login.styles";
import { IPropsLoginUI } from "./login.types";

export default function LoginUI(props: IPropsLoginUI) {
  return (
    <S.Wrapper>
      <S.XmarkBox>
        <Xmark width={16} height={16} />
      </S.XmarkBox>
      <S.LogoBox>
        <img src="/img/login/logo.svg" />
      </S.LogoBox>
      <S.Subscript>
        <span>학생과 주니어들을 위한 사이드 프로젝트</span>
        <span>지금 팀플레이에서 시작하세요</span>
      </S.Subscript>
      <S.EmailInput type="text" placeholder="이메일" />
      <S.PassBox>
        <input type={props.type} placeholder="비밀번호" />
        <S.EyeImg>
          {props.isView ? (
            <img
              src="/img/login/eyeSlash.svg"
              onClick={props.onClickSetIsView}
            />
          ) : (
            <img src="/img/login/eye.svg" onClick={props.onClickSetIsView} />
          )}
        </S.EyeImg>
      </S.PassBox>
      <SubmitBtn
        onClick={props.onClickSetIsView}
        name="이메일로 로그인"
        fontSize={1.143}
        backgroundcolor="#3894FF"
      />
      <S.TextBox>또는</S.TextBox>
      <S.SocialText>SNS계정으로 로그인하기</S.SocialText>
      <S.SocialImgBox>
        <div>
          <img src="/img/login/kakao.png" />
          <img src="/img/login/naver.png" />
          <img src="/img/login/google.png" />
        </div>
      </S.SocialImgBox>
      <S.Cancel>계정이 없으신가요? 간편하게 가입하기</S.Cancel>
    </S.Wrapper>
  );
}
