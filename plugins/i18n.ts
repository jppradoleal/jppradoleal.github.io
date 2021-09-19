import { Middleware } from "@nuxt/types";

const i18nMiddleware: Middleware = function({app}) {
  app.i18n.onBeforeLanguageSwitch = function(oldLocale, newLocale) {
    console.log(oldLocale, newLocale)
  }
}

export default i18nMiddleware