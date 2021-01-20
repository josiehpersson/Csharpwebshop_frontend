import React from 'react';
import './productpage.css';

function ProductPage() {

  
  return (
    <div className="productpage-container">
      <img src="https://www.hembiobutiken.se/images/prod/293280_2.jpg" alt="Hifiman Susvara image" className="product-img"/>
      <div className="productinfo-container">
        <div className="productinfo">
          <h5>Hifiman Susvara</h5>
          <p>Hifiman Susvara är bolagets toppmodell och tar vara på Hifimans spetskompetens när det gäller att utveckla en high-end lur för inbitna musikälskare. 
            Styrkan ligger i deras planarelement som tar fram en extremt stor och naturlig ljudbild med låg distorsion och bästa möjliga ljudupplevelse. 
            Susvara använder sig av ett ”Stealth” magnetsystem som är en av deras senaste innovationer tillsammans med deras nanometer-membran som är ett av världens tunnaste material. 
            Det här är en otroligt välbyggd hörlur som andas lyx och välljud och bara måste upplevas!</p>
        </div>
        <p className="pricetag">65990:-</p>
        <button type="button" className="cart-btn">Add</button>
      </div>
    </div>
  );
}

export default ProductPage;
