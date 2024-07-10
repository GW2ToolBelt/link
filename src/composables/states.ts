/*
 * Copyright (c) 2022-2024 Leon Linhart
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import { ChatLinkState } from "~/types/ChatLinkState";
import { decode, encode } from "gw2e-chat-codes";
import type { CodeType } from "gw2e-chat-codes/src/static";

export const useChatLink = () => useState("chatLink", () => new ChatLinkState(null, null, {}));

export function updateChatLink(encodedString: string) {
    let decodingRes = couldBeChatLink(encodedString) ? decode(encodedString) : null;
    const chatLink = decodingRes ? decodingRes : null;

    useChatLink().value = new ChatLinkState(
        encodedString,
        chatLink?.type ?? null,
        chatLink ?? {}
    );
}

export function updateChatLinkData(key: string, value: any) {
    const chatLink = useChatLink().value;
    const data = {
        ...chatLink.data,
        [key]: value
    };

    if  (chatLink.type == null) {
        console.error("");
        return;
    }

    const encodedChatLink = encode(chatLink.type, data);
    if  (!encodedChatLink) {
        console.error("");
        return;
    }

    useChatLink().value = new ChatLinkState(
        encodedChatLink,
        chatLink.type,
        data
    );
}

export function updateChatLinkType(type: CodeType) {
    useChatLink().value = new ChatLinkState(
        null,
        type,
        {}
    );
}

function couldBeChatLink(value: string): boolean {
    return value.match("^\\[&[-A-Za-z0-9+/]*={0,3}\\]$") !== null && ((value.length - 3) % 4) == 0;
}