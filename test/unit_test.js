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

  var test_me_char_id = '207014603'
  var test_sg_char_id = '-1001097080770'
  var test_us_char_id = '808968740'

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.deleteWebhook()")
    logger.info(bot.deleteWebhook())
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.getUpdates()")
    logger.info(bot.getUpdates())
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.setWebhook()")
    logger.info(bot.setWebhook({
      "url": "https://script.google.com/macros/s/AKfycbw3DyTC9Oh3j3uNukl4V8SUIn4sN3zAz1PkLw6OKwRdfbs-BW0F/exec",
      "max_connections": 1
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.getWebhookInfo()")
    logger.info(bot.getWebhookInfo())
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.getMe()")
    logger.info(bot.getMe())
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.sendMessage()")
    logger.info(bot.sendMessage({
      "chat_id": '207014603',
      "text": "030//",
    }))
  } catch (error) {
    logger.error(error)
  }

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


  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.sendMessage()")
    logger.info(bot.sendMessage({
      "chat_id": '207014603',
      "text": "[030//](google.com)",
      "parse_mode": "MarkdownV2",
      "disable_web_page_preview": true,
      "disable_notification": true,
      "reply_to_message_id": 1,
      "reply_markup": ReplyKeyboardMarkup
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.forwardMessage()")
    logger.info(bot.forwardMessage({
      "chat_id": '207014603',
      "from_chat_id": "-1001097080770",
      "disable_notification": true,
      "message_id": 326,
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.sendPhoto()")
    logger.info(bot.sendPhoto({
      "chat_id": '207014603',
      "photo": "https://imgur.com/B5744GN.png",
      'caption': "botsendPhoto\n**空閒**",
      'parse_mode': "MarkdownV2",
      'disable_notification': true,
      'reply_to_message_id': Number(30),
      'reply_markup': ReplyKeyboardMarkup
    }))
  } catch (error) {
    logger.error(error)
  }

  var file_id = "16hmGxPccBoKICeKKSk1pHqdOz7kvC9rf"
  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.sendAudio()")
    logger.info(bot.sendAudio({
      "chat_id": '207014603',
      "audio": DriveApp.getFileById(file_id).getBlob(),
      'caption': "botsendPhoto\n**敲敲敲**",
      'duration': Number(5),
      'performer': String("WE"),
      'parse_mode': "MarkdownV2",
      'disable_notification': true,
      'reply_to_message_id': Number(45),
      'reply_markup': ReplyKeyboardMarkup
    }))
  } catch (error) {
    logger.error(error)
  }

  var file_id1 = "1vEetP-UezN79UXRhbtI78ldqTZv8ziJ1"
  var file_id2 = "1Y02FXMKdFD1IpZGg5RgSNlLLWQjNc6d_"
  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.sendDocument()")
    logger.info(bot.sendDocument({
      "chat_id": '207014603',
      "document": DriveApp.getFileById(file_id1).getBlob(),
      'thumb': DriveApp.getFileById(file_id2).getBlob(),
      'caption': "sendDocument\n**文件**",
      'duration': Number(5),
      'performer': String("WE"),
      'parse_mode': "MarkdownV2",
      'disable_notification': true,
      'reply_to_message_id': Number(45),
      'reply_markup': ReplyKeyboardMarkup
    }))
  } catch (error) {
    logger.error(error)
  }

  var file_id1 = "1XNmIIbH-t-l0S-dFLHiCrTRBUnHpkREH"
  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.sendVideo()")
    logger.info(bot.sendVideo({
      "chat_id": '207014603',
      "video": DriveApp.getFileById(file_id1).getBlob(),
      'duration': Number(3),
      'width': Number(1080),
      'height': Number(1920),
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.sendAnimation()")
    logger.info(bot.sendAnimation({
      "chat_id": '207014603',
      "animation": "https://media.giphy.com/media/S8MpS9WdQb98uHse9P/giphy.gif",
    }))
  } catch (error) {
    logger.error(error)
  }

  var file_id1 = "1XNmIIbH-t-l0S-dFLHiCrTRBUnHpkREH"
  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.sendVoice()")
    logger.info(bot.sendVoice({
      "chat_id": '207014603',
      "voice": "AwACAgUAAxkBAANPXz0ZirFc3YhpQSkdls9ViGAZpXcAAjEBAAIW5-hV7eYfJXG125wbBA",
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.sendVoice()")
    logger.info(bot.sendVoice({
      "chat_id": '207014603',
      "voice": "AwACAgUAAxkBAANPXz0ZirFc3YhpQSkdls9ViGAZpXcAAjEBAAIW5-hV7eYfJXG125wbBA",
    }))
  } catch (error) {
    logger.error(error)
  }

  var file_id1 = "1XNmIIbH-t-l0S-dFLHiCrTRBUnHpkREH"
  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.sendVideoNote()")
    logger.info(bot.sendVideoNote({
      "chat_id": '207014603',
      "video_note": DriveApp.getFileById(file_id1).getBlob(),
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.sendMediaGroup()")
    var InputMediaPhoto1 = {
      "type":"video",
      "media":"BAACAgUAAxkBAANVXz5oRnhqL64hjn7cSehLZ4tAglIAAp0CAAIW5_hVaqDIhG5rxaUbBA",
    }
    var InputMediaPhoto2 = {
      "type":"photo",
      "media":"AgACAgUAAxkBAANUXz5m5Xeocvw_d5cAAe_BzeQ-qZ7dAAIcqjEbFuf4VaKfsSSEF43bFm0aa3QAAwEAAwIAA3kAA7XOBQABGwQ",
    }
    logger.info(bot.sendMediaGroup({
      "chat_id": '207014603',
      "media": [InputMediaPhoto1,InputMediaPhoto2],
    }))
  } catch (error) {
    logger.error(error)
  }

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

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.sendVenue()")
    logger.info(bot.sendVenue({
      "chat_id": '207014603',
      "latitude": "25.065642",
      "longitude": 121.562652,
      "title" : '030//',
      "address" : '0X路32號',
      "foursquare_type":"food/icecream",
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.sendContact()")
    logger.info(bot.sendContact({
      "chat_id": '207014603',
      "phone_number" : '0800000123',
      "first_name" : '王',
      "last_name" : '小名',
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.sendPoll()")
    logger.info(bot.sendPoll({
      "chat_id": '207014603',
      "question" : '午餐?',
      "options" : ["西瓜","芒果","榴槤"],
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.sendDice()")
    logger.info(bot.sendDice({
      "chat_id": '207014603',
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.sendChatAction()")
    logger.info(bot.sendChatAction({
      "chat_id": '207014603',
      "action":"typing",
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.getUserProfilePhotos()")
    logger.info(bot.getUserProfilePhotos({
      "user_id": '207014603',
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.getUserProfilePhotos()")
    logger.info(bot.getUserProfilePhotos({
      "user_id": '207014603',
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.kickChatMember()")
    logger.info(bot.kickChatMember({
      "chat_id": '-1001097080770',
      "user_id": '808968740',
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.unbanChatMember()")
    logger.info(bot.unbanChatMember({
      "chat_id": '-1001097080770',
      "user_id": '808968740',
    }))
  } catch (error) {
    logger.error(error)
  }

  i++; //NU
  logger.info("i = " + i);
  try {
    logger.info("bot.kickChatMember()")
    logger.info(bot.kickChatMember({
      "chat_id": '-1001097080770',
      "user_id": '808968740',
      "until_date": 35
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.unbanChatMember()")
    logger.info(bot.unbanChatMember({
      "chat_id": '-1001097080770',
      "user_id": '808968740',
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    var permissions = {
      "can_send_messages":true,
      "can_send_media_messages":true,
      "can_send_polls":true,
      "can_send_other_messages":true,
      "can_add_web_page_previews":true,
      "can_change_info":true,
      "can_invite_users":true,
      "can_pin_messages":true,
    }
    logger.info("bot.restrictChatMember()")
    logger.info(bot.restrictChatMember({
      "chat_id": '-1001097080770',
      "user_id": '808968740',
      "permissions":permissions
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.promoteChatMember()")
    logger.info(bot.promoteChatMember({
      "chat_id": '-1001097080770',
      "user_id": '808968740',
      "can_pin_messages":true
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.setChatAdministratorCustomTitle()")
    logger.info(bot.setChatAdministratorCustomTitle({
      "chat_id": '-1001097080770',
      "user_id": '808968740',
      "custom_title": "幸運星⭐"
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    var permissions = {
        "can_change_info":true,
      }
    logger.info("bot.setChatPermissions()")
    logger.info(bot.setChatPermissions({
      "chat_id": '-1001097080770',
      "user_id": '808968740',
      "permissions":permissions
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.exportChatInviteLink()")
    logger.info(bot.exportChatInviteLink({
      "chat_id": '-1001097080770',
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    var file_id = "1Y02FXMKdFD1IpZGg5RgSNlLLWQjNc6d_"
    logger.info("bot.setChatPhoto()")
    logger.info(bot.setChatPhoto({
      "chat_id": '-1001097080770',
      'photo': DriveApp.getFileById(file_id).getBlob()
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.deleteChatPhoto()")
    logger.info(bot.deleteChatPhoto({
      "chat_id": '-1001097080770',
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.setChatTitle()")
    logger.info(bot.setChatTitle({
      "chat_id": '-1001097080770',
      "title": '逆流(超級)',
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.pinChatMessage()")
    logger.info(bot.pinChatMessage({
      "chat_id": '-1001097080770',
      "message_id": 347,
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.unpinChatMessage()")
    logger.info(bot.unpinChatMessage({
      "chat_id": '-1001097080770',
      "message_id": 347,
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.leaveChat()")
    logger.info(bot.leaveChat({
      "chat_id": '-1001097080770',
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.getChat()")
    logger.info(bot.getChat({
      "chat_id": '-1001097080770',
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.getChatAdministrators()")
    logger.info(bot.getChatAdministrators({
      "chat_id": '-1001097080770',
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.getChatMembersCount()")
    logger.info(bot.getChatMembersCount({
      "chat_id": '-1001097080770',
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.getChatMember()")
    logger.info(bot.getChatMember({
      "chat_id": '-1001097080770',
      "user_id": test_me_char_id
    }))
  } catch (error) {
    logger.error(error)
  }

  i++; // 因為人數未達100人
  logger.info("i = " + i);
  try {
    logger.info("bot.setChatStickerSet()")
    logger.info(bot.setChatStickerSet({
      "chat_id": '-1001097080770',
      "sticker_set_name": "meme_72"
    }))
  } catch (error) {
    logger.error(error)
  }

  i++; // 因為人數未達100人
  logger.info("i = " + i);
  try {
    logger.info("bot.deleteChatStickerSet()")
    logger.info(bot.deleteChatStickerSet({
      "chat_id": '-1001097080770',
    }))
  } catch (error) {
    logger.error(error)
  }

  answerCallbackQuery 因為是回應型所以不測試了
  除非哪天有心情寫 userbot 測試

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.setMyCommands()")
    logger.info(bot.setMyCommands({
      "commands": [{"command":"help","description":"救救我啊我救我"}],
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.getMyCommands()")
    logger.info(bot.getMyCommands())
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.setMyCommands()")
    logger.info(bot.setMyCommands({
      "commands": [],
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.sendSticker()")
    logger.info(bot.sendSticker({
      "chat_id": test_me_char_id,
      "sticker": 'CAACAgUAAxkBAANuX0N8qEoLkBRzYp96Q-YzKh1uclAAAkIFAALJQ7UJ7Q1Nag_aYQkbBA',
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.sendSticker()")
    logger.info(bot.sendSticker({
      "chat_id": test_me_char_id,
      "sticker": 'CAACAgUAAxkBAANuX0N8qEoLkBRzYp96Q-YzKh1uclAAAkIFAALJQ7UJ7Q1Nag_aYQkbBA',
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.getStickerSet()")
    logger.info(bot.getStickerSet({
      "name": "unit_test_by_CiFang_bot",
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    var file_id = "1P2wK9hAM4MNo2VL8nGnPFlJYXhCj0xfz"
    logger.info("bot.uploadStickerFile()")
    logger.info(bot.uploadStickerFile({
      "user_id": test_me_char_id,
      "png_sticker": DriveApp.getFileById(file_id).getBlob(),
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    var file_id = "1xk4xfC2dre1ax9ixhXB8dKqAWA_1tLAr"
    logger.info("bot.createNewStickerSet()")
    logger.info(bot.createNewStickerSet({
      "user_id": test_me_char_id,
      "name": "unit_test_by_CiFang_bot",
      "title": "此方的unit_test",
      "png_sticker": DriveApp.getFileById(file_id).getBlob(),
      "emojis": "⭐"
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    var file_id = "1P2wK9hAM4MNo2VL8nGnPFlJYXhCj0xfz"
    logger.info("bot.uploadStickerFile()")
    logger.info(bot.uploadStickerFile({
      "user_id": test_me_char_id,
      "png_sticker": DriveApp.getFileById(file_id).getBlob(),
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.addStickerToSet()")
    logger.info(bot.addStickerToSet({
      "user_id": test_me_char_id,
      "name":"unit_test_by_CiFang_bot",
      "png_sticker":"BQACAgUAAxUAAV9Dh8RETrH39XROWYtMBDuPtHRIAAI_AQACP2UZVj4hNmpM6aq1GwQ",
      "emojis": "☂️"
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.setStickerPositionInSet()")
    logger.info(bot.setStickerPositionInSet({
      "sticker": "CAACAgUAAx0CQWQfwgACAWtfQ5P1mz4DhgZLcRHydITrin0MJQACrwADy8pWDJQZhMROQnQ3GwQ",
      "position":1
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    logger.info("bot.deleteStickerFromSet()")
    logger.info(bot.deleteStickerFromSet({
      "sticker": "CAACAgUAAx0CQWQfwgACAWtfQ5P1mz4DhgZLcRHydITrin0MJQACrwADy8pWDJQZhMROQnQ3GwQ",
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    var file_id = "1qZJwWFbukd17tfd3wV2bvD_nkvUAxgee"
    logger.info("bot.setStickerSetThumb()")
    logger.info(bot.setStickerSetThumb({
      "name": "unit_test_by_CiFang_bot",
      "user_id":test_me_char_id,
      "thumb":DriveApp.getFileById(file_id).getBlob(),
    }))
  } catch (error) {
    logger.error(error)
  }

  i++;
  logger.info("i = " + i);
  try {
    var InlineQueryResult = [{
      type: 'article',
      id: '1',
      title: "title1",
      input_message_content: {
        "message_text": "text1"
      }
    }, {
      type: 'article',
      id: '2',
      title: "title2",
      input_message_content: {
        "message_text": "text2"
      }
    }]
    logger.info("bot.answerInlineQuery()")
    logger.info(bot.answerInlineQuery({
      // inline_query_id 要及時生。 這個已通過
      "inline_query_id": contents.inline_query.id,
      "results": InlineQueryResult
    }))
  } catch (error) {
    logger.error(error)
  }






}
