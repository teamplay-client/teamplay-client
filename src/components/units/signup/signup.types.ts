import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface ISignUpContext {
  isAuth?: boolean;
  isEmail?: boolean;
  setIsAuth?: Dispatch<SetStateAction<boolean>>;
  setIsEmail?: Dispatch<SetStateAction<boolean>>;
  onChageInput?: (key: string) => (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IPropsSignUpUI {
  passMsg: string;
  checkMsg: string;
  isEmail: boolean;
  onClickSubmit: () => void;
  onChageInput: (key: string) => (e: ChangeEvent<HTMLInputElement>) => void;
  onClickRequestPhoneAuth: () => void;
  onClickSendEmailToken: () => void;
  onClickCheckEmailToken: () => void;
}

export interface IPropsAuth {
  name: string;
  placeHolder: string;
  onClickSendToken: () => void;
  onClickCheckToken: () => void;
}

export interface IPropsSignUpStyles {
  isEmail: boolean | undefined;
}

export interface IPropsValidBtn {
  isAuth: boolean | undefined;
}
