# 向容大師紫微能量好運學院｜官方網站

向容大師紫微能量好運學院的公開繁體中文、Mobile-first 品牌網站。

- 品牌名稱：向容大師紫微能量好運學院
- 英文識別：`siangrong`
- UI 方向：杏暖朱印、繁體中文、Mobile-first
- 版本基準：V4.4（2026-11-21）
- 內容：向容老師介紹、專業服務、既有回饋（已模糊化）、FB/IG 導流、LINE 加好友、Google 表單預約
- 預約表單：https://forms.gle/mk9bN4YkbUTdmSMG6
- 官方 LINE：https://line.me/R/ti/p/@wdt9943b
- 客戶在表單送出後 **不代表預約成立或完成付款**；由官方確認時段及入帳後才會正式確認

![手機版首頁預覽](docs/mobile-home-390.png)

## GitHub Pages 發布

請閱讀 [GITHUB_PAGES_上傳教學.md](GITHUB_PAGES_上傳教學.md)。

- 本 ZIP **必須先解壓縮**，再將 `index.html`、`assets/` 等「檔案與資料夾內容」上傳到 GitHub repository 根目錄。
- 本站可使用 GitHub Pages `main` / `/(root)` 發布；使用相對路徑，支援 `https://<帳號>.github.io/<repo>/` 專案網址。
- `.nojekyll` 已包含，不需 Node.js、npm、編譯程式或伺服器。

## 結構

```text
index.html                         官網首頁
consultation-booking/index.html    預約說明頁
privacy.html                       資料處理說明
assets/                            樣式、腳本、人物照與模糊化的回饋圖
robots.txt                         允許搜尋引擎收錄
.nojekyll                          GitHub Pages 靜態檔案發布
GITHUB_PAGES_上傳教學.md           操作流程
上線前檢查清單.md                  發布與內容風險核對
```

## 安全與限制

1. 網站與 GitHub repository 均為公開內容，任何持有網址的人皆可瀏覽。
2. 回饋圖片已模糊化；不得使用未經公開授權的原始回饋圖片取代。
3. 網站沒有預約後端、金流或會員資料庫；預約按鈕開啟外部 Google 表單。
4. Google 表單是否允許所有人填答、回覆是否到達管理員，以及 Facebook/Instagram/LINE 連結，都應定期於手機實測。
5. 在網站上啟用線上付款、訂單或會員資料功能前，應另行採用具備相應安全與服務條款的後端服務。

GitHub Pages 官方說明：
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
