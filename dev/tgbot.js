class tgbot {
    constructor(token) {
        this.token = token;
    }
    getMe() {
        var payload = {
            "method": "getMe",
        };
        return this.start(payload);
    }
    sendMessage({ chat_id = '', text = '', parse_mode = '', disable_web_page_preview = false, disable_notification = false, reply_to_message_id = '', reply_markup = '' }) {
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
    }
    start(payload) {
        let Telegram_bot_key = this.token;
        let data = {
            "method": "post",
            "payload": payload
        };
        return UrlFetchApp.fetch("https://api.telegram.org/bot" + Telegram_bot_key + "/", data);
    }
}
