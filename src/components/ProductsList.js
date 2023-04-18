import React from 'react';
import Design from './Design';
class ProductsList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          title: 'SAMSUNG Galaxy F13 (Waterfall Blue, 64 GB)',
          img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70',
          originalPrice: '₹14,999',
          offeredPrice: '₹9,699',
          rating: '4.4',
        },
        {
          id: 2,
          title: 'APPLE iPhone 13 (Midnight, 128 GB)',
          img: 'https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70',
          originalPrice: '₹69,900',
          offeredPrice: '₹58,999',
          rating: '4.7',
        },
        {
          id: 3,
          title: 'realme C33 2023 (Night Sea, 64 GB)',
          img: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/e/n/j/-original-imaghuf9vphhbnkc.jpeg?q=70',
          originalPrice: '₹12,999',
          offeredPrice: '₹9,999',
          rating: '4.3',
        },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.products.map(function (product) {
          return <Design data={product} />;
        })}
      </div>
    );
  }
}
export default ProductsList;
