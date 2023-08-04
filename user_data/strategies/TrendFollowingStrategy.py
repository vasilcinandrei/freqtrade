from functools import reduce
from pandas import DataFrame
from freqtrade.strategy import IStrategy

import talib.abstract as ta

from freqtrade.strategy.interface import IStrategy

class TrendFollowingStrategy(IStrategy):
    can_short = True
    INTERFACE_VERSION: int = 3
    # ROI table:
    minimal_roi = {
        "0": 0.03,    
        "5": 0.025,   
        "10": 0.02,  
        "15": 0.015,  
        "20": 0.010,  
        "25": 0.005,     
        "30": 0.005,     
        "35": 0.005,
        "40": 0.005,
        "45": 0.005,
        "50": 0.005,
        "55": 0.005,
        "60": 0.003,
        "65": 0.003,
        "70": 0.003,
        "75": 0.003,
        "80": 0.003,
        "85": 0.003,
        "90": 0.003,
        "95": 0.003,
        "100": 0,
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
    
    timeframe = "1m"

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
