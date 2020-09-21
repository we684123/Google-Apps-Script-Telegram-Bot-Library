"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tgbot = void 0;
/** Telegram bot class */
class tgbot {
    /**
    * @param {string} token - The bot token
    */
    constructor(token) {
        this.token = token;
        this.api_url = `https://api.telegram.org/bot${this.token}/`;
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
    getUpdates({ offset = '', limit = 100, timeout = 0, allowed_updates = '' } = {}) {
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
        };
        return this.start(start_payload);
    }
    setWebhook({ url = '', certificate = '', max_connections = 40, allowed_updates = [] } = {
        url: '',
    }) {
        if (url === '')
            this.miss_parameter("url");
        let start_payload = {
            "method": "setWebhook",
            "url": url,
            "certificate": certificate,
            "max_connections": max_connections,
            "allowed_updates": allowed_updates,
        };
        return this.start(start_payload);
    }
    deleteWebhook() {
        let start_payload = {
            "method": "deleteWebhook",
        };
        return this.start(start_payload);
    }
    getWebhookInfo() {
        let start_payload = {
            "method": "getWebhookInfo",
        };
        return this.start(start_payload);
    }
    // === Available methods ===
    getMe() {
        let start_payload = {
            "method": "getMe",
        };
        return this.start(start_payload);
    }
    sendMessage({ chat_id = '', text = '', parse_mode = '', disable_web_page_preview = false, disable_notification = false, reply_to_message_id = '', reply_markup = '', } = {
        chat_id: '',
        text: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (text === '')
            this.miss_parameter("chat_id");
        let start_payload = {
            "method": "sendMessage",
            'chat_id': String(chat_id),
            'text': String(text),
            'parse_mode': String(parse_mode),
            'disable_web_page_preview': Boolean(disable_web_page_preview),
            'disable_notification': Boolean(disable_notification),
            'reply_to_message_id': Number(reply_to_message_id),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    forwardMessage({ chat_id = '', from_chat_id = '', disable_notification = false, message_id = '' } = {
        chat_id: '',
        from_chat_id: '',
        message_id: ''
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (from_chat_id === '')
            this.miss_parameter("from_chat_id");
        if (message_id === '')
            this.miss_parameter("message_id");
        let start_payload = {
            "method": "forwardMessage",
            'chat_id': String(chat_id),
            'from_chat_id': String(from_chat_id),
            'disable_notification': Boolean(disable_notification),
            'message_id': Number(message_id)
        };
        return this.start(start_payload);
    }
    sendPhoto({ chat_id = '', photo = '', caption = '', parse_mode = '', disable_notification = false, reply_to_message_id = '', reply_markup = '' } = {
        chat_id: '',
        photo: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (photo === '')
            this.miss_parameter("photo");
        let start_payload = {
            "method": "sendPhoto",
            'chat_id': String(chat_id),
            'photo': photo,
            'caption': String(caption),
            'parse_mode': String(parse_mode),
            'disable_notification': Boolean(disable_notification),
            'reply_to_message_id': Number(reply_to_message_id),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    sendAudio({ chat_id = '', audio = '', caption = '', parse_mode = '', duration = '', performer = '', title = '', thumb = '', disable_notification = false, reply_to_message_id = '', reply_markup = '' } = {
        chat_id: '',
        audio: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (audio === '')
            this.miss_parameter("audio");
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
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    sendDocument({ chat_id = '', document = '', thumb = '', caption = '', parse_mode = '', disable_notification = false, reply_to_message_id = '', reply_markup = '' } = {
        chat_id: '',
        document: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (document === '')
            this.miss_parameter("document");
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
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    sendVideo({ chat_id = '', video = '', duration = '', width = '', height = '', thumb = '', caption = '', parse_mode = '', supports_streaming = false, disable_notification = false, reply_to_message_id = '', reply_markup = '' } = {
        chat_id: '',
        video: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (video === '')
            this.miss_parameter("video");
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
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    sendAnimation({ chat_id = '', animation = '', duration = '', width = '', height = '', thumb = '', caption = '', parse_mode = '', disable_notification = false, reply_to_message_id = '', reply_markup = '' } = {
        chat_id: '',
        animation: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (animation === '')
            this.miss_parameter("animation");
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
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    sendVoice({ chat_id = '', voice = '', duration = '', caption = '', parse_mode = '', disable_notification = false, reply_to_message_id = '', reply_markup = '' } = {
        chat_id: '',
        voice: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (voice === '')
            this.miss_parameter("voice");
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
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    sendVideoNote({ chat_id = '', video_note = '', duration = '', length = '', thumb = '', disable_notification = false, reply_to_message_id = '', reply_markup = '' } = {
        chat_id: '',
        video_note: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (video_note === '')
            this.miss_parameter("video_note");
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
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    sendMediaGroup({ chat_id = '', media = [], disable_notification = false, reply_to_message_id = '', } = {
        chat_id: '',
        media: [],
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (media === [])
            this.miss_parameter("media");
        let start_payload = {
            "method": "sendMediaGroup",
            'chat_id': String(chat_id),
            'media': JSON.stringify(media),
            'disable_notification': Boolean(disable_notification),
            'reply_to_message_id': Number(reply_to_message_id),
        };
        return this.start(start_payload);
    }
    sendLocation({ chat_id = '', latitude = '', longitude = '', live_period = null, disable_notification = false, reply_to_message_id = '', reply_markup = '' } = {
        chat_id: '',
        latitude: '',
        longitude: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (latitude === '')
            this.miss_parameter("latitude");
        if (longitude === '')
            this.miss_parameter("longitude");
        let start_payload = {
            "method": "sendLocation",
            'chat_id': String(chat_id),
            'latitude': Number(latitude),
            'longitude': Number(longitude),
            'live_period': Number(live_period),
            'disable_notification': Boolean(disable_notification),
            'reply_to_message_id': Number(reply_to_message_id),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    editMessageLiveLocation({ chat_id = '', message_id = null, inline_message_id = '', latitude = null, longitude = null, reply_markup = '' } = {
        latitude: null,
        longitude: null,
    }) {
        if (latitude === null)
            this.miss_parameter("latitude");
        if (longitude === null)
            this.miss_parameter("longitude");
        let start_payload = {
            "method": "editMessageLiveLocation",
            'chat_id': String(chat_id),
            'message_id': Number(message_id),
            'inline_message_id': String(inline_message_id),
            'latitude': Number(latitude),
            'longitude': Number(longitude),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    stopMessageLiveLocation({ chat_id = '', message_id = null, inline_message_id = '', reply_markup = '' } = {}) {
        let start_payload = {
            "method": "stopMessageLiveLocation",
            'chat_id': String(chat_id),
            'message_id': Number(message_id),
            'inline_message_id': String(inline_message_id),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    sendVenue({ chat_id = '', latitude = null, longitude = null, title = '', address = '', foursquare_id = '', foursquare_type = '', disable_notification = false, reply_to_message_id = '', reply_markup = '' } = {
        chat_id: '',
        latitude: null,
        longitude: null,
        title: '',
        address: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (latitude === null)
            this.miss_parameter("latitude");
        if (longitude === null)
            this.miss_parameter("longitude");
        if (title === '')
            this.miss_parameter("title");
        if (address === '')
            this.miss_parameter("address");
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
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    sendContact({ chat_id = '', phone_number = '', first_name = '', last_name = '', vcard = '', disable_notification = false, reply_to_message_id = '', reply_markup = '' } = {
        chat_id: '',
        phone_number: '',
        first_name: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (phone_number === '')
            this.miss_parameter("phone_number");
        if (first_name === '')
            this.miss_parameter("first_name");
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
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    sendPoll({ chat_id = '', question = '', options = [], is_anonymous = false, type = 'regular', allows_multiple_answers = false, correct_option_id = null, explanation = '', explanation_parse_mode = '', open_period = null, close_date = null, is_closed = false, disable_notification = false, reply_to_message_id = '', reply_markup = '' } = {
        chat_id: '',
        question: '',
        options: [],
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (question === '')
            this.miss_parameter("question");
        if (options === [])
            this.miss_parameter("options");
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
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    sendDice({ chat_id = '', emoji = '', disable_notification = false, reply_to_message_id = '', reply_markup = '' } = {
        chat_id: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        let start_payload = {
            "method": "sendDice",
            'chat_id': String(chat_id),
            'emoji': String(emoji),
            'disable_notification': Boolean(disable_notification),
            'reply_to_message_id': Number(reply_to_message_id),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    sendChatAction({ chat_id = '', action = '', } = {
        chat_id: '',
        action: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (action === '')
            this.miss_parameter("action");
        let start_payload = {
            "method": "sendChatAction",
            'chat_id': String(chat_id),
            'action': String(action),
        };
        return this.start(start_payload);
    }
    getUserProfilePhotos({ user_id = '', offset = null, limit = 100, } = {
        user_id: '',
    }) {
        if (user_id === '')
            this.miss_parameter("user_id");
        let start_payload = {
            "method": "getUserProfilePhotos",
            'user_id': String(user_id),
            "offset": Number(offset),
            "limit": Number(limit),
        };
        return this.start(start_payload);
    }
    getFile({ file_id = '', } = {
        file_id: '',
    }) {
        if (file_id === '')
            this.miss_parameter("file_id");
        let start_payload = {
            "method": "getFile",
            'file_id': String(file_id),
        };
        return this.start(start_payload);
    }
    kickChatMember(
    // kickChatMember TG會忽略掉 until_date 參數，需要再行實驗觀察
    { chat_id = '', user_id = '', until_date = null } = {
        chat_id: '',
        user_id: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (user_id === '')
            this.miss_parameter("user_id");
        let start_payload = {
            "method": "kickChatMember",
            'chat_id': String(chat_id),
            'user_id': String(user_id),
            'until_date': Number(until_date)
        };
        return this.start(start_payload);
    }
    unbanChatMember({ chat_id = '', user_id = '', } = {
        chat_id: '',
        user_id: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (user_id === '')
            this.miss_parameter("user_id");
        let start_payload = {
            "method": "unbanChatMember",
            'chat_id': String(chat_id),
            'user_id': String(user_id),
        };
        return this.start(start_payload);
    }
    restrictChatMember({ chat_id = '', user_id = '', permissions = {}, until_date = null } = {
        chat_id: '',
        user_id: '',
        permissions: {},
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (user_id === '')
            this.miss_parameter("user_id");
        if (permissions === {})
            this.miss_parameter("permissions");
        let start_payload = {
            "method": "restrictChatMember",
            'chat_id': String(chat_id),
            'user_id': String(user_id),
            'permissions': JSON.stringify(permissions),
            'until_date': Number(until_date)
        };
        return this.start(start_payload);
    }
    promoteChatMember(
    // 如果要使用這個功能，bot需有 "新增管理員"的權限? 還是全部的權限?
    { chat_id = '', user_id = '', can_change_info = null, can_post_messages = null, can_edit_messages = null, can_delete_messages = null, can_invite_users = null, can_restrict_members = null, can_pin_messages = null, can_promote_members = null, } = {
        chat_id: '',
        user_id: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (user_id === '')
            this.miss_parameter("user_id");
        let start_payload = {
            "method": "promoteChatMember",
            'chat_id': String(chat_id),
            'user_id': String(user_id),
            'can_change_info': Boolean(can_change_info),
            'can_post_messages': Boolean(can_post_messages),
            'can_edit_messages': Boolean(can_edit_messages),
            'can_delete_messages': Boolean(can_delete_messages),
            'can_invite_users': Boolean(can_invite_users),
            'can_restrict_members': Boolean(can_restrict_members),
            'can_pin_messages': Boolean(can_pin_messages),
            'can_promote_members': Boolean(can_promote_members),
        };
        return this.start(start_payload);
    }
    setChatAdministratorCustomTitle({ chat_id = '', user_id = '', custom_title = '', } = {
        chat_id: '',
        user_id: '',
        custom_title: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (user_id === '')
            this.miss_parameter("user_id");
        let start_payload = {
            "method": "setChatAdministratorCustomTitle",
            'chat_id': String(chat_id),
            'user_id': String(user_id),
            'custom_title': String(custom_title),
        };
        return this.start(start_payload);
    }
    setChatPermissions({ chat_id = '', permissions = {}, } = {
        chat_id: '',
        permissions: {},
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (permissions === {})
            this.miss_parameter("permissions");
        let start_payload = {
            "method": "setChatPermissions",
            'chat_id': String(chat_id),
            'permissions': JSON.stringify(permissions),
        };
        return this.start(start_payload);
    }
    exportChatInviteLink({ chat_id = '', } = { chat_id: '' }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        let start_payload = {
            "method": "exportChatInviteLink",
            'chat_id': String(chat_id),
        };
        return this.start(start_payload);
    }
    setChatPhoto(
    // 照片僅能用新的上傳
    { chat_id = '', photo = '', } = {
        chat_id: '',
        photo: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (photo === '')
            this.miss_parameter("photo");
        let start_payload = {
            "method": "setChatPhoto",
            'chat_id': String(chat_id),
            'photo': photo,
        };
        return this.start(start_payload);
    }
    deleteChatPhoto({ chat_id = '', } = {
        chat_id: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        let start_payload = {
            "method": "deleteChatPhoto",
            'chat_id': String(chat_id),
        };
        return this.start(start_payload);
    }
    setChatTitle(
    // 特別的是，如果名子一樣的話，也會回傳 true
    { chat_id = '', title = '', } = {
        chat_id: '',
        title: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (title === '')
            this.miss_parameter("title");
        let start_payload = {
            "method": "setChatTitle",
            'chat_id': String(chat_id),
            'title': String(title),
        };
        return this.start(start_payload);
    }
    setChatDescription({ chat_id = '', description = '', } = {
        chat_id: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        let start_payload = {
            "method": "setChatDescription",
            'chat_id': String(chat_id),
            'description': String(description),
        };
        return this.start(start_payload);
    }
    pinChatMessage({ chat_id = '', message_id = null, disable_notification = false, } = {
        chat_id: '',
        message_id: null,
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (message_id === null)
            this.miss_parameter("message_id");
        let start_payload = {
            "method": "pinChatMessage",
            'chat_id': String(chat_id),
            'message_id': Number(message_id),
            'disable_notification': Boolean(disable_notification),
        };
        return this.start(start_payload);
    }
    unpinChatMessage({ chat_id = '', } = {
        chat_id: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        let start_payload = {
            "method": "unpinChatMessage",
            'chat_id': String(chat_id),
        };
        return this.start(start_payload);
    }
    leaveChat({ chat_id = '', } = {
        chat_id: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        let start_payload = {
            "method": "leaveChat",
            'chat_id': String(chat_id),
        };
        return this.start(start_payload);
    }
    getChat({ chat_id = '', } = {
        chat_id: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        let start_payload = {
            "method": "getChat",
            'chat_id': String(chat_id),
        };
        return this.start(start_payload);
    }
    getChatAdministrators({ chat_id = '', } = {
        chat_id: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        let start_payload = {
            "method": "getChatAdministrators",
            'chat_id': String(chat_id),
        };
        return this.start(start_payload);
    }
    getChatMembersCount({ chat_id = '', } = {
        chat_id: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        let start_payload = {
            "method": "getChatMembersCount",
            'chat_id': String(chat_id),
        };
        return this.start(start_payload);
    }
    getChatMember({ chat_id = '', user_id = '', } = {
        chat_id: '',
        user_id: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (user_id === '')
            this.miss_parameter("user_id");
        let start_payload = {
            "method": "getChatMember",
            'chat_id': String(chat_id),
            'user_id': String(user_id),
        };
        return this.start(start_payload);
    }
    setChatStickerSet(
    // 人數未達100人則無法設定
    { chat_id = '', sticker_set_name = '', } = {
        chat_id: '',
        sticker_set_name: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        let start_payload = {
            "method": "setChatStickerSet",
            'chat_id': String(chat_id),
            'sticker_set_name': String(sticker_set_name),
        };
        return this.start(start_payload);
    }
    deleteChatStickerSet(
    // 人數未達100人則無法設定
    { chat_id = '', } = {
        chat_id: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        let start_payload = {
            "method": "deleteChatStickerSet",
            'chat_id': String(chat_id),
        };
        return this.start(start_payload);
    }
    answerCallbackQuery({ callback_query_id = '', text = '', show_alert = false, url = '', cache_time = null, } = {
        callback_query_id: '',
    }) {
        if (callback_query_id === '')
            this.miss_parameter("callback_query_id");
        let start_payload = {
            "method": "answerCallbackQuery",
            'callback_query_id': String(callback_query_id),
            'text': String(text),
            'show_alert': Boolean(show_alert),
            'url': String(url),
            'cache_time': Number(cache_time),
        };
        return this.start(start_payload);
    }
    setMyCommands({ commands = [], } = {
        commands: [],
    }) {
        if (commands === [])
            this.miss_parameter("commands");
        let start_payload = {
            "method": "setMyCommands",
            'commands': JSON.stringify(commands),
        };
        return this.start(start_payload);
    }
    getMyCommands() {
        let start_payload = {
            "method": "getMyCommands",
        };
        return this.start(start_payload);
    }
    // === Updating messages ===
    editMessageText({ chat_id = '', message_id = null, inline_message_id = '', text = '', parse_mode = '', disable_web_page_preview = false, reply_markup = '' } = {
        text: '',
    }) {
        if (text === '')
            this.miss_parameter("text");
        let start_payload = {
            "method": "editMessageText",
            'chat_id': String(chat_id),
            'message_id': String(message_id),
            'inline_message_id': String(inline_message_id),
            'text': String(text),
            'parse_mode': String(parse_mode),
            'disable_web_page_preview': Boolean(disable_web_page_preview),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    editMessageCaption({ chat_id = '', message_id = null, inline_message_id = '', caption = '', parse_mode = '', disable_web_page_preview = false, reply_markup = '' } = {}) {
        let start_payload = {
            "method": "editMessageCaption",
            'chat_id': String(chat_id),
            'message_id': String(message_id),
            'inline_message_id': String(inline_message_id),
            'caption': String(caption),
            'parse_mode': parse_mode,
            'disable_web_page_preview': disable_web_page_preview,
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    editMessageMedia({ chat_id = '', message_id = null, inline_message_id = '', media = {}, reply_markup = '' } = {
        media: {},
    }) {
        if (media === {})
            this.miss_parameter("media");
        let start_payload = {
            "method": "editMessageMedia",
            'chat_id': String(chat_id),
            'message_id': String(message_id),
            'inline_message_id': String(inline_message_id),
            'media': String(media),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    editMessageReplyMarkup({ chat_id = '', message_id = null, inline_message_id = '', reply_markup = '' } = {}) {
        let start_payload = {
            "method": "editMessageReplyMarkup",
            'chat_id': String(chat_id),
            'message_id': String(message_id),
            'inline_message_id': String(inline_message_id),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    stopPoll({ chat_id = '', message_id = null, reply_markup = '' } = {
        chat_id: '',
        message_id: null,
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (message_id === null)
            this.miss_parameter("message_id");
        let start_payload = {
            "method": "stopPoll",
            'chat_id': String(chat_id),
            'message_id': String(message_id),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    deleteMessage({ chat_id = '', message_id = null, } = {
        chat_id: '',
        message_id: null,
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (message_id === null)
            this.miss_parameter("message_id");
        let start_payload = {
            "method": "deleteMessage",
            'chat_id': String(chat_id),
            'message_id': String(message_id),
        };
        return this.start(start_payload);
    }
    // === Stickers ===
    sendSticker({ chat_id = '', sticker = '', disable_notification = false, reply_to_message_id = '', reply_markup = '', } = {
        chat_id: '',
        sticker: '',
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (sticker === '')
            this.miss_parameter("sticker");
        let start_payload = {
            "method": "sendSticker",
            'chat_id': String(chat_id),
            'sticker': sticker,
            'disable_notification': Boolean(disable_notification),
            'reply_to_message_id': Number(reply_to_message_id),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    getStickerSet({ name = '', } = {
        name: '',
    }) {
        if (name === '')
            this.miss_parameter("name");
        let start_payload = {
            "method": "getStickerSet",
            'name': String(name),
        };
        return this.start(start_payload);
    }
    uploadStickerFile({ user_id = null, png_sticker = '', } = {
        user_id: null,
        png_sticker: '',
    }) {
        if (user_id === null)
            this.miss_parameter("user_id");
        if (png_sticker === '')
            this.miss_parameter("png_sticker");
        let start_payload = {
            "method": "uploadStickerFile",
            'user_id': String(user_id),
            'png_sticker': png_sticker,
        };
        return this.start(start_payload);
    }
    createNewStickerSet({ user_id = null, //這個要數字的id
    name = '', title = '', png_sticker = '', tgs_sticker = '', emojis = '', contains_masks = false, mask_position = null } = {
        user_id: null,
        name: '',
        title: '',
        emojis: '',
    }) {
        if (user_id === null)
            this.miss_parameter("user_id");
        if (name === '')
            this.miss_parameter("name");
        if (title === '')
            this.miss_parameter("title");
        if (emojis === '')
            this.miss_parameter("emojis");
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
        };
        return this.start(start_payload);
    }
    addStickerToSet({ user_id = null, name = '', png_sticker = '', tgs_sticker = '', emojis = '', mask_position = null, } = {
        user_id: null,
        name: '',
        emojis: '',
    }) {
        if (user_id === null)
            this.miss_parameter("user_id");
        if (name === '')
            this.miss_parameter("name");
        if (emojis === '')
            this.miss_parameter("emojis");
        let start_payload = {
            "method": "addStickerToSet",
            'user_id': String(user_id),
            'name': String(name),
            'png_sticker': png_sticker,
            'tgs_sticker': tgs_sticker,
            'emojis': String(emojis),
            'mask_position': mask_position == null ? null : JSON.stringify(mask_position),
        };
        return this.start(start_payload);
    }
    setStickerPositionInSet({ sticker = '', position = null, } = {
        sticker: '',
        position: null,
    }) {
        if (sticker === '')
            this.miss_parameter("sticker");
        if (position === null)
            this.miss_parameter("position");
        let start_payload = {
            "method": "setStickerPositionInSet",
            'sticker': String(sticker),
            'position': Number(position),
        };
        return this.start(start_payload);
    }
    deleteStickerFromSet({ sticker = '', } = {
        sticker: '',
    }) {
        if (sticker === '')
            this.miss_parameter("sticker");
        let start_payload = {
            "method": "deleteStickerFromSet",
            'sticker': String(sticker),
        };
        return this.start(start_payload);
    }
    setStickerSetThumb({ name = '', user_id = null, thumb = '', } = {
        user_id: null,
        name: '',
    }) {
        if (name === '')
            this.miss_parameter("name");
        if (user_id === null)
            this.miss_parameter("user_id");
        let start_payload = {
            "method": "setStickerSetThumb",
            'name': String(name),
            'user_id': String(user_id),
            'thumb': thumb,
        };
        return this.start(start_payload);
    }
    // === Inline mode ===
    answerInlineQuery({ inline_query_id = '', results = [], cache_time = null, is_personal = false, next_offset = '', switch_pm_text = '', switch_pm_parameter = '', } = {
        inline_query_id: '',
        results: [],
    }) {
        if (inline_query_id === '')
            this.miss_parameter("inline_query_id");
        if (results === [])
            this.miss_parameter("results");
        let start_payload = {
            "method": "answerInlineQuery",
            'inline_query_id': String(inline_query_id),
            'results': JSON.stringify(results),
            'cache_time': cache_time,
            'is_personal': Boolean(is_personal),
            'next_offset': String(next_offset),
            'switch_pm_text': String(switch_pm_text),
            'switch_pm_parameter': String(switch_pm_parameter),
        };
        return this.start(start_payload);
    }
    // === Payments ===
    sendInvoice({ chat_id = '', title = '', description = '', payload = '', provider_token = '', start_parameter = '', currency = '', prices = [], provider_data = '', photo_url = '', photo_size = null, photo_width = null, photo_height = null, need_name = false, need_phone_number = false, need_email = false, need_shipping_address = false, send_phone_number_to_provider = false, send_email_to_provider = false, is_flexible = false, disable_notification = false, reply_to_message_id = '', reply_markup = '', } = {
        chat_id: '',
        title: '',
        description: '',
        payload: '',
        provider_token: '',
        start_parameter: '',
        currency: '',
        prices: [],
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (title === '')
            this.miss_parameter("title");
        if (description === '')
            this.miss_parameter("description");
        if (payload === '')
            this.miss_parameter("payload");
        if (provider_token === '')
            this.miss_parameter("provider_token");
        if (start_parameter === '')
            this.miss_parameter("start_parameter");
        if (currency === '')
            this.miss_parameter("currency");
        if (prices === [])
            this.miss_parameter("prices");
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
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    answerShippingQuery({ shipping_query_id = '', ok = null, shipping_options = null, error_message = '', } = {
        shipping_query_id: '',
        ok: null,
    }) {
        if (shipping_query_id === '')
            this.miss_parameter("shipping_query_id");
        if (ok === null)
            this.miss_parameter("ok");
        let start_payload = {
            "method": "answerShippingQuery",
            'shipping_query_id': String(shipping_query_id),
            'ok': Boolean(ok),
            'shipping_options	': shipping_options == null ? null : JSON.stringify(shipping_options),
            'error_message': String(error_message),
        };
        return this.start(start_payload);
    }
    answerPreCheckoutQuery({ pre_checkout_query_id = '', ok = null, error_message = '', } = {
        pre_checkout_query_id: '',
        ok: null,
    }) {
        if (pre_checkout_query_id === '')
            this.miss_parameter("pre_checkout_query_id");
        if (ok === null)
            this.miss_parameter("ok");
        let start_payload = {
            "method": "answerPreCheckoutQuery",
            'pre_checkout_query_id': String(pre_checkout_query_id),
            'ok': Boolean(ok),
            'error_message': error_message,
        };
        return this.start(start_payload);
    }
    // === Telegram Passport ===
    setPassportDataErrors({ user_id = '', errors = null, } = {
        user_id: '',
        errors: null,
    }) {
        if (user_id === '')
            this.miss_parameter("user_id");
        if (errors === null)
            this.miss_parameter("errors");
        let start_payload = {
            "method": "setPassportDataErrors",
            "user_id": '',
            "errors": null,
        };
        return this.start(start_payload);
    }
    // === Games ===
    sendGame({ chat_id = '', game_short_name = null, disable_notification = false, reply_to_message_id = '', reply_markup = '' } = {
        chat_id: '',
        game_short_name: null,
    }) {
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (game_short_name === null)
            this.miss_parameter("game_short_name");
        let start_payload = {
            "method": "sendGame",
            "chat_id": '',
            "game_short_name": game_short_name,
            'disable_notification': Boolean(disable_notification),
            'reply_to_message_id': Number(reply_to_message_id),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    }
    setGameScore({ user_id = '', score = null, force = null, disable_edit_message = false, chat_id = '', message_id = '', inline_message_id = '', } = {
        user_id: '',
        score: null,
    }) {
        if (user_id === '')
            this.miss_parameter("user_id");
        if (score === null)
            this.miss_parameter("score");
        let start_payload = {
            "method": "setGameScore",
            "user_id": '',
            "score": score,
            "force": force,
            "disable_edit_message": disable_edit_message,
            "chat_id": String(chat_id),
            "message_id": String(message_id),
            "inline_message_id": String(inline_message_id),
        };
        return this.start(start_payload);
    }
    getGameHighScores({ user_id = '', chat_id = '', message_id = '', inline_message_id = '', } = {
        user_id: '',
    }) {
        if (user_id === '')
            this.miss_parameter("user_id");
        let start_payload = {
            "method": "getGameHighScores",
            "user_id": '',
            "chat_id": String(chat_id),
            "message_id": String(message_id),
            "inline_message_id": String(inline_message_id),
        };
        return this.start(start_payload);
    }
    // === public 自家der方法 ===
    getPath({ file_id = '', } = {
        file_id: '',
    }) {
        if (file_id === '')
            this.miss_parameter("file_id");
        const url = `https://api.telegram.org/bot${this.token}/getFile?file_id=${file_id}`;
        // @ts-ignore
        var html = UrlFetchApp.fetch(url);
        var json_html = JSON.parse(html);
        var path = json_html.result.file_path;
        return path;
    }
    getFileDownloadUrl({ path = '' } = {
        path: ''
    }) {
        if (path === '')
            this.miss_parameter("path");
        let TGDurl = `https://api.telegram.org/file/bot${this.token}/${path}`;
        return TGDurl;
    }
    // === private 自家der方法 ===
    miss_parameter(parameter) {
        throw new Error(`Missing ${parameter}`);
    }
    start(payload) {
        let data = {
            "method": "post",
            "payload": payload
        };
        try {
            // @ts-ignore
            return JSON.parse(UrlFetchApp.fetch(this.api_url, data));
        }
        catch (error) {
            // @ts-ignore
            var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
            var xhr = new XMLHttpRequest();
            xhr.open("POST", this.api_url, false); // 超重要，同步
            xhr.setRequestHeader('Content-Type', ' application/json');
            xhr.send(JSON.stringify(payload));
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    return xhr.responseText;
                }
                else {
                    throw new Error(`XMLHttpRequest error`);
                }
            };
            return JSON.parse(xhr.responseText);
        }
    }
}
exports.tgbot = tgbot;
//# sourceMappingURL=tgbot.js.map