/** Telegram bot class */
export class tgbot {
  token: string
  api_url: string

  /**
  * @param {string} token - The bot token
  */
  constructor(token: string) {
    this.token = token
    this.api_url = `https://api.telegram.org/bot${this.token}/`
  }

  // === Getting updates ===
  // 怎麼沒有用r QQ
  /**
   * @param {object} options
   * @param {number} options.offset - offset
   * @param {number} options.limit - limit
   * @param {number} options.timeout - timeout
   * @param {string[]} options.allowed_updates - allowed_updates
  */
  public getUpdates(
    {
      offset = '',
      limit = 100,
      timeout = 0,
      allowed_updates = ''
    }: {
        offset?: number | string,
        limit?: number,
        timeout?: number,
        allowed_updates?: string | string[],
      } = {}
  ) {
    /**
   * @param {object} options
   * @param {number} options.offset - offset
   * @param {number} options.limit - limit
   * @param {number} options.timeout - timeout
   * @param {string[]} options.allowed_updates - allowed_updates
  */

    let start_payload = {
      "method": "getUpdates",
      "offset": offset,
      "limit": limit,
      "timeout": timeout,
      "allowed_updates": allowed_updates,
    }
    return this.start(start_payload)
  }

  public setWebhook({
    url = '',
    certificate = '',
    max_connections = 40,
    allowed_updates = []
  }: {
      url: string,
      certificate?: any,
      max_connections?: number,
      allowed_updates?: string[],
    } = {
      url: '',
    }
  ) {
    if (url === '') this.miss_parameter("url")
    let start_payload = {
      "method": "setWebhook",
      "url": url,
      "certificate": certificate,
      "max_connections": max_connections,
      "allowed_updates": allowed_updates,
    }
    return this.start(start_payload)
  }

  public deleteWebhook() {
    let start_payload = {
      "method": "deleteWebhook",
    }
    return this.start(start_payload)
  }

  public getWebhookInfo() {
    let start_payload = {
      "method": "getWebhookInfo",
    }
    return this.start(start_payload)
  }

