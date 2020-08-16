function unit_test() {

  // @ts-ignore
  var logger = new BetterLogger.BetterLogger()
  var levels = logger.levels
  logger.set_level(levels.DEBUG)
  logger.set_sheet_id("1ADCWcQ3J7uXtRA8r5zRIz1qweAtfKD0E53eLGra66T8");
  logger.set_sheet_page_name("test")
  logger.set_use_sheet(true);

  var bot = new tgbot("909196871:AAHFdyF9E_LhvjjPePs6JhNHVtDU79unK4I")
  var i = 0

  i++
  logger.info("i = " + i);
  try {
    logger.info("bot.deleteWebhook()")
    logger.info(bot.deleteWebhook())
  } catch (error) { logger.error(error) }

  i++
  logger.info("i = " + i);
  try {
    logger.info("bot.getUpdates()")
    logger.info(bot.getUpdates())
  } catch (error) { logger.error(error) }

  i++
  logger.info("i = " + i);
  try {
    logger.info("bot.setWebhook()")
    logger.info(bot.setWebhook({
      "url": "https://script.google.com/macros/s/AKfycbw3DyTC9Oh3j3uNukl4V8SUIn4sN3zAz1PkLw6OKwRdfbs-BW0F/exec",
      "max_connections": 1
    })
    )
  } catch (error) { logger.error(error) }

  i++
  logger.info("i = " + i);
  try {
    logger.info("bot.getWebhookInfo()")
    logger.info(bot.getWebhookInfo()
    )
  } catch (error) { logger.error(error) }

  i++
  logger.info("i = " + i);
  try {
    logger.info("bot.getMe()")
    logger.info(bot.getMe()
    )
  } catch (error) { logger.error(error) }

  i++
  logger.info("i = " + i);
  try {
    logger.info("bot.sendMessage()")
    logger.info(bot.sendMessage({
      "chat_id": '207014603',
      "text": "030//",
    })
    )
  } catch (error) { logger.error(error) }

  i++
  logger.info("i = " + i);
  try {
    logger.info("bot.sendMessage()")
    logger.info(bot.sendMessage({
      "chat_id": "207014603",
      "text": "*bold \*text* _italic \*text_",
      "parse_mode": "MarkdownV2",
      "disable_web_page_preview": true,
      "reply_to_message_id": 15,

    })
    )
  } catch (error) { logger.error(error) }


















}
