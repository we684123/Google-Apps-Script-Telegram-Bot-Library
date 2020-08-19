/** Telegram bot class */
class tgbot {
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
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
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
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
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
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
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
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
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
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
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
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (voice === '') this.miss_parameter("voice")
    let start_payload = {
      "method": "sendVoice",
      'chat_id': String(chat_id),
      'voice': voice,
      'duration': duration,
      'caption': caption,
      'parse_mode': parse_mode,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
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
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (video_note === '') this.miss_parameter("video_note")
    let start_payload = {
      "method": "sendVideoNote",
      'chat_id': String(chat_id),
      'video_note': video_note,
      'length': length,
      'duration': duration,
      'thumb': thumb,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
    }
    return this.start(start_payload)
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
    let start_payload = {
      "method": "sendMediaGroup",
      'chat_id': String(chat_id),
      'media': media,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
    }
    return this.start(start_payload)
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
    let start_payload = {
      "method": "sendLocation",
      'chat_id': String(chat_id),
      'latitude': latitude,
      'longitude': longitude,
      'live_period': live_period,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
    }
    return this.start(start_payload)
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
    let start_payload = {
      "method": "editMessageLiveLocation",
      'chat_id': String(chat_id),
      'message_id': message_id,
      'inline_message_id': inline_message_id,
      'latitude': latitude,
      'longitude': longitude,
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
    }
    return this.start(start_payload)
  }

