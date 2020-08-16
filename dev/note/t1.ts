class tgbot4 {
  token: string
  api_url: string

  constructor(token: string) {
    this.token = token
    this.api_url = `https://api.telegram.org/bot${this.token}/`
  }

  public sendMessage(
    {
      chat_id = '',
      text = '',
      parse_mode = '',
      disable_web_page_preview = false,
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = '',
    }: {
        chat_id: string | number | undefined,
        text: string | undefined,
        parse_mode?: string | undefined,
        disable_web_page_preview?: Boolean | undefined,
        disable_notification?: Boolean | undefined,
        reply_to_message_id?: string | number | undefined,
        reply_markup?: any | undefined,
      } = {
        chat_id: '',
        text: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (disable_web_page_preview === false) this.miss_parameter("chat_id")
    let start_payload = {
      "method": "sendMessage",
      'chat_id': String(chat_id),
      'text': String(text),
      'parse_mode': parse_mode,
      'disable_web_page_preview': disable_web_page_preview,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
      'reply_markup': reply_markup,
    }
    return this.start(start_payload)
  }

  private miss_parameter(parameter: string) {
    throw new Error(`Missing ${parameter}`)
  }
  private start(payload: any) {
    let data = {
      "method": "post",
      "payload": payload
    }
    // @ts-ignore
    return UrlFetchApp.fetch(this.api_url, data);
  }
}
