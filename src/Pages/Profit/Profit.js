import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const Profit = () => {
  const [BarMenu, setBarMenu] = useState([
    '코인명',
    '보유수량',
    '매수 평균가',
    '매수 금액',
    '평가 금액',
    '수익률',
  ]);

  const [TradingData, setTradingData] = useState([
    {
      coinName: 'MATIC',
      amount: 45.1,
      average: 21.9,
      tradingPrice: 654,
      evaluation: 516,
      profitPercentage: 14.5,
    },
  ]);

  return (
    <>
      <div>nav 예정</div>
      <ProfitWrap>
        <MenuVertical>
          <ul>
            <li>수익현황</li>
            <li>입출금</li>
            <li>이용내역</li>
          </ul>
        </MenuVertical>
        <ProfitStatusContainer>
          <span>수익현황</span>
          <TotalAssetContainer>
            <TotalAsset>
              <span>총 보유자산</span>
              <span>{(5000).toLocaleString('en')}원</span>
            </TotalAsset>
            <OwnAsset>
              <ItemAndPrice>
                <span>보유 원화</span>
                <span>{(4000).toLocaleString('en')}원</span>
              </ItemAndPrice>
              <ItemAndPrice>
                <span>보유 암호화폐</span>
                <span>{(1000).toLocaleString('en')}원</span>
              </ItemAndPrice>
            </OwnAsset>
            <TradingAsset>
              <ItemAndPrice>
                <span>총매수금액</span>
                <span>{(1000).toLocaleString('en')}원</span>
              </ItemAndPrice>
              <ItemAndPrice>
                <span>평가 손익</span>
                <span>-183원</span>
              </ItemAndPrice>
              <ItemAndPrice>
                <span>수익률</span>
                <span>-15.33%</span>
              </ItemAndPrice>
            </TradingAsset>
          </TotalAssetContainer>
          <AssetByOrderContainer>
            <p>
              매수평균가, 평가금액, 평가손익, 수익률은 모두 KRW로 환산한 추정
              값으로 참고용입니다
            </p>
            <AssetByOrder>
              <AssetByOrderBar>
                {BarMenu.map((menu) => (
                  <div>
                    <span>{menu}</span>
                  </div>
                ))}
              </AssetByOrderBar>
              <AssetByOrderList>
                {TradingData.map((trade) => (
                  <ul>
                    <li>{trade.coinName}</li>
                    <li>{trade.amount}</li>
                    <li>{trade.average}</li>
                    <li>{trade.tradingPrice}</li>
                    <li>{trade.evaluation}</li>
                    <li>{trade.profitPercentage}</li>
                  </ul>
                ))}
              </AssetByOrderList>
            </AssetByOrder>
          </AssetByOrderContainer>
        </ProfitStatusContainer>
      </ProfitWrap>
      <div>footer 예정</div>
    </>
  );
};

export default Profit;

const ProfitWrap = styled.div`
  padding: 80px 0;
  width: 100%;
  height: 800px;
  ${({ theme }) => theme.flex('center', 'center')};
`;

const MenuVertical = styled.div`
  width: 15%;
  height: 100%;
  border-right: 1px solid #c9ccd2;
  ul {
    li {
      :first-child {
        ${({ theme }) => theme.text('20px', '700', '#1772f8')};
      }
      margin-bottom: 40px;
      ${({ theme }) => theme.text('20px', '700', '#c9ccd2')};
    }
  }
`;

const ProfitStatusContainer = styled.div`
  width: 70%;
  height: 100%;
  padding-left: 5%;
  & > span {
    ${({ theme }) => theme.text('40px', '700')};
  }
`;

const TotalAssetContainer = styled.div`
  width: 100%;
  height: 130px;
  margin-top: 50px;
  margin-bottom: 50px;
  border-top: 1px solid #c9ccd2;
  border-bottom: 1px solid #c9ccd2;
  ${({ theme }) => theme.flex('center', 'center')};
`;

const TotalAsset = styled.div`
  width: 33%;
  height: 100%;
  ${({ theme }) => theme.flex('center', 'center', 'column')}
  span {
    :first-child {
      font-size: 14px;
      margin-bottom: 10px;
    }
    :last-child {
      ${({ theme }) => theme.text('34px', '500')}
    }
  }
`;

const ItemAndPrice = styled.div`
  width: 100%;
  padding: 0 30px;
  ${({ theme }) => theme.flex('space-between', 'center')};
  span {
    margin: 10px 0;
  }
`;

const OwnAsset = styled.div`
  width: 34%;
  height: 100%;
  ${({ theme }) => theme.flex('center', 'center', 'column')}
`;

const TradingAsset = styled.div`
  width: 33%;
  height: 100%;
  ${({ theme }) => theme.flex('center', 'center', 'column')}
  div {
    span {
      color: #79818f;
    }
  }
`;

const AssetByOrderContainer = styled.div`
  width: 100%;
  & > p {
    ${({ theme }) => theme.text('12px', 400, '#79818f')}
  }
`;

const AssetByOrder = styled.div`
  margin-top: 20px;
`;

const AssetByOrderBar = styled.div`
  width: 100%;
  height: 40px;
  border-top: 1px solid #c9ccd2;
  border-bottom: 1px solid #c9ccd2;
  background-color: #f8f8f9;
  ${({ theme }) => theme.flex('center', 'center')}
  div {
    :first-child {
      width: 25%;
    }
    width: 15%;
    span {
      padding-left: 10px;
      font-size: 14px;
    }
  }
`;

const AssetByOrderList = styled.div`
  width: 100%;
  ul {
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #c9ccd2;
    ${({ theme }) => theme.flex('center', 'center')};
    li {
      padding-left: 10px;
      font-size: 14px;
      :first-child {
        width: 25%;
      }
      width: 15%;
    }
  }
`;
