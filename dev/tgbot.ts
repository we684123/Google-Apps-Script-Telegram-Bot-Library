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
      'foursquare_id': foursquare_id,
      'foursquare_type': foursquare_type,
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

  public getUserProfilePhotos(
    {
      user_id = '',
      offset = '',
      limit = 100,
    } = {}
  ) {
    if (user_id === '') this.miss_parameter("user_id")
    let payload = {
      "method": "getUserProfilePhotos",
      'user_id': Number(user_id),
      "offset": offset,
      "limit": limit,
    }
    return this.start(payload)
  }

  public getFile(
    {
      file_id = '',
    } = {}
  ) {
    if (file_id === '') this.miss_parameter("file_id")
    let payload = {
      "method": "getFile",
      'file_id': String(file_id),
    }
    return this.start(payload)
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
    let payload = {
      "method": "kickChatMember",
      'chat_id': String(chat_id),
      'user_id': Number(user_id),
      'until_date': Number(until_date)
    }
    return this.start(payload)
  }

  public unbanChatMember(
    {
      chat_id = '',
      user_id = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (user_id === '') this.miss_parameter("user_id")
    let payload = {
      "method": "unbanChatMember",
      'chat_id': String(chat_id),
      'user_id': Number(user_id),
    }
    return this.start(payload)
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
    let payload = {
      "method": "restrictChatMember",
      'chat_id': String(chat_id),
      'user_id': Number(user_id),
      'permissions': permissions,
      'until_date': Number(until_date)
    }
    return this.start(payload)
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
    let payload = {
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
    return this.start(payload)
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
    let payload = {
      "method": "setChatAdministratorCustomTitle",
      'chat_id': String(chat_id),
      'user_id': Number(user_id),
      'custom_title': String(custom_title),
    }
    return this.start(payload)
  }

  public setChatPermissions(
    {
      chat_id = '',
      permissions = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (permissions === '') this.miss_parameter("permissions")
    let payload = {
      "method": "setChatPermissions",
      'chat_id': String(chat_id),
      'permissions': Number(permissions),
    }
    return this.start(payload)
  }

  public exportChatInviteLink(
    {
      chat_id = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let payload = {
      "method": "exportChatInviteLink",
      'chat_id': String(chat_id),
    }
    return this.start(payload)
  }

  public setChatPhoto(
    {
      chat_id = '',
      photo = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (photo === '') this.miss_parameter("photo")
    let payload = {
      "method": "setChatPhoto",
      'chat_id': String(chat_id),
      'photo': photo,
    }
    return this.start(payload)
  }

  public deleteChatPhoto(
    {
      chat_id = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let payload = {
      "method": "deleteChatPhoto",
      'chat_id': String(chat_id),
    }
    return this.start(payload)
  }

  public setChatTitle(
    {
      chat_id = '',
      title = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (title === '') this.miss_parameter("title")
    let payload = {
      "method": "setChatTitle",
      'chat_id': String(chat_id),
      'title': title,
    }
    return this.start(payload)
  }

  public setChatDescription(
    {
      chat_id = '',
      description = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (description === '') this.miss_parameter("description")
    let payload = {
      "method": "setChatDescription",
      'chat_id': String(chat_id),
      'description': description,
    }
    return this.start(payload)
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
    let payload = {
      "method": "pinChatMessage",
      'chat_id': String(chat_id),
      'message_id': message_id,
      'disable_notification': disable_notification,
    }
    return this.start(payload)
  }

  public unpinChatMessage(
    {
      chat_id = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let payload = {
      "method": "unpinChatMessage",
      'chat_id': String(chat_id),
    }
    return this.start(payload)
  }

  public leaveChat(
    {
      chat_id = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let payload = {
      "method": "leaveChat",
      'chat_id': String(chat_id),
    }
    return this.start(payload)
  }

  public getChatAdministrators(
    {
      chat_id = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let payload = {
      "method": "getChatAdministrators",
      'chat_id': String(chat_id),
    }
    return this.start(payload)
  }

  public getChatMembersCount(
    {
      chat_id = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let payload = {
      "method": "getChatMembersCount",
      'chat_id': String(chat_id),
    }
    return this.start(payload)
  }

  public getChatMember(
    {
      chat_id = '',
      user_id = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (user_id === '') this.miss_parameter("user_id")
    let payload = {
      "method": "getChatMembersCount",
      'chat_id': String(chat_id),
      'user_id': Number(user_id),
    }
    return this.start(payload)
  }

  public setChatStickerSet(
    {
      chat_id = '',
      sticker_set_name = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let payload = {
      "method": "setChatStickerSet",
      'chat_id': String(chat_id),
      'sticker_set_name': sticker_set_name,
    }
    return this.start(payload)
  }

  public deleteChatStickerSet(
    {
      chat_id = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    let payload = {
      "method": "deleteChatStickerSet",
      'chat_id': String(chat_id),
    }
    return this.start(payload)
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
    let payload = {
      "method": "answerCallbackQuery",
      'callback_query_id': String(callback_query_id),
      'text': String(text),
      'show_alert': Boolean(show_alert),
      'url': String(url),
      'cache_time': Number(cache_time),
    }
    return this.start(payload)
  }

  public setMyCommands(
    {
      commands = [],
    } = {}
  ) {
    if (commands === []) this.miss_parameter("commands")
    let payload = {
      "method": "setMyCommands",
      'commands': commands,
    }
    return this.start(payload)
  }

  public getMyCommands() {
    let payload = {
      "method": "getMyCommands",
    }
    return this.start(payload)
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
    let payload = {
      "method": "editMessageText",
      'chat_id': String(chat_id),
      'message_id': String(message_id),
      'inline_message_id': String(inline_message_id),
      'text': String(text),
      'parse_mode': parse_mode,
      'disable_web_page_preview': disable_web_page_preview,
      'reply_markup': reply_markup
    }
    return this.start(payload)
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
    let payload = {
      "method": "editMessageCaption",
      'chat_id': String(chat_id),
      'message_id': String(message_id),
      'inline_message_id': String(inline_message_id),
      'caption': String(caption),
      'parse_mode': parse_mode,
      'disable_web_page_preview': disable_web_page_preview,
      'reply_markup': reply_markup
    }
    return this.start(payload)
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
    let payload = {
      "method": "editMessageMedia",
      'chat_id': String(chat_id),
      'message_id': String(message_id),
      'inline_message_id': String(inline_message_id),
      'media': String(media),
      'reply_markup': reply_markup
    }
    return this.start(payload)
  }

  public editMessageReplyMarkup(
    {
      chat_id = '',
      message_id = '',
      inline_message_id = '',
      reply_markup = ''
    } = {}
  ) {
    let payload = {
      "method": "editMessageReplyMarkup",
      'chat_id': String(chat_id),
      'message_id': String(message_id),
      'inline_message_id': String(inline_message_id),
      'reply_markup': reply_markup
    }
    return this.start(payload)
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
    let payload = {
      "method": "stopPoll",
      'chat_id': String(chat_id),
      'message_id': String(message_id),
      'reply_markup': reply_markup
    }
    return this.start(payload)
  }

  public deleteMessage(
    {
      chat_id = '',
      message_id = '',
    } = {}
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (message_id === '') this.miss_parameter("message_id")
    let payload = {
      "method": "deleteMessage",
      'chat_id': String(chat_id),
      'message_id': String(message_id),
    }
    return this.start(payload)
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
    var html = UrlFetchApp.fetch(url);
    html = JSON.parse(html);
    var path = html.result.file_path
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
