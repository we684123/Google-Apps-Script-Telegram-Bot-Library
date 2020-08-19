/** Telegram bot class */
declare class tgbot {
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
        chat_id?: string;
        voice?: string;
        duration?: string;
        caption?: string;
        parse_mode?: string;
        disable_notification?: boolean;
        reply_to_message_id?: string;
        reply_markup?: string;
    }): any;
    sendVideoNote({ chat_id, video_note, duration, length, thumb, disable_notification, reply_to_message_id, reply_markup }?: {
        chat_id?: string;
        video_note?: string;
        duration?: string;
        length?: string;
        thumb?: string;
        disable_notification?: boolean;
        reply_to_message_id?: string;
        reply_markup?: string;
    }): any;
    sendMediaGroup({ chat_id, media, disable_notification, reply_to_message_id, }?: {
        chat_id?: string;
        media?: string;
        disable_notification?: boolean;
        reply_to_message_id?: string;
    }): any;
    sendLocation({ chat_id, latitude, longitude, live_period, disable_notification, reply_to_message_id, reply_markup }?: {
        chat_id?: string;
        latitude?: string;
        longitude?: string;
        live_period?: string;
        disable_notification?: boolean;
        reply_to_message_id?: string;
        reply_markup?: string;
    }): any;
    editMessageLiveLocation({ chat_id, message_id, inline_message_id, latitude, longitude, reply_markup }?: {
        chat_id?: string;
        message_id?: string;
        inline_message_id?: string;
        latitude?: string;
        longitude?: string;
        reply_markup?: string;
    }): any;
    stopMessageLiveLocation({ chat_id, message_id, inline_message_id, reply_markup }?: {
        chat_id?: string;
        message_id?: string;
        inline_message_id?: string;
        reply_markup?: string;
    }): any;
    sendVenue({ chat_id, latitude, longitude, title, address, foursquare_id, foursquare_type, disable_notification, reply_to_message_id, reply_markup }?: {
        chat_id?: string;
        latitude?: string;
        longitude?: string;
        title?: string;
        address?: string;
        foursquare_id?: string;
        foursquare_type?: string;
        disable_notification?: boolean;
        reply_to_message_id?: string;
        reply_markup?: string;
    }): any;
    sendContact({ chat_id, phone_number, first_name, last_name, vcard, disable_notification, reply_to_message_id, reply_markup }?: {
        chat_id?: string;
        phone_number?: string;
        first_name?: string;
        last_name?: string;
        vcard?: string;
        disable_notification?: boolean;
        reply_to_message_id?: string;
        reply_markup?: string;
    }): any;
    sendPoll({ chat_id, question, options, is_anonymous, type, allows_multiple_answers, correct_option_id, explanation, explanation_parse_mode, open_period, close_date, is_closed, disable_notification, reply_to_message_id, reply_markup }?: {
        chat_id?: string;
        question?: string;
        options?: string;
        is_anonymous?: boolean;
        type?: string;
        allows_multiple_answers?: boolean;
        correct_option_id?: string;
        explanation?: string;
        explanation_parse_mode?: string;
        open_period?: string;
        close_date?: string;
        is_closed?: boolean;
        disable_notification?: boolean;
        reply_to_message_id?: string;
        reply_markup?: string;
    }): any;
    sendDice({ chat_id, emoji, disable_notification, reply_to_message_id, reply_markup }?: {
        chat_id?: string;
        emoji?: string;
        disable_notification?: boolean;
        reply_to_message_id?: string;
        reply_markup?: string;
    }): any;
    sendChatAction({ chat_id, action, }?: {
        chat_id?: string;
        action?: string;
    }): any;
    getUserProfilePhotos({ user_id, offset, limit, }?: {
        user_id?: string;
        offset?: string;
        limit?: number;
    }): any;
    getFile({ file_id, }?: {
        file_id?: string;
    }): any;
    kickChatMember({ chat_id, user_id, until_date }?: {
        chat_id?: string;
        user_id?: string;
        until_date?: string;
    }): any;
    unbanChatMember({ chat_id, user_id, }?: {
        chat_id?: string;
        user_id?: string;
    }): any;
    restrictChatMember({ chat_id, user_id, permissions, until_date }?: {
        chat_id?: string;
        user_id?: string;
        permissions?: string;
        until_date?: string;
    }): any;
    promoteChatMember({ chat_id, user_id, can_change_info, can_post_messages, can_edit_messages, can_delete_messages, can_invite_users, can_restrict_members, can_pin_messages, can_promote_members, }?: {
        chat_id?: string;
        user_id?: string;
        can_change_info?: boolean;
        can_post_messages?: boolean;
        can_edit_messages?: boolean;
        can_delete_messages?: boolean;
        can_invite_users?: boolean;
        can_restrict_members?: boolean;
        can_pin_messages?: boolean;
        can_promote_members?: boolean;
    }): any;
    setChatAdministratorCustomTitle({ chat_id, user_id, custom_title, }?: {
        chat_id?: string;
        user_id?: string;
        custom_title?: string;
    }): any;
    setChatPermissions({ chat_id, permissions, }?: {
        chat_id?: string;
        permissions?: string;
    }): any;
    exportChatInviteLink({ chat_id, }?: {
        chat_id?: string;
    }): any;
    setChatPhoto({ chat_id, photo, }?: {
        chat_id?: string;
        photo?: string;
    }): any;
    deleteChatPhoto({ chat_id, }?: {
        chat_id?: string;
    }): any;
    setChatTitle({ chat_id, title, }?: {
        chat_id?: string;
        title?: string;
    }): any;
    setChatDescription({ chat_id, description, }?: {
        chat_id?: string;
        description?: string;
    }): any;
    pinChatMessage({ chat_id, message_id, disable_notification, }?: {
        chat_id?: string;
        message_id?: string;
        disable_notification?: boolean;
    }): any;
    unpinChatMessage({ chat_id, }?: {
        chat_id?: string;
    }): any;
    leaveChat({ chat_id, }?: {
        chat_id?: string;
    }): any;
    getChatAdministrators({ chat_id, }?: {
        chat_id?: string;
    }): any;
    getChatMembersCount({ chat_id, }?: {
        chat_id?: string;
    }): any;
    getChatMember({ chat_id, user_id, }?: {
        chat_id?: string;
        user_id?: string;
    }): any;
    setChatStickerSet({ chat_id, sticker_set_name, }?: {
        chat_id?: string;
        sticker_set_name?: string;
    }): any;
    deleteChatStickerSet({ chat_id, }?: {
        chat_id?: string;
    }): any;
    answerCallbackQuery({ callback_query_id, text, show_alert, url, cache_time, }?: {
        callback_query_id?: string;
        text?: string;
        show_alert?: boolean;
        url?: string;
        cache_time?: string;
    }): any;
    setMyCommands({ commands, }?: {
        commands?: any[];
    }): any;
    getMyCommands(): any;
    editMessageText({ chat_id, message_id, inline_message_id, text, parse_mode, disable_web_page_preview, reply_markup }?: {
        chat_id?: string;
        message_id?: string;
        inline_message_id?: string;
        text?: string;
        parse_mode?: string;
        disable_web_page_preview?: boolean;
        reply_markup?: string;
    }): any;
    editMessageCaption({ chat_id, message_id, inline_message_id, caption, parse_mode, disable_web_page_preview, reply_markup }?: {
        chat_id?: string;
        message_id?: string;
        inline_message_id?: string;
        caption?: string;
        parse_mode?: string;
        disable_web_page_preview?: boolean;
        reply_markup?: string;
    }): any;
    editMessageMedia({ chat_id, message_id, inline_message_id, media, reply_markup }?: {
        chat_id?: string;
        message_id?: string;
        inline_message_id?: string;
        media?: string;
        reply_markup?: string;
    }): any;
    editMessageReplyMarkup({ chat_id, message_id, inline_message_id, reply_markup }?: {
        chat_id?: string;
        message_id?: string;
        inline_message_id?: string;
        reply_markup?: string;
    }): any;
    stopPoll({ chat_id, message_id, reply_markup }?: {
        chat_id?: string;
        message_id?: string;
        reply_markup?: string;
    }): any;
    deleteMessage({ chat_id, message_id, }?: {
        chat_id?: string;
        message_id?: string;
    }): any;
    sendSticker({ chat_id, sticker, disable_notification, reply_to_message_id, reply_markup, }?: {
        chat_id?: string;
        sticker?: string;
        disable_notification?: boolean;
        reply_to_message_id?: string;
        reply_markup?: string;
    }): any;
    getStickerSet({ name, }?: {
        name?: string;
    }): any;
    uploadStickerFile({ user_id, png_sticker, }?: {
        user_id?: string;
        png_sticker?: string;
    }): any;
    createNewStickerSet({ user_id, name, title, png_sticker, tgs_sticker, emojis, contains_masks, mask_position, }?: {
        user_id?: string;
        name?: string;
        title?: string;
        png_sticker?: string;
        tgs_sticker?: string;
        emojis?: string;
        contains_masks?: boolean;
        mask_position?: string;
    }): any;
    addStickerToSet({ user_id, name, png_sticker, tgs_sticker, emojis, mask_position, }?: {
        user_id?: string;
        name?: string;
        png_sticker?: string;
        tgs_sticker?: string;
        emojis?: string;
        mask_position?: string;
    }): any;
    setStickerPositionInSet({ sticker, position, }?: {
        sticker?: string;
        position?: string;
    }): any;
    deleteStickerFromSet({ sticker, }?: {
        sticker?: string;
    }): any;
    setStickerSetThumb({ name, user_id, thumb, }?: {
        name?: string;
        user_id?: string;
        thumb?: string;
    }): any;
    answerInlineQuery({ inline_query_id, results, cache_time, is_personal, next_offset, switch_pm_text, switch_pm_parameter, }?: {
        inline_query_id?: string;
        results?: any[];
        cache_time?: string;
        is_personal?: string;
        next_offset?: string;
        switch_pm_text?: string;
        switch_pm_parameter?: string;
    }): any;
    sendInvoice({ chat_id, title, description, payload, provider_token, start_parameter, currency, prices, provider_data, photo_url, photo_size, photo_width, photo_height, need_name, need_phone_number, need_email, need_shipping_address, send_phone_number_to_provider, send_email_to_provider, is_flexible, disable_notification, reply_to_message_id, reply_markup, }?: {
        chat_id?: string;
        title?: string;
        description?: string;
        payload?: string;
        provider_token?: string;
        start_parameter?: string;
        currency?: string;
        prices?: any[];
        provider_data?: string;
        photo_url?: string;
        photo_size?: string;
        photo_width?: string;
        photo_height?: string;
        need_name?: boolean;
        need_phone_number?: boolean;
        need_email?: boolean;
        need_shipping_address?: boolean;
        send_phone_number_to_provider?: boolean;
        send_email_to_provider?: boolean;
        is_flexible?: boolean;
        disable_notification?: boolean;
        reply_to_message_id?: string;
        reply_markup?: string;
    }): any;
    answerShippingQuery({ shipping_query_id, ok, shipping_options, error_message, }?: {
        shipping_query_id?: string;
        ok?: string;
        shipping_options?: string;
        error_message?: string;
    }): any;
    answerPreCheckoutQuery({ pre_checkout_query_id, ok, error_message, }?: {
        pre_checkout_query_id?: string;
        ok?: string;
        error_message?: string;
    }): any;
    getPath({ file_id, }?: {
        file_id?: string;
    }): any;
    getFileDownloadUrl({ path }?: {
        path?: string;
    }): string;
    private miss_parameter;
    private start;
}
