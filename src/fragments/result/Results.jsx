import React from 'react';
import styled from 'styled-components';

import { useAppSelector } from '@store/hook';
import { resultListSelector } from '@store/result';

import { Font14W500, Font15W500, Font18W700 } from '@assets/styles/fonts';

import { ResultList } from '@fragments/result/ResultList';

export const Results = () => {
  const resultList = useAppSelector(resultListSelector);

  const handleClickResultDetail = () => {};

  return (
    <ResultsStyled>
      <ResultInfo>
        <p className="title">{`${resultList.length}건이 발견되었어요`}</p>
        <p>검사 결과 중 중복된 레이어들은 제거했어요</p>
        <button type="button" onClick={handleClickResultDetail}>
          검사 결과 상세
        </button>
      </ResultInfo>
      <ResultList resultList={resultList} />
    </ResultsStyled>
  );
};

const ResultsStyled = styled.section`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  max-height: 548px;
`;

const ResultInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  gap: 4px;

  .title {
    color: ${({ theme }) => theme.colors.gray90};
    ${Font18W700}
  }
  p {
    color: ${({ theme }) => theme.colors.gray50};
    ${Font15W500}
  }
  button {
    margin-top: 12px;
    color: ${({ theme }) => theme.colors.gray50};
    ${Font14W500}
    text-decoration: underline;
  }
`;