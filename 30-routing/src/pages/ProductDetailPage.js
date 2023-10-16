import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productInfos } from '../components/ProductList';

export default function ProductDetailPage() {
  // const parameter = useParams();
  //console.log(parameter); //{productId: '1'} -> params 는 string 형식으로 받아짐
  const { productId } = useParams(); //객체 구조분해해서 가져오기
  console.log(productId); //'1'->string
  console.log(productInfos);
  const productInfo = productInfos.find(
    (product) => product.id === Number(productId)
  );
  // 밑에 두개 똑같음
  console.log(productInfo);
  console.log(productInfos[Number(productId) - 1]);

  const navigate = useNavigate();
  return (
    <div>
      <h1>Product Detail Page</h1>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate('/')}>홈으로 이동하기</button>
      <ul>
        <li>상품번호: {productInfo.id}</li>
        <li>상품명:{productInfo.name} </li>
        <li>판매자: {productInfo.email}</li>
        <li>상세설명: {productInfo.body}</li>
      </ul>
    </div>
  );
}
