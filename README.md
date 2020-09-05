# Google Apps Script Telegram Bot Library

一個 TGbot lib    
讓你可以在 Google Apps Script 上輕鬆寫 Telegram bot    
或者你也可以 npm install 後在 local 端開發    


# npm install

```
npm i google-apps-script-telegram-bot-library
```


# Google Apps Script Library install

打開 gs 編輯頁面  
-> "資源"  
-> "程式庫"  
-> 將 `1XyHWbpiDtyHFEcZ0AOlsJp8DL99ax2R9HvehtjYg3vlLK4DDbiPyZ9eI` 貼上輸入框  
-> "新增"  
-> 選擇最後版本(記得阿 不然儲存不了)  
-> "儲存"~    

Open Script Editor.  
-> Resource  
-> Library  
-> Paste Script ID `1XyHWbpiDtyHFEcZ0AOlsJp8DL99ax2R9HvehtjYg3vlLK4DDbiPyZ9eI` to box  
-> Add library  
-> select lastest version and save    


# unit test
所有method皆測試過可用，除了以下名單沒測


## 未測試名單(not use unit test)

|                                 名稱name                                  |    原因reason     |
| :-----------------------------------------------------------------------: | :---------------: |
|                             setChatStickerSet                             | 因為人數未達100人 |
|                           deleteChatStickerSet                            | 因為人數未達100人 |
| [Telegram Passport](https://core.telegram.org/bots/api#telegram-passport) | 作者不知道原理:(  |
|             [Games](https://core.telegram.org/bots/api#games)             | 作者不會寫遊戲:(  |
