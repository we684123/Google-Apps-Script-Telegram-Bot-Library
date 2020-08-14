"use strict";
var tgbot = /** @class */ (function () {
    function tgbot(token) {
        this.token = token;
        this.api_url = "https://api.telegram.org/bot" + this.token + "/";
    }
    // === Getting updates ===
    tgbot.prototype.getUpdates = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.offset, offset = _c === void 0 ? '' : _c, _d = _b.limit, limit = _d === void 0 ? 100 : _d, _e = _b.timeout, timeout = _e === void 0 ? 0 : _e, _f = _b.allowed_updates, allowed_updates = _f === void 0 ? '' : _f;
        var payload = {
            "method": "getUpdates",
            "offset": offset,
            "limit": limit,
            "timeout": timeout,
            "allowed_updates": allowed_updates
        };
        return this.start(payload);
    };
    tgbot.prototype.setWebhook = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.url, url = _c === void 0 ? '' : _c, _d = _b.certificate, certificate = _d === void 0 ? '' : _d, _e = _b.max_connections, max_connections = _e === void 0 ? 40 : _e, _f = _b.allowed_updates, allowed_updates = _f === void 0 ? '' : _f;
        if (url === '')
            this.miss_parameter("url");
        var payload = {
            "method": "setWebhook",
            "url": url,
            "certificate": certificate,
            "max_connections": max_connections,
            "allowed_updates": allowed_updates
        };
        return this.start(payload);
    };
    tgbot.prototype.deleteWebhook = function () {
        var payload = {
            "method": "deleteWebhook"
        };
        return this.start(payload);
    };
    tgbot.prototype.getWebhookInfo = function () {
        var payload = {
            "method": "getWebhookInfo"
        };
        return this.start(payload);
    };
    // === Available methods ===
    tgbot.prototype.getMe = function () {
        var payload = {
            "method": "getMe"
        };
        return this.start(payload);
    };
    tgbot.prototype.sendMessage = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.text, text = _d === void 0 ? '' : _d, _e = _b.parse_mode, parse_mode = _e === void 0 ? '' : _e, _f = _b.disable_web_page_preview, disable_web_page_preview = _f === void 0 ? false : _f, _g = _b.disable_notification, disable_notification = _g === void 0 ? false : _g, _h = _b.reply_to_message_id, reply_to_message_id = _h === void 0 ? '' : _h, _j = _b.reply_markup, reply_markup = _j === void 0 ? '' : _j;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (text === '')
            this.miss_parameter("chat_id");
        var payload = {
            "method": "sendMessage",
            'chat_id': String(chat_id),
            'text': String(text),
            'parse_mode': parse_mode,
            'disable_web_page_preview': disable_web_page_preview,
            'disable_notification': disable_notification,
            'reply_to_message_id': reply_to_message_id,
            'reply_markup': reply_markup
        };
        return this.start(payload);
    };
    tgbot.prototype.forwardMessage = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.from_chat_id, from_chat_id = _d === void 0 ? '' : _d, _e = _b.parse_mode, parse_mode = _e === void 0 ? '' : _e, _f = _b.disable_notification, disable_notification = _f === void 0 ? false : _f, _g = _b.message_id, message_id = _g === void 0 ? '' : _g;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (from_chat_id === '')
            this.miss_parameter("from_chat_id");
        if (message_id === '')
            this.miss_parameter("message_id");
        var payload = {
            "method": "forwardMessage",
            'chat_id': String(chat_id),
            'from_chat_id': String(from_chat_id),
            'parse_mode': parse_mode,
            'disable_notification': disable_notification,
            'message_id': message_id
        };
        return this.start(payload);
    };
    tgbot.prototype.sendPhoto = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.photo, photo = _d === void 0 ? '' : _d, _e = _b.caption, caption = _e === void 0 ? '' : _e, _f = _b.parse_mode, parse_mode = _f === void 0 ? '' : _f, _g = _b.disable_notification, disable_notification = _g === void 0 ? false : _g, _h = _b.reply_to_message_id, reply_to_message_id = _h === void 0 ? '' : _h, _j = _b.reply_markup, reply_markup = _j === void 0 ? '' : _j;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (photo === '')
            this.miss_parameter("photo");
        var payload = {
            "method": "sendPhoto",
            'chat_id': String(chat_id),
            'photo': photo,
            'caption': caption,
            'parse_mode': parse_mode,
            'disable_notification': disable_notification,
            'reply_to_message_id': reply_to_message_id,
            'reply_markup': reply_markup
        };
        return this.start(payload);
    };
    tgbot.prototype.sendAudio = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.audio, audio = _d === void 0 ? '' : _d, _e = _b.caption, caption = _e === void 0 ? '' : _e, _f = _b.parse_mode, parse_mode = _f === void 0 ? '' : _f, _g = _b.duration, duration = _g === void 0 ? '' : _g, _h = _b.performer, performer = _h === void 0 ? '' : _h, _j = _b.title, title = _j === void 0 ? '' : _j, _k = _b.thumb, thumb = _k === void 0 ? '' : _k, _l = _b.disable_notification, disable_notification = _l === void 0 ? false : _l, _m = _b.reply_to_message_id, reply_to_message_id = _m === void 0 ? '' : _m, _o = _b.reply_markup, reply_markup = _o === void 0 ? '' : _o;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (audio === '')
            this.miss_parameter("audio");
        var payload = {
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
        };
        return this.start(payload);
    };
    tgbot.prototype.sendDocument = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.document, document = _d === void 0 ? '' : _d, _e = _b.thumb, thumb = _e === void 0 ? '' : _e, _f = _b.caption, caption = _f === void 0 ? '' : _f, _g = _b.parse_mode, parse_mode = _g === void 0 ? '' : _g, _h = _b.disable_notification, disable_notification = _h === void 0 ? false : _h, _j = _b.reply_to_message_id, reply_to_message_id = _j === void 0 ? '' : _j, _k = _b.reply_markup, reply_markup = _k === void 0 ? '' : _k;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (document === '')
            this.miss_parameter("document");
        var payload = {
            "method": "sendDocument",
            'chat_id': String(chat_id),
            'document': document,
            'thumb': thumb,
            'caption': caption,
            'parse_mode': parse_mode,
            'disable_notification': disable_notification,
            'reply_to_message_id': reply_to_message_id,
            'reply_markup': reply_markup
        };
        return this.start(payload);
    };
    tgbot.prototype.sendVideo = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.video, video = _d === void 0 ? '' : _d, _e = _b.duration, duration = _e === void 0 ? '' : _e, _f = _b.width, width = _f === void 0 ? '' : _f, _g = _b.height, height = _g === void 0 ? '' : _g, _h = _b.thumb, thumb = _h === void 0 ? '' : _h, _j = _b.caption, caption = _j === void 0 ? '' : _j, _k = _b.parse_mode, parse_mode = _k === void 0 ? '' : _k, _l = _b.supports_streaming, supports_streaming = _l === void 0 ? false : _l, _m = _b.disable_notification, disable_notification = _m === void 0 ? false : _m, _o = _b.reply_to_message_id, reply_to_message_id = _o === void 0 ? '' : _o, _p = _b.reply_markup, reply_markup = _p === void 0 ? '' : _p;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (video === '')
            this.miss_parameter("video");
        var payload = {
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
        };
        return this.start(payload);
    };
    tgbot.prototype.sendAnimation = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.animation, animation = _d === void 0 ? '' : _d, _e = _b.duration, duration = _e === void 0 ? '' : _e, _f = _b.width, width = _f === void 0 ? '' : _f, _g = _b.height, height = _g === void 0 ? '' : _g, _h = _b.thumb, thumb = _h === void 0 ? '' : _h, _j = _b.caption, caption = _j === void 0 ? '' : _j, _k = _b.parse_mode, parse_mode = _k === void 0 ? '' : _k, _l = _b.disable_notification, disable_notification = _l === void 0 ? false : _l, _m = _b.reply_to_message_id, reply_to_message_id = _m === void 0 ? '' : _m, _o = _b.reply_markup, reply_markup = _o === void 0 ? '' : _o;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (animation === '')
            this.miss_parameter("animation");
        var payload = {
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
        };
        return this.start(payload);
    };
    tgbot.prototype.sendVoice = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.voice, voice = _d === void 0 ? '' : _d, _e = _b.duration, duration = _e === void 0 ? '' : _e, _f = _b.caption, caption = _f === void 0 ? '' : _f, _g = _b.parse_mode, parse_mode = _g === void 0 ? '' : _g, _h = _b.disable_notification, disable_notification = _h === void 0 ? false : _h, _j = _b.reply_to_message_id, reply_to_message_id = _j === void 0 ? '' : _j, _k = _b.reply_markup, reply_markup = _k === void 0 ? '' : _k;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (voice === '')
            this.miss_parameter("voice");
        var payload = {
            "method": "sendVoice",
            'chat_id': String(chat_id),
            'voice': voice,
            'duration': duration,
            'caption': caption,
            'parse_mode': parse_mode,
            'disable_notification': disable_notification,
            'reply_to_message_id': reply_to_message_id,
            'reply_markup': reply_markup
        };
        return this.start(payload);
    };
    tgbot.prototype.sendVideoNote = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.video_note, video_note = _d === void 0 ? '' : _d, _e = _b.duration, duration = _e === void 0 ? '' : _e, _f = _b.length, length = _f === void 0 ? '' : _f, _g = _b.thumb, thumb = _g === void 0 ? '' : _g, _h = _b.disable_notification, disable_notification = _h === void 0 ? false : _h, _j = _b.reply_to_message_id, reply_to_message_id = _j === void 0 ? '' : _j, _k = _b.reply_markup, reply_markup = _k === void 0 ? '' : _k;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (video_note === '')
            this.miss_parameter("video_note");
        var payload = {
            "method": "sendVideoNote",
            'chat_id': String(chat_id),
            'video_note': video_note,
            'length': length,
            'duration': duration,
            'thumb': thumb,
            'disable_notification': disable_notification,
            'reply_to_message_id': reply_to_message_id,
            'reply_markup': reply_markup
        };
        return this.start(payload);
    };
    tgbot.prototype.sendMediaGroup = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.media, media = _d === void 0 ? '' : _d, _e = _b.disable_notification, disable_notification = _e === void 0 ? false : _e, _f = _b.reply_to_message_id, reply_to_message_id = _f === void 0 ? '' : _f;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (media === '')
            this.miss_parameter("media");
        var payload = {
            "method": "sendMediaGroup",
            'chat_id': String(chat_id),
            'media': media,
            'disable_notification': disable_notification,
            'reply_to_message_id': reply_to_message_id
        };
        return this.start(payload);
    };
    tgbot.prototype.sendLocation = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.latitude, latitude = _d === void 0 ? '' : _d, _e = _b.longitude, longitude = _e === void 0 ? '' : _e, _f = _b.live_period, live_period = _f === void 0 ? '' : _f, _g = _b.disable_notification, disable_notification = _g === void 0 ? false : _g, _h = _b.reply_to_message_id, reply_to_message_id = _h === void 0 ? '' : _h, _j = _b.reply_markup, reply_markup = _j === void 0 ? '' : _j;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (latitude === '')
            this.miss_parameter("latitude");
        if (longitude === '')
            this.miss_parameter("longitude");
        var payload = {
            "method": "sendLocation",
            'chat_id': String(chat_id),
            'latitude': latitude,
            'longitude': longitude,
            'live_period': live_period,
            'disable_notification': disable_notification,
            'reply_to_message_id': reply_to_message_id,
            'reply_markup': reply_markup
        };
        return this.start(payload);
    };
    tgbot.prototype.editMessageLiveLocation = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.message_id, message_id = _d === void 0 ? '' : _d, _e = _b.inline_message_id, inline_message_id = _e === void 0 ? '' : _e, _f = _b.latitude, latitude = _f === void 0 ? '' : _f, _g = _b.longitude, longitude = _g === void 0 ? '' : _g, _h = _b.reply_markup, reply_markup = _h === void 0 ? '' : _h;
        if (latitude === '')
            this.miss_parameter("latitude");
        if (longitude === '')
            this.miss_parameter("longitude");
        var payload = {
            "method": "editMessageLiveLocation",
            'chat_id': String(chat_id),
            'message_id': message_id,
            'inline_message_id': inline_message_id,
            'latitude': latitude,
            'longitude': longitude,
            'reply_markup': reply_markup
        };
        return this.start(payload);
    };
    tgbot.prototype.stopMessageLiveLocation = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.message_id, message_id = _d === void 0 ? '' : _d, _e = _b.inline_message_id, inline_message_id = _e === void 0 ? '' : _e, _f = _b.reply_markup, reply_markup = _f === void 0 ? '' : _f;
        var payload = {
            "method": "stopMessageLiveLocation",
            'chat_id': String(chat_id),
            'message_id': message_id,
            'inline_message_id': inline_message_id,
            'reply_markup': reply_markup
        };
        return this.start(payload);
    };
    tgbot.prototype.sendVenue = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.latitude, latitude = _d === void 0 ? '' : _d, _e = _b.longitude, longitude = _e === void 0 ? '' : _e, _f = _b.title, title = _f === void 0 ? '' : _f, _g = _b.address, address = _g === void 0 ? '' : _g, _h = _b.foursquare_id, foursquare_id = _h === void 0 ? '' : _h, _j = _b.foursquare_type, foursquare_type = _j === void 0 ? '' : _j, _k = _b.disable_notification, disable_notification = _k === void 0 ? false : _k, _l = _b.reply_to_message_id, reply_to_message_id = _l === void 0 ? '' : _l, _m = _b.reply_markup, reply_markup = _m === void 0 ? '' : _m;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (latitude === '')
            this.miss_parameter("latitude");
        if (longitude === '')
            this.miss_parameter("longitude");
        if (title === '')
            this.miss_parameter("title");
        if (address === '')
            this.miss_parameter("address");
        var payload = {
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
        };
        return this.start(payload);
    };
    tgbot.prototype.sendContact = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.phone_number, phone_number = _d === void 0 ? '' : _d, _e = _b.first_name, first_name = _e === void 0 ? '' : _e, _f = _b.last_name, last_name = _f === void 0 ? '' : _f, _g = _b.vcard, vcard = _g === void 0 ? '' : _g, _h = _b.disable_notification, disable_notification = _h === void 0 ? false : _h, _j = _b.reply_to_message_id, reply_to_message_id = _j === void 0 ? '' : _j, _k = _b.reply_markup, reply_markup = _k === void 0 ? '' : _k;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (phone_number === '')
            this.miss_parameter("phone_number");
        if (first_name === '')
            this.miss_parameter("first_name");
        var payload = {
            "method": "sendContact",
            'chat_id': String(chat_id),
            'phone_number': phone_number,
            'first_name': first_name,
            'last_name': last_name,
            'vcard': vcard,
            'disable_notification': disable_notification,
            'reply_to_message_id': reply_to_message_id,
            'reply_markup': reply_markup
        };
        return this.start(payload);
    };
    tgbot.prototype.sendPoll = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.question, question = _d === void 0 ? '' : _d, _e = _b.options, options = _e === void 0 ? '' : _e, _f = _b.is_anonymous, is_anonymous = _f === void 0 ? false : _f, _g = _b.type, type = _g === void 0 ? '' : _g, _h = _b.allows_multiple_answers, allows_multiple_answers = _h === void 0 ? false : _h, _j = _b.correct_option_id, correct_option_id = _j === void 0 ? '' : _j, _k = _b.explanation, explanation = _k === void 0 ? '' : _k, _l = _b.explanation_parse_mode, explanation_parse_mode = _l === void 0 ? '' : _l, _m = _b.open_period, open_period = _m === void 0 ? '' : _m, _o = _b.close_date, close_date = _o === void 0 ? '' : _o, _p = _b.is_closed, is_closed = _p === void 0 ? false : _p, _q = _b.disable_notification, disable_notification = _q === void 0 ? false : _q, _r = _b.reply_to_message_id, reply_to_message_id = _r === void 0 ? '' : _r, _s = _b.reply_markup, reply_markup = _s === void 0 ? '' : _s;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (question === '')
            this.miss_parameter("question");
        if (options === '')
            this.miss_parameter("options");
        var payload = {
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
        };
        return this.start(payload);
    };
    tgbot.prototype.sendDice = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.emoji, emoji = _d === void 0 ? '' : _d, _e = _b.disable_notification, disable_notification = _e === void 0 ? false : _e, _f = _b.reply_to_message_id, reply_to_message_id = _f === void 0 ? '' : _f, _g = _b.reply_markup, reply_markup = _g === void 0 ? '' : _g;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        var payload = {
            "method": "sendDice",
            'chat_id': String(chat_id),
            'emoji': emoji,
            'disable_notification': disable_notification,
            'reply_to_message_id': reply_to_message_id,
            'reply_markup': reply_markup
        };
        return this.start(payload);
    };
    tgbot.prototype.sendChatAction = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.action, action = _d === void 0 ? '' : _d;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (action === '')
            this.miss_parameter("action");
        var payload = {
            "method": "sendChatAction",
            'chat_id': String(chat_id),
            'action': action
        };
        return this.start(payload);
    };
    tgbot.prototype.getUserProfilePhotos = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.user_id, user_id = _c === void 0 ? '' : _c, _d = _b.offset, offset = _d === void 0 ? '' : _d, _e = _b.limit, limit = _e === void 0 ? 100 : _e;
        if (user_id === '')
            this.miss_parameter("user_id");
        var payload = {
            "method": "getUserProfilePhotos",
            'user_id': Number(user_id),
            "offset": offset,
            "limit": limit
        };
        return this.start(payload);
    };
    tgbot.prototype.getFile = function (_a) {
        var _b = (_a === void 0 ? {} : _a).file_id, file_id = _b === void 0 ? '' : _b;
        if (file_id === '')
            this.miss_parameter("file_id");
        var payload = {
            "method": "getFile",
            'file_id': String(file_id)
        };
        return this.start(payload);
    };
    tgbot.prototype.kickChatMember = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.user_id, user_id = _d === void 0 ? '' : _d, _e = _b.until_date, until_date = _e === void 0 ? '' : _e;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (user_id === '')
            this.miss_parameter("user_id");
        var payload = {
            "method": "kickChatMember",
            'chat_id': String(chat_id),
            'user_id': Number(user_id),
            'until_date': Number(until_date)
        };
        return this.start(payload);
    };
    tgbot.prototype.unbanChatMember = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.user_id, user_id = _d === void 0 ? '' : _d;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (user_id === '')
            this.miss_parameter("user_id");
        var payload = {
            "method": "unbanChatMember",
            'chat_id': String(chat_id),
            'user_id': Number(user_id)
        };
        return this.start(payload);
    };
    tgbot.prototype.restrictChatMember = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.user_id, user_id = _d === void 0 ? '' : _d, _e = _b.permissions, permissions = _e === void 0 ? '' : _e, _f = _b.until_date, until_date = _f === void 0 ? '' : _f;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (user_id === '')
            this.miss_parameter("user_id");
        var payload = {
            "method": "restrictChatMember",
            'chat_id': String(chat_id),
            'user_id': Number(user_id),
            'permissions': permissions,
            'until_date': Number(until_date)
        };
        return this.start(payload);
    };
    tgbot.prototype.promoteChatMember = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.user_id, user_id = _d === void 0 ? '' : _d, _e = _b.can_change_info, can_change_info = _e === void 0 ? false : _e, _f = _b.can_post_messages, can_post_messages = _f === void 0 ? false : _f, _g = _b.can_edit_messages, can_edit_messages = _g === void 0 ? false : _g, _h = _b.can_delete_messages, can_delete_messages = _h === void 0 ? false : _h, _j = _b.can_invite_users, can_invite_users = _j === void 0 ? false : _j, _k = _b.can_restrict_members, can_restrict_members = _k === void 0 ? false : _k, _l = _b.can_pin_messages, can_pin_messages = _l === void 0 ? false : _l, _m = _b.can_promote_members, can_promote_members = _m === void 0 ? false : _m;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (user_id === '')
            this.miss_parameter("user_id");
        var payload = {
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
            'can_promote_members': Boolean(can_promote_members)
        };
        return this.start(payload);
    };
    tgbot.prototype.setChatAdministratorCustomTitle = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.user_id, user_id = _d === void 0 ? '' : _d, _e = _b.custom_title, custom_title = _e === void 0 ? '' : _e;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (user_id === '')
            this.miss_parameter("user_id");
        var payload = {
            "method": "setChatAdministratorCustomTitle",
            'chat_id': String(chat_id),
            'user_id': Number(user_id),
            'custom_title': String(custom_title)
        };
        return this.start(payload);
    };
    tgbot.prototype.setChatPermissions = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.permissions, permissions = _d === void 0 ? '' : _d;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (permissions === '')
            this.miss_parameter("permissions");
        var payload = {
            "method": "setChatPermissions",
            'chat_id': String(chat_id),
            'permissions': Number(permissions)
        };
        return this.start(payload);
    };
    tgbot.prototype.exportChatInviteLink = function (_a) {
        var _b = (_a === void 0 ? {} : _a).chat_id, chat_id = _b === void 0 ? '' : _b;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        var payload = {
            "method": "exportChatInviteLink",
            'chat_id': String(chat_id)
        };
        return this.start(payload);
    };
    tgbot.prototype.setChatPhoto = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.photo, photo = _d === void 0 ? '' : _d;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (photo === '')
            this.miss_parameter("photo");
        var payload = {
            "method": "setChatPhoto",
            'chat_id': String(chat_id),
            'photo': photo
        };
        return this.start(payload);
    };
    tgbot.prototype.deleteChatPhoto = function (_a) {
        var _b = (_a === void 0 ? {} : _a).chat_id, chat_id = _b === void 0 ? '' : _b;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        var payload = {
            "method": "deleteChatPhoto",
            'chat_id': String(chat_id)
        };
        return this.start(payload);
    };
    tgbot.prototype.setChatTitle = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.title, title = _d === void 0 ? '' : _d;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (title === '')
            this.miss_parameter("title");
        var payload = {
            "method": "setChatTitle",
            'chat_id': String(chat_id),
            'title': title
        };
        return this.start(payload);
    };
    tgbot.prototype.setChatDescription = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.description, description = _d === void 0 ? '' : _d;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (description === '')
            this.miss_parameter("description");
        var payload = {
            "method": "setChatDescription",
            'chat_id': String(chat_id),
            'description': description
        };
        return this.start(payload);
    };
    tgbot.prototype.pinChatMessage = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.message_id, message_id = _d === void 0 ? '' : _d, _e = _b.disable_notification, disable_notification = _e === void 0 ? false : _e;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (message_id === '')
            this.miss_parameter("message_id");
        var payload = {
            "method": "pinChatMessage",
            'chat_id': String(chat_id),
            'message_id': message_id,
            'disable_notification': disable_notification
        };
        return this.start(payload);
    };
    tgbot.prototype.unpinChatMessage = function (_a) {
        var _b = (_a === void 0 ? {} : _a).chat_id, chat_id = _b === void 0 ? '' : _b;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        var payload = {
            "method": "unpinChatMessage",
            'chat_id': String(chat_id)
        };
        return this.start(payload);
    };
    tgbot.prototype.leaveChat = function (_a) {
        var _b = (_a === void 0 ? {} : _a).chat_id, chat_id = _b === void 0 ? '' : _b;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        var payload = {
            "method": "leaveChat",
            'chat_id': String(chat_id)
        };
        return this.start(payload);
    };
    tgbot.prototype.getChatAdministrators = function (_a) {
        var _b = (_a === void 0 ? {} : _a).chat_id, chat_id = _b === void 0 ? '' : _b;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        var payload = {
            "method": "getChatAdministrators",
            'chat_id': String(chat_id)
        };
        return this.start(payload);
    };
    tgbot.prototype.getChatMembersCount = function (_a) {
        var _b = (_a === void 0 ? {} : _a).chat_id, chat_id = _b === void 0 ? '' : _b;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        var payload = {
            "method": "getChatMembersCount",
            'chat_id': String(chat_id)
        };
        return this.start(payload);
    };
    tgbot.prototype.getChatMember = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.user_id, user_id = _d === void 0 ? '' : _d;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (user_id === '')
            this.miss_parameter("user_id");
        var payload = {
            "method": "getChatMembersCount",
            'chat_id': String(chat_id),
            'user_id': Number(user_id)
        };
        return this.start(payload);
    };
    tgbot.prototype.setChatStickerSet = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.sticker_set_name, sticker_set_name = _d === void 0 ? '' : _d;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        var payload = {
            "method": "setChatStickerSet",
            'chat_id': String(chat_id),
            'sticker_set_name': sticker_set_name
        };
        return this.start(payload);
    };
    tgbot.prototype.deleteChatStickerSet = function (_a) {
        var _b = (_a === void 0 ? {} : _a).chat_id, chat_id = _b === void 0 ? '' : _b;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        var payload = {
            "method": "deleteChatStickerSet",
            'chat_id': String(chat_id)
        };
        return this.start(payload);
    };
    tgbot.prototype.answerCallbackQuery = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.callback_query_id, callback_query_id = _c === void 0 ? '' : _c, _d = _b.text, text = _d === void 0 ? '' : _d, _e = _b.show_alert, show_alert = _e === void 0 ? false : _e, _f = _b.url, url = _f === void 0 ? '' : _f, _g = _b.cache_time, cache_time = _g === void 0 ? '' : _g;
        if (callback_query_id === '')
            this.miss_parameter("callback_query_id");
        var payload = {
            "method": "answerCallbackQuery",
            'callback_query_id': String(callback_query_id),
            'text': String(text),
            'show_alert': Boolean(show_alert),
            'url': String(url),
            'cache_time': Number(cache_time)
        };
        return this.start(payload);
    };
    tgbot.prototype.setMyCommands = function (_a) {
        var _b = (_a === void 0 ? {} : _a).commands, commands = _b === void 0 ? [] : _b;
        if (commands === [])
            this.miss_parameter("commands");
        var payload = {
            "method": "setMyCommands",
            'commands': commands
        };
        return this.start(payload);
    };
    tgbot.prototype.getMyCommands = function () {
        var payload = {
            "method": "getMyCommands"
        };
        return this.start(payload);
    };
    // === Updating messages ===
    tgbot.prototype.editMessageText = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.message_id, message_id = _d === void 0 ? '' : _d, _e = _b.inline_message_id, inline_message_id = _e === void 0 ? '' : _e, _f = _b.text, text = _f === void 0 ? '' : _f, _g = _b.parse_mode, parse_mode = _g === void 0 ? '' : _g, _h = _b.disable_web_page_preview, disable_web_page_preview = _h === void 0 ? false : _h, _j = _b.reply_markup, reply_markup = _j === void 0 ? '' : _j;
        if (text === '')
            this.miss_parameter("text");
        var payload = {
            "method": "editMessageText",
            'chat_id': String(chat_id),
            'message_id': String(message_id),
            'inline_message_id': String(inline_message_id),
            'text': String(text),
            'parse_mode': parse_mode,
            'disable_web_page_preview': disable_web_page_preview,
            'reply_markup': reply_markup
        };
        return this.start(payload);
    };
    tgbot.prototype.editMessageCaption = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.message_id, message_id = _d === void 0 ? '' : _d, _e = _b.inline_message_id, inline_message_id = _e === void 0 ? '' : _e, _f = _b.caption, caption = _f === void 0 ? '' : _f, _g = _b.parse_mode, parse_mode = _g === void 0 ? '' : _g, _h = _b.disable_web_page_preview, disable_web_page_preview = _h === void 0 ? false : _h, _j = _b.reply_markup, reply_markup = _j === void 0 ? '' : _j;
        var payload = {
            "method": "editMessageCaption",
            'chat_id': String(chat_id),
            'message_id': String(message_id),
            'inline_message_id': String(inline_message_id),
            'caption': String(caption),
            'parse_mode': parse_mode,
            'disable_web_page_preview': disable_web_page_preview,
            'reply_markup': reply_markup
        };
        return this.start(payload);
    };
    tgbot.prototype.editMessageMedia = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.message_id, message_id = _d === void 0 ? '' : _d, _e = _b.inline_message_id, inline_message_id = _e === void 0 ? '' : _e, _f = _b.media, media = _f === void 0 ? '' : _f, _g = _b.reply_markup, reply_markup = _g === void 0 ? '' : _g;
        if (media === '')
            this.miss_parameter("media");
        var payload = {
            "method": "editMessageMedia",
            'chat_id': String(chat_id),
            'message_id': String(message_id),
            'inline_message_id': String(inline_message_id),
            'media': String(media),
            'reply_markup': reply_markup
        };
        return this.start(payload);
    };
    tgbot.prototype.editMessageReplyMarkup = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.message_id, message_id = _d === void 0 ? '' : _d, _e = _b.inline_message_id, inline_message_id = _e === void 0 ? '' : _e, _f = _b.reply_markup, reply_markup = _f === void 0 ? '' : _f;
        var payload = {
            "method": "editMessageReplyMarkup",
            'chat_id': String(chat_id),
            'message_id': String(message_id),
            'inline_message_id': String(inline_message_id),
            'reply_markup': reply_markup
        };
        return this.start(payload);
    };
    tgbot.prototype.stopPoll = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.message_id, message_id = _d === void 0 ? '' : _d, _e = _b.reply_markup, reply_markup = _e === void 0 ? '' : _e;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (message_id === '')
            this.miss_parameter("message_id");
        var payload = {
            "method": "stopPoll",
            'chat_id': String(chat_id),
            'message_id': String(message_id),
            'reply_markup': reply_markup
        };
        return this.start(payload);
    };
    tgbot.prototype.deleteMessage = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.message_id, message_id = _d === void 0 ? '' : _d;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (message_id === '')
            this.miss_parameter("message_id");
        var payload = {
            "method": "deleteMessage",
            'chat_id': String(chat_id),
            'message_id': String(message_id)
        };
        return this.start(payload);
    };
    // === Stickers ===
    tgbot.prototype.sendSticker = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.sticker, sticker = _d === void 0 ? '' : _d, _e = _b.disable_notification, disable_notification = _e === void 0 ? false : _e, _f = _b.reply_to_message_id, reply_to_message_id = _f === void 0 ? '' : _f, _g = _b.reply_markup, reply_markup = _g === void 0 ? '' : _g;
        if (chat_id === '')
            this.miss_parameter("chat_id");
        if (sticker === '')
            this.miss_parameter("sticker");
        var payload = {
            "method": "sendSticker",
            'chat_id': String(chat_id),
            'sticker': sticker,
            'disable_notification': disable_notification,
            'reply_to_message_id': reply_to_message_id,
            'reply_markup': reply_markup
        };
        return this.start(payload);
    };
    tgbot.prototype.getStickerSet = function (_a) {
        var _b = (_a === void 0 ? {} : _a).name, name = _b === void 0 ? '' : _b;
        if (name === '')
            this.miss_parameter("name");
        var payload = {
            "method": "getStickerSet",
            'name': String(name)
        };
        return this.start(payload);
    };
    tgbot.prototype.uploadStickerFile = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.user_id, user_id = _c === void 0 ? '' : _c, _d = _b.png_sticker, png_sticker = _d === void 0 ? '' : _d;
        if (user_id === '')
            this.miss_parameter("user_id");
        if (png_sticker === '')
            this.miss_parameter("png_sticker");
        var payload = {
            "method": "uploadStickerFile",
            'user_id': String(user_id),
            'png_sticker': png_sticker
        };
        return this.start(payload);
    };
    tgbot.prototype.createNewStickerSet = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.user_id, user_id = _c === void 0 ? '' : _c, _d = _b.name, name = _d === void 0 ? '' : _d, _e = _b.title, title = _e === void 0 ? '' : _e, _f = _b.png_sticker, png_sticker = _f === void 0 ? '' : _f, _g = _b.tgs_sticker, tgs_sticker = _g === void 0 ? '' : _g, _h = _b.emojis, emojis = _h === void 0 ? '' : _h, _j = _b.contains_masks, contains_masks = _j === void 0 ? false : _j, _k = _b.mask_position, mask_position = _k === void 0 ? '' : _k;
        if (user_id === '')
            this.miss_parameter("user_id");
        if (name === '')
            this.miss_parameter("name");
        if (title === '')
            this.miss_parameter("title");
        if (emojis === '')
            this.miss_parameter("emojis");
        var payload = {
            "method": "createNewStickerSet",
            'user_id': String(user_id),
            'name': String(name),
            'title': String(title),
            'png_sticker': png_sticker,
            'tgs_sticker': tgs_sticker,
            'emojis': String(emojis),
            'contains_masks': contains_masks,
            'mask_position': mask_position
        };
        return this.start(payload);
    };
    tgbot.prototype.addStickerToSet = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.user_id, user_id = _c === void 0 ? '' : _c, _d = _b.name, name = _d === void 0 ? '' : _d, _e = _b.png_sticker, png_sticker = _e === void 0 ? '' : _e, _f = _b.tgs_sticker, tgs_sticker = _f === void 0 ? '' : _f, _g = _b.emojis, emojis = _g === void 0 ? '' : _g, _h = _b.mask_position, mask_position = _h === void 0 ? '' : _h;
        if (user_id === '')
            this.miss_parameter("user_id");
        if (name === '')
            this.miss_parameter("name");
        if (emojis === '')
            this.miss_parameter("emojis");
        var payload = {
            "method": "addStickerToSet",
            'user_id': String(user_id),
            'name': String(name),
            'png_sticker': png_sticker,
            'tgs_sticker': tgs_sticker,
            'emojis': String(emojis),
            'mask_position': mask_position
        };
        return this.start(payload);
    };
    tgbot.prototype.setStickerPositionInSet = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.sticker, sticker = _c === void 0 ? '' : _c, _d = _b.position, position = _d === void 0 ? '' : _d;
        if (sticker === '')
            this.miss_parameter("sticker");
        if (position === '')
            this.miss_parameter("position");
        var payload = {
            "method": "setStickerPositionInSet",
            'sticker': String(sticker),
            'position': Number(position)
        };
        return this.start(payload);
    };
    tgbot.prototype.deleteStickerFromSet = function (_a) {
        var _b = (_a === void 0 ? {} : _a).sticker, sticker = _b === void 0 ? '' : _b;
        if (sticker === '')
            this.miss_parameter("sticker");
        var payload = {
            "method": "deleteStickerFromSet",
            'sticker': String(sticker)
        };
        return this.start(payload);
    };
    tgbot.prototype.setStickerSetThumb = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.name, name = _c === void 0 ? '' : _c, _d = _b.user_id, user_id = _d === void 0 ? '' : _d, _e = _b.thumb, thumb = _e === void 0 ? '' : _e;
        if (name === '')
            this.miss_parameter("name");
        if (user_id === '')
            this.miss_parameter("user_id");
        var payload = {
            "method": "setStickerSetThumb",
            'name': String(name),
            'user_id': String(user_id),
            'thumb': thumb
        };
        return this.start(payload);
    };
    // === Inline mode ===
    tgbot.prototype.answerInlineQuery = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.inline_query_id, inline_query_id = _c === void 0 ? '' : _c, _d = _b.results, results = _d === void 0 ? [] : _d, _e = _b.cache_time, cache_time = _e === void 0 ? '' : _e, _f = _b.is_personal, is_personal = _f === void 0 ? '' : _f, _g = _b.next_offset, next_offset = _g === void 0 ? '' : _g, _h = _b.switch_pm_text, switch_pm_text = _h === void 0 ? '' : _h, _j = _b.switch_pm_parameter, switch_pm_parameter = _j === void 0 ? '' : _j;
        if (inline_query_id === '')
            this.miss_parameter("inline_query_id");
        if (results === [])
            this.miss_parameter("results");
        var payload = {
            "method": "answerInlineQuery",
            'inline_query_id': String(inline_query_id),
            'results': String(results),
            'cache_time': cache_time,
            'is_personal': is_personal,
            'next_offset': next_offset,
            'switch_pm_text': switch_pm_text,
            'switch_pm_parameter': switch_pm_parameter
        };
        return this.start(payload);
    };
    tgbot.prototype.InlineQueryResultGif = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? '' : _c, _d = _b.gif_url, gif_url = _d === void 0 ? '' : _d, _e = _b.gif_width, gif_width = _e === void 0 ? '' : _e, _f = _b.gif_height, gif_height = _f === void 0 ? '' : _f, _g = _b.gif_duration, gif_duration = _g === void 0 ? '' : _g, _h = _b.thumb_url, thumb_url = _h === void 0 ? '' : _h, _j = _b.thumb_mime_type, thumb_mime_type = _j === void 0 ? '' : _j, _k = _b.title, title = _k === void 0 ? '' : _k, _l = _b.caption, caption = _l === void 0 ? '' : _l, _m = _b.parse_mode, parse_mode = _m === void 0 ? '' : _m, _o = _b.reply_markup, reply_markup = _o === void 0 ? '' : _o, _p = _b.input_message_content, input_message_content = _p === void 0 ? '' : _p;
        if (id === '')
            this.miss_parameter("id");
        if (gif_url === '')
            this.miss_parameter("gif_url");
        var payload = {
            "method": "InlineQueryResultGif",
            'type': 'gif',
            'id': String(id),
            'gif_url': String(gif_url),
            'gif_width': gif_width,
            'gif_height': gif_height,
            'gif_duration': gif_duration,
            'thumb_url': thumb_url,
            'thumb_mime_type': thumb_mime_type,
            'title': title,
            'caption': caption,
            'parse_mode': parse_mode,
            'reply_markup': reply_markup,
            'input_message_content': input_message_content
        };
        return this.start(payload);
    };
    // === public 自家der方法 ===
    tgbot.prototype.getPath = function (_a) {
        var _b = (_a === void 0 ? {} : _a).file_id, file_id = _b === void 0 ? '' : _b;
        if (file_id === '')
            this.miss_parameter("file_id");
        var url = "\"https://api.telegram.org/bot" + this.token + "/getFile?file_id=" + file_id;
        // @ts-ignore
        var html = UrlFetchApp.fetch(url);
        html = JSON.parse(html);
        var path = html.result.file_path;
        return path;
    };
    tgbot.prototype.getFileDownloadUrl = function (_a) {
        var _b = (_a === void 0 ? {} : _a).path, path = _b === void 0 ? '' : _b;
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
        // @ts-ignore
        return UrlFetchApp.fetch(this.api_url, data);
    };
    return tgbot;
}());
