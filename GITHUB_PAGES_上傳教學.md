# GitHub Pages 上傳教學｜向容官網審閱版

## A. 建立專案

1. 用電腦瀏覽器登入 https://github.com/ 。
2. 點選右上角 `+` → **New repository**。
3. Repository name 輸入 `siangrong-preview`（可自行更改，但不要夾雜中文與空格）。
4. 若使用 GitHub Free，建議選擇 **Public**；請理解 Public 專案內的全部檔案都可被查看與下載。
5. 點選 **Create repository**。

## B. 上傳檔案（最重要）

1. 將 `siangrong_github_pages_vendor_preview_20261121.zip` **先解壓縮**。
2. 在 GitHub 專案頁面點選 **Add file → Upload files**（空白 repo 可按 `uploading an existing file`）。
3. 將解壓縮後的 `index.html`、`privacy.html`、`consultation-booking/`、`assets/`、`robots.txt`、`.nojekyll` 等**所有檔案／資料夾**上傳；
   **不要只上傳 ZIP 壓縮檔**，也不要把它們包在第二層資料夾裡。
4. 頁面下方選擇 **Commit changes**。
5. 回到檔案列表，確認最外層直接看到 `index.html` 與 `assets`。

> 小提醒：macOS/Windows 的 ZIP 解壓會產生最外層資料夾，請進入資料夾後再選其中內容上傳；手機操作大量資料夾較不方便，建議使用電腦。

## C. 啟用 GitHub Pages

1. 在專案上方選 **Settings** → 左側選 **Pages**。
2. 在 **Build and deployment / Source** 選 **Deploy from a branch**。
3. **Branch** 選 `main`，資料夾選 `/(root)`，按 **Save**。
4. 部署完成後，同一個頁面會顯示 **Visit site** 網址。
5. 一般 URL 形態為 `https://你的GitHub帳號.github.io/siangrong-preview/`（僅示例，非已上線網址）。

## D. 在手機驗收

1. 複製 GitHub Pages 真正發出的 HTTPS 網址，以手機 Chrome 或 Safari 開啟。
2. 檢查首頁大字、老師照片、服務區塊、手機選單、模糊化的回饋圖片及底部固定按鈕。
3. 點選「預約諮詢」，確認開啟 `https://forms.gle/mk9bN4YkbUTdmSMG6`。
4. 點選 LINE，確認連到 `@wdt9943b` 官方帳號；檢查 FB 與 IG 按鈕。
5. 確認 `/consultation-booking/` 及 `/privacy.html` 可以開啟。
6. 測試至少 320、375、390、430px 手機畫面，沒有水平捲動與按鈕互相遮住。

## E. 分享廠商

把真正的 HTTPS 網址傳給廠商即可。你也可以把這個 ZIP 和既有的 Q1–Q18 委外規格書提供廠商作為進一步開發基礎。

> 這是**可公開查看的廠商審閱站**，尚不是驗收通過的正式營運網站；不可在未核定合法告知／交易政策／客戶素材授權的情況下作為正式商業營運站發布。
