var tipuesearch = {"pages": [{'title': 'About', 'text': 'Repository:  https://github.com/mdecourse/cmstemplate \n Github Pages:  https://mde.tw/cmstemplate \n 利用 cmstemplate 建立以 CMSiMDE 作為子模組的動態與靜態網站方法為: \n \n 登入 Github 帳號 \n 將瀏覽器指向  https://github.com/mdecourse/cmstemplate \n 利用  Use this template  按鈕建立倉儲 \n \n clone 帶有 CMSiMDE 的指令: \n git clone --recurse-submodules URL \n 上述 URL 即為希望將倉儲資料取下進行改版的 Github 倉儲網路統一資源位置, 也就是 Github 倉儲網址. \n 每一個以 cmstemplate 為 template 的倉儲, 其根目錄都帶有: \n \n init.py  - 其中的 site_title, ip 與 port 可以讓使用者自行修改, site_title 是網站標題, ip 為動態網站啟動時所使用的網路位址, 可設為內部或外部 IPv4 (IPv6), port 則是動態網站啟動時所佔用的埠號. \n http-server.py  - 執行後會使用內建的 localhost 與 port 8444 伺服 content 子目錄中的 CMSiMDE 靜態網頁. \n cms.bat  - 讓使用者執行動態網站用的批次檔案. \n acp.bat  - 若使用者已經將倉儲設為 ssh 連線, 且提供遠端與近端的認證模式, 則可以在執行此批次指令之後加上提交字串, 即可執行 git add ., git commit -m "提交訊息", 以及 git push 等三個指令. \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'CMSiMDE', 'text': 'CMSiMDE ( https://github.com/mdecourse/cmsimde ) 是一套以 Python 與 Flask 框架編寫的網際內容管理系統, \n 使用 CMSiMDE 建議使用者安裝 flask flask_cors bs4 lxml pelican markdown leo 等模組. 其中的 flask flask_cors bs4 lxml pelican markdown為啟動 CMSiMDE 的必要模組, 而 leo 則是 CMSMDE 開發者所使用的大綱管理工具, 可以用於與 CMSiMDE 整合的 Pelican blog 及 Reveal.js 網際簡報編輯之用. \n', 'tags': '', 'url': 'CMSiMDE.html'}, {'title': '基本操作', 'text': '當使用者利用 cms.bat 啟用動態網站後, 即可利用瀏覽器  https://localhost:9443  在近端維護網站內容, 由於此時動態網站僅在 localhost 啟動, 因此可以使用內建的管理者密碼 "admin" 登入管理網站內容. \n 假如使用者修改 init.py 中的 ip 或 uwsgi 設定, 讓動態網站在外部 IP 啟動, 則必須自行透過動態網站中的  config  指令修改管理者密碼. \n 動態網站編輯表單中的  config  除了可更改網站管理者密碼外, 也可以更改網站的頁面內容標題 (外部標題可以透過 init.py 中的 site_title 更改). \n', 'tags': '', 'url': '基本操作.html'}, {'title': '編輯網頁內容', 'text': '編輯 CMSiMDE 動態網站中的內容, 可以透過表單中的  Edit All  或  Edit  按鈕進行.  Edit  可用於單頁編輯, 操作時先選擇左側的頁面標題, 等系統顯示該頁面內容後, 再點擊上方的  Edit  按鈕即可進入該頁面的編輯模式. \n Edit All  通常用於單次刪除所有頁面內容或者只保留特定頁面用, 點擊後會將所有頁面內容置於編輯器中. \n', 'tags': '', 'url': '編輯網頁內容.html'}, {'title': '上傳與引用檔案', 'text': 'File Upload  可以讓使用者選擇近端多個檔案上傳至動態系統中的 downloads 目錄. \n 引用使用者上傳的檔案 \n python_book_01.pdf \n', 'tags': '', 'url': '上傳與引用檔案.html'}, {'title': '上傳與引用圖片', 'text': 'Image Upload  可以讓使用者選擇近端多個檔案上傳至動態系統中的 downloads 目錄. \n 引用使用者上傳的檔案 \n \n \n', 'tags': '', 'url': '上傳與引用圖片.html'}, {'title': '嵌入程式碼', 'text': '利用 Insert/Edit code 功能, 可以嵌入各種程式碼: \n // 下列 Dart 程式, 利用 Runge Kutta 迭代運算法, 解常微分方程式\n// 設 t 為時間, x 則設為物體的位移\n// dx / dt = (t - x)/2, 起始值 t0=0, x0=1, 求 t=2 時的 x 值\n//\n// 已知起始值 t0 與 x0 後, 可以利用下列 rungeKutta 函式, 以\n// h 為每步階增量值, 求 dxdt 常微分方程式任一 t 的對應值 x\n// 定義函式 rungeKutta, 共有四個輸入變數\nrungeKutta(t0, x0, t, h) {\n  // 利用步階增量值 h 與 t 的起始及終點值\n  // 計算需要迭代的次數 n\n  int n = ((t - t0) / h).toInt();\n  // 宣告 x 為雙浮點數, 且設為起始值 x0\n  double x = x0;\n  // 利用已知的 t0, x0, t 終點值與步階增量值 h, 迭代求 x 對應值\n  // 索引值 i 將每次增量 1, 從 i=1 執行 for 環圈至 i=n\n  for (int i = 1; i <= n; i++) {\n    // 將此階段的 t 與 x 值代入 dxdt 函式求下列四個浮點變數值\n    double k1 = h * dxdt(t0, x);\n    double k2 = h * dxdt(t0 + 0.5 * h, x + 0.5 * k1);\n    double k3 = h * dxdt(t0 + 0.5 * h, x + 0.5 * k2);\n    double k4 = h * dxdt(t0 + h, x + k3);\n    // 利用上述四個變數值求此步階增量後的對應 x 值\n    x = x + (1.0 / 6.0) * (k1 + 2 * k2 + 2 * k3 + k4);\n    // 每次 for 迴圈執行最後, 準備計算下一個步階增量後的 x 對應值\n    // t 起始值配合步階增量值 h, 進行增量\n    t0 = t0 + h;\n  }\n  // 完成 for 迴圈迭代後, 傳回與 t 終點值對應的 x 值\n  return x;\n}\n\n// 將微分方程式 "dx / dt = (t - x)/2" 定義為 dxdt 函式\ndxdt(t, x) {\n  return ((t - x) / 2);\n}\n\n// 定義 main() 主函式內容, 目的在利用 rungeKutta 函式\n// 解常微分方程式\nmain() {\n// Driver method\n// num 資料型別可以是整數或雙浮點數\n  num t0 = 0;\n  num x = 1;\n  num t = 2;\n  double h = 0.2;\n  print(\'The value of x at t=$t is: ${rungeKutta(t0, x, t, h)}\');\n}\n \n \n', 'tags': '', 'url': '嵌入程式碼.html'}, {'title': '嵌入影片檔', 'text': '直接利用 Source code 功能, 將影片檔案的 iframe 標註放入後存檔: \n \n', 'tags': '', 'url': '嵌入影片檔.html'}, {'title': '檢視 STL', 'text': '使用 Github 所提供的 STL viewer 嵌入 github.com/mdecourse/cmstemplate main branch 中 downloads 目錄中的 spikeball.stl \n <script src="https://embed.github.com/view/3d/mdecourse/cmstemplate/main/downloads/spikeball.stl"></script> \n 將上列 script 標註放入頁面 HTML 內容後, 可以檢視 STL 零件檔案. \n \n \n \n \n 以 CMSiMDE 內建的 static/viewstl.html 檢視 STL 檔案: \n 使用 iframe 其 src 指向 STL 檔案的絕對 URL 路徑: \n /static/viewstl.html?src=https://mde.tw/cmstemplate/downloads/spikeball.stl \n 就可以如下檢視 downloads/spikeball.stl \n \n', 'tags': '', 'url': '檢視 STL.html'}, {'title': 'Gitlab 同步', 'text': '利用 git remote add gitlab  https://gitlab.com/user/repository.git  可以在近端倉儲中的 .git/config 中新增一個名稱為 gitlab, 且與  https://gitlab.com/user/repository.git  倉儲對應的設定. 使用者可以將此倉儲改版內容以 git push gitlab 推向 Gitlab. \n 至於 Gitlab Pages 額外需要下列 .yml 檔案進行轉換設定: \n .gitlab-ci.yml \n pages:\n  stage: deploy\n  script:\n  - mkdir .public\n  - cp -r * .public\n  - mv .public public\n  artifacts:\n    paths:\n    - public\n  only:\n  - master\nvariables:\n  GIT_SUBMODULE_STRATEGY: recursive \n \n', 'tags': '', 'url': 'Gitlab 同步.html'}, {'title': 'Heroku 部署', 'text': '與 Heroku 部署有關資訊請參考:  https://mde.tw/cp2020/content/Heroku.html \n', 'tags': '', 'url': 'Heroku 部署.html'}, {'title': 'Fossil SCM', 'text': '在 Github 之外, 可以同步將各倉儲資料存放至 Gitlab, Heroku (有 500 MB 容量限制) 與 Fossil SCM. \n 希望整合 Github 與 Fossil SCM 倉儲步驟說明如下: \n 針對 Github 中已經有  https://github.com/mdecourse/cmstemplate  倉儲, 希望同步建  https://fossil.kmol.info/cmstemplate  與之內容同步. \n 登入 fossil.kmol.info 主機, 在 /home/user/repository 目錄中, 以 fossil init cmstemplate.fossil 建立空倉儲. 此時 Fossil SCM 將會列出以登入帳號作為帳號的管理者密碼. \n 管理者利用  https://fossil.kmol.info/cmstemplate  連結, 以 user 登入, 並利用上列管理者密碼進入管理區, 先行透過 Setup/users 變更 user 對應密碼. \n 回到 Windows 以  fossil clone https://user@fossil.kmol.info/cmstemplate cmstemplate.fossil  取下倉儲資料, 過程中將需要輸入與 user 對應的密碼, 並被詢問是否儲存密碼, 若選擇儲存密碼則隨後的 fossil commit 將回自動提交推送. \n 接著在近端必須開啟空 cmstemplate.fossil 倉儲, 主要目的是取得 __FOSSIL__, 並且以 git pull 完整拉下位於  https://github.com/mdecourse/cmstemplate  中的資料並與空 __FOSSIL__ 進行整合. 其中在 Fossil SCM 端必須將 Setup/Settings 中的 default-csp 設為:  https://fonts.googleapis.com  (讓 CMSiMDE 靜態網頁可以在 Fossil SCM doc 頁面中正常顯示), 且勾選 dotfiles (讓 Fossil SCM 可以儲存 .git 中的版本資料). \n \n 參考資料: \n 編譯 Fossil SCM: \n \xa0 http://project.mde.tw/blog/zai-msys2-huan-jing-bian-yi-fossil-scm.html \n', 'tags': '', 'url': 'Fossil SCM.html'}, {'title': '建立網頁', 'text': '由於 CMSiMDE 帶有動態網頁與靜態網頁等兩個部分, 動態網頁執行時需要該伺服器能夠執行 Python 3, 以及 flask flask_cors bs4 lxml pelican markdown 等模組. 而靜態網頁的伺服則只需要 WWW Server 即可. \n 若使用者在 Github 使用 CMSiMDE 建立網頁, 可以透過  https://github.com/mdecourse/cmstemplate  template 建立, 步驟與兩種設定方式如下: \n \n 使用者登入 Github \n 將瀏覽器連線至  https://github.com/mdecourse/cmstemplate  頁面後, 點擊 Use this template 按鈕後, 選擇所要採用的 repository 名稱後, 就可以建立以 CMSiMDE 作為子模組的 Github 倉儲. \n 假如使用者所選擇的倉儲名稱為: 帳號.github.io, 則 Github 會自動設定該倉儲的 main 分支為 Github Pages 根目錄, 意即一旦 Github Pages 完成轉檔 (提交訊息之後會出現綠勾), 則該倉儲的對應網頁將為: https://帳號.github.io \n 若使用利用  https://github.com/mdecourse/cmstemplate  作為 template 所建立的倉儲名稱並非 帳號.github.io, 則使用者必須自行至該倉儲的 settings/Github Pages 選項中將 main branch 設為 Github Pages 對應的 root 目錄. 之後, Github 將會採用: 帳號.github.io/倉儲名稱 作為與該倉儲對應的 Github Pages 網址. \n \n', 'tags': '', 'url': '建立網頁.html'}, {'title': '注意事項', 'text': '因為  https://github.com/mdecourse/cmstemplate  將 CMSiMDE 倉儲作為 submodule, 因此使用者利用 cmstemplate 作為 template 後, 必須使用 git clone --recurse-submodules 取下遠端倉儲. \n 例如: \n 若使用者的倉儲 URL 為  https://github.com/mdecourse/cmstemplate \n 則可以在近端利用: \n git clone --recurse-submodules  https://github.com/mdecourse/cmstemplate.git \n 將遠端倉儲資料存入 cmstemplate 目錄中. \n 目前的 cmstemplate 內建 cms.bat 與 acp.bat 等兩個 batch 檔案, 可以協助使用者直接在倉儲根目錄啟動 CMSiMDE 動態網頁, 以及單一指令式即可完成 git add, git commit 以及 git push, 但是前提是使用者必須設定以 ssh 方式與 Github 倉儲進行驗證. \n 例如: \n 若使用者已經將倉儲內容 clone 至近端, 且已經帶有 cmsimde 子模組的內容. \n 則可以在近端命令列進入 cmstemplate 倉儲目錄執行: \n cms.bat \n 開啟動態網頁系統. 並以  https://localhost:9443  開啟. \n 一旦完成動態網頁的編輯, 利用 Generate Pages 可以轉為靜態網站, 且各 html 檔案將位於 content 目錄中. \n 若使用者希望檢查近端靜態網頁的內容, 可以利用 SciTE 開啟倉儲中的 http-server.py, 並利用瀏覽器以  https://localhost:8444  檢查靜態網頁內容. \n 一旦使用者要將近端倉儲的動態與靜態網頁內容推向 Github, 則必須將倉儲中 .git/config 的 url, 從 https 改為 ssh 的連線格式: \n 例如: \n 原先 .git/config origin 的 url 為 url =  https://github.com/mdecourse/cmstemplate.git,  則必須改為: \n url =  git@github.com:mdecourse/cmstemplate.git \n 之後假如使用者要以 "add some files" 字串當作提交說明訊息, 則可以在命令列中的倉儲目錄執行: \n acp.bat "add some files" \n', 'tags': '', 'url': '注意事項.html'}, {'title': '標題選擇', 'text': '由於 CMSiMDE 中的動態網站透過 config/content.htm 的 H1~H3 超文件標註進行分頁, 因此使用者利用 cms.bat 開啟動態網站後, 必須注意各頁面標題文字的選擇: \n \n 頁面標題文字儘量簡短  - 頁面標題就有如文章的章節標題, 只要該標題具有該頁面內容的代表性即可, 越簡短越好. \n 頁面標題文字不要使用標點符號  - 因為標點符號中的 "/" 會造成頁面擷取時 URL 指令分段上的誤判, 至於標題文字中若有 ":" 則會在動態內容轉靜態內容時, 因 Windows 不允許檔案名稱帶有 ":" 而無法轉檔. \n 頁面標題中不可以有超文件標註  - 由於 CMSiMDE 動態網站編輯器採用 GUI 進行, 採用滑鼠標修頁面標題時, 可能無意中將 HTML 標註放入 H1~H3 標題文字中, 如此可能會造成 CMSiMDE 分頁錯誤而無法開啟動態網站. 當使用者要檢查所使用的頁面標題是否帶有 html 標註, 可以透過編輯功能中的 Source Code 檢查. \n H1 標題數量不可過多  - 由於 CMSiMDE 的靜態網站支援手機模式, 當頁面 H1 標題數量超過 10 個之後, 頁面標題可能無法在螢幕上最上方以一列顯示, 而是必須出現在第二行, 結果將會導致頁面展開時的 Javascript 程式產生錯亂, 結果為無法直接以滑鼠點擊進入特定頁面. \n \n \n \n', 'tags': '', 'url': '標題選擇.html'}, {'title': '靜態網頁 404', 'text': '當使用者將近端網頁倉儲資料推向 Github 後, commit 提交訊息之後若沒有出現綠勾, 表示靜態網頁無法轉檔成功, 這時連接靜態網頁時, 將會出現 404, 通常情況下是因為倉儲中 cmsimde 子模組的版次無法與遠端  https://github.com/mdecourse/cmsimde  中的版本對應. \n 上述靜態網頁出現 404 錯誤訊息的處理方式如下: \n \n 從  https://github.com/mdecourse/cmsimde  倉儲中複製最新版本的版次號, 以  2021/03/03 的版次 為例, 版次號為 1c3aeec1f5d26b421743d2f5ef8bb7d5b99292af, 使用者只需要最前面的 7 個字元, 也就是 1c3aeec. \n 然後在近端倉儲中, 以命令列進入 cmsimde 目錄後執行:  git checkout 1c3aeec \n 接著退回倉儲目錄, 以 git add, git commit 及 git push 將倉儲改版內容推向 Github 後應該就可以將倉儲正確轉為靜態網站內容. \n \n', 'tags': '', 'url': '靜態網頁 404.html'}, {'title': '動態網站錯誤', 'text': 'CMSiMDE 動態網站經常出現的錯誤是無法對 config/content.htm 分頁, 這時可以利用 SCiTE 編輯 content.htm, 找尋是否 H1~H3 標註中是否帶有特殊符號, 如 "/" 或 ":" 等. \n', 'tags': '', 'url': '動態網站錯誤.html'}, {'title': '延伸開發', 'text': '為了建立 responsive site: \n 靜態網頁: \n Javascript 程式庫: \n https://getbootstrap.com/ \n 動態系統: \n Javascript editor \n TinyMCE:  https://www.tiny.cloud/ \n Syntax highlighter:  https://prismjs.com/ \n Ajax bit by bit file uploader: \n Flask \n Flask_cors \n bs4 \n lxml \n markdown \n', 'tags': '', 'url': '延伸開發.html'}, {'title': '作業', 'text': '', 'tags': '', 'url': '作業.html'}, {'title': 'wh1', 'text': '', 'tags': '', 'url': 'wh1.html'}, {'title': 'wh2', 'text': '123', 'tags': '', 'url': 'wh2.html'}]};