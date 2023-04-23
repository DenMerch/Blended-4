import styled from '@emotion/styled';

export const BtnEdit = styled.button`
  width: 50px;
  height: 50px;

  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark};

  position: absolute;
  top: 0;
  right: 40px;
`;
export const SearchFormStyled = styled.form`
  width: ${({ theme }) => theme.spacing(100)};
  margin-left: auto;
  margin-right: auto;

  position: relative;

  margin-bottom: ${({ theme }) => theme.spacing(20)};
`;
export const FormBtn = styled.button`
  width: 50px;
  height: 50px;

  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark};

  position: absolute;
  top: 0;
  right: 0;
`;