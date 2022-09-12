import TradingViewWidget, { Themes, IntervalTypes } from 'react-tradingview-widget';
import '../containers/App.css'

const App = () => (
  <div class="chartview">
    <TradingViewWidget
      symbol="NASDAQ:AAPL"
      theme={Themes.DARK}
      locale="fr"
      autosize
      symbol="BINANCE:WRXUSD"
      interval={IntervalTypes.D}
      timezone="Asia/Kolkata"
      style="1"
      locale="in"
    />
  </div>
);

export default App;