  // === Available methods ===
  public getMe() {
    let start_payload = {
      "method": "getMe",
    }
    return this.start(start_payload)
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
        chat_id: string | number,
        text: string,
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
    if (text === '') this.miss_parameter("chat_id")
    let start_payload = {
      "method": "sendMessage",
      'chat_id': String(chat_id),
      'text': String(text),
      'parse_mode': String(parse_mode),
      'disable_web_page_preview': Boolean(disable_web_page_preview),
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public forwardMessage(
    {
      chat_id = '',
      from_chat_id = '',
      disable_notification = false,
      message_id = ''
    }: {
        chat_id: string | number,
        from_chat_id: string | number,
        disable_notification?: boolean,
        message_id: string | number,
      } = {
        chat_id: '',
        from_chat_id: '',
        message_id: ''
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (from_chat_id === '') this.miss_parameter("from_chat_id")
    if (message_id === '') this.miss_parameter("message_id")
    let start_payload = {
      "method": "forwardMessage",
      'chat_id': String(chat_id),
      'from_chat_id': String(from_chat_id),
      'disable_notification': Boolean(disable_notification),
      'message_id': Number(message_id)
    }
    return this.start(start_payload)
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
    }: {
        chat_id: string | number,
        photo: any,
        caption?: string,
        parse_mode?: string,
        disable_notification?: boolean,
        reply_to_message_id?: string | number,
        reply_markup?: any,
      } = {
        chat_id: '',
        photo: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (photo === '') this.miss_parameter("photo")
    let start_payload = {
      "method": "sendPhoto",
      'chat_id': String(chat_id),
      'photo': photo,
      'caption': String(caption),
      'parse_mode': String(parse_mode),
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
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
    }: {
        chat_id: string | number,
        audio: any,
        caption?: string,
        parse_mode?: string,
        duration?: number | string,
        performer?: string,
        title?: string,
        thumb?: any,
        disable_notification?: boolean,
        reply_to_message_id?: string | number,
        reply_markup?: any,
      } = {
        chat_id: '',
        audio: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (audio === '') this.miss_parameter("audio")
    let start_payload = {
      "method": "sendAudio",
      'chat_id': String(chat_id),
      'audio': audio,
      'caption': String(caption),
      'parse_mode': String(parse_mode),
      'duration': Number(duration),
      'performer': String(performer),
      'title': String(title),
      'thumb': thumb,
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
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
    }: {
        chat_id: number | string,
        document: any,
        thumb?: any,
        caption?: string,
        parse_mode?: string,
        disable_notification?: boolean,
        reply_to_message_id?: number | string,
        reply_markup?: any,
      } = {
        chat_id: '',
        document: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (document === '') this.miss_parameter("document")
    let start_payload = {
      "method": "sendDocument",
      'chat_id': String(chat_id),
      'document': document,
      'thumb': thumb,
      'caption': String(caption),
      'parse_mode': String(parse_mode),
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
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
    }: {
        chat_id: number | string,
        video: any,
        duration?: number | string,
        width?: number | string,
        height?: number | string,
        thumb?: any,
        caption?: string,
        parse_mode?: string,
        supports_streaming?: boolean,
        disable_notification?: boolean,
        reply_to_message_id?: number | string,
        reply_markup?: any,
      } = {
        chat_id: '',
        video: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (video === '') this.miss_parameter("video")
    let start_payload = {
      "method": "sendVideo",
      'chat_id': String(chat_id),
      'video': video,
      'duration': Number(duration),
      'width': Number(width),
      'height': Number(height),
      'thumb': thumb,
      'caption': String(caption),
      'parse_mode': String(parse_mode),
      'supports_streaming': Boolean(supports_streaming),
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
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
    }: {
        chat_id: number | string,
        animation: any,
        duration?: number | string,
        width?: number | string,
        height?: number | string,
        thumb?: any,
        caption?: string,
        parse_mode?: string,
        disable_notification?: boolean,
        reply_to_message_id?: number | string,
        reply_markup?: any,
      } = {
        chat_id: '',
        animation: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (animation === '') this.miss_parameter("animation")
    let start_payload = {
      "method": "sendAnimation",
      'chat_id': String(chat_id),
      'animation': animation,
      'duration': Number(duration),
      'width': Number(width),
      'height': Number(height),
      'thumb': thumb,
      'caption': String(caption),
      'parse_mode': String(parse_mode),
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
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
    }: {
        chat_id: number | string,
        voice: any,
        duration?: number | string,
        caption?: string,
        parse_mode?: string,
        disable_notification?: boolean,
        reply_to_message_id?: number | string,
        reply_markup?: any,
      } = {
        chat_id: '',
        voice: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (voice === '') this.miss_parameter("voice")
    let start_payload = {
      "method": "sendVoice",
      'chat_id': String(chat_id),
      'voice': voice,
      'duration': Number(duration),
      'caption': String(caption),
      'parse_mode': String(parse_mode),
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
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
    }: {
        chat_id: number | string,
        video_note: any,
        duration?: number | string,
        length?: string,
        thumb?: any,
        disable_notification?: boolean,
        reply_to_message_id?: number | string,
        reply_markup?: any,
      } = {
        chat_id: '',
        video_note: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (video_note === '') this.miss_parameter("video_note")
    let start_payload = {
      "method": "sendVideoNote",
      'chat_id': String(chat_id),
      'video_note': video_note,
      'length': Number(length),
      'duration': Number(duration),
      'thumb': thumb,
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public sendMediaGroup(
    {
      chat_id = '',
      media = [],
      disable_notification = false,
      reply_to_message_id = '',
    }: {
        chat_id: number | string,
        media: any[],
        disable_notification?: boolean,
        reply_to_message_id?: number | string,
      }
      = {
        chat_id: '',
        media: [],
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (media === []) this.miss_parameter("media")
    let start_payload = {
      "method": "sendMediaGroup",
      'chat_id': String(chat_id),
      'media': JSON.stringify(media),
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
    }
    return this.start(start_payload)
  }

  public sendLocation(
    {
      chat_id = '',
      latitude = '',
      longitude = '',
      live_period = null,
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    }: {
        chat_id: number | string,
        latitude: number | string,
        longitude: number | string,
        live_period?: number | null,
        disable_notification?: boolean,
        reply_to_message_id?: number | string,
        reply_markup?: any,
      } = {
        chat_id: '',
        latitude: '',
        longitude: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (latitude === '') this.miss_parameter("latitude")
    if (longitude === '') this.miss_parameter("longitude")
    let start_payload = {
      "method": "sendLocation",
      'chat_id': String(chat_id),
      'latitude': Number(latitude),
      'longitude': Number(longitude),
      'live_period': Number(live_period),
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public editMessageLiveLocation(
    {
      chat_id = '',
      message_id = null,
      inline_message_id = '',
      latitude = null,
      longitude = null,
      reply_markup = ''
    }: {
        chat_id?: number | string,
        message_id?: number | null,
        inline_message_id?: string,
        latitude: number | null,
        longitude: number | null,
        reply_markup?: any,
      } = {
        latitude: null,
        longitude: null,
      }
  ) {
    if (latitude === null) this.miss_parameter("latitude")
    if (longitude === null) this.miss_parameter("longitude")
    let start_payload = {
      "method": "editMessageLiveLocation",
      'chat_id': String(chat_id),
      'message_id': Number(message_id),
      'inline_message_id': String(inline_message_id),
      'latitude': Number(latitude),
      'longitude': Number(longitude),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public stopMessageLiveLocation(
    {
      chat_id = '',
      message_id = null,
      inline_message_id = '',
      reply_markup = ''
    }: {
        chat_id?: number | string,
        message_id?: number | null,
        inline_message_id?: string,
        reply_markup?: any,
      } = {}
  ) {
    let start_payload = {
      "method": "stopMessageLiveLocation",
      'chat_id': String(chat_id),
      'message_id': Number(message_id),
      'inline_message_id': String(inline_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public sendVenue(
    {
      chat_id = '',
      latitude = null,
      longitude = null,
      title = '',
      address = '',
      foursquare_id = '',
      foursquare_type = '',
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    }: {
        chat_id: number | string,
        latitude: number | null,
        longitude: number | null,
        title: string,
        address: string,
        foursquare_id?: string,
        foursquare_type?: string,
        disable_notification?: boolean,
        reply_to_message_id?: number | string,
        reply_markup?: any,
      } = {
        chat_id: '',
        latitude: null,
        longitude: null,
        title: '',
        address: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (latitude === null) this.miss_parameter("latitude")
    if (longitude === null) this.miss_parameter("longitude")
    if (title === '') this.miss_parameter("title")
    if (address === '') this.miss_parameter("address")
    let start_payload = {
      "method": "sendVenue",
      'chat_id': String(chat_id),
      'latitude': Number(latitude),
      'longitude': Number(longitude),
      'title': String(title),
      'address': String(address),
      'foursquare_id': String(foursquare_id),
      'foursquare_type': String(foursquare_type),
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
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
    }: {
        chat_id: number | string,
        phone_number: string,
        first_name: string,
        last_name?: string,
        vcard?: string,
        disable_notification?: boolean,
        reply_to_message_id?: number | string,
        reply_markup?: any,
      } = {
        chat_id: '',
        phone_number: '',
        first_name: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (phone_number === '') this.miss_parameter("phone_number")
    if (first_name === '') this.miss_parameter("first_name")
    let start_payload = {
      "method": "sendContact",
      'chat_id': String(chat_id),
      'phone_number': String(phone_number),
      'first_name': String(first_name),
      'last_name': String(last_name),
      'vcard': String(vcard),
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public sendPoll(
    {
      chat_id = '',
      question = '',
      options = [],
      is_anonymous = false,
      type = 'regular',
      allows_multiple_answers = false,
      correct_option_id = null,
      explanation = '',
      explanation_parse_mode = '',
      open_period = null,
      close_date = null,
      is_closed = false,
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    }: {
        chat_id: number | string,
        question: string,
        options: string[],
        is_anonymous?: boolean,
        type?: string,
        allows_multiple_answers?: boolean,
        correct_option_id?: number | null,
        explanation?: string,
        explanation_parse_mode?: string,
        open_period?: number | null,
        close_date?: number | null,
        is_closed?: boolean,
        disable_notification?: boolean,
        reply_to_message_id?: number | string,
        reply_markup?: any,
      } = {
        chat_id: '',
        question: '',
        options: [],
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (question === '') this.miss_parameter("question")
    if (options === []) this.miss_parameter("options")
    let start_payload = {
      "method": "sendPoll",
      'chat_id': String(chat_id),
      'question': String(question),
      'options': JSON.stringify(options),
      'is_anonymous': Boolean(is_anonymous),
      'type': String(type),
      'allows_multiple_answers': Boolean(allows_multiple_answers),
      'correct_option_id': Number(correct_option_id),
      'explanation': String(explanation),
      'explanation_parse_mode': String(explanation_parse_mode),
      'open_period': Number(open_period),
      'close_date': Number(close_date),
      'is_closed': Boolean(is_closed),
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public sendDice(
    {
      chat_id = '',
      emoji = '',
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    }: {
        chat_id: number | string,
        emoji?: string,
        disable_notification?: boolean,
        reply_to_message_id?: number | string,
        reply_markup?: any,
      } = {
        chat_id: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let start_payload = {
      "method": "sendDice",
      'chat_id': String(chat_id),
      'emoji': String(emoji),
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public sendChatAction(
    {
      chat_id = '',
      action = '',
    }: {
        chat_id: number | string,
        action: string,
      } = {
        chat_id: '',
        action: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (action === '') this.miss_parameter("action")
    let start_payload = {
      "method": "sendChatAction",
      'chat_id': String(chat_id),
      'action': String(action),
    }
    return this.start(start_payload)
  }

  public getUserProfilePhotos(
    {
      user_id = '',
      offset = null,
      limit = 100,
    }: {
        user_id: string | number,
        offset?: number | null,
        limit?: number
      } = {
        user_id: '',
      }
  ) {
    if (user_id === '') this.miss_parameter("user_id")
    let start_payload = {
      "method": "getUserProfilePhotos",
      'user_id': String(user_id), // 對... 官網寫Integer	，但是要String
      "offset": Number(offset),
      "limit": Number(limit),
    }
    return this.start(start_payload)
  }

  public getFile(
    {
      file_id = '',
    }: {
        file_id: string,
      } = {
        file_id: '',
      }
  ) {
    if (file_id === '') this.miss_parameter("file_id")
    let start_payload = {
      "method": "getFile",
      'file_id': String(file_id),
    }
    return this.start(start_payload)
  }

  public kickChatMember(
    // kickChatMember TG會忽略掉 until_date 參數，需要再行實驗觀察
    {
      chat_id = '',
      user_id = '',
      until_date = null
    }: {
        chat_id: number | string,
        user_id: string,
        until_date?: number | null,
      } = {
        chat_id: '',
        user_id: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (user_id === '') this.miss_parameter("user_id")
    let start_payload = {
      "method": "kickChatMember",
      'chat_id': String(chat_id),
      'user_id': String(user_id),
      'until_date': Number(until_date)
    }
    return this.start(start_payload)
  }

  public unbanChatMember(
    {
      chat_id = '',
      user_id = '',
    }: {
        chat_id: number | string,
        user_id: string,
      } = {
        chat_id: '',
        user_id: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (user_id === '') this.miss_parameter("user_id")
    let start_payload = {
      "method": "unbanChatMember",
      'chat_id': String(chat_id),
      'user_id': String(user_id),
    }
    return this.start(start_payload)
  }

  public restrictChatMember(
    {
      chat_id = '',
      user_id = '',
      permissions = {},
      until_date = null
    }: {
        chat_id: number | string,
        user_id: number | string,
        permissions: object,
        until_date?: number | null,
      } = {
        chat_id: '',
        user_id: '',
        permissions: {},
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (user_id === '') this.miss_parameter("user_id")
    if (permissions === {}) this.miss_parameter("permissions")
    let start_payload = {
      "method": "restrictChatMember",
      'chat_id': String(chat_id),
      'user_id': String(user_id), // 對... 官網寫Integer	，但是要String
      'permissions': JSON.stringify(permissions),
      'until_date': Number(until_date)
    }
    return this.start(start_payload)
  }

  public promoteChatMember(
    // 如果要使用這個功能，bot需有 "新增管理員"的權限? 還是全部的權限?
    {
      chat_id = '',
      user_id = '',
      can_change_info = null,
      can_post_messages = null,
      can_edit_messages = null,
      can_delete_messages = null,
      can_invite_users = null,
      can_restrict_members = null,
      can_pin_messages = null,
      can_promote_members = null,
    }: {
        chat_id: number | string,
        user_id: number | string,
        can_change_info?: boolean | null,
        can_post_messages?: boolean | null,
        can_edit_messages?: boolean | null,
        can_delete_messages?: boolean | null,
        can_invite_users?: boolean | null,
        can_restrict_members?: boolean | null,
        can_pin_messages?: boolean | null,
        can_promote_members?: boolean | null,
      } = {
        chat_id: '',
        user_id: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (user_id === '') this.miss_parameter("user_id")
    let start_payload = {
      "method": "promoteChatMember",
      'chat_id': String(chat_id),
      'user_id': String(user_id), // 對... 官網寫Integer	，但是要String
      'can_change_info': Boolean(can_change_info),
      'can_post_messages': Boolean(can_post_messages),
      'can_edit_messages': Boolean(can_edit_messages),
      'can_delete_messages': Boolean(can_delete_messages),
      'can_invite_users': Boolean(can_invite_users),
      'can_restrict_members': Boolean(can_restrict_members),
      'can_pin_messages': Boolean(can_pin_messages),
      'can_promote_members': Boolean(can_promote_members),
    }
    return this.start(start_payload)
  }

  public setChatAdministratorCustomTitle(
    {
      chat_id = '',
      user_id = '',
      custom_title = '',
    }: {
        chat_id: number | string,
        user_id: number | string,
        custom_title: string,
      } = {
        chat_id: '',
        user_id: '',
        custom_title: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (user_id === '') this.miss_parameter("user_id")
    let start_payload = {
      "method": "setChatAdministratorCustomTitle",
      'chat_id': String(chat_id),
      'user_id': String(user_id), // 對... 官網寫Integer	，但是要String
      'custom_title': String(custom_title),
    }
    return this.start(start_payload)
  }

  public setChatPermissions(
    {
      chat_id = '',
      permissions = {},
    }: {
        chat_id: number | string,
        permissions: object,
      } = {
        chat_id: '',
        permissions: {},
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (permissions === {}) this.miss_parameter("permissions")
    let start_payload = {
      "method": "setChatPermissions",
      'chat_id': String(chat_id),
      'permissions': JSON.stringify(permissions),
    }
    return this.start(start_payload)
  }

  public exportChatInviteLink(
    {
      chat_id = '',
    }: {
        chat_id: number | string,
      } = { chat_id: '' }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let start_payload = {
      "method": "exportChatInviteLink",
      'chat_id': String(chat_id),
    }
    return this.start(start_payload)
  }

  public setChatPhoto(
    // 照片僅能用新的上傳
    {
      chat_id = '',
      photo = '',
    }: {
        chat_id: number | string,
        photo: any,
      } = {
        chat_id: '',
        photo: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (photo === '') this.miss_parameter("photo")
    let start_payload = {
      "method": "setChatPhoto",
      'chat_id': String(chat_id),
      'photo': photo,
    }
    return this.start(start_payload)
  }

  public deleteChatPhoto(
    {
      chat_id = '',
    }: {
        chat_id: number | string,
      } = {
        chat_id: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let start_payload = {
      "method": "deleteChatPhoto",
      'chat_id': String(chat_id),
    }
    return this.start(start_payload)
  }

  public setChatTitle(
    // 特別的是，如果名子一樣的話，也會回傳 true
    {
      chat_id = '',
      title = '',
    }: {
        chat_id: number | string,
        title: string,
      } = {
        chat_id: '',
        title: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (title === '') this.miss_parameter("title")
    let start_payload = {
      "method": "setChatTitle",
      'chat_id': String(chat_id),
      'title': String(title),
    }
    return this.start(start_payload)
  }

  public setChatDescription(
    {
      chat_id = '',
      description = '',
    }: {
        chat_id: number | string,
        description?: string,
      } = {
        chat_id: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let start_payload = {
      "method": "setChatDescription",
      'chat_id': String(chat_id),
      'description': String(description),
    }
    return this.start(start_payload)
  }

  public pinChatMessage(
    {
      chat_id = '',
      message_id = null,
      disable_notification = false,
    }: {
        chat_id: number | string,
        message_id: number | null,
        disable_notification?: boolean,
      } = {
        chat_id: '',
        message_id: null,
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (message_id === null) this.miss_parameter("message_id")
    let start_payload = {
      "method": "pinChatMessage",
      'chat_id': String(chat_id),
      'message_id': Number(message_id),
      'disable_notification': Boolean(disable_notification),
    }
    return this.start(start_payload)
  }

  public unpinChatMessage(
    {
      chat_id = '',
    }: {
        chat_id: number | string,
      } = {
        chat_id: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let start_payload = {
      "method": "unpinChatMessage",
      'chat_id': String(chat_id),
    }
    return this.start(start_payload)
  }

  public leaveChat(
    {
      chat_id = '',
    }: {
        chat_id: number | string,
      } = {
        chat_id: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let start_payload = {
      "method": "leaveChat",
      'chat_id': String(chat_id),
    }
    return this.start(start_payload)
  }

  public getChat(
    {
      chat_id = '',
    }: {
        chat_id: number | string,
      } = {
        chat_id: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let start_payload = {
      "method": "getChat",
      'chat_id': String(chat_id),
    }
    return this.start(start_payload)
  }

  public getChatAdministrators(
    {
      chat_id = '',
    }: {
        chat_id: number | string,
      } = {
        chat_id: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let start_payload = {
      "method": "getChatAdministrators",
      'chat_id': String(chat_id),
    }
    return this.start(start_payload)
  }

  public getChatMembersCount(
    {
      chat_id = '',
    }: {
        chat_id: number | string,
      } = {
        chat_id: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let start_payload = {
      "method": "getChatMembersCount",
      'chat_id': String(chat_id),
    }
    return this.start(start_payload)
  }

  public getChatMember(
    {
      chat_id = '',
      user_id = '',
    }: {
        chat_id: number | string,
        user_id: number | string,
      } = {
        chat_id: '',
        user_id: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (user_id === '') this.miss_parameter("user_id")
    let start_payload = {
      "method": "getChatMember",
      'chat_id': String(chat_id),
      'user_id': String(user_id), // 對... 官網寫Integer	，但是要String
    }
    return this.start(start_payload)
  }

  public setChatStickerSet(
    // 人數未達100人則無法設定
    {
      chat_id = '',
      sticker_set_name = '',
    }: {
        chat_id: number | string,
        sticker_set_name: string,
      } = {
        chat_id: '',
        sticker_set_name: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let start_payload = {
      "method": "setChatStickerSet",
      'chat_id': String(chat_id),
      'sticker_set_name': String(sticker_set_name),
    }
    return this.start(start_payload)
  }

  public deleteChatStickerSet(
    // 人數未達100人則無法設定
    {
      chat_id = '',
    }: {
        chat_id: number | string,
      } = {
        chat_id: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let start_payload = {
      "method": "deleteChatStickerSet",
      'chat_id': String(chat_id),
    }
    return this.start(start_payload)
  }

  public answerCallbackQuery(
    {
      callback_query_id = '',
      text = '',
      show_alert = false,
      url = '',
      cache_time = null,
    }: {
        callback_query_id?: string,
        text?: string,
        show_alert?: boolean,
        url?: string,
        cache_time?: number | null,
      } = {
        callback_query_id: '',
      }
  ) {
    if (callback_query_id === '') this.miss_parameter("callback_query_id")
    let start_payload = {
      "method": "answerCallbackQuery",
      'callback_query_id': String(callback_query_id),
      'text': String(text),
      'show_alert': Boolean(show_alert),
      'url': String(url),
      'cache_time': Number(cache_time),
    }
    return this.start(start_payload)
  }

  public setMyCommands(
    {
      commands = [],
    }: {
        commands: object[]
      } = {
        commands: [],
      }
  ) {
    if (commands === []) this.miss_parameter("commands")
    let start_payload = {
      "method": "setMyCommands",
      'commands': JSON.stringify(commands),
    }
    return this.start(start_payload)
  }

  public getMyCommands() {
    let start_payload = {
      "method": "getMyCommands",
    }
    return this.start(start_payload)
  }



  // === Updating messages ===
  public editMessageText(
    {
      chat_id = '',
      message_id = null,
      inline_message_id = '',
      text = '',
      parse_mode = '',
      disable_web_page_preview = false,
      reply_markup = ''
    }: {
        chat_id?: number | string,
        message_id?: number | null,
        inline_message_id?: string,
        text: string,
        parse_mode?: string,
        disable_web_page_preview?: boolean,
        reply_markup?: any,
      } = {
        text: '',
      }
  ) {
    if (text === '') this.miss_parameter("text")
    let start_payload = {
      "method": "editMessageText",
      'chat_id': String(chat_id),
      'message_id': String(message_id),
      'inline_message_id': String(inline_message_id),
      'text': String(text),
      'parse_mode': String(parse_mode),
      'disable_web_page_preview': Boolean(disable_web_page_preview),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public editMessageCaption(
    {
      chat_id = '',
      message_id = null,
      inline_message_id = '',
      caption = '',
      parse_mode = '',
      disable_web_page_preview = false,
      reply_markup = ''
    }: {
        chat_id?: number | string,
        message_id?: number | null,
        inline_message_id?: string,
        caption?: string,
        parse_mode?: string,
        disable_web_page_preview?: boolean,
        reply_markup?: any,
      } = {}
  ) {
    let start_payload = {
      "method": "editMessageCaption",
      'chat_id': String(chat_id),
      'message_id': String(message_id),
      'inline_message_id': String(inline_message_id),
      'caption': String(caption),
      'parse_mode': parse_mode,
      'disable_web_page_preview': disable_web_page_preview,
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public editMessageMedia(
    {
      chat_id = '',
      message_id = null,
      inline_message_id = '',
      media = {},
      reply_markup = ''
    }: {
        chat_id?: number | string,
        message_id?: number | null,
        inline_message_id?: string,
        media: object,
        reply_markup?: any,
      } = {
        media: {},
      }
  ) {
    if (media === {}) this.miss_parameter("media")
    let start_payload = {
      "method": "editMessageMedia",
      'chat_id': String(chat_id),
      'message_id': String(message_id),
      'inline_message_id': String(inline_message_id),
      'media': String(media),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public editMessageReplyMarkup(
    {
      chat_id = '',
      message_id = null,
      inline_message_id = '',
      reply_markup = ''
    }: {
        chat_id?: number | string,
        message_id?: number | null,
        inline_message_id?: string,
        reply_markup?: any,
      } = {}
  ) {
    let start_payload = {
      "method": "editMessageReplyMarkup",
      'chat_id': String(chat_id),
      'message_id': String(message_id),
      'inline_message_id': String(inline_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public stopPoll(
    {
      chat_id = '',
      message_id = null,
      reply_markup = ''
    }: {
        chat_id: number | string,
        message_id: number | null,
        reply_markup?: any,
      } = {
        chat_id: '',
        message_id: null,
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (message_id === null) this.miss_parameter("message_id")
    let start_payload = {
      "method": "stopPoll",
      'chat_id': String(chat_id),
      'message_id': String(message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public deleteMessage(
    {
      chat_id = '',
      message_id = null,
    }: {
        chat_id: number | string,
        message_id?: number | null,
      } = {
        chat_id: '',
        message_id: null,
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (message_id === null) this.miss_parameter("message_id")
    let start_payload = {
      "method": "deleteMessage",
      'chat_id': String(chat_id),
      'message_id': String(message_id),
    }
    return this.start(start_payload)
  }



  // === Stickers ===
  public sendSticker(
    {
      chat_id = '',
      sticker = '',
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = '',
    }: {
        chat_id: number | string,
        sticker: any,
        disable_notification?: boolean,
        reply_to_message_id?: number | string,
        reply_markup?: any,
      } = {
        chat_id: '',
        sticker: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (sticker === '') this.miss_parameter("sticker")
    let start_payload = {
      "method": "sendSticker",
      'chat_id': String(chat_id),
      'sticker': sticker,
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public getStickerSet(
    {
      name = '',
    }: {
        name: string,
      } = {
        name: '',
      }
  ) {
    if (name === '') this.miss_parameter("name")
    let start_payload = {
      "method": "getStickerSet",
      'name': String(name),
    }
    return this.start(start_payload)
  }

  public uploadStickerFile(
    {
      user_id = null,
      png_sticker = '',
    }: {
        user_id: number | null,
        png_sticker: any,
      } = {
        user_id: null,
        png_sticker: '',
      }
  ) {
    if (user_id === null) this.miss_parameter("user_id")
    if (png_sticker === '') this.miss_parameter("png_sticker")
    let start_payload = {
      "method": "uploadStickerFile",
      'user_id': String(user_id),
      'png_sticker': png_sticker,
    }
    return this.start(start_payload)
  }

  public createNewStickerSet(
    {
      user_id = null, //這個要數字的id
      name = '',
      title = '',
      png_sticker = '',
      tgs_sticker = '',
      emojis = '',
      contains_masks = false,
      mask_position = null
    }: {
        user_id: number | null,
        name: string,
        title: string,
        png_sticker?: any,
        tgs_sticker?: any,
        emojis: string,
        contains_masks?: boolean
        mask_position?: object | null,
      } = {
        user_id: null,
        name: '',
        title: '',
        emojis: '',
      }
  ) {
    if (user_id === null) this.miss_parameter("user_id")
    if (name === '') this.miss_parameter("name")
    if (title === '') this.miss_parameter("title")
    if (emojis === '') this.miss_parameter("emojis")
    let start_payload = {
      "method": "createNewStickerSet",
      'user_id': String(user_id),
      'name': String(name),
      'title': String(title),
      'png_sticker': png_sticker,
      'tgs_sticker': tgs_sticker,
      'emojis': String(emojis),
      'contains_masks': Boolean(contains_masks),
      'mask_position': mask_position == null ? null : JSON.stringify(mask_position),
    }
    return this.start(start_payload)
  }

  public addStickerToSet(
    {
      user_id = null,
      name = '',
      png_sticker = '',
      tgs_sticker = '',
      emojis = '',
      mask_position = null,
    }: {
        user_id: number | null,
        name: string,
        png_sticker?: any,
        tgs_sticker?: any,
        emojis: string,
        mask_position?: object | null,
      } = {
        user_id: null,
        name: '',
        emojis: '',
      }
  ) {
    if (user_id === null) this.miss_parameter("user_id")
    if (name === '') this.miss_parameter("name")
    if (emojis === '') this.miss_parameter("emojis")
    let start_payload = {
      "method": "addStickerToSet",
      'user_id': String(user_id),
      'name': String(name),
      'png_sticker': png_sticker,
      'tgs_sticker': tgs_sticker,
      'emojis': String(emojis),
      'mask_position': mask_position == null ? null : JSON.stringify(mask_position),
    }
    return this.start(start_payload)
  }

  public setStickerPositionInSet(
    {
      sticker = '',
      position = null,
    }: {
        sticker: string,
        position: number | null,
      } = {
        sticker: '',
        position: null,
      }
  ) {
    if (sticker === '') this.miss_parameter("sticker")
    if (position === null) this.miss_parameter("position")
    let start_payload = {
      "method": "setStickerPositionInSet",
      'sticker': String(sticker),
      'position': Number(position),
    }
    return this.start(start_payload)
  }

  public deleteStickerFromSet(
    {
      sticker = '',
    }: {
        sticker: string,
      } = {
        sticker: '',
      }
  ) {
    if (sticker === '') this.miss_parameter("sticker")
    let start_payload = {
      "method": "deleteStickerFromSet",
      'sticker': String(sticker),
    }
    return this.start(start_payload)
  }

  public setStickerSetThumb(
    {
      name = '',
      user_id = null,
      thumb = '',
    }: {
        name: string,
        user_id: number | null,
        thumb?: any,
      } = {
        user_id: null,
        name: '',
      }
  ) {
    if (name === '') this.miss_parameter("name")
    if (user_id === null) this.miss_parameter("user_id")
    let start_payload = {
      "method": "setStickerSetThumb",
      'name': String(name),
      'user_id': String(user_id),
      'thumb': thumb,
    }
    return this.start(start_payload)
  }


  // === Inline mode ===
  public answerInlineQuery(
    {
      inline_query_id = '',
      results = [],
      cache_time = null,
      is_personal = false,
      next_offset = '',
      switch_pm_text = '',
      switch_pm_parameter = '',
    }: {
        inline_query_id: string,
        results: object[],
        cache_time?: number | null,
        is_personal?: boolean,
        next_offset?: string,
        switch_pm_text?: string,
        switch_pm_parameter?: string,
      } = {
        inline_query_id: '',
        results: [],
      }
  ) {
    if (inline_query_id === '') this.miss_parameter("inline_query_id")
    if (results === []) this.miss_parameter("results")
    let start_payload = {
      "method": "answerInlineQuery",
      'inline_query_id': String(inline_query_id),
      'results': JSON.stringify(results),
      'cache_time': cache_time,
      'is_personal': Boolean(is_personal),
      'next_offset': String(next_offset),
      'switch_pm_text': String(switch_pm_text),
      'switch_pm_parameter': String(switch_pm_parameter),
    }
    return this.start(start_payload)
  }



  // === Payments ===
  public sendInvoice({
    chat_id = '',
    title = '',
    description = '',
    payload = '',
    provider_token = '',
    start_parameter = '',
    currency = '',
    prices = [],
    provider_data = '',
    photo_url = '',
    photo_size = null,
    photo_width = null,
    photo_height = null,
    need_name = false,
    need_phone_number = false,
    need_email = false,
    need_shipping_address = false,
    send_phone_number_to_provider = false,
    send_email_to_provider = false,
    is_flexible = false,
    disable_notification = false,
    reply_to_message_id = '',
    reply_markup = '',
  }: {
      chat_id: number | string,
      title: string,
      description: string,
      payload: string,
      provider_token: string,
      start_parameter: string,
      currency: string,
      prices: object[],
      provider_data?: string,
      photo_url?: string,
      photo_size?: number | null,
      photo_width?: number | null,
      photo_height?: number | null,
      need_name?: boolean,
      need_phone_number?: boolean,
      need_email?: boolean,
      need_shipping_address?: boolean,
      send_phone_number_to_provider?: boolean,
      send_email_to_provider?: boolean,
      is_flexible?: boolean,
      disable_notification?: boolean,
      reply_to_message_id?: number | string,
      reply_markup?: any,
    } = {
      chat_id: '',
      title: '',
      description: '',
      payload: '',
      provider_token: '',
      start_parameter: '',
      currency: '',
      prices: [],
    }) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (title === '') this.miss_parameter("title")
    if (description === '') this.miss_parameter("description")
    if (payload === '') this.miss_parameter("payload")
    if (provider_token === '') this.miss_parameter("provider_token")
    if (start_parameter === '') this.miss_parameter("start_parameter")
    if (currency === '') this.miss_parameter("currency")
    if (prices === []) this.miss_parameter("prices")
    let start_payload = {
      "method": "sendInvoice",
      'chat_id': String(chat_id),
      'title': String(title),
      'description': String(description),
      'payload': String(payload),
      'provider_token': String(provider_token),
      'start_parameter': String(start_parameter),
      'currency': String(currency),
      'prices': prices,
      'provider_data': String(provider_data),
      'photo_url': String(photo_url),
      'photo_size': photo_size,
      'photo_width': photo_width,
      'photo_height': photo_height,
      'need_name': Boolean(need_name),
      'need_phone_number': Boolean(need_phone_number),
      'need_email': Boolean(need_email),
      'need_shipping_address': Boolean(need_shipping_address),
      'send_phone_number_to_provider': Boolean(send_phone_number_to_provider),
      'send_email_to_provider': Boolean(send_email_to_provider),
      'is_flexible': Boolean(is_flexible),
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public answerShippingQuery(
    {
      shipping_query_id = '',
      ok = null,
      shipping_options = null,
      error_message = '',
    }: {
        shipping_query_id: string,
        ok: boolean | null,
        shipping_options?: object[] | null,
        error_message?: string,
      } = {
        shipping_query_id: '',
        ok: null,
      }
  ) {
    if (shipping_query_id === '') this.miss_parameter("shipping_query_id")
    if (ok === null) this.miss_parameter("ok")
    let start_payload = {
      "method": "answerShippingQuery",
      'shipping_query_id': String(shipping_query_id),
      'ok': Boolean(ok),
      'shipping_options	': shipping_options == null ? null : JSON.stringify(shipping_options),
      'error_message': String(error_message),
    }
    return this.start(start_payload)
  }

  public answerPreCheckoutQuery(
    {
      pre_checkout_query_id = '',
      ok = null,
      error_message = '',
    }: {
        pre_checkout_query_id: string,
        ok: boolean | null,
        error_message?: string,
      } = {
        pre_checkout_query_id: '',
        ok: null,
      }
  ) {
    if (pre_checkout_query_id === '') this.miss_parameter("pre_checkout_query_id")
    if (ok === null) this.miss_parameter("ok")
    let start_payload = {
      "method": "answerPreCheckoutQuery",
      'pre_checkout_query_id': String(pre_checkout_query_id),
      'ok': Boolean(ok),
      'error_message': error_message,
    }
    return this.start(start_payload)
  }


  // === Telegram Passport ===

  public setPassportDataErrors(
    {
      user_id = '',
      errors = null,
    }: {
        user_id: string,
        errors: object[] | null,
      } = {
        user_id: '',
        errors: null,
      }
  ) {
    if (user_id === '') this.miss_parameter("user_id")
    if (errors === null) this.miss_parameter("errors")
    let start_payload = {
      "method": "setPassportDataErrors",
      "user_id": '',
      "errors": null,
    }
    return this.start(start_payload)
  }


  // === Games ===

  public sendGame(
    {
      chat_id = '',
      game_short_name = null,
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    }: {
        chat_id: string,
        game_short_name: string | null,
        disable_notification?: boolean,
        reply_to_message_id?: number | string,
        reply_markup?: any,
      } = {
        chat_id: '',
        game_short_name: null,
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (game_short_name === null) this.miss_parameter("game_short_name")
    let start_payload = {
      "method": "sendGame",
      "chat_id": '',
      "game_short_name": game_short_name,
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public setGameScore(
    {
      user_id = '',
      score = null,
      force = null,
      disable_edit_message = false,
      chat_id = '',
      message_id = '',
      inline_message_id = '',
    }: {
        user_id: string,
        score: number | null,
        force?: null,
        disable_edit_message?: boolean | null,
        chat_id?: string | number,
        message_id?: string | number,
        inline_message_id?: string,
      } = {
        user_id: '',
        score: null,
      }
  ) {
    if (user_id === '') this.miss_parameter("user_id")
    if (score === null) this.miss_parameter("score")
    let start_payload = {
      "method": "setGameScore",
      "user_id": '',
      "score": score,
      "force": force,
      "disable_edit_message": disable_edit_message,
      "chat_id": String(chat_id),
      "message_id": String(message_id),
      "inline_message_id": String(inline_message_id),
    }
    return this.start(start_payload)
  }

  public getGameHighScores(
    {
      user_id = '',
      chat_id = '',
      message_id = '',
      inline_message_id = '',
    }: {
        user_id: string,
        chat_id?: string | number,
        message_id?: string | number,
        inline_message_id?: string,
      } = {
        user_id: '',
      }
  ) {
    if (user_id === '') this.miss_parameter("user_id")
    let start_payload = {
      "method": "getGameHighScores",
      "user_id": '',
      "chat_id": String(chat_id),
      "message_id": String(message_id),
      "inline_message_id": String(inline_message_id),
    }
    return this.start(start_payload)
  }




  // === public 自家der方法 ===
  public getPath(
    {
      file_id = '',
    }: {
        file_id: string,
      } = {
        file_id: '',
      }
  ) {
    if (file_id === '') this.miss_parameter("file_id")
    return this.getFile({"file_id":file_id}).result.file_path
  }

  public getFileDownloadUrl(
    {
      path = ''
    }: {
        path: any
      } = {
        path: ''
      }
  ) {
    if (path === '') this.miss_parameter("path")
    let TGDurl = `https://api.telegram.org/file/bot${this.token}/${path}`
    return TGDurl;
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
    try {
      // @ts-ignore
      return JSON.parse(UrlFetchApp.fetch(this.api_url, data));
    } catch (error) {
      // @ts-ignore
      var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
      var xhr = new XMLHttpRequest();
      xhr.open("POST", this.api_url, false); // 超重要，同步
      xhr.setRequestHeader('Content-Type', ' application/json');
      xhr.send(JSON.stringify(payload));
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          return xhr.responseText;
        } else {
          throw new Error(`XMLHttpRequest error`);
        }
      };
      return JSON.parse(xhr.responseText);
    }
  }
}
