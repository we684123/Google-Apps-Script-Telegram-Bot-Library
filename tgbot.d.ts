/** Telegram bot class */
export declare class tgbot {
    token: string;
    api_url: string;
    /**
    * @param {string} token - The bot token
    */
    constructor(token: string);
    /**
     * @param {object} options
     * @param {number} options.offset - offset
     * @param {number} options.limit - limit
     * @param {number} options.timeout - timeout
     * @param {string[]} options.allowed_updates - allowed_updates
    */
    getUpdates({ offset, limit, timeout, allowed_updates }?: {
        offset?: number | string;
        limit?: number;
        timeout?: number;
        allowed_updates?: string | string[];
    }): any;
    setWebhook({ url, certificate, max_connections, allowed_updates }?: {
        url: string;
        certificate?: any;
        max_connections?: number;
        allowed_updates?: string[];
    }): any;
    deleteWebhook(): any;
    getWebhookInfo(): any;
    getMe(): any;
    sendMessage({ chat_id, text, parse_mode, disable_web_page_preview, disable_notification, reply_to_message_id, reply_markup, }?: {
        chat_id: string | number;
        text: string;
        parse_mode?: string | undefined;
        disable_web_page_preview?: Boolean | undefined;
        disable_notification?: Boolean | undefined;
        reply_to_message_id?: string | number | undefined;
        reply_markup?: any | undefined;
    }): any;
    forwardMessage({ chat_id, from_chat_id, disable_notification, message_id }?: {
        chat_id: string | number;
        from_chat_id: string | number;
        disable_notification?: boolean;
        message_id: string | number;
    }): any;
    sendPhoto({ chat_id, photo, caption, parse_mode, disable_notification, reply_to_message_id, reply_markup }?: {
        chat_id: string | number;
        photo: any;
        caption?: string;
        parse_mode?: string;
        disable_notification?: boolean;
        reply_to_message_id?: string | number;
        reply_markup?: any;
    }): any;
    sendAudio({ chat_id, audio, caption, parse_mode, duration, performer, title, thumb, disable_notification, reply_to_message_id, reply_markup }?: {
        chat_id: string | number;
        audio: any;
        caption?: string;
        parse_mode?: string;
        duration?: number | string;
        performer?: string;
        title?: string;
        thumb?: any;
        disable_notification?: boolean;
        reply_to_message_id?: string | number;
        reply_markup?: any;
    }): any;
    sendDocument({ chat_id, document, thumb, caption, parse_mode, disable_notification, reply_to_message_id, reply_markup }?: {
        chat_id: number | string;
        document: any;
        thumb?: any;
        caption?: string;
        parse_mode?: string;
        disable_notification?: boolean;
        reply_to_message_id?: number | string;
        reply_markup?: any;
    }): any;
    sendVideo({ chat_id, video, duration, width, height, thumb, caption, parse_mode, supports_streaming, disable_notification, reply_to_message_id, reply_markup }?: {
        chat_id: number | string;
        video: any;
        duration?: number | string;
        width?: number | string;
        height?: number | string;
        thumb?: any;
        caption?: string;
        parse_mode?: string;
        supports_streaming?: boolean;
        disable_notification?: boolean;
        reply_to_message_id?: number | string;
        reply_markup?: any;
    }): any;
    sendAnimation({ chat_id, animation, duration, width, height, thumb, caption, parse_mode, disable_notification, reply_to_message_id, reply_markup }?: {
        chat_id: number | string;
        animation: any;
        duration?: number | string;
        width?: number | string;
        height?: number | string;
        thumb?: any;
        caption?: string;
        parse_mode?: string;
        disable_notification?: boolean;
        reply_to_message_id?: number | string;
        reply_markup?: any;
    }): any;
    sendVoice({ chat_id, voice, duration, caption, parse_mode, disable_notification, reply_to_message_id, reply_markup }?: {
        chat_id: number | string;
        voice: any;
        duration?: number | string;
        caption?: string;
        parse_mode?: string;
        disable_notification?: boolean;
        reply_to_message_id?: number | string;
        reply_markup?: any;
    }): any;
    sendVideoNote({ chat_id, video_note, duration, length, thumb, disable_notification, reply_to_message_id, reply_markup }?: {
        chat_id: number | string;
        video_note: any;
        duration?: number | string;
        length?: string;
        thumb?: any;
        disable_notification?: boolean;
        reply_to_message_id?: number | string;
        reply_markup?: any;
    }): any;
    sendMediaGroup({ chat_id, media, disable_notification, reply_to_message_id, }?: {
        chat_id: number | string;
        media: any[];
        disable_notification?: boolean;
        reply_to_message_id?: number | string;
    }): any;
    sendLocation({ chat_id, latitude, longitude, live_period, disable_notification, reply_to_message_id, reply_markup }?: {
        chat_id: number | string;
        latitude: number | string;
        longitude: number | string;
        live_period?: number | null;
        disable_notification?: boolean;
        reply_to_message_id?: number | string;
        reply_markup?: any;
    }): any;
    editMessageLiveLocation({ chat_id, message_id, inline_message_id, latitude, longitude, reply_markup }?: {
        chat_id?: number | string;
        message_id?: number | null;
        inline_message_id?: string;
        latitude: number | null;
        longitude: number | null;
        reply_markup?: any;
    }): any;
    stopMessageLiveLocation({ chat_id, message_id, inline_message_id, reply_markup }?: {
        chat_id?: number | string;
        message_id?: number | null;
        inline_message_id?: string;
        reply_markup?: any;
    }): any;
    sendVenue({ chat_id, latitude, longitude, title, address, foursquare_id, foursquare_type, disable_notification, reply_to_message_id, reply_markup }?: {
        chat_id: number | string;
        latitude: number | null;
        longitude: number | null;
        title: string;
        address: string;
        foursquare_id?: string;
        foursquare_type?: string;
        disable_notification?: boolean;
        reply_to_message_id?: number | string;
        reply_markup?: any;
    }): any;
    sendContact({ chat_id, phone_number, first_name, last_name, vcard, disable_notification, reply_to_message_id, reply_markup }?: {
        chat_id: number | string;
        phone_number: string;
        first_name: string;
        last_name?: string;
        vcard?: string;
        disable_notification?: boolean;
        reply_to_message_id?: number | string;
        reply_markup?: any;
    }): any;
    sendPoll({ chat_id, question, options, is_anonymous, type, allows_multiple_answers, correct_option_id, explanation, explanation_parse_mode, open_period, close_date, is_closed, disable_notification, reply_to_message_id, reply_markup }?: {
        chat_id: number | string;
        question: string;
        options: string[];
        is_anonymous?: boolean;
        type?: string;
        allows_multiple_answers?: boolean;
        correct_option_id?: number | null;
        explanation?: string;
        explanation_parse_mode?: string;
        open_period?: number | null;
        close_date?: number | null;
        is_closed?: boolean;
        disable_notification?: boolean;
        reply_to_message_id?: number | string;
        reply_markup?: any;
    }): any;
    sendDice({ chat_id, emoji, disable_notification, reply_to_message_id, reply_markup }?: {
        chat_id: number | string;
        emoji?: string;
        disable_notification?: boolean;
        reply_to_message_id?: number | string;
        reply_markup?: any;
    }): any;
    sendChatAction({ chat_id, action, }?: {
        chat_id: number | string;
        action: string;
    }): any;
    getUserProfilePhotos({ user_id, offset, limit, }?: {
        user_id: string | number;
        offset?: number | null;
        limit?: number;
    }): any;
    getFile({ file_id, }?: {
        file_id: string;
    }): any;
    kickChatMember({ chat_id, user_id, until_date }?: {
        chat_id: number | string;
        user_id: string;
        until_date?: number | null;
    }): any;
    unbanChatMember({ chat_id, user_id, }?: {
        chat_id: number | string;
        user_id: string;
    }): any;
    restrictChatMember({ chat_id, user_id, permissions, until_date }?: {
        chat_id: number | string;
        user_id: number | string;
        permissions: object;
        until_date?: number | null;
    }): any;
    promoteChatMember({ chat_id, user_id, can_change_info, can_post_messages, can_edit_messages, can_delete_messages, can_invite_users, can_restrict_members, can_pin_messages, can_promote_members, }?: {
        chat_id: number | string;
        user_id: number | string;
        can_change_info?: boolean | null;
        can_post_messages?: boolean | null;
        can_edit_messages?: boolean | null;
        can_delete_messages?: boolean | null;
        can_invite_users?: boolean | null;
        can_restrict_members?: boolean | null;
        can_pin_messages?: boolean | null;
        can_promote_members?: boolean | null;
    }): any;
    setChatAdministratorCustomTitle({ chat_id, user_id, custom_title, }?: {
        chat_id: number | string;
        user_id: number | string;
        custom_title: string;
    }): any;
    setChatPermissions({ chat_id, permissions, }?: {
        chat_id: number | string;
        permissions: object;
    }): any;
    exportChatInviteLink({ chat_id, }?: {
        chat_id: number | string;
    }): any;
    setChatPhoto({ chat_id, photo, }?: {
        chat_id: number | string;
        photo: any;
    }): any;
    deleteChatPhoto({ chat_id, }?: {
        chat_id: number | string;
    }): any;
    setChatTitle({ chat_id, title, }?: {
        chat_id: number | string;
        title: string;
    }): any;
    setChatDescription({ chat_id, description, }?: {
        chat_id: number | string;
        description?: string;
    }): any;
    pinChatMessage({ chat_id, message_id, disable_notification, }?: {
        chat_id: number | string;
        message_id: number | null;
        disable_notification?: boolean;
    }): any;
    unpinChatMessage({ chat_id, }?: {
        chat_id: number | string;
    }): any;
    leaveChat({ chat_id, }?: {
        chat_id: number | string;
    }): any;
    getChat({ chat_id, }?: {
        chat_id: number | string;
    }): any;
    getChatAdministrators({ chat_id, }?: {
        chat_id: number | string;
    }): any;
    getChatMembersCount({ chat_id, }?: {
        chat_id: number | string;
    }): any;
    getChatMember({ chat_id, user_id, }?: {
        chat_id: number | string;
        user_id: number | string;
    }): any;
    setChatStickerSet({ chat_id, sticker_set_name, }?: {
        chat_id: number | string;
        sticker_set_name: string;
    }): any;
    deleteChatStickerSet({ chat_id, }?: {
        chat_id: number | string;
    }): any;
    answerCallbackQuery({ callback_query_id, text, show_alert, url, cache_time, }?: {
        callback_query_id?: string;
        text?: string;
        show_alert?: boolean;
        url?: string;
        cache_time?: number | null;
    }): any;
    setMyCommands({ commands, }?: {
        commands: object[];
    }): any;
    getMyCommands(): any;
    editMessageText({ chat_id, message_id, inline_message_id, text, parse_mode, disable_web_page_preview, reply_markup }?: {
        chat_id?: number | string;
        message_id?: number | null;
        inline_message_id?: string;
        text: string;
        parse_mode?: string;
        disable_web_page_preview?: boolean;
        reply_markup?: any;
    }): any;
    editMessageCaption({ chat_id, message_id, inline_message_id, caption, parse_mode, disable_web_page_preview, reply_markup }?: {
        chat_id?: number | string;
        message_id?: number | null;
        inline_message_id?: string;
        caption?: string;
        parse_mode?: string;
        disable_web_page_preview?: boolean;
        reply_markup?: any;
    }): any;
    editMessageMedia({ chat_id, message_id, inline_message_id, media, reply_markup }?: {
        chat_id?: number | string;
        message_id?: number | null;
        inline_message_id?: string;
        media: object;
        reply_markup?: any;
    }): any;
    editMessageReplyMarkup({ chat_id, message_id, inline_message_id, reply_markup }?: {
        chat_id?: number | string;
        message_id?: number | null;
        inline_message_id?: string;
        reply_markup?: any;
    }): any;
    stopPoll({ chat_id, message_id, reply_markup }?: {
        chat_id: number | string;
        message_id: number | null;
        reply_markup?: any;
    }): any;
    deleteMessage({ chat_id, message_id, }?: {
        chat_id: number | string;
        message_id?: number | null;
    }): any;
    sendSticker({ chat_id, sticker, disable_notification, reply_to_message_id, reply_markup, }?: {
        chat_id: number | string;
        sticker: any;
        disable_notification?: boolean;
        reply_to_message_id?: number | string;
        reply_markup?: any;
    }): any;
    getStickerSet({ name, }?: {
        name: string;
    }): any;
    uploadStickerFile({ user_id, png_sticker, }?: {
        user_id: number | null;
        png_sticker: any;
    }): any;
    createNewStickerSet({ user_id, //這個要數字的id
    name, title, png_sticker, tgs_sticker, emojis, contains_masks, mask_position }?: {
        user_id: number | null;
        name: string;
        title: string;
        png_sticker?: any;
        tgs_sticker?: any;
        emojis: string;
        contains_masks?: boolean;
        mask_position?: object | null;
    }): any;
    addStickerToSet({ user_id, name, png_sticker, tgs_sticker, emojis, mask_position, }?: {
        user_id: number | null;
        name: string;
        png_sticker?: any;
        tgs_sticker?: any;
        emojis: string;
        mask_position?: object | null;
    }): any;
    setStickerPositionInSet({ sticker, position, }?: {
        sticker: string;
        position: number | null;
    }): any;
    deleteStickerFromSet({ sticker, }?: {
        sticker: string;
    }): any;
    setStickerSetThumb({ name, user_id, thumb, }?: {
        name: string;
        user_id: number | null;
        thumb?: any;
    }): any;
    answerInlineQuery({ inline_query_id, results, cache_time, is_personal, next_offset, switch_pm_text, switch_pm_parameter, }?: {
        inline_query_id: string;
        results: object[];
        cache_time?: number | null;
        is_personal?: boolean;
        next_offset?: string;
        switch_pm_text?: string;
        switch_pm_parameter?: string;
    }): any;
    sendInvoice({ chat_id, title, description, payload, provider_token, start_parameter, currency, prices, provider_data, photo_url, photo_size, photo_width, photo_height, need_name, need_phone_number, need_email, need_shipping_address, send_phone_number_to_provider, send_email_to_provider, is_flexible, disable_notification, reply_to_message_id, reply_markup, }?: {
        chat_id: number | string;
        title: string;
        description: string;
        payload: string;
        provider_token: string;
        start_parameter: string;
        currency: string;
        prices: object[];
        provider_data?: string;
        photo_url?: string;
        photo_size?: number | null;
        photo_width?: number | null;
        photo_height?: number | null;
        need_name?: boolean;
        need_phone_number?: boolean;
        need_email?: boolean;
        need_shipping_address?: boolean;
        send_phone_number_to_provider?: boolean;
        send_email_to_provider?: boolean;
        is_flexible?: boolean;
        disable_notification?: boolean;
        reply_to_message_id?: number | string;
        reply_markup?: any;
    }): any;
    answerShippingQuery({ shipping_query_id, ok, shipping_options, error_message, }?: {
        shipping_query_id: string;
        ok: boolean | null;
        shipping_options?: object[] | null;
        error_message?: string;
    }): any;
    answerPreCheckoutQuery({ pre_checkout_query_id, ok, error_message, }?: {
        pre_checkout_query_id: string;
        ok: boolean | null;
        error_message?: string;
    }): any;
    setPassportDataErrors({ user_id, errors, }?: {
        user_id: string;
        errors: object[] | null;
    }): any;
    sendGame({ chat_id, game_short_name, disable_notification, reply_to_message_id, reply_markup }?: {
        chat_id: string;
        game_short_name: string | null;
        disable_notification?: boolean;
        reply_to_message_id?: number | string;
        reply_markup?: any;
    }): any;
    setGameScore({ user_id, score, force, disable_edit_message, chat_id, message_id, inline_message_id, }?: {
        user_id: string;
        score: number | null;
        force?: null;
        disable_edit_message?: boolean | null;
        chat_id?: string | number;
        message_id?: string | number;
        inline_message_id?: string;
    }): any;
    getGameHighScores({ user_id, chat_id, message_id, inline_message_id, }?: {
        user_id: string;
        chat_id?: string | number;
        message_id?: string | number;
        inline_message_id?: string;
    }): any;
    getPath({ file_id, }?: {
        file_id: string;
    }): any;
    getFileDownloadUrl({ path }?: {
        path: any;
    }): string;
    private miss_parameter;
    private start;
}
//# sourceMappingURL=tgbot.d.ts.map