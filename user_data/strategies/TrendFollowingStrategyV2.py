import logging
from numpy.lib import math
from freqtrade.strategy import IStrategy
from pandas import DataFrame
import talib.abstract as ta
import numpy as np
import freqtrade.vendor.qtpylib.indicators as qtpylib

class TrendFollowingStrategyV2(IStrategy):
    can_short = True
    INTERFACE_VERSION: int = 3
    # ROI table:
    minimal_roi = {
        "0": 0.003,    
        "5": 0.0025,   
        "10": 0.002,  
        "15": 0.0015,  
        "20": 0.0010,  
        "25": 0.0005,     
        "30": 0.0005,     
        "35": 0.0005,
        "40": 0.0005,
        "45": 0.0005,
        "50": 0.0005,
        "55": 0.0005,
        "60": 0.0003,
        "65": 0.0003,
        "70": 0.0003,
        "75": 0.0003,
        "80": 0.0003,
        "85": 0.0003,
        "90": 0.0003,
        "95": 0.0003,
        "100": 0,
    }
    # minimal_roi = {"0": 0.15, "30": 0.1, "60": 0.05}
       
    # minimal_roi = {"0": 1}

    # Stoploss:
    stoploss = -0.2

     #Trailing stop:
    #trailing_stop = True
    #trailing_stop_positive = 0.009
    #trailing_stop_positive_offset = 0.01
    #trailing_only_offset_is_reached = False
    
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
