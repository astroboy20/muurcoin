import React, { useEffect } from 'react';

const CryptoWidget = () => {
  useEffect(() => {
    // Load the external script dynamically
    const script = document.createElement('script');
    script.src = 'https://price-static.crypto.com/latest/public/static/widget/index.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up function to remove the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="crypto-widget-CoinMarquee"
      data-theme="dark"
      data-design="classic"
      data-coin-ids="29,1,166,136,382,1986,20,1120,440,2180"
    ></div>
  );
};

export default CryptoWidget;
