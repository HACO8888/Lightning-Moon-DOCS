const { description } = require('../../package')

module.exports = {
    lang: 'zh-TW',
    theme: '@vuepress/theme-default',
    locales: {
      '/': {
        lang: 'zh-TW',
        title: 'Lightning Moon Studio DOCS',
        description: '由臺灣學生組成，跨足臺灣、香港、美國等區域。學生為中心、少數成年人協助。歡迎各位將熱血與青春投注於此，創建屬於自己的夢想藍圖',
      },
    //   '/en': {
    //     lang: 'en-US',
    //     title: 'Lightning Moon Studio',
    //     description: 'Composed of Taiwanese students, we span Taiwan, Hong Kong, the United States, and other regions with student-centered, and a small number of adults assisted.\nYou are welcome to bet your blood and youth here and create your own dream blueprint!',
    //   },
    },
    themeConfig: {
      darkMode: true,
      // editLink: false,
      // lastUpdated: false,
      // contributors: false,
      logo: '/LOGO-.png',
      logoDark: "/LOGO-02.png",
      // repo: "MRHACO/Lightning-Moon-DOCS",
      docsRepo: 'MRHACO/Lightning-Moon-DOCS',
      docsBranch: 'master',
      docsDir: 'docs',
      editLinkPattern: ':repo/edit/:branch/:path',
      locales: {
        "/": {
          "editLinkText": "編輯頁面",
          "backToHome": "帶我回首頁",
          "contributorsText": "編輯者",
          "lastUpdatedText": "上次更新",
          "selectLanguageName": "繁體中文",
          "selectLanguageText": "選擇語言",
          "toggleSidebar": "切換至夜間模式",
          "toggleDarkMode": "切換至白天模式",
          "openInNewWindow": "在新視窗中打開",
          "notFound": [
            "這裡沒有東西！.",
            "你是怎麼來到這裡的？",
            "這是個 四 - 零 - 四.",
            "看來你的到了一個壞掉的連結。"
          ],
          "navbar": [
            {
              text: '支援文檔',
              link: '/all',
              activeMatch: '^/all/',
            },
            // {
            //   text: 'Discord',
            //   link: 'https://discord.gg/RtsckgRjqJ',
            // },
            {
              text: 'Github',
              link: 'https://github.com/MRHACO/',
            }
          ],
        //   sidebar: [
        //     {
        //       text: '目錄1',
        //       link: '/',
        //       children: [
        //         {
        //           text: '子目錄1',
        //           link: '/',
        //           children: [],
        //         },
        //         {
        //           text: '子目錄2',
        //           link: '/',
        //           children: [
        //             {
        //               text: '子子目錄1',
        //               link: '/',
        //               children: [],
        //             },
        //             {
        //               text: '子子目錄2',
        //               link: '/',
        //               children: [],
        //             },
        //           ],
        //         },
        //       ],
        //     },
        //   ],
        },
        "/en": {
        "backToHome": "Take me home",
          "selectLanguageName": "English",
          "selectLanguageText": "Language",
          "lastUpdatedText": "Last Updated",
          "toggleSidebar": "toggle sidebar",
          "toggleDarkMode": "toggle dark mode",
          "openInNewWindow": "open in new window",
          "notFound": [
            "There's nothing here.",
            "How did we get here?",
            "That's a Four-Oh-Four.",
            "Looks like we've got some broken links."
          ],
        },
      },
    },
  }