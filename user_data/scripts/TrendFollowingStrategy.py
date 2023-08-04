from functools import reduce
from pandas import DataFrame
from freqtrade.strategy import IStrategy

import talib.abstract as ta

from freqtrade.strategy.interface import IStrategy

class TrendFollowingStrategy(IStrategy):

    INTERFACE_VERSION: int = 3
    # ROI table:
    minimal_roi = {
        "0": 0.3,    # 30% if a trade is exited immediately after entry
        "10": 0.1,   # 10% if a trade is held for 10 candles
        "30": 0.05,  # 5% if a trade is held for 30 candles
        "60": 0.02,  # 2% if a trade is held for 60 candles
        "90": 0.01,  # 1% if a trade is held for 90 candles
        "120": 0     # Exit any trade held for 120 candles (0%)
    }
    # minimal_roi = {"0": 0.15, "30": 0.1, "60": 0.05}
       
    # minimal_roi = {"0": 1}

    # Stoploss:
    stoploss = -0.5

    # Trailing stop:
    trailing_stop = True
    trailing_stop_positive = 0.05  # Set a small positive value for the trailing stop
    trailing_stop_positive_offset = 0.1  # Offset for the trailing stop to lock in profits
    trailing_only_offset_is_reached = False  # Allow trailing stop to trigger even if positive_offset is not reached
    
    timeframe = "5m"

    def populate_indicators(self, dataframe: DataFrame, metadata: dict) -> DataFrame:
        # Calculate OBV
        dataframe['obv'] = ta.OBV(dataframe['close'], dataframe['volume'])
        
        # Add your trend following indicators here
        dataframe['trend'] = dataframe['close'].ewm(span=20, adjust=False).mean()
        
        return dataframe
    
    def populate_entry_trend(self, dataframe: DataFrame, metadata: dict) -> DataFrame:
        # Add your trend following buy signals here
        dataframe.loc[
            (dataframe['close'] > dataframe['trend']) & 
            (dataframe['close'].shift(1) <= dataframe['trend'].shift(1)) &
            (dataframe['obv'] > dataframe['obv'].shift(1)), 
            'enter_long'] = 1
        
        # Add your trend following sell signals here
        dataframe.loc[
            (dataframe['close'] < dataframe['trend']) & 
            (dataframe['close'].shift(1) >= dataframe['trend'].shift(1)) &
            (dataframe['obv'] < dataframe['obv'].shift(1)), 
            'enter_short'] = -1
        
        return dataframe

    def populate_exit_trend(self, dataframe: DataFrame, metadata: dict) -> DataFrame:
        # Add your trend following exit signals for long positions here
        dataframe.loc[
            (dataframe['close'] < dataframe['trend']) & 
            (dataframe['close'].shift(1) >= dataframe['trend'].shift(1)) &
            (dataframe['obv'] > dataframe['obv'].shift(1)), 
            'exit_long'] = 1
        
        # Add your trend following exit signals for short positions here
        dataframe.loc[
            (dataframe['close'] > dataframe['trend']) & 
            (dataframe['close'].shift(1) <= dataframe['trend'].shift(1)) &
            (dataframe['obv'] < dataframe['obv'].shift(1)), 
            'exit_short'] = 1
        
        return dataframe
