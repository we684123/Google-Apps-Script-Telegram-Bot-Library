var tgbot = /** @class */ (function () {
    function tgbot(token) {
        this.token = token;
    }
    tgbot.prototype.getMe = function () {
        var payload = {
            "method": "getMe"
        };
        return this.start(payload);
    };
    tgbot.prototype.sendMessage = function (_a) {
        var _b = _a === void 0 ? { /*chat_id=this.miss_parameter()*/} : _a, _c = _b.chat_id, chat_id = _c === void 0 ? '' : _c, _d = _b.text, text = _d === void 0 ? '' : _d, _e = _b.parse_mode, parse_mode = _e === void 0 ? '' : _e, _f = _b.disable_web_page_preview, disable_web_page_preview = _f === void 0 ? false : _f, _g = _b.disable_notification, disable_notification = _g === void 0 ? false : _g, _h = _b.reply_to_message_id, reply_to_message_id = _h === void 0 ? '' : _h, _j = _b.reply_markup, reply_markup = _j === void 0 ? '' : _j;
        if (chat_id === '')
            throw new Error('Missing chat_id');
        if (text === '')
            throw new Error('Missing text');
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
    tgbot.prototype.miss_parameter = function (parameter) {
        throw new Error("Missing " + parameter);
    };
    tgbot.prototype.start = function (payload) {
        var Telegram_bot_key = this.token;
        var data = {
            "method": "post",
            "payload": payload
        };
        // @ts-ignore
        return UrlFetchApp.fetch("https://api.telegram.org/bot" + Telegram_bot_key + "/", data);
    };
    return tgbot;
}());
