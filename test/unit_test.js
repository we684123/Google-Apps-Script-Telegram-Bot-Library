function unit_test() {

  // @ts-ignore
  var logger = new BetterLogger.BetterLogger()
  var levels = logger.levels
  logger.set_level(levels.DEBUG)
  logger.set_sheet_id("1ADCWcQ3J7uXtRA8r5zRIz1qweAtfKD0E53eLGra66T8");
  logger.set_sheet_page_name("test")
  logger.set_use_sheet(true);
  logger.info("'================='")

  var bot = new tgbot("909196871:AAHFdyF9E_LhvjjPePs6JhNHVtDU79unK4I")
  var i = 0

  // i++;
  // logger.info("i = " + i);
  // try {
  //   logger.info("bot.deleteWebhook()")
  //   logger.info(bot.deleteWebhook())
  // } catch (error) {
  //   logger.error(error)
  // }
  //
  // i++;
  // logger.info("i = " + i);
  // try {
  //   logger.info("bot.getUpdates()")
  //   logger.info(bot.getUpdates())
  // } catch (error) {
  //   logger.error(error)
  // }
  //
  // i++;
  // logger.info("i = " + i);
  // try {
  //   logger.info("bot.setWebhook()")
  //   logger.info(bot.setWebhook({
  //     "url": "https://script.google.com/macros/s/AKfycbw3DyTC9Oh3j3uNukl4V8SUIn4sN3zAz1PkLw6OKwRdfbs-BW0F/exec",
  //     "max_connections": 1
  //   }))
  // } catch (error) {
  //   logger.error(error)
  // }
  //
  // i++;
  // logger.info("i = " + i);
  // try {
  //   logger.info("bot.getWebhookInfo()")
  //   logger.info(bot.getWebhookInfo())
  // } catch (error) {
  //   logger.error(error)
  // }
  //
  // i++;
  // logger.info("i = " + i);
  // try {
  //   logger.info("bot.getMe()")
  //   logger.info(bot.getMe())
  // } catch (error) {
  //   logger.error(error)
  // }
  //
  // i++;
  // logger.info("i = " + i);
  // try {
  //   logger.info("bot.sendMessage()")
  //   logger.info(bot.sendMessage({
  //     "chat_id": '207014603',
  //     "text": "030//",
  //   }))
  // } catch (error) {
  //   logger.error(error)
  // }

  var ReplyKeyboardMarkup = {
    "keyboard": [
      [{
        "text": "O"
      }, {
        "text": "X"
      }]
    ],
    "resize_keyboard": true,
    "one_time_keyboard": true
  }


  // i++;
  // logger.info("i = " + i);
  // try {
  //   logger.info("bot.sendMessage()")
  //   logger.info(bot.sendMessage({
  //     "chat_id": '207014603',
  //     "text": "[030//](google.com)",
  //     "parse_mode": "MarkdownV2",
  //     "disable_web_page_preview": true,
  //     "disable_notification": true,
  //     "reply_to_message_id": 1,
  //     "reply_markup": ReplyKeyboardMarkup
  //   }))
  // } catch (error) {
  //   logger.error(error)
  // }

  // i++;
  // logger.info("i = " + i);
  // try {
  //   logger.info("bot.forwardMessage()")
  //   logger.info(bot.forwardMessage({
  //     "chat_id": '207014603',
  //     "from_chat_id": "-1001097080770",
  //     "disable_notification": true,
  //     "message_id": 326,
  //   }))
  // } catch (error) {
  //   logger.error(error)
  // }

  // i++;
  // logger.info("i = " + i);
  // try {
  //   logger.info("bot.sendPhoto()")
  //   logger.info(bot.sendPhoto({
  //     "chat_id": '207014603',
  //     "photo": "https://imgur.com/B5744GN.png",
  //     'caption': "botsendPhoto\n**空閒**",
  //     'parse_mode': "MarkdownV2",
  //     'disable_notification': true,
  //     'reply_to_message_id': Number(30),
  //     'reply_markup': ReplyKeyboardMarkup
  //   }))
  // } catch (error) {
  //   logger.error(error)
  // }

  // var file_id = "16hmGxPccBoKICeKKSk1pHqdOz7kvC9rf"
  // i++;
  // logger.info("i = " + i);
  // try {
  //   logger.info("bot.sendAudio()")
  //   logger.info(bot.sendAudio({
  //     "chat_id": '207014603',
  //     "audio": DriveApp.getFileById(file_id).getBlob(),
  //     'caption': "botsendPhoto\n**敲敲敲**",
  //     'duration': Number(5),
  //     'performer': String("WE"),
  //     'parse_mode': "MarkdownV2",
  //     'disable_notification': true,
  //     'reply_to_message_id': Number(45),
  //     'reply_markup': ReplyKeyboardMarkup
  //   }))
  // } catch (error) {
  //   logger.error(error)
  // }

  // var file_id1 = "1vEetP-UezN79UXRhbtI78ldqTZv8ziJ1"
  // var file_id2 = "1Y02FXMKdFD1IpZGg5RgSNlLLWQjNc6d_"
  // i++;
  // logger.info("i = " + i);
  // try {
  //   logger.info("bot.sendDocument()")
  //   logger.info(bot.sendDocument({
  //     "chat_id": '207014603',
  //     "document": DriveApp.getFileById(file_id1).getBlob(),
  //     'thumb': DriveApp.getFileById(file_id2).getBlob(),
  //     'caption': "sendDocument\n**文件**",
  //     'duration': Number(5),
  //     'performer': String("WE"),
  //     'parse_mode': "MarkdownV2",
  //     'disable_notification': true,
  //     'reply_to_message_id': Number(45),
  //     'reply_markup': ReplyKeyboardMarkup
  //   }))
  // } catch (error) {
  //   logger.error(error)
  // }

  // var file_id1 = "1XNmIIbH-t-l0S-dFLHiCrTRBUnHpkREH"
  // i++;
  // logger.info("i = " + i);
  // try {
  //   logger.info("bot.sendVideo()")
  //   logger.info(bot.sendVideo({
  //     "chat_id": '207014603',
  //     "video": DriveApp.getFileById(file_id1).getBlob(),
  //     'duration': Number(3),
  //     'width': Number(1080),
  //     'height': Number(1920),
  //   }))
  // } catch (error) {
  //   logger.error(error)
  // }

  // i++;
  // logger.info("i = " + i);
  // try {
  //   logger.info("bot.sendAnimation()")
  //   logger.info(bot.sendAnimation({
  //     "chat_id": '207014603',
  //     "animation": "https://media.giphy.com/media/S8MpS9WdQb98uHse9P/giphy.gif",
  //   }))
  // } catch (error) {
  //   logger.error(error)
  // }

  // var file_id1 = "1XNmIIbH-t-l0S-dFLHiCrTRBUnHpkREH"
  // i++;
  // logger.info("i = " + i);
  // try {
  //   logger.info("bot.sendVoice()")
  //   logger.info(bot.sendVoice({
  //     "chat_id": '207014603',
  //     "voice": "AwACAgUAAxkBAANPXz0ZirFc3YhpQSkdls9ViGAZpXcAAjEBAAIW5-hV7eYfJXG125wbBA",
  //   }))
  // } catch (error) {
  //   logger.error(error)
  // }

  // i++;
  // logger.info("i = " + i);
  // try {
  //   logger.info("bot.sendVoice()")
  //   logger.info(bot.sendVoice({
  //     "chat_id": '207014603',
  //     "voice": "AwACAgUAAxkBAANPXz0ZirFc3YhpQSkdls9ViGAZpXcAAjEBAAIW5-hV7eYfJXG125wbBA",
  //   }))
  // } catch (error) {
  //   logger.error(error)
  // }

  // var file_id1 = "1XNmIIbH-t-l0S-dFLHiCrTRBUnHpkREH"
  // i++;
  // logger.info("i = " + i);
  // try {
  //   logger.info("bot.sendVideoNote()")
  //   logger.info(bot.sendVideoNote({
  //     "chat_id": '207014603',
  //     "video_note": DriveApp.getFileById(file_id1).getBlob(),
  //   }))
  // } catch (error) {
  //   logger.error(error)
  // }

  // i++;
  // logger.info("i = " + i);
  // try {
  //   logger.info("bot.sendMediaGroup()")
  //   var InputMediaPhoto1 = {
  //     "type":"video",
  //     "media":"BAACAgUAAxkBAANVXz5oRnhqL64hjn7cSehLZ4tAglIAAp0CAAIW5_hVaqDIhG5rxaUbBA",
  //   }
  //   var InputMediaPhoto2 = {
  //     "type":"photo",
  //     "media":"AgACAgUAAxkBAANUXz5m5Xeocvw_d5cAAe_BzeQ-qZ7dAAIcqjEbFuf4VaKfsSSEF43bFm0aa3QAAwEAAwIAA3kAA7XOBQABGwQ",
  //   }
  //   logger.info(bot.sendMediaGroup({
  //     "chat_id": '207014603',
  //     "media": [InputMediaPhoto1,InputMediaPhoto2],
  //   }))
  // } catch (error) {
  //   logger.error(error)
  // }

  i++;
  logger.info("i = " + i);
  var rt = ''
  try {
    logger.info("bot.sendLocation()")
    rt = bot.sendLocation({
      "chat_id": '207014603',
      "latitude": "24.065642",
      "longitude": 120.562652,
      "live_period": 60
    })
    logger.info(rt)
  } catch (error) {
    logger.error(error)
  }

  i++; // 需接續上面的才有用
  logger.info("i = " + i);
  var rt = JSON.parse(rt)
  try {
    logger.info("bot.editMessageLiveLocation()")
    logger.info(rt = bot.editMessageLiveLocation({
      "chat_id": '207014603',
      "message_id": rt.result.message_id,
      "latitude": "25.065642",
      "longitude": 121.562652,
    }))
  } catch (error) {
    logger.error(error)
  }

  i++; // 需接續上面的才有用
  logger.info("i = " + i);
  var rt = JSON.parse(rt)
  try {
    logger.info("bot.stopMessageLiveLocation()")
    logger.info(bot.stopMessageLiveLocation({
      "chat_id": '207014603',
      "message_id": rt.result.message_id,
    }))
  } catch (error) {
    logger.error(error)
  }




}