// Compiled using ts2gas 3.6.3 (TypeScript 3.9.7)
var exports = exports || {};
var module = module || { exports: exports };
exports.tgbot = void 0;
/** Telegram bot class */
var tgbot = /** @class */ (function () {
    /**
    * @param {string} token - The bot token
    */
    function tgbot(token) {
        this.token = token;
        this.api_url = "https://api.telegram.org/bot" + this.token + "/";
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
    tgbot.prototype.getUpdates = function (_a) {
        /**
       * @param {object} options
       * @param {number} options.offset - offset
       * @param {number} options.limit - limit
       * @param {number} options.timeout - timeout
       * @param {string[]} options.allowed_updates - allowed_updates
      */
        var _b = _a === void 0 ? {} : _a, _c = _b.offset, offset = _c === void 0 ? '' : _c, _d = _b.limit, limit = _d === void 0 ? 100 : _d, _e = _b.timeout, timeout = _e === void 0 ? 0 : _e, _f = _b.allowed_updates, allowed_updates = _f === void 0 ? '' : _f;
        var start_payload = {
            "method": "getUpdates",
            "offset": offset,
            "limit": limit,
            "timeout": timeout,
            "allowed_updates": allowed_updates
        };
        return this.start(start_payload);
    };
    tgbot.prototype.setWebhook = function (_a) {
        var _b = _a === void 0 ? {
            url: ''
        } : _a, _c = _b.url, url = _c === void 0 ? '' : _c, _d = _b.certificate, certificate = _d === void 0 ? '' : _d, _e = _b.max_connections, max_connections = _e === void 0 ? 40 : _e, _f = _b.allowed_updates, allowed_updates = _f === void 0 ? [] : _f;
        if (url === '')
            this.miss_parameter("url");
        var start_payload = {
            "method": "setWebhook",
            "url": url,
            "certificate": certificate,
            "max_connections": max_connections,
            "allowed_updates": allowed_updates
        };
        return this.start(start_payload);
    };
    tgbot.prototype.deleteWebhook = function () {
        var start_payload = {
            "method": "deleteWebhook"
        };
        return this.start(start_payload);
    };
    tgbot.prototype.getWebhookInfo = function () {
        var start_payload = {
            "method": "getWebhookInfo"
        };
        return this.start(start_payload);
    };
    // === Available methods ===
    tgbot.prototype.getMe = function () {
        var start_payload = {
            "method": "getMe"
        };
        return this.start(start_payload);
    };
    tgbot.prototype.sendMessage = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            text: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.text, text = _d === void 0 ? '' : _d, _e = _b.parse_mode, parse_mode = _e === void 0 ? '' : _e, _f = _b.disable_web_page_preview, disable_web_page_preview = _f === void 0 ? false : _f, _g = _b.disable_notification, disable_notification = _g === void 0 ? false : _g, _h = _b.reply_to_message_id, reply_to_message_id = _h === void 0 ? '' : _h, _j = _b.reply_markup, reply_markup = _j === void 0 ? '' : _j;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (text === '')
            this.miss_parameter("chat_id");
        var start_payload = {
            "method": "sendMessage",
            'chat_id': String(chat_id),
            'text': String(text),
            'parse_mode': String(parse_mode),
            'disable_web_page_preview': Boolean(disable_web_page_preview),
            'disable_notification': Boolean(disable_notification),
            'reply_to_message_id': Number(reply_to_message_id),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.forwardMessage = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            from_chat_id: '',
            message_id: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.from_chat_id, from_chat_id = _d === void 0 ? '' : _d, _e = _b.disable_notification, disable_notification = _e === void 0 ? false : _e, _f = _b.message_id, message_id = _f === void 0 ? '' : _f;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (from_chat_id === '')
            this.miss_parameter("from_chat_id");
        if (message_id === '')
            this.miss_parameter("message_id");
        var start_payload = {
            "method": "forwardMessage",
            'chat_id': String(chat_id),
            'from_chat_id': String(from_chat_id),
            'disable_notification': Boolean(disable_notification),
            'message_id': Number(message_id)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.sendPhoto = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            photo: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.photo, photo = _d === void 0 ? '' : _d, _e = _b.caption, caption = _e === void 0 ? '' : _e, _f = _b.parse_mode, parse_mode = _f === void 0 ? '' : _f, _g = _b.disable_notification, disable_notification = _g === void 0 ? false : _g, _h = _b.reply_to_message_id, reply_to_message_id = _h === void 0 ? '' : _h, _j = _b.reply_markup, reply_markup = _j === void 0 ? '' : _j;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (photo === '')
            this.miss_parameter("photo");
        var start_payload = {
            "method": "sendPhoto",
            'chat_id': String(chat_id),
            'photo': photo,
            'caption': String(caption),
            'parse_mode': String(parse_mode),
            'disable_notification': Boolean(disable_notification),
            'reply_to_message_id': Number(reply_to_message_id),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.sendAudio = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            audio: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.audio, audio = _d === void 0 ? '' : _d, _e = _b.caption, caption = _e === void 0 ? '' : _e, _f = _b.parse_mode, parse_mode = _f === void 0 ? '' : _f, _g = _b.duration, duration = _g === void 0 ? '' : _g, _h = _b.performer, performer = _h === void 0 ? '' : _h, _j = _b.title, title = _j === void 0 ? '' : _j, _k = _b.thumb, thumb = _k === void 0 ? '' : _k, _l = _b.disable_notification, disable_notification = _l === void 0 ? false : _l, _m = _b.reply_to_message_id, reply_to_message_id = _m === void 0 ? '' : _m, _o = _b.reply_markup, reply_markup = _o === void 0 ? '' : _o;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (audio === '')
            this.miss_parameter("audio");
        var start_payload = {
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
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.sendDocument = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            document: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.document, document = _d === void 0 ? '' : _d, _e = _b.thumb, thumb = _e === void 0 ? '' : _e, _f = _b.caption, caption = _f === void 0 ? '' : _f, _g = _b.parse_mode, parse_mode = _g === void 0 ? '' : _g, _h = _b.disable_notification, disable_notification = _h === void 0 ? false : _h, _j = _b.reply_to_message_id, reply_to_message_id = _j === void 0 ? '' : _j, _k = _b.reply_markup, reply_markup = _k === void 0 ? '' : _k;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (document === '')
            this.miss_parameter("document");
        var start_payload = {
            "method": "sendDocument",
            'chat_id': String(chat_id),
            'document': document,
            'thumb': thumb,
            'caption': String(caption),
            'parse_mode': String(parse_mode),
            'disable_notification': Boolean(disable_notification),
            'reply_to_message_id': Number(reply_to_message_id),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.sendVideo = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            video: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.video, video = _d === void 0 ? '' : _d, _e = _b.duration, duration = _e === void 0 ? '' : _e, _f = _b.width, width = _f === void 0 ? '' : _f, _g = _b.height, height = _g === void 0 ? '' : _g, _h = _b.thumb, thumb = _h === void 0 ? '' : _h, _j = _b.caption, caption = _j === void 0 ? '' : _j, _k = _b.parse_mode, parse_mode = _k === void 0 ? '' : _k, _l = _b.supports_streaming, supports_streaming = _l === void 0 ? false : _l, _m = _b.disable_notification, disable_notification = _m === void 0 ? false : _m, _o = _b.reply_to_message_id, reply_to_message_id = _o === void 0 ? '' : _o, _p = _b.reply_markup, reply_markup = _p === void 0 ? '' : _p;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (video === '')
            this.miss_parameter("video");
        var start_payload = {
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
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.sendAnimation = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            animation: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.animation, animation = _d === void 0 ? '' : _d, _e = _b.duration, duration = _e === void 0 ? '' : _e, _f = _b.width, width = _f === void 0 ? '' : _f, _g = _b.height, height = _g === void 0 ? '' : _g, _h = _b.thumb, thumb = _h === void 0 ? '' : _h, _j = _b.caption, caption = _j === void 0 ? '' : _j, _k = _b.parse_mode, parse_mode = _k === void 0 ? '' : _k, _l = _b.disable_notification, disable_notification = _l === void 0 ? false : _l, _m = _b.reply_to_message_id, reply_to_message_id = _m === void 0 ? '' : _m, _o = _b.reply_markup, reply_markup = _o === void 0 ? '' : _o;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (animation === '')
            this.miss_parameter("animation");
        var start_payload = {
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
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.sendVoice = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            voice: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.voice, voice = _d === void 0 ? '' : _d, _e = _b.duration, duration = _e === void 0 ? '' : _e, _f = _b.caption, caption = _f === void 0 ? '' : _f, _g = _b.parse_mode, parse_mode = _g === void 0 ? '' : _g, _h = _b.disable_notification, disable_notification = _h === void 0 ? false : _h, _j = _b.reply_to_message_id, reply_to_message_id = _j === void 0 ? '' : _j, _k = _b.reply_markup, reply_markup = _k === void 0 ? '' : _k;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (voice === '')
            this.miss_parameter("voice");
        var start_payload = {
            "method": "sendVoice",
            'chat_id': String(chat_id),
            'voice': voice,
            'duration': Number(duration),
            'caption': String(caption),
            'parse_mode': String(parse_mode),
            'disable_notification': Boolean(disable_notification),
            'reply_to_message_id': Number(reply_to_message_id),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.sendVideoNote = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            video_note: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.video_note, video_note = _d === void 0 ? '' : _d, _e = _b.duration, duration = _e === void 0 ? '' : _e, _f = _b.length, length = _f === void 0 ? '' : _f, _g = _b.thumb, thumb = _g === void 0 ? '' : _g, _h = _b.disable_notification, disable_notification = _h === void 0 ? false : _h, _j = _b.reply_to_message_id, reply_to_message_id = _j === void 0 ? '' : _j, _k = _b.reply_markup, reply_markup = _k === void 0 ? '' : _k;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (video_note === '')
            this.miss_parameter("video_note");
        var start_payload = {
            "method": "sendVideoNote",
            'chat_id': String(chat_id),
            'video_note': video_note,
            'length': Number(length),
            'duration': Number(duration),
            'thumb': thumb,
            'disable_notification': Boolean(disable_notification),
            'reply_to_message_id': Number(reply_to_message_id),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.sendMediaGroup = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            media: []
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.media, media = _d === void 0 ? [] : _d, _e = _b.disable_notification, disable_notification = _e === void 0 ? false : _e, _f = _b.reply_to_message_id, reply_to_message_id = _f === void 0 ? '' : _f;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (media === [])
            this.miss_parameter("media");
        var start_payload = {
            "method": "sendMediaGroup",
            'chat_id': String(chat_id),
            'media': JSON.stringify(media),
            'disable_notification': Boolean(disable_notification),
            'reply_to_message_id': Number(reply_to_message_id)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.sendLocation = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            latitude: '',
            longitude: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.latitude, latitude = _d === void 0 ? '' : _d, _e = _b.longitude, longitude = _e === void 0 ? '' : _e, _f = _b.live_period, live_period = _f === void 0 ? null : _f, _g = _b.disable_notification, disable_notification = _g === void 0 ? false : _g, _h = _b.reply_to_message_id, reply_to_message_id = _h === void 0 ? '' : _h, _j = _b.reply_markup, reply_markup = _j === void 0 ? '' : _j;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (latitude === '')
            this.miss_parameter("latitude");
        if (longitude === '')
            this.miss_parameter("longitude");
        var start_payload = {
            "method": "sendLocation",
            'chat_id': String(chat_id),
            'latitude': Number(latitude),
            'longitude': Number(longitude),
            'live_period': Number(live_period),
            'disable_notification': Boolean(disable_notification),
            'reply_to_message_id': Number(reply_to_message_id),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.editMessageLiveLocation = function (_a) {
        var _b = _a === void 0 ? {
            latitude: null,
            longitude: null
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.message_id, message_id = _d === void 0 ? null : _d, _e = _b.inline_message_id, inline_message_id = _e === void 0 ? '' : _e, _f = _b.latitude, latitude = _f === void 0 ? null : _f, _g = _b.longitude, longitude = _g === void 0 ? null : _g, _h = _b.reply_markup, reply_markup = _h === void 0 ? '' : _h;
        if (latitude === null)
            this.miss_parameter("latitude");
        if (longitude === null)
            this.miss_parameter("longitude");
        var start_payload = {
            "method": "editMessageLiveLocation",
            'chat_id': String(chat_id),
            'message_id': Number(message_id),
            'inline_message_id': String(inline_message_id),
            'latitude': Number(latitude),
            'longitude': Number(longitude),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.stopMessageLiveLocation = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.message_id, message_id = _d === void 0 ? null : _d, _e = _b.inline_message_id, inline_message_id = _e === void 0 ? '' : _e, _f = _b.reply_markup, reply_markup = _f === void 0 ? '' : _f;
        var start_payload = {
            "method": "stopMessageLiveLocation",
            'chat_id': String(chat_id),
            'message_id': Number(message_id),
            'inline_message_id': String(inline_message_id),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.sendVenue = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            latitude: null,
            longitude: null,
            title: '',
            address: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.latitude, latitude = _d === void 0 ? null : _d, _e = _b.longitude, longitude = _e === void 0 ? null : _e, _f = _b.title, title = _f === void 0 ? '' : _f, _g = _b.address, address = _g === void 0 ? '' : _g, _h = _b.foursquare_id, foursquare_id = _h === void 0 ? '' : _h, _j = _b.foursquare_type, foursquare_type = _j === void 0 ? '' : _j, _k = _b.disable_notification, disable_notification = _k === void 0 ? false : _k, _l = _b.reply_to_message_id, reply_to_message_id = _l === void 0 ? '' : _l, _m = _b.reply_markup, reply_markup = _m === void 0 ? '' : _m;
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
        var start_payload = {
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
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.sendContact = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            phone_number: '',
            first_name: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.phone_number, phone_number = _d === void 0 ? '' : _d, _e = _b.first_name, first_name = _e === void 0 ? '' : _e, _f = _b.last_name, last_name = _f === void 0 ? '' : _f, _g = _b.vcard, vcard = _g === void 0 ? '' : _g, _h = _b.disable_notification, disable_notification = _h === void 0 ? false : _h, _j = _b.reply_to_message_id, reply_to_message_id = _j === void 0 ? '' : _j, _k = _b.reply_markup, reply_markup = _k === void 0 ? '' : _k;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (phone_number === '')
            this.miss_parameter("phone_number");
        if (first_name === '')
            this.miss_parameter("first_name");
        var start_payload = {
            "method": "sendContact",
            'chat_id': String(chat_id),
            'phone_number': String(phone_number),
            'first_name': String(first_name),
            'last_name': String(last_name),
            'vcard': String(vcard),
            'disable_notification': Boolean(disable_notification),
            'reply_to_message_id': Number(reply_to_message_id),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.sendPoll = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            question: '',
            options: []
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.question, question = _d === void 0 ? '' : _d, _e = _b.options, options = _e === void 0 ? [] : _e, _f = _b.is_anonymous, is_anonymous = _f === void 0 ? false : _f, _g = _b.type, type = _g === void 0 ? 'regular' : _g, _h = _b.allows_multiple_answers, allows_multiple_answers = _h === void 0 ? false : _h, _j = _b.correct_option_id, correct_option_id = _j === void 0 ? null : _j, _k = _b.explanation, explanation = _k === void 0 ? '' : _k, _l = _b.explanation_parse_mode, explanation_parse_mode = _l === void 0 ? '' : _l, _m = _b.open_period, open_period = _m === void 0 ? null : _m, _o = _b.close_date, close_date = _o === void 0 ? null : _o, _p = _b.is_closed, is_closed = _p === void 0 ? false : _p, _q = _b.disable_notification, disable_notification = _q === void 0 ? false : _q, _r = _b.reply_to_message_id, reply_to_message_id = _r === void 0 ? '' : _r, _s = _b.reply_markup, reply_markup = _s === void 0 ? '' : _s;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (question === '')
            this.miss_parameter("question");
        if (options === [])
            this.miss_parameter("options");
        var start_payload = {
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
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.sendDice = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.emoji, emoji = _d === void 0 ? '' : _d, _e = _b.disable_notification, disable_notification = _e === void 0 ? false : _e, _f = _b.reply_to_message_id, reply_to_message_id = _f === void 0 ? '' : _f, _g = _b.reply_markup, reply_markup = _g === void 0 ? '' : _g;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        var start_payload = {
            "method": "sendDice",
            'chat_id': String(chat_id),
            'emoji': String(emoji),
            'disable_notification': Boolean(disable_notification),
            'reply_to_message_id': Number(reply_to_message_id),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.sendChatAction = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            action: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.action, action = _d === void 0 ? '' : _d;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (action === '')
            this.miss_parameter("action");
        var start_payload = {
            "method": "sendChatAction",
            'chat_id': String(chat_id),
            'action': String(action)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.getUserProfilePhotos = function (_a) {
        var _b = _a === void 0 ? {
            user_id: ''
        } : _a, _c = _b.user_id, user_id = _c === void 0 ? '' : _c, _d = _b.offset, offset = _d === void 0 ? null : _d, _e = _b.limit, limit = _e === void 0 ? 100 : _e;
        if (user_id === '')
            this.miss_parameter("user_id");
        var start_payload = {
            "method": "getUserProfilePhotos",
            'user_id': String(user_id),
            "offset": Number(offset),
            "limit": Number(limit)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.getFile = function (_a) {
        var _b = (_a === void 0 ? {
            file_id: ''
        } : _a).file_id, file_id = _b === void 0 ? '' : _b;
        if (file_id === '')
            this.miss_parameter("file_id");
        var start_payload = {
            "method": "getFile",
            'file_id': String(file_id)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.kickChatMember = function (
    // kickChatMember TG會忽略掉 until_date 參數，需要再行實驗觀察
    _a) {
        var
        // kickChatMember TG會忽略掉 until_date 參數，需要再行實驗觀察
        _b = _a === void 0 ? {
            chat_id: '',
            user_id: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.user_id, user_id = _d === void 0 ? '' : _d, _e = _b.until_date, until_date = _e === void 0 ? null : _e;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (user_id === '')
            this.miss_parameter("user_id");
        var start_payload = {
            "method": "kickChatMember",
            'chat_id': String(chat_id),
            'user_id': String(user_id),
            'until_date': Number(until_date)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.unbanChatMember = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            user_id: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.user_id, user_id = _d === void 0 ? '' : _d;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (user_id === '')
            this.miss_parameter("user_id");
        var start_payload = {
            "method": "unbanChatMember",
            'chat_id': String(chat_id),
            'user_id': String(user_id)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.restrictChatMember = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            user_id: '',
            permissions: {}
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.user_id, user_id = _d === void 0 ? '' : _d, _e = _b.permissions, permissions = _e === void 0 ? {} : _e, _f = _b.until_date, until_date = _f === void 0 ? null : _f;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (user_id === '')
            this.miss_parameter("user_id");
        if (permissions === {})
            this.miss_parameter("permissions");
        var start_payload = {
            "method": "restrictChatMember",
            'chat_id': String(chat_id),
            'user_id': String(user_id),
            'permissions': JSON.stringify(permissions),
            'until_date': Number(until_date)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.promoteChatMember = function (
    // 如果要使用這個功能，bot需有 "新增管理員"的權限? 還是全部的權限?
    _a) {
        var
        // 如果要使用這個功能，bot需有 "新增管理員"的權限? 還是全部的權限?
        _b = _a === void 0 ? {
            chat_id: '',
            user_id: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.user_id, user_id = _d === void 0 ? '' : _d, _e = _b.can_change_info, can_change_info = _e === void 0 ? null : _e, _f = _b.can_post_messages, can_post_messages = _f === void 0 ? null : _f, _g = _b.can_edit_messages, can_edit_messages = _g === void 0 ? null : _g, _h = _b.can_delete_messages, can_delete_messages = _h === void 0 ? null : _h, _j = _b.can_invite_users, can_invite_users = _j === void 0 ? null : _j, _k = _b.can_restrict_members, can_restrict_members = _k === void 0 ? null : _k, _l = _b.can_pin_messages, can_pin_messages = _l === void 0 ? null : _l, _m = _b.can_promote_members, can_promote_members = _m === void 0 ? null : _m;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (user_id === '')
            this.miss_parameter("user_id");
        var start_payload = {
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
            'can_promote_members': Boolean(can_promote_members)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.setChatAdministratorCustomTitle = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            user_id: '',
            custom_title: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.user_id, user_id = _d === void 0 ? '' : _d, _e = _b.custom_title, custom_title = _e === void 0 ? '' : _e;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (user_id === '')
            this.miss_parameter("user_id");
        var start_payload = {
            "method": "setChatAdministratorCustomTitle",
            'chat_id': String(chat_id),
            'user_id': String(user_id),
            'custom_title': String(custom_title)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.setChatPermissions = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            permissions: {}
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.permissions, permissions = _d === void 0 ? {} : _d;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (permissions === {})
            this.miss_parameter("permissions");
        var start_payload = {
            "method": "setChatPermissions",
            'chat_id': String(chat_id),
            'permissions': JSON.stringify(permissions)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.exportChatInviteLink = function (_a) {
        var _b = (_a === void 0 ? { chat_id: '' } : _a).chat_id, chat_id = _b === void 0 ? '' : _b;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        var start_payload = {
            "method": "exportChatInviteLink",
            'chat_id': String(chat_id)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.setChatPhoto = function (
    // 照片僅能用新的上傳
    _a) {
        var
        // 照片僅能用新的上傳
        _b = _a === void 0 ? {
            chat_id: '',
            photo: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.photo, photo = _d === void 0 ? '' : _d;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (photo === '')
            this.miss_parameter("photo");
        var start_payload = {
            "method": "setChatPhoto",
            'chat_id': String(chat_id),
            'photo': photo
        };
        return this.start(start_payload);
    };
    tgbot.prototype.deleteChatPhoto = function (_a) {
        var _b = (_a === void 0 ? {
            chat_id: ''
        } : _a).chat_id, chat_id = _b === void 0 ? '' : _b;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        var start_payload = {
            "method": "deleteChatPhoto",
            'chat_id': String(chat_id)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.setChatTitle = function (
    // 特別的是，如果名子一樣的話，也會回傳 true
    _a) {
        var
        // 特別的是，如果名子一樣的話，也會回傳 true
        _b = _a === void 0 ? {
            chat_id: '',
            title: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.title, title = _d === void 0 ? '' : _d;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (title === '')
            this.miss_parameter("title");
        var start_payload = {
            "method": "setChatTitle",
            'chat_id': String(chat_id),
            'title': String(title)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.setChatDescription = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.description, description = _d === void 0 ? '' : _d;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        var start_payload = {
            "method": "setChatDescription",
            'chat_id': String(chat_id),
            'description': String(description)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.pinChatMessage = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            message_id: null
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.message_id, message_id = _d === void 0 ? null : _d, _e = _b.disable_notification, disable_notification = _e === void 0 ? false : _e;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (message_id === null)
            this.miss_parameter("message_id");
        var start_payload = {
            "method": "pinChatMessage",
            'chat_id': String(chat_id),
            'message_id': Number(message_id),
            'disable_notification': Boolean(disable_notification)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.unpinChatMessage = function (_a) {
        var _b = (_a === void 0 ? {
            chat_id: ''
        } : _a).chat_id, chat_id = _b === void 0 ? '' : _b;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        var start_payload = {
            "method": "unpinChatMessage",
            'chat_id': String(chat_id)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.leaveChat = function (_a) {
        var _b = (_a === void 0 ? {
            chat_id: ''
        } : _a).chat_id, chat_id = _b === void 0 ? '' : _b;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        var start_payload = {
            "method": "leaveChat",
            'chat_id': String(chat_id)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.getChat = function (_a) {
        var _b = (_a === void 0 ? {
            chat_id: ''
        } : _a).chat_id, chat_id = _b === void 0 ? '' : _b;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        var start_payload = {
            "method": "getChat",
            'chat_id': String(chat_id)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.getChatAdministrators = function (_a) {
        var _b = (_a === void 0 ? {
            chat_id: ''
        } : _a).chat_id, chat_id = _b === void 0 ? '' : _b;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        var start_payload = {
            "method": "getChatAdministrators",
            'chat_id': String(chat_id)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.getChatMembersCount = function (_a) {
        var _b = (_a === void 0 ? {
            chat_id: ''
        } : _a).chat_id, chat_id = _b === void 0 ? '' : _b;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        var start_payload = {
            "method": "getChatMembersCount",
            'chat_id': String(chat_id)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.getChatMember = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            user_id: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.user_id, user_id = _d === void 0 ? '' : _d;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (user_id === '')
            this.miss_parameter("user_id");
        var start_payload = {
            "method": "getChatMember",
            'chat_id': String(chat_id),
            'user_id': String(user_id)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.setChatStickerSet = function (
    // 人數未達100人則無法設定
    _a) {
        var
        // 人數未達100人則無法設定
        _b = _a === void 0 ? {
            chat_id: '',
            sticker_set_name: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.sticker_set_name, sticker_set_name = _d === void 0 ? '' : _d;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        var start_payload = {
            "method": "setChatStickerSet",
            'chat_id': String(chat_id),
            'sticker_set_name': String(sticker_set_name)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.deleteChatStickerSet = function (
    // 人數未達100人則無法設定
    _a) {
        var _b = (_a === void 0 ? {
            chat_id: ''
        } : _a).chat_id, chat_id = _b === void 0 ? '' : _b;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        var start_payload = {
            "method": "deleteChatStickerSet",
            'chat_id': String(chat_id)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.answerCallbackQuery = function (_a) {
        var _b = _a === void 0 ? {
            callback_query_id: ''
        } : _a, _c = _b.callback_query_id, callback_query_id = _c === void 0 ? '' : _c, _d = _b.text, text = _d === void 0 ? '' : _d, _e = _b.show_alert, show_alert = _e === void 0 ? false : _e, _f = _b.url, url = _f === void 0 ? '' : _f, _g = _b.cache_time, cache_time = _g === void 0 ? null : _g;
        if (callback_query_id === '')
            this.miss_parameter("callback_query_id");
        var start_payload = {
            "method": "answerCallbackQuery",
            'callback_query_id': String(callback_query_id),
            'text': String(text),
            'show_alert': Boolean(show_alert),
            'url': String(url),
            'cache_time': Number(cache_time)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.setMyCommands = function (_a) {
        var _b = (_a === void 0 ? {
            commands: []
        } : _a).commands, commands = _b === void 0 ? [] : _b;
        if (commands === [])
            this.miss_parameter("commands");
        var start_payload = {
            "method": "setMyCommands",
            'commands': JSON.stringify(commands)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.getMyCommands = function () {
        var start_payload = {
            "method": "getMyCommands"
        };
        return this.start(start_payload);
    };
    // === Updating messages ===
    tgbot.prototype.editMessageText = function (_a) {
        var _b = _a === void 0 ? {
            text: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.message_id, message_id = _d === void 0 ? null : _d, _e = _b.inline_message_id, inline_message_id = _e === void 0 ? '' : _e, _f = _b.text, text = _f === void 0 ? '' : _f, _g = _b.parse_mode, parse_mode = _g === void 0 ? '' : _g, _h = _b.disable_web_page_preview, disable_web_page_preview = _h === void 0 ? false : _h, _j = _b.reply_markup, reply_markup = _j === void 0 ? '' : _j;
        if (text === '')
            this.miss_parameter("text");
        var start_payload = {
            "method": "editMessageText",
            'chat_id': String(chat_id),
            'message_id': String(message_id),
            'inline_message_id': String(inline_message_id),
            'text': String(text),
            'parse_mode': String(parse_mode),
            'disable_web_page_preview': Boolean(disable_web_page_preview),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.editMessageCaption = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.message_id, message_id = _d === void 0 ? null : _d, _e = _b.inline_message_id, inline_message_id = _e === void 0 ? '' : _e, _f = _b.caption, caption = _f === void 0 ? '' : _f, _g = _b.parse_mode, parse_mode = _g === void 0 ? '' : _g, _h = _b.disable_web_page_preview, disable_web_page_preview = _h === void 0 ? false : _h, _j = _b.reply_markup, reply_markup = _j === void 0 ? '' : _j;
        var start_payload = {
            "method": "editMessageCaption",
            'chat_id': String(chat_id),
            'message_id': String(message_id),
            'inline_message_id': String(inline_message_id),
            'caption': String(caption),
            'parse_mode': parse_mode,
            'disable_web_page_preview': disable_web_page_preview,
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.editMessageMedia = function (_a) {
        var _b = _a === void 0 ? {
            media: {}
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.message_id, message_id = _d === void 0 ? null : _d, _e = _b.inline_message_id, inline_message_id = _e === void 0 ? '' : _e, _f = _b.media, media = _f === void 0 ? {} : _f, _g = _b.reply_markup, reply_markup = _g === void 0 ? '' : _g;
        if (media === {})
            this.miss_parameter("media");
        var start_payload = {
            "method": "editMessageMedia",
            'chat_id': String(chat_id),
            'message_id': String(message_id),
            'inline_message_id': String(inline_message_id),
            'media': String(media),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.editMessageReplyMarkup = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.message_id, message_id = _d === void 0 ? null : _d, _e = _b.inline_message_id, inline_message_id = _e === void 0 ? '' : _e, _f = _b.reply_markup, reply_markup = _f === void 0 ? '' : _f;
        var start_payload = {
            "method": "editMessageReplyMarkup",
            'chat_id': String(chat_id),
            'message_id': String(message_id),
            'inline_message_id': String(inline_message_id),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.stopPoll = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            message_id: null
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.message_id, message_id = _d === void 0 ? null : _d, _e = _b.reply_markup, reply_markup = _e === void 0 ? '' : _e;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (message_id === null)
            this.miss_parameter("message_id");
        var start_payload = {
            "method": "stopPoll",
            'chat_id': String(chat_id),
            'message_id': String(message_id),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.deleteMessage = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            message_id: null
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.message_id, message_id = _d === void 0 ? null : _d;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (message_id === null)
            this.miss_parameter("message_id");
        var start_payload = {
            "method": "deleteMessage",
            'chat_id': String(chat_id),
            'message_id': String(message_id)
        };
        return this.start(start_payload);
    };
    // === Stickers ===
    tgbot.prototype.sendSticker = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            sticker: ''
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.sticker, sticker = _d === void 0 ? '' : _d, _e = _b.disable_notification, disable_notification = _e === void 0 ? false : _e, _f = _b.reply_to_message_id, reply_to_message_id = _f === void 0 ? '' : _f, _g = _b.reply_markup, reply_markup = _g === void 0 ? '' : _g;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (sticker === '')
            this.miss_parameter("sticker");
        var start_payload = {
            "method": "sendSticker",
            'chat_id': String(chat_id),
            'sticker': sticker,
            'disable_notification': Boolean(disable_notification),
            'reply_to_message_id': Number(reply_to_message_id),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.getStickerSet = function (_a) {
        var _b = (_a === void 0 ? {
            name: ''
        } : _a).name, name = _b === void 0 ? '' : _b;
        if (name === '')
            this.miss_parameter("name");
        var start_payload = {
            "method": "getStickerSet",
            'name': String(name)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.uploadStickerFile = function (_a) {
        var _b = _a === void 0 ? {
            user_id: null,
            png_sticker: ''
        } : _a, _c = _b.user_id, user_id = _c === void 0 ? null : _c, _d = _b.png_sticker, png_sticker = _d === void 0 ? '' : _d;
        if (user_id === null)
            this.miss_parameter("user_id");
        if (png_sticker === '')
            this.miss_parameter("png_sticker");
        var start_payload = {
            "method": "uploadStickerFile",
            'user_id': String(user_id),
            'png_sticker': png_sticker
        };
        return this.start(start_payload);
    };
    tgbot.prototype.createNewStickerSet = function (_a) {
        var _b = _a === void 0 ? {
            user_id: null,
            name: '',
            title: '',
            emojis: ''
        } : _a, _c = _b.user_id, user_id = _c === void 0 ? null : _c, //這個要數字的id
        _d = _b.name, //這個要數字的id
        name = _d === void 0 ? '' : _d, _e = _b.title, title = _e === void 0 ? '' : _e, _f = _b.png_sticker, png_sticker = _f === void 0 ? '' : _f, _g = _b.tgs_sticker, tgs_sticker = _g === void 0 ? '' : _g, _h = _b.emojis, emojis = _h === void 0 ? '' : _h, _j = _b.contains_masks, contains_masks = _j === void 0 ? false : _j, _k = _b.mask_position, mask_position = _k === void 0 ? null : _k;
        if (user_id === null)
            this.miss_parameter("user_id");
        if (name === '')
            this.miss_parameter("name");
        if (title === '')
            this.miss_parameter("title");
        if (emojis === '')
            this.miss_parameter("emojis");
        var start_payload = {
            "method": "createNewStickerSet",
            'user_id': String(user_id),
            'name': String(name),
            'title': String(title),
            'png_sticker': png_sticker,
            'tgs_sticker': tgs_sticker,
            'emojis': String(emojis),
            'contains_masks': Boolean(contains_masks),
            'mask_position': mask_position == null ? null : JSON.stringify(mask_position)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.addStickerToSet = function (_a) {
        var _b = _a === void 0 ? {
            user_id: null,
            name: '',
            emojis: ''
        } : _a, _c = _b.user_id, user_id = _c === void 0 ? null : _c, _d = _b.name, name = _d === void 0 ? '' : _d, _e = _b.png_sticker, png_sticker = _e === void 0 ? '' : _e, _f = _b.tgs_sticker, tgs_sticker = _f === void 0 ? '' : _f, _g = _b.emojis, emojis = _g === void 0 ? '' : _g, _h = _b.mask_position, mask_position = _h === void 0 ? null : _h;
        if (user_id === null)
            this.miss_parameter("user_id");
        if (name === '')
            this.miss_parameter("name");
        if (emojis === '')
            this.miss_parameter("emojis");
        var start_payload = {
            "method": "addStickerToSet",
            'user_id': String(user_id),
            'name': String(name),
            'png_sticker': png_sticker,
            'tgs_sticker': tgs_sticker,
            'emojis': String(emojis),
            'mask_position': mask_position == null ? null : JSON.stringify(mask_position)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.setStickerPositionInSet = function (_a) {
        var _b = _a === void 0 ? {
            sticker: '',
            position: null
        } : _a, _c = _b.sticker, sticker = _c === void 0 ? '' : _c, _d = _b.position, position = _d === void 0 ? null : _d;
        if (sticker === '')
            this.miss_parameter("sticker");
        if (position === null)
            this.miss_parameter("position");
        var start_payload = {
            "method": "setStickerPositionInSet",
            'sticker': String(sticker),
            'position': Number(position)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.deleteStickerFromSet = function (_a) {
        var _b = (_a === void 0 ? {
            sticker: ''
        } : _a).sticker, sticker = _b === void 0 ? '' : _b;
        if (sticker === '')
            this.miss_parameter("sticker");
        var start_payload = {
            "method": "deleteStickerFromSet",
            'sticker': String(sticker)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.setStickerSetThumb = function (_a) {
        var _b = _a === void 0 ? {
            user_id: null,
            name: ''
        } : _a, _c = _b.name, name = _c === void 0 ? '' : _c, _d = _b.user_id, user_id = _d === void 0 ? null : _d, _e = _b.thumb, thumb = _e === void 0 ? '' : _e;
        if (name === '')
            this.miss_parameter("name");
        if (user_id === null)
            this.miss_parameter("user_id");
        var start_payload = {
            "method": "setStickerSetThumb",
            'name': String(name),
            'user_id': String(user_id),
            'thumb': thumb
        };
        return this.start(start_payload);
    };
    // === Inline mode ===
    tgbot.prototype.answerInlineQuery = function (_a) {
        var _b = _a === void 0 ? {
            inline_query_id: '',
            results: []
        } : _a, _c = _b.inline_query_id, inline_query_id = _c === void 0 ? '' : _c, _d = _b.results, results = _d === void 0 ? [] : _d, _e = _b.cache_time, cache_time = _e === void 0 ? null : _e, _f = _b.is_personal, is_personal = _f === void 0 ? false : _f, _g = _b.next_offset, next_offset = _g === void 0 ? '' : _g, _h = _b.switch_pm_text, switch_pm_text = _h === void 0 ? '' : _h, _j = _b.switch_pm_parameter, switch_pm_parameter = _j === void 0 ? '' : _j;
        if (inline_query_id === '')
            this.miss_parameter("inline_query_id");
        if (results === [])
            this.miss_parameter("results");
        var start_payload = {
            "method": "answerInlineQuery",
            'inline_query_id': String(inline_query_id),
            'results': JSON.stringify(results),
            'cache_time': cache_time,
            'is_personal': Boolean(is_personal),
            'next_offset': String(next_offset),
            'switch_pm_text': String(switch_pm_text),
            'switch_pm_parameter': String(switch_pm_parameter)
        };
        return this.start(start_payload);
    };
    // === Payments ===
    tgbot.prototype.sendInvoice = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            title: '',
            description: '',
            payload: '',
            provider_token: '',
            start_parameter: '',
            currency: '',
            prices: []
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.title, title = _d === void 0 ? '' : _d, _e = _b.description, description = _e === void 0 ? '' : _e, _f = _b.payload, payload = _f === void 0 ? '' : _f, _g = _b.provider_token, provider_token = _g === void 0 ? '' : _g, _h = _b.start_parameter, start_parameter = _h === void 0 ? '' : _h, _j = _b.currency, currency = _j === void 0 ? '' : _j, _k = _b.prices, prices = _k === void 0 ? [] : _k, _l = _b.provider_data, provider_data = _l === void 0 ? '' : _l, _m = _b.photo_url, photo_url = _m === void 0 ? '' : _m, _o = _b.photo_size, photo_size = _o === void 0 ? null : _o, _p = _b.photo_width, photo_width = _p === void 0 ? null : _p, _q = _b.photo_height, photo_height = _q === void 0 ? null : _q, _r = _b.need_name, need_name = _r === void 0 ? false : _r, _s = _b.need_phone_number, need_phone_number = _s === void 0 ? false : _s, _t = _b.need_email, need_email = _t === void 0 ? false : _t, _u = _b.need_shipping_address, need_shipping_address = _u === void 0 ? false : _u, _v = _b.send_phone_number_to_provider, send_phone_number_to_provider = _v === void 0 ? false : _v, _w = _b.send_email_to_provider, send_email_to_provider = _w === void 0 ? false : _w, _x = _b.is_flexible, is_flexible = _x === void 0 ? false : _x, _y = _b.disable_notification, disable_notification = _y === void 0 ? false : _y, _z = _b.reply_to_message_id, reply_to_message_id = _z === void 0 ? '' : _z, _0 = _b.reply_markup, reply_markup = _0 === void 0 ? '' : _0;
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
        var start_payload = {
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
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.answerShippingQuery = function (_a) {
        var _b = _a === void 0 ? {
            shipping_query_id: '',
            ok: null
        } : _a, _c = _b.shipping_query_id, shipping_query_id = _c === void 0 ? '' : _c, _d = _b.ok, ok = _d === void 0 ? null : _d, _e = _b.shipping_options, shipping_options = _e === void 0 ? null : _e, _f = _b.error_message, error_message = _f === void 0 ? '' : _f;
        if (shipping_query_id === '')
            this.miss_parameter("shipping_query_id");
        if (ok === null)
            this.miss_parameter("ok");
        var start_payload = {
            "method": "answerShippingQuery",
            'shipping_query_id': String(shipping_query_id),
            'ok': Boolean(ok),
            'shipping_options	': shipping_options == null ? null : JSON.stringify(shipping_options),
            'error_message': String(error_message)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.answerPreCheckoutQuery = function (_a) {
        var _b = _a === void 0 ? {
            pre_checkout_query_id: '',
            ok: null
        } : _a, _c = _b.pre_checkout_query_id, pre_checkout_query_id = _c === void 0 ? '' : _c, _d = _b.ok, ok = _d === void 0 ? null : _d, _e = _b.error_message, error_message = _e === void 0 ? '' : _e;
        if (pre_checkout_query_id === '')
            this.miss_parameter("pre_checkout_query_id");
        if (ok === null)
            this.miss_parameter("ok");
        var start_payload = {
            "method": "answerPreCheckoutQuery",
            'pre_checkout_query_id': String(pre_checkout_query_id),
            'ok': Boolean(ok),
            'error_message': error_message
        };
        return this.start(start_payload);
    };
    // === Telegram Passport ===
    tgbot.prototype.setPassportDataErrors = function (_a) {
        var _b = _a === void 0 ? {
            user_id: '',
            errors: null
        } : _a, _c = _b.user_id, user_id = _c === void 0 ? '' : _c, _d = _b.errors, errors = _d === void 0 ? null : _d;
        if (user_id === '')
            this.miss_parameter("user_id");
        if (errors === null)
            this.miss_parameter("errors");
        var start_payload = {
            "method": "setPassportDataErrors",
            "user_id": '',
            "errors": null
        };
        return this.start(start_payload);
    };
    // === Games ===
    tgbot.prototype.sendGame = function (_a) {
        var _b = _a === void 0 ? {
            chat_id: '',
            game_short_name: null
        } : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.game_short_name, game_short_name = _d === void 0 ? null : _d, _e = _b.disable_notification, disable_notification = _e === void 0 ? false : _e, _f = _b.reply_to_message_id, reply_to_message_id = _f === void 0 ? '' : _f, _g = _b.reply_markup, reply_markup = _g === void 0 ? '' : _g;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (game_short_name === null)
            this.miss_parameter("game_short_name");
        var start_payload = {
            "method": "sendGame",
            "chat_id": '',
            "game_short_name": game_short_name,
            'disable_notification': Boolean(disable_notification),
            'reply_to_message_id': Number(reply_to_message_id),
            'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup)
        };
        if (start_payload['reply_markup'] == null) {
            delete start_payload['reply_markup'];
        }
        return this.start(start_payload);
    };
    tgbot.prototype.setGameScore = function (_a) {
        var _b = _a === void 0 ? {
            user_id: '',
            score: null
        } : _a, _c = _b.user_id, user_id = _c === void 0 ? '' : _c, _d = _b.score, score = _d === void 0 ? null : _d, _e = _b.force, force = _e === void 0 ? null : _e, _f = _b.disable_edit_message, disable_edit_message = _f === void 0 ? false : _f, _g = _b.chat_id, chat_id = _g === void 0 ? '' : _g, _h = _b.message_id, message_id = _h === void 0 ? '' : _h, _j = _b.inline_message_id, inline_message_id = _j === void 0 ? '' : _j;
        if (user_id === '')
            this.miss_parameter("user_id");
        if (score === null)
            this.miss_parameter("score");
        var start_payload = {
            "method": "setGameScore",
            "user_id": '',
            "score": score,
            "force": force,
            "disable_edit_message": disable_edit_message,
            "chat_id": String(chat_id),
            "message_id": String(message_id),
            "inline_message_id": String(inline_message_id)
        };
        return this.start(start_payload);
    };
    tgbot.prototype.getGameHighScores = function (_a) {
        var _b = _a === void 0 ? {
            user_id: ''
        } : _a, _c = _b.user_id, user_id = _c === void 0 ? '' : _c, _d = _b.chat_id, chat_id = _d === void 0 ? '' : _d, _e = _b.message_id, message_id = _e === void 0 ? '' : _e, _f = _b.inline_message_id, inline_message_id = _f === void 0 ? '' : _f;
        if (user_id === '')
            this.miss_parameter("user_id");
        var start_payload = {
            "method": "getGameHighScores",
            "user_id": '',
            "chat_id": String(chat_id),
            "message_id": String(message_id),
            "inline_message_id": String(inline_message_id)
        };
        return this.start(start_payload);
    };
    // === public 自家der方法 ===
    tgbot.prototype.getPath = function (_a) {
        var _b = (_a === void 0 ? {
            file_id: ''
        } : _a).file_id, file_id = _b === void 0 ? '' : _b;
        if (file_id === '')
            this.miss_parameter("file_id");
        return this.getFile({ "file_id": file_id }).result.file_path;
    };
    tgbot.prototype.getFileDownloadUrl = function (_a) {
        var _b = (_a === void 0 ? {
            path: ''
        } : _a).path, path = _b === void 0 ? '' : _b;
        if (path === '')
            this.miss_parameter("path");
        var TGDurl = "https://api.telegram.org/file/bot" + this.token + "/" + path;
        return TGDurl;
    };
    // === private 自家der方法 ===
    tgbot.prototype.miss_parameter = function (parameter) {
        throw new Error("Missing " + parameter);
    };
    tgbot.prototype.start = function (payload) {
        var data = {
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
                    throw new Error("XMLHttpRequest error");
                }
            };
            return JSON.parse(xhr.responseText);
        }
    };
    return tgbot;
}());
exports.tgbot = tgbot;
