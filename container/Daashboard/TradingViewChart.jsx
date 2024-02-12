import React, { useEffect, useRef } from "react";

const TradingViewChart = ({ symbol }) => {
  const containerRef = useRef(null);
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!widgetRef.current) {
      const defaultSymbol = "BTCUSDT";

      const pairSymbol = symbol ? `${symbol}` : defaultSymbol;
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      script.onload = () => {
        widgetRef.current = new TradingView.widget({
          width: "100%",
          height: 500,
          symbol: `${pairSymbol}`,
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          details: true,
          show_popup_button: true,
          popup_width: "1000",
          popup_height: "650",
          container_id: "expert_chart",
        });
      };
      document.body.appendChild(script);
    } else {
      // Update symbol when prop changes
      widgetRef.current.setSymbol(pairSymbol);
    }

    return () => {
      // Clean up script when component unmounts
      if (widgetRef.current) {
        widgetRef.current.remove();
        widgetRef.current = null;
      }
    };
  }, [symbol]);

  return <div ref={containerRef} id="expert_chart"></div>;
};

export default TradingViewChart;
