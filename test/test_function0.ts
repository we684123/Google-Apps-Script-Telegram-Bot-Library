function unit_test2() {

  // @ts-ignore
  var logger = new BetterLogger.BetterLogger()
  var levels = logger.levels
  logger.set_level(levels.DEBUG)
  logger.set_sheet_id("1ADCWcQ3J7uXtRA8r5zRIz1qweAtfKD0E53eLGra66T8");
  logger.set_sheet_page_name("test")
  logger.set_use_sheet(true);

  var bot22 = new tgbot4("909196871:AAHFdyF9E_LhvjjPePs6JhNHVtDU79unK4I")
  var i = 0


  i++
  logger.info("i = " + i);
  try {
    logger.info("bot.sendMessage()")
    logger.info(bot22.sendMessage({
      "chat_id": '207014603',
      "text": "030//",
    })
    )
  } catch (error) { logger.error(error) }

  bot22.sendMessage({"chat_id":123,'text':''})


}
