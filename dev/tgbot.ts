class tgbot {
  token: string
  api_url: string

  constructor(token: string) {
    this.token = token
    this.api_url = `https://api.telegram.org/bot${this.token}/`
  }
  // === Getting updates ===
  public getUpdates({
    offset = '',
    limit = 100,
    timeout = 0,
    allowed_updates = ''
  } = {}
  ) {
    let payload = {
      "method": "getUpdates",
      "offset": offset,
      "limit": limit,
      "timeout": timeout,
      "allowed_updates": allowed_updates,
    }
    return this.start(payload)
  }

  public setWebhook({
    url = '',
    certificate = '',
    max_connections = 40,
    allowed_updates = ''
  } = {}
  ) {
    if (url === '') this.miss_parameter("url")
    let payload = {
      "method": "setWebhook",
      "url": url,
      "certificate": certificate,
      "max_connections": max_connections,
      "allowed_updates": allowed_updates,
    }
    return this.start(payload)
  }

  public deleteWebhook() {
    let payload = {
      "method": "deleteWebhook",
    }
    return this.start(payload)
  }

  public getWebhookInfo() {
    let payload = {
      "method": "getWebhookInfo",
    }
    return this.start(payload)
  }

  // === Available methods ===
  public getMe() {
    let payload = {
      "method": "getMe",
    }
    return this.start(payload)
  }

  public sendMessage(
    {
      chat_id = '',
      text = '',
      parse_mode = '',
      disable_web_page_preview = false,
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (text === '') this.miss_parameter("chat_id")
    let payload = {
      "method": "sendMessage",
      'chat_id': String(chat_id),
      'text': String(text),
      'parse_mode': parse_mode,
      'disable_web_page_preview': disable_web_page_preview,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
      'reply_markup': reply_markup
    }
    return this.start(payload)
  }

  public forwardMessage(
    {
      chat_id = '',
      from_chat_id = '',
      parse_mode = '',
      disable_notification = false,
      message_id = ''
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (from_chat_id === '') this.miss_parameter("from_chat_id")
    if (message_id === '') this.miss_parameter("message_id")
    let payload = {
      "method": "forwardMessage",
      'chat_id': String(chat_id),
      'from_chat_id': String(from_chat_id),
      'parse_mode': parse_mode,
      'disable_notification': disable_notification,
      'message_id': message_id
    }
    return this.start(payload)
  }

  public sendPhoto(
    {
      chat_id = '',
      photo = '',
      caption = '',
      parse_mode = '',
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (photo === '') this.miss_parameter("photo")
    let payload = {
      "method": "sendPhoto",
      'chat_id': String(chat_id),
      'photo': photo,
      'caption': caption,
      'parse_mode': parse_mode,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
      'reply_markup': reply_markup
    }
    return this.start(payload)
  }

  public sendAudio(
    {
      chat_id = '',
      audio = '',
      caption = '',
      parse_mode = '',
      duration = '',
      performer = '',
      title = '',
      thumb = '',
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (audio === '') this.miss_parameter("audio")
    let payload = {
      "method": "sendAudio",
      'chat_id': String(chat_id),
      'audio': audio,
      'caption': caption,
      'parse_mode': parse_mode,
      'duration': duration,
      'performer': performer,
      'title': title,
      'thumb': thumb,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
      'reply_markup': reply_markup
    }
    return this.start(payload)
  }

  public sendDocument(
    {
      chat_id = '',
      document = '',
      thumb = '',
      caption = '',
      parse_mode = '',
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (document === '') this.miss_parameter("document")
    let payload = {
      "method": "sendDocument",
      'chat_id': String(chat_id),
      'document': document,
      'thumb': thumb,
      'caption': caption,
      'parse_mode': parse_mode,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
      'reply_markup': reply_markup
    }
    return this.start(payload)
  }

  public sendVideo(
    {
      chat_id = '',
      video = '',
      duration = '',
      width = '',
      height = '',
      thumb = '',
      caption = '',
      parse_mode = '',
      supports_streaming = false,
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (video === '') this.miss_parameter("video")
    let payload = {
      "method": "sendVideo",
      'chat_id': String(chat_id),
      'video': video,
      'duration': duration,
      'width': width,
      'height': height,
      'thumb': thumb,
      'caption': caption,
      'parse_mode': parse_mode,
      'supports_streaming': supports_streaming,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
      'reply_markup': reply_markup
    }
    return this.start(payload)
  }

  public sendAnimation(
    {
      chat_id = '',
      animation = '',
      duration = '',
      width = '',
      height = '',
      thumb = '',
      caption = '',
      parse_mode = '',
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (animation === '') this.miss_parameter("animation")
    let payload = {
      "method": "sendAnimation",
      'chat_id': String(chat_id),
      'animation': animation,
      'duration': duration,
      'width': width,
      'height': height,
      'thumb': thumb,
      'caption': caption,
      'parse_mode': parse_mode,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
      'reply_markup': reply_markup
    }
    return this.start(payload)
  }

  public sendVoice(
    {
      chat_id = '',
      voice = '',
      duration = '',
      caption = '',
      parse_mode = '',
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (voice === '') this.miss_parameter("voice")
    let payload = {
      "method": "sendVoice",
      'chat_id': String(chat_id),
      'voice': voice,
      'duration': duration,
      'caption': caption,
      'parse_mode': parse_mode,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
      'reply_markup': reply_markup
    }
    return this.start(payload)
  }

  public sendVideoNote(
    {
      chat_id = '',
      video_note = '',
      duration = '',
      length = '',
      thumb = '',
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (video_note === '') this.miss_parameter("video_note")
    let payload = {
      "method": "sendVideoNote",
      'chat_id': String(chat_id),
      'video_note': video_note,
      'length': length,
      'duration': duration,
      'thumb': thumb,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
      'reply_markup': reply_markup
    }
    return this.start(payload)
  }

  public sendMediaGroup(
    {
      chat_id = '',
      media = '',
      disable_notification = false,
      reply_to_message_id = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (media === '') this.miss_parameter("media")
    let payload = {
      "method": "sendMediaGroup",
      'chat_id': String(chat_id),
      'media': media,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
    }
    return this.start(payload)
  }

  public sendLocation(
    {
      chat_id = '',
      latitude = '',
      longitude = '',
      live_period = '',
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (latitude === '') this.miss_parameter("latitude")
    if (longitude === '') this.miss_parameter("longitude")
    let payload = {
      "method": "sendLocation",
      'chat_id': String(chat_id),
      'latitude': latitude,
      'longitude': longitude,
      'live_period': live_period,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
      'reply_markup': reply_markup
    }
    return this.start(payload)
  }

  public editMessageLiveLocation(
    {
      chat_id = '',
      message_id = '',
      inline_message_id = '',
      latitude = '',
      longitude = '',
      reply_markup = ''
    } = {}
  ) {
    if (latitude === '') this.miss_parameter("latitude")
    if (longitude === '') this.miss_parameter("longitude")
    let payload = {
      "method": "editMessageLiveLocation",
      'chat_id': String(chat_id),
      'message_id': message_id,
      'inline_message_id': inline_message_id,
      'latitude': latitude,
      'longitude': longitude,
      'reply_markup': reply_markup
    }
    return this.start(payload)
  }

  public stopMessageLiveLocation(
    {
      chat_id = '',
      message_id = '',
      inline_message_id = '',
      reply_markup = ''
    } = {}
  ) {
    let payload = {
      "method": "stopMessageLiveLocation",
      'chat_id': String(chat_id),
      'message_id': message_id,
      'inline_message_id': inline_message_id,
      'reply_markup': reply_markup
    }
    return this.start(payload)
  }

  public sendVenue(
    {
      chat_id = '',
      latitude = '',
      longitude = '',
      title = '',
      address = '',
      foursquare_id = '',
      foursquare_type = '',
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (latitude === '') this.miss_parameter("latitude")
    if (longitude === '') this.miss_parameter("longitude")
    if (title === '') this.miss_parameter("title")
    if (address === '') this.miss_parameter("address")
    let payload = {
      "method": "sendVenue",
      'chat_id': String(chat_id),
      'latitude': latitude,
      'longitude': longitude,
      'title': title,
      'address': address,
      'foursquare_id':foursquare_id,
      'foursquare_type':foursquare_type,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
      'reply_markup': reply_markup
    }
    return this.start(payload)
  }

  public sendContact(
    {
      chat_id = '',
      phone_number = '',
      first_name = '',
      last_name = '',
      vcard = '',
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (phone_number === '') this.miss_parameter("phone_number")
    if (first_name === '') this.miss_parameter("first_name")
    let payload = {
      "method": "sendContact",
      'chat_id': String(chat_id),
      'phone_number': phone_number,
      'first_name': first_name,
      'last_name': last_name,
      'vcard': vcard,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
      'reply_markup': reply_markup
    }
    return this.start(payload)
  }

  public sendPoll(
    {
      chat_id = '',
      question = '',
      options = '',
      is_anonymous = false,
      type = '',
      allows_multiple_answers = false,
      correct_option_id = '',
      explanation = '',
      explanation_parse_mode = '',
      open_period = '',
      close_date = '',
      is_closed = false,
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (question === '') this.miss_parameter("question")
    if (options === '') this.miss_parameter("options")
    let payload = {
      "method": "sendPoll",
      'chat_id': String(chat_id),
      'question': question,
      'options': options,
      'is_anonymous': is_anonymous,
      'type': type,
      'allows_multiple_answers': allows_multiple_answers,
      'correct_option_id': correct_option_id,
      'explanation': explanation,
      'explanation_parse_mode': explanation_parse_mode,
      'open_period': open_period,
      'close_date': close_date,
      'is_closed': is_closed,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
      'reply_markup': reply_markup
    }
    return this.start(payload)
  }

  public sendDice(
    {
      chat_id = '',
      emoji = '',
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let payload = {
      "method": "sendDice",
      'chat_id': String(chat_id),
      'emoji': emoji,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
      'reply_markup': reply_markup
    }
    return this.start(payload)
  }

  public sendChatAction(
    {
      chat_id = '',
      action = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (action === '') this.miss_parameter("action")
    let payload = {
      "method": "sendChatAction",
      'chat_id': String(chat_id),
      'action': action,
    }
    return this.start(payload)
  }

  // === private 自家der方法 ===
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