  public stopMessageLiveLocation(
    {
      chat_id = '',
      message_id = '',
      inline_message_id = '',
      reply_markup = ''
    } = {}
  ) {
    let start_payload = {
      "method": "stopMessageLiveLocation",
      'chat_id': String(chat_id),
      'message_id': message_id,
      'inline_message_id': inline_message_id,
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
    }
    return this.start(start_payload)
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
    let start_payload = {
      "method": "sendVenue",
      'chat_id': String(chat_id),
      'latitude': latitude,
      'longitude': longitude,
      'title': title,
      'address': address,
      'foursquare_id': foursquare_id,
      'foursquare_type': foursquare_type,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
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
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (phone_number === '') this.miss_parameter("phone_number")
    if (first_name === '') this.miss_parameter("first_name")
    let start_payload = {
      "method": "sendContact",
      'chat_id': String(chat_id),
      'phone_number': phone_number,
      'first_name': first_name,
      'last_name': last_name,
      'vcard': vcard,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
    }
    return this.start(start_payload)
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
    let start_payload = {
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
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
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
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let start_payload = {
      "method": "sendDice",
      'chat_id': String(chat_id),
      'emoji': emoji,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
    }
    return this.start(start_payload)
  }

  public sendChatAction(
    {
      chat_id = '',
      action = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (action === '') this.miss_parameter("action")
    let start_payload = {
      "method": "sendChatAction",
      'chat_id': String(chat_id),
      'action': action,
    }
    return this.start(start_payload)
  }

  public getUserProfilePhotos(
    {
      user_id = '',
      offset = '',
      limit = 100,
    } = {}
  ) {
    if (user_id === '') this.miss_parameter("user_id")
    let start_payload = {
      "method": "getUserProfilePhotos",
      'user_id': Number(user_id),
      "offset": offset,
      "limit": limit,
    }
    return this.start(start_payload)
  }

  public getFile(
    {
      file_id = '',
    } = {}
  ) {
    if (file_id === '') this.miss_parameter("file_id")
    let start_payload = {
      "method": "getFile",
      'file_id': String(file_id),
    }
    return this.start(start_payload)
  }

  public kickChatMember(
    {
      chat_id = '',
      user_id = '',
      until_date = ''
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (user_id === '') this.miss_parameter("user_id")
    let start_payload = {
      "method": "kickChatMember",
      'chat_id': String(chat_id),
      'user_id': Number(user_id),
      'until_date': Number(until_date)
    }
    return this.start(start_payload)
  }

  public unbanChatMember(
    {
      chat_id = '',
      user_id = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (user_id === '') this.miss_parameter("user_id")
    let start_payload = {
      "method": "unbanChatMember",
      'chat_id': String(chat_id),
      'user_id': Number(user_id),
    }
    return this.start(start_payload)
  }

  public restrictChatMember(
    {
      chat_id = '',
      user_id = '',
      permissions = '',
      until_date = ''
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (user_id === '') this.miss_parameter("user_id")
    let start_payload = {
      "method": "restrictChatMember",
      'chat_id': String(chat_id),
      'user_id': Number(user_id),
      'permissions': permissions,
      'until_date': Number(until_date)
    }
    return this.start(start_payload)
  }

  public promoteChatMember(
    {
      chat_id = '',
      user_id = '',
      can_change_info = false,
      can_post_messages = false,
      can_edit_messages = false,
      can_delete_messages = false,
      can_invite_users = false,
      can_restrict_members = false,
      can_pin_messages = false,
      can_promote_members = false,
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (user_id === '') this.miss_parameter("user_id")
    let start_payload = {
      "method": "promoteChatMember",
      'chat_id': String(chat_id),
      'user_id': Number(user_id),
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
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (user_id === '') this.miss_parameter("user_id")
    let start_payload = {
      "method": "setChatAdministratorCustomTitle",
      'chat_id': String(chat_id),
      'user_id': Number(user_id),
      'custom_title': String(custom_title),
    }
    return this.start(start_payload)
  }

  public setChatPermissions(
    {
      chat_id = '',
      permissions = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (permissions === '') this.miss_parameter("permissions")
    let start_payload = {
      "method": "setChatPermissions",
      'chat_id': String(chat_id),
      'permissions': Number(permissions),
    }
    return this.start(start_payload)
  }

  public exportChatInviteLink(
    {
      chat_id = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let start_payload = {
      "method": "exportChatInviteLink",
      'chat_id': String(chat_id),
    }
    return this.start(start_payload)
  }

  public setChatPhoto(
    {
      chat_id = '',
      photo = '',
    } = {}
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
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let start_payload = {
      "method": "deleteChatPhoto",
      'chat_id': String(chat_id),
    }
    return this.start(start_payload)
  }

  public setChatTitle(
    {
      chat_id = '',
      title = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (title === '') this.miss_parameter("title")
    let start_payload = {
      "method": "setChatTitle",
      'chat_id': String(chat_id),
      'title': title,
    }
    return this.start(start_payload)
  }

  public setChatDescription(
    {
      chat_id = '',
      description = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (description === '') this.miss_parameter("description")
    let start_payload = {
      "method": "setChatDescription",
      'chat_id': String(chat_id),
      'description': description,
    }
    return this.start(start_payload)
  }

  public pinChatMessage(
    {
      chat_id = '',
      message_id = '',
      disable_notification = false,
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (message_id === '') this.miss_parameter("message_id")
    let start_payload = {
      "method": "pinChatMessage",
      'chat_id': String(chat_id),
      'message_id': message_id,
      'disable_notification': disable_notification,
    }
    return this.start(start_payload)
  }

  public unpinChatMessage(
    {
      chat_id = '',
    } = {}
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
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let start_payload = {
      "method": "leaveChat",
      'chat_id': String(chat_id),
    }
    return this.start(start_payload)
  }

  public getChatAdministrators(
    {
      chat_id = '',
    } = {}
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
    } = {}
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
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (user_id === '') this.miss_parameter("user_id")
    let start_payload = {
      "method": "getChatMembersCount",
      'chat_id': String(chat_id),
      'user_id': Number(user_id),
    }
    return this.start(start_payload)
  }

  public setChatStickerSet(
    {
      chat_id = '',
      sticker_set_name = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let start_payload = {
      "method": "setChatStickerSet",
      'chat_id': String(chat_id),
      'sticker_set_name': sticker_set_name,
    }
    return this.start(start_payload)
  }

  public deleteChatStickerSet(
    {
      chat_id = '',
    } = {}
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
      cache_time = '',
    } = {}
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
    } = {}
  ) {
    if (commands === []) this.miss_parameter("commands")
    let start_payload = {
      "method": "setMyCommands",
      'commands': commands,
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
      message_id = '',
      inline_message_id = '',
      text = '',
      parse_mode = '',
      disable_web_page_preview = false,
      reply_markup = ''
    } = {}
  ) {
    if (text === '') this.miss_parameter("text")
    let start_payload = {
      "method": "editMessageText",
      'chat_id': String(chat_id),
      'message_id': String(message_id),
      'inline_message_id': String(inline_message_id),
      'text': String(text),
      'parse_mode': parse_mode,
      'disable_web_page_preview': disable_web_page_preview,
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
    }
    return this.start(start_payload)
  }

  public editMessageCaption(
    {
      chat_id = '',
      message_id = '',
      inline_message_id = '',
      caption = '',
      parse_mode = '',
      disable_web_page_preview = false,
      reply_markup = ''
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
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
    }
    return this.start(start_payload)
  }

  public editMessageMedia(
    {
      chat_id = '',
      message_id = '',
      inline_message_id = '',
      media = '',
      reply_markup = ''
    } = {}
  ) {
    if (media === '') this.miss_parameter("media")
    let start_payload = {
      "method": "editMessageMedia",
      'chat_id': String(chat_id),
      'message_id': String(message_id),
      'inline_message_id': String(inline_message_id),
      'media': String(media),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
    }
    return this.start(start_payload)
  }

  public editMessageReplyMarkup(
    {
      chat_id = '',
      message_id = '',
      inline_message_id = '',
      reply_markup = ''
    } = {}
  ) {
    let start_payload = {
      "method": "editMessageReplyMarkup",
      'chat_id': String(chat_id),
      'message_id': String(message_id),
      'inline_message_id': String(inline_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
    }
    return this.start(start_payload)
  }

  public stopPoll(
    {
      chat_id = '',
      message_id = '',
      reply_markup = ''
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (message_id === '') this.miss_parameter("message_id")
    let start_payload = {
      "method": "stopPoll",
      'chat_id': String(chat_id),
      'message_id': String(message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
    }
    return this.start(start_payload)
  }

  public deleteMessage(
    {
      chat_id = '',
      message_id = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (message_id === '') this.miss_parameter("message_id")
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
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (sticker === '') this.miss_parameter("sticker")
    let start_payload = {
      "method": "sendSticker",
      'chat_id': String(chat_id),
      'sticker': sticker,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    return this.start(start_payload)
  }

  public getStickerSet(
    {
      name = '',
    } = {}
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
      user_id = '',
      png_sticker = '',
    } = {}
  ) {
    if (user_id === '') this.miss_parameter("user_id")
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
      user_id = '',
      name = '',
      title = '',
      png_sticker = '',
      tgs_sticker = '',
      emojis = '',
      contains_masks = false,
      mask_position = '',
    } = {}
  ) {
    if (user_id === '') this.miss_parameter("user_id")
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
      'contains_masks': contains_masks,
      'mask_position': mask_position,
    }
    return this.start(start_payload)
  }

  public addStickerToSet(
    {
      user_id = '',
      name = '',
      png_sticker = '',
      tgs_sticker = '',
      emojis = '',
      mask_position = '',
    } = {}
  ) {
    if (user_id === '') this.miss_parameter("user_id")
    if (name === '') this.miss_parameter("name")
    if (emojis === '') this.miss_parameter("emojis")
    let start_payload = {
      "method": "addStickerToSet",
      'user_id': String(user_id),
      'name': String(name),
      'png_sticker': png_sticker,
      'tgs_sticker': tgs_sticker,
      'emojis': String(emojis),
      'mask_position': mask_position,
    }
    return this.start(start_payload)
  }

  public setStickerPositionInSet(
    {
      sticker = '',
      position = '',
    } = {}
  ) {
    if (sticker === '') this.miss_parameter("sticker")
    if (position === '') this.miss_parameter("position")
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
    } = {}
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
      user_id = '',
      thumb = '',
    } = {}
  ) {
    if (name === '') this.miss_parameter("name")
    if (user_id === '') this.miss_parameter("user_id")
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
      cache_time = '',
      is_personal = '',
      next_offset = '',
      switch_pm_text = '',
      switch_pm_parameter = '',
    } = {}
  ) {
    if (inline_query_id === '') this.miss_parameter("inline_query_id")
    if (results === []) this.miss_parameter("results")
    let start_payload = {
      "method": "answerInlineQuery",
      'inline_query_id': String(inline_query_id),
      'results': String(results),
      'cache_time': cache_time,
      'is_personal': is_personal,
      'next_offset': next_offset,
      'switch_pm_text': switch_pm_text,
      'switch_pm_parameter': switch_pm_parameter,
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
    photo_size = '',
    photo_width = '',
    photo_height = '',
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
  } = {}) {
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
      'description': description,
      'payload': payload,
      'provider_token': provider_token,
      'start_parameter': start_parameter,
      'currency': currency,
      'prices': prices,
      'provider_data': provider_data,
      'photo_url': photo_url,
      'photo_size': photo_size,
      'photo_width': photo_width,
      'photo_height': photo_height,
      'need_name': need_name,
      'need_phone_number': need_phone_number,
      'need_email': need_email,
      'need_shipping_address': need_shipping_address,
      'send_phone_number_to_provider': send_phone_number_to_provider,
      'send_email_to_provider': send_email_to_provider,
      'is_flexible': is_flexible,
      'disable_notification': disable_notification,
      'reply_to_message_id': reply_to_message_id,
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    return this.start(start_payload)
  }

  public answerShippingQuery(
    {
      shipping_query_id = '',
      ok = '',
      shipping_options = '',
      error_message = '',
    } = {}
  ) {
    if (shipping_query_id === '') this.miss_parameter("shipping_query_id")
    if (ok === '') this.miss_parameter("ok")
    let start_payload = {
      "method": "answerShippingQuery",
      'shipping_query_id': String(shipping_query_id),
      'ok': Boolean(ok),
      'shipping_options	': shipping_options,
      'error_message': error_message,
    }
    return this.start(start_payload)
  }

  public answerPreCheckoutQuery(
    {
      pre_checkout_query_id = '',
      ok = '',
      error_message = '',
    } = {}
  ) {
    if (pre_checkout_query_id === '') this.miss_parameter("pre_checkout_query_id")
    if (ok === '') this.miss_parameter("ok")
    let start_payload = {
      "method": "answerPreCheckoutQuery",
      'pre_checkout_query_id': String(pre_checkout_query_id),
      'ok': Boolean(ok),
      'error_message': error_message,
    }
    return this.start(start_payload)
  }


  // === public 自家der方法 ===
  public getPath(
    {
      file_id = '',
    } = {}
  ) {
    if (file_id === '') this.miss_parameter("file_id")
    const url = `"https://api.telegram.org/bot${this.token}/getFile?file_id=${file_id}`
    // @ts-ignore
    var html: string = UrlFetchApp.fetch(url);
    var json_html: any = JSON.parse(html);
    var path = json_html.result.file_path
    return path;
  }

  public getFileDownloadUrl(
    {
      path = ''
    } = {}
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
    // @ts-ignore
    return UrlFetchApp.fetch(this.api_url, data);
  }
}
