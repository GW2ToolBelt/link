export default function ({ app }, inject) {
    const client = require("gw2api-client");
    const browserStorage = require('gw2api-client/src/cache/browser');

    let gw2api = client();
    gw2api.cacheStorage(browserStorage());

    inject("gw2api", gw2api);

    // Check the build every 10 minutes and flush the cache if it updated
    setInterval(() => gw2api.flushCacheIfGameUpdated(), 10 * 60 * 1000);

    // onLanguageSwitched called right after a new locale has been set
    app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
        gw2api.language(newLocale);
    };
}