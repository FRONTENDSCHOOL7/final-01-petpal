import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledLayout, MainWrap, ProductLi, AddBtn } from './ProductListStyle';
import { getProductList } from '../../api/productListApi';
import { getProductDetail } from '../../api/product';
export default function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductList();
        setProducts(data.product);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter(v =>
    v.author.accountname.includes('petpal_'),
  );

  const handleProductClick = async productId => {
    try {
      const response = await getProductDetail(productId);

      // 페이지 이동
      window.location.href = `/productDetail/${productId}`;
    } catch (error) {
      console.error('상품 상세 정보를 불러오는 중 오류 발생:', error);
    }
  };
  // console.log(filteredProducts[0]._id);
  return (
    <StyledLayout>
      <MainWrap>
        <ul>
          {filteredProducts.map((el, i) => {
            return (
              <ProductLi key={i}>
                <p className="productImg">
                  <img
                    src={el.itemImage}
                    alt="상품 이미지"
                    onClick={() => handleProductClick(el._id)}
                  />
                </p>
                <strong className="productTitle">{el.itemName}</strong>
                <span className="productDesc">{el.link}</span>
                <strong className="productPrice">
                  <span>{el.price}</span>원
                </strong>
              </ProductLi>
            );
          })}
        </ul>
      </MainWrap>
      <AddBtn>
        <Link to="/productPost" className="">
          글쓰기
        </Link>
      </AddBtn>
    </StyledLayout>
  );
}
