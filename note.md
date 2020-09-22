這裡的 tgbot.js 是經由 clasp 的 ts2gas 轉的
然後再生 tgbot.js.map

` tsc --allowJs  --outFile .\tgbot2.js --sourceMap .\tgbot.js `

` rm -rf ./tgbot.js.map `

` mv ./tgbot2.js.map ./tgbot.js.map `

` rm ./tgbot2.js `

----

` npm publish `

` tsc `
