# Google Apps Script Telegram Bot Library

一個 TGbot lib  
讓你可以在 Google Apps Script 上輕鬆寫 Telegram bot  
或者你也可以 npm install 後在 local 端開發

這個 library 是照著 [官方 bot api 刻出來的](https://core.telegram.org/bots/api)  
this library is follow [official telegam bot api](https://core.telegram.org/bots/api)

你可以在該網站找到所有這個 library 所支援的 methods  
you can find all availability methods from this library in web

ℹ目前配合的 api 版本: v4.9  
ℹavailability version: v4.9

![Imgur](https://imgur.com/iP46IBt.gif)  
![Imgur](https://imgur.com/5f4jlmG.gif)

## npm install

`npm i google-apps-script-telegram-bot-library`

## Google Apps Script Library install

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

## Run on NodeJs

```javascript
const tgbot = require("google-apps-script-telegram-bot-library");
var bot = new tgbot.tgbot("<botToken>");
var result = bot.sendMessage({ chat_id: "123", text: "030//" });
console.log(result);
```

## Run on TypeScript

```typescript
import { tgbot } from "google-apps-script-telegram-bot-library";
var bot = new tgbot("<botToken>");
var result = bot.sendMessage({ chat_id: "123", text: "030//" });
console.log(result);
```

## Run on Google Apps Script

```javascript
var tgbot = new TGbot.tgbot("<botToken>");
var result = tgbot.sendMessage({ chat_id: "123", text: "030//" });
console.log(result);
```

---

## Unit test

所有 method 皆測試過可用，除了以下名單沒測

### 未測試名單(not use unit test)

|                                 名稱 name                                 |     原因 reason     |
| :-----------------------------------------------------------------------: | :-----------------: |
|                             setChatStickerSet                             | 因為人數未達 100 人 |
|                           deleteChatStickerSet                            | 因為人數未達 100 人 |
| [Telegram Passport](https://core.telegram.org/bots/api#telegram-passport) |  作者不知道原理:(   |
|             [Games](https://core.telegram.org/bots/api#games)             |  作者不會寫遊戲:(   |

## Methods

## Additional method

這個 library 還有一些特有的 method 可以用

### getPath

獲取檔案的下載路徑

| Parameters |  type  | Required |            Description            |
| :--------: | :----: | :------: | :-------------------------------: |
|  file_id   | string |   Yes    | File identifier to get info about |

### getFileDownloadUrl

獲取檔案的下載連結

| Parameters |  type  | Required |          Description          |
| :--------: | :----: | :------: | :---------------------------: |
|    Path    | string |   Yes    | [getPath](#getPath)回傳的結果 |
