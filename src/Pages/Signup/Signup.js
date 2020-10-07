import React from 'react';
import styled from 'styled-components';

const Signup = () => {
  return (
    <>
      <div>nav 예정</div>
      <SignupWrap>
        <SignupContainer>
          <SignupTitle>
            <span>회원가입</span>
          </SignupTitle>
          <InputEmail>
            <span>이메일</span>
            <input type="text" placeholder="이메일 입력"></input>
          </InputEmail>
          <InputPasswordContainer>
            <span>비밀번호</span>
            <InputPassword placeholder="비밀번호 입력"></InputPassword>
            <PasswordValidContainer>
              <ul>
                <li>영문 대문자 포함</li>
                <li>영문 소문자 포함</li>
                <li>숫자 포함</li>
                <li>10자 이상</li>
              </ul>
            </PasswordValidContainer>
            <InputPassword placeholder="비밀번호 확인"></InputPassword>
          </InputPasswordContainer>
          <CertificationContainer>
            <span>인증번호</span>
            <input placeholder="인증번호 입력"></input>
            <RequestCertificationBtn>인증번호 요청</RequestCertificationBtn>
          </CertificationContainer>
          <CompleteBtn>완료</CompleteBtn>
        </SignupContainer>
      </SignupWrap>
      <div>footer 예정</div>
    </>
  );
};

export default Signup;

const SignupWrap = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.flex('center', 'center')}
`;

const SignupContainer = styled.div`
  width: 480px;
  height: 1100px;
`;

const SignupTitle = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  text-align: center;
  span {
    ${({ theme }) => theme.text('30px', 400)}
  }
`;

const InputEmail = styled.div`
  width: 100%;
  margin: 20px 0;
  input {
    width: 100%;
    height: 50px;
    margin-top: 10px;
    padding: 10px;
    ${({ theme }) => theme.border('1px', 'solid', '#aeb3bb', '5px')}
    :focus {
      border-color: #1772f8;
    }
  }
`;

const InputPasswordContainer = styled.div`
  margin: 40px 0;
`;

const InputPassword = styled.input.attrs((props) => ({
  type: 'password',
}))`
  display: block;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  padding: 10px;
  ${({ theme }) => theme.border('1px', 'solid', '#aeb3bb', '5px')}
  :focus {
    border-color: #1772f8;
  }
`;

const PasswordValidContainer = styled.div`
  ${({ theme }) => theme.border('1px', 'solid', '#aeb3bb', '5px')}
  width: 100%;
  padding: 20px 40px;
  margin: 10px 0 30px 0;
  ul {
    list-style: disc;
    li {
      margin: 10px 0;
      ${({ theme }) => theme.text('12px', null, '#484d55')}
    }
  }
`;

const CertificationContainer = styled.div`
  input {
    ${({ theme }) => theme.border('1px', 'solid', '#aeb3bb', '5px')}
    :focus {
      border-color: #1772f8;
    }
    width: 100%;
    height: 50px;
    margin-top: 10px;
    padding: 10px;
  }
`;

const RequestCertificationBtn = styled.button`
  cursor: pointer;
  margin-top: 10px;
  padding: 10px;
  ${({ theme }) => theme.border('1px', 'solid', '#aeb3bb', '5px')};
  &:hover {
    color: white;
    background-color: #79818f;
  }
`;

const CompleteBtn = styled.button`
  cursor: pointer;
  width: 100%;
  height: 50px;
  text-align: center;
  margin: 30px 0 100px 0;
  ${({ theme }) => theme.text('14px', null, '#79818f')};
  ${({ theme }) => theme.border('1px', 'solid', '#c9ccd2', '5px', '#c9ccd2')};
  :hover {
    ${({ theme }) => theme.text('14px', null, 'white')};
    ${({ theme }) => theme.border('1px', 'solid', '#1772f8', '5px', '#1772f8')};
  }
`;
