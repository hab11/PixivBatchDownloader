// 在属性名前面加上下划线，和文本内容做出区别。
// {} 表示需要进行替换的部分
// <br> 表示换行
type langTextKeys = keyof typeof langText

const langText = {
  _只下载已收藏: [
    '只下载已收藏',
    'ブックマークのみをダウンロードする',
    'Download only bookmarked works',
    '只下載已收藏',
  ],
  _只下载已收藏的提示: [
    '只下载已经收藏的作品',
    'ブックマークした作品のみをダウンロードする',
    'Download only bookmarked works',
    '只下載已經收藏的作品。',
  ],
  _下载作品类型: [
    '下载作品类型',
    'ダウンロード作品の種類',
    'Download work type',
    '下載作品類型',
  ],
  _下载作品类型的提示: [
    '下载哪些类型的作品',
    'どの種類の作品をダウンロードしますか',
    'Which types of works to download',
    '下載哪些類型的作品。',
  ],
  _多p下载前几张: [
    '设置作品张数',
    '作品ごとにダウンロード画像の数',
    'Number of images downloaded per work',
    '設定作品張數',
  ],
  _多p下载前几张提示: [
    '下载每个作品的前几张图片。默认值 0 表示全部下载。',
    '各作品の画像が最初の何枚をダウンロードしますか？ デフォルト値の 0 は、すべてをダウンロードします。',
    'Download the first few images of each piece. The default value of 0 means all downloads.',
    '下載每個作品的前幾張圖片。預設值 0 表示全部下載。',
  ],
  _不能含有tag: [
    '不能含有 tag&nbsp;',
    '指定した tag を除外する',
    'Exclude specified tag',
    '不能含有 tag&nbsp;',
  ],
  _排除tag的提示文字: [
    '您可在下载前设置要排除的tag，这样在下载时将不会下载含有这些tag的作品。不区分大小写；如需排除多个tag，请使用英文逗号分隔。请注意要排除的tag的优先级大于要包含的tag的优先级。',
    'ダウンロード前に、除外する tag を設定できます。大文字と小文字を区別しない；複数の tag を設定する必要がある場合は、「,」で区切ってください。除外された tag は、必要な tag よりも優先されます',
    'Before downloading, you can set the tag you want to exclude. Not case sensitive; If you need to set multiple tags, you can use comma (,) separated. The excluded tag takes precedence over the included tag',
    '可在下載前設定要排除的 tag，下載時將排除含有這些 tag 的作品，不區分大小寫；如需排除多個 tag，請使用半形逗號（,）分隔。請注意，要排除的 tag 優先於要包含的 tag。',
  ],
  _设置了排除tag之后的提示: [
    '排除 tag：',
    '以下の tag を除外：',
    'Excludes tag: ',
    '排除 tag：',
  ],
  _必须含有tag: [
    '必须含有 tag&nbsp;',
    '必要な tag&nbsp;',
    'Must contain tag',
    '必須含有 tag&nbsp;',
  ],
  _必须tag的提示文字: [
    '您可在下载前设置作品里必须包含的tag，不区分大小写；如需包含多个tag，请使用英文逗号分隔。',
    'ダウンロードする前に、必要な tag を設定することができます。大文字と小文字を区別しない；複数の tag を設定する必要がある場合は、「,」で区切ってください。',
    'Before downloading, you can set the tag that must be included. Not case sensitive; If you need to set multiple tags, you can use comma (,) separated. ',
    '可在下載前設定作品裡必須包含的 tag，不區分大小寫；如需包含多個 tag，請使用半形逗號（,）分隔。',
  ],
  _设置了必须tag之后的提示: [
    '包含 tag：',
    '以下の tag を含める：',
    'Include tag: ',
    '包含 tag：',
  ],
  _筛选宽高的按钮文字: [
    '设置宽高条件',
    '幅と高さの条件を設定する',
    'Set the width and height',
    '設定寬高條件',
  ],
  _筛选宽高的按钮Title: [
    '在下载前，您可以设置要下载的图片的宽高条件。',
    'ダウンロードする前に、画像の幅と高さの条件を設定できます。',
    'Before downloading, you can set the width and height conditions of the images you want to download.',
    '在下載前可以設定要下載的圖片的寬高條件。',
  ],
  _设置宽高比例: [
    '设置宽高比例',
    '縦横比を設定する',
    'Set the aspect ratio',
    '設定寬高比例',
  ],
  _设置宽高比例Title: [
    '设置宽高比例，也可以手动输入宽高比',
    '縦横比を設定する、手動で縦横比を入力することもできる',
    'Set the aspect ratio, or manually type the aspect ratio',
    '設定寬高比，也可以手動輸入寬高比。',
  ],
  _不限制: ['不限制', '無制限', 'not limited', '不限制'],
  _横图: ['横图', '横長', 'Horizontal', '橫圖'],
  _竖图: ['竖图', '縦長', 'Vertical', '豎圖'],
  _输入宽高比: ['宽高比 >=', '縦横比 >=', 'Aspect ratio >=', '寬高比 >='],
  _设置了宽高比之后的提示: [
    '宽高比：{}',
    '縦横比：{}',
    'Aspect ratio: {}',
    '寬高比：{}',
  ],
  _宽高比必须是数字: [
    '宽高比必须是数字',
    '縦横比は数値でなければなりません',
    'The aspect ratio must be a number',
    '寬高比必須是數字',
  ],
  _筛选宽高的提示文字: [
    '请输入最小宽度和最小高度，不会下载不符合要求的图片。',
    '最小幅と最小高さを入力してください。要件を満たしていない画像はダウンロードされません。',
    'Please type the minimum width and minimum height. Will not download images that do not meet the requirements',
    '請輸入最小寬度和最小高度，只會下載符合要求的圖片。',
  ],
  _本次输入的数值无效: [
    '本次输入的数值无效',
    '無効な入力',
    'Invalid input',
    '本次輸入的數值無效',
  ],
  _设置了筛选宽高之后的提示文字p1: [
    '宽度 >= ',
    '幅 >= ',
    'Width >= ',
    '寬度 >= ',
  ],
  _或者: [' 或者 ', ' または ', ' or ', ' 或是 '],
  _并且: [' 并且 ', ' そして ', ' and ', ' 並且 '],
  _高度设置: ['高度 >= ', '高さ >= ', 'height >= ', '高度 >= '],
  _个数: [
    '设置作品数量',
    '作品数を設定する',
    'Set the number of works',
    '設定作品數量',
  ],
  _页数: [
    '设置页面数量',
    'ページ数を設定する',
    'Set the number of pages',
    '設定頁面數量',
  ],
  _筛选收藏数的按钮文字: [
    '设置收藏数量',
    'ブックマークされた数を設定する',
    'Set the bookmarkCount conditions',
    '設定收藏數量',
  ],
  _筛选收藏数的按钮Title: [
    '在下载前，您可以设置对收藏数量的要求。',
    'ダウンロードする前に、ブックマークされた数の条件を設定することができます。',
    'Before downloading, You can set the requirements for the number of bookmarks.',
    '下載前可以設定對收藏數量的要求。',
  ],
  _设置收藏数量: [
    '设置收藏数量',
    'ブックマークされた数を設定する',
    'Set the number of bookmarks',
    '設定收藏數量',
  ],
  _设置收藏数量的提示: [
    '如果作品的收藏数小于设置的数字，作品不会被下载。',
    '作品のブックマークされた数が設定された数字よりも少ない場合、作品はダウンロードされません。',
    'If the number of bookmarks of the work is less than the set number, the work will not be downloaded.',
    '只會下載設定收藏數範圍內的作品。',
  ],
  _筛选收藏数的提示文字: [
    '请输入一个数字，如果作品的收藏数小于这个数字，作品不会被下载。',
    '数字を入力してください。 作品のブックマークされた数がこの数字より少ない場合、作品はダウンロードされません。',
    'Please type a number. If the number of bookmarks of the work is less than this number, the work will not be downloaded.',
    '請輸入數字，只會下載設定收藏數範圍內的作品。',
  ],
  _收藏数大于: [
    '收藏数 >= ',
    'ブックマークの数 >= ',
    'Number of bookmarks >= ',
    '收藏數 >= ',
  ],
  _收藏数小于: [
    '收藏数 <= ',
    'ブックマークの数 <= ',
    'Number of bookmarks <= ',
    '收藏數 <= ',
  ],
  _本次任务已全部完成: [
    '本次任务已全部完成。',
    'このタスクは完了しました。',
    'This task has been completed.',
    '本次工作已全部完成',
  ],
  _本次任务条件: [
    '本次任务条件: ',
    'このタスクの条件：',
    'This task condition: ',
    '本次工作條件：',
  ],
  _参数不合法: [
    '参数不合法，本次操作已取消。',
    'パラメータは有効ではありません。この操作はキャンセルされました。',
    'Parameter is not legal, this operation has been canceled.',
    '參數不合法，本次動作已取消。',
  ],
  _从本页开始下载x个作品: [
    '从本页开始下载-num-个作品',
    'このページから -num- 枚の作品をダウンロード。',
    'Download -num- works from this page.',
    '從本頁開始下載-num-個作品',
  ],
  _向下获取所有作品: [
    '向下获取所有作品',
    'このページからすべての作品をダウンロードする。',
    'download all the work from this page.',
    '向下取得所有作品',
  ],
  _从本页开始下载提示: [
    '从本页开始下载<br>如果要限制下载的页数，请输入从1开始的数字，1为仅下载本页。',
    'このページからダウンロードする<br>ダウンロードするページを設定する場合は、1から始まる数字を入力してください。 1は現在のページのみをダウンロードする。',
    'Download from this page<br>If you want to set the number of pages to download, type a number starting at 1. This page is 1.',
    '從本頁開始下載。<br>如果要限制下載的頁數，請輸入從 1 開始的數字，1 為僅下載本頁。',
  ],
  _从本页开始下载x页: [
    '从本页开始下载-num-页',
    '現在のページから -num- ページをウンロードします',
    'download -num- pages from the current page',
    '從本頁開始下載-num-頁',
  ],
  _下载所有页面: [
    '下载所有页面',
    'すべてのページをダウンロードする',
    'download all pages',
    '下載所有頁面',
  ],
  _下载x个相关作品: [
    '下载 -num- 个相关作品',
    '関連作品 -num- 枚をダウンロードする。',
    'download -num- related works.',
    '下載 -num- 個相關作品',
  ],
  _下载所有相关作品: [
    '下载所有相关作品',
    '関連作品をすべてダウンロードする。',
    'download all related works.',
    '下載所有相關作品',
  ],
  _下载推荐作品: [
    '下载推荐作品',
    'お勧め作品をダウンロードする',
    'download recommend works',
    '下載推薦作品',
  ],
  _下载排行榜前x个作品: [
    '下载排行榜前 -num- 个作品',
    'ランク前 -num- 位の作品をダウンロードする。',
    'download the top -num- works in the ranking list',
    '下載排行榜前 -num- 個作品',
  ],
  _输入超过了最大值: [
    '您输入的数字超过了最大值',
    '入力した番号が最大値を超えています',
    'The number you entered exceeds the maximum',
    '輸入的數字超出最大值',
  ],
  _任务开始1: [
    '从本页开始下载{}页',
    'このページから {} ページをダウンロードする',
    'download {} pages from this page',
    '從本頁開始下載 {} 頁',
  ],
  _任务开始0: ['任务开始', 'タスクが開始されます', 'Task starts', '工作開始'],
  _checkNotdownTypeAll: [
    '由于您排除了所有作品类型，本次任务已取消。',
    'すべての種類の作品を除外したため、タスクはキャンセルされました。',
    'Because you excluded all types of work, the task was canceled.',
    '由於排除了所有作品類型，本次工作已取消。',
  ],
  _checkNotdownTypeResult: [
    '排除作品类型：',
    'これらのタイプの作品を除外します：',
    'Excludes these types of works: ',
    '排除作品類型：',
  ],
  _多图作品: [
    '多图作品',
    'マルチイメージ作品',
    'Multi-image works',
    '多圖作品',
  ],
  _多图下载设置: [
    '多图下载设置',
    'マルチイメージ設定',
    'Download multi-image works',
    '多圖下載設定',
  ],
  _怎样下载多图作品: [
    '怎样下载多图作品？',
    'どのようにマルチイメージ作品をダウンロードしますか？',
    'How to download multi-image works?',
    '如何下載多圖作品？',
  ],
  _多图建立目录: [
    '多图建立目录',
    'マルチイメージにフォルダを作成',
    'Create directory for multi-image works',
    '多圖建立目錄',
  ],
  _多图建立目录提示: [
    '当你下载多图作品时，下载器可以自动创建一个目录，保存里面的图片。',
    'マルチイメージをダウンロードする時、自動的にフォルダを作成し、イメージをその中で保存することができます。',
    'When you download a multi-image work, the downloader can automatically create a directory and save the images inside.',
    '當下載多圖作品時，下載器可以自動建立一個目錄，儲存裡面的圖片。',
  ],
  _不下载: ['不下载', '必要なし', 'No', '不下載'],
  _全部下载: ['全部下载', '全部ダウンロード', 'Yes', '全部下載'],
  _下载前几张图片: [
    '下载前几张图片：',
    '最初のいくつかの画像：',
    'First few images:',
    '下載前幾張圖片：',
  ],
  _不下载多图作品: [
    '不下载多图作品',
    'マルチイメージ作品をダウンロードしない',
    'Do not download multi-image works',
    '不下載多圖作品',
  ],
  _多图作品下载前n张图片: [
    '多图作品下载前 {} 张图片',
    'マルチイメージ作品は、最初の {} イメージをダウンロードします',
    'Multi-image works download the first {} images',
    '多圖作品下載前 {} 張圖片',
  ],
  _插画: ['插画 ', 'イラスト', 'Illustrations', '插畫 '],
  _漫画: ['漫画 ', '漫画', 'Manga', '漫畫 '],
  _动图: ['动图 ', 'うごイラ', 'Ugoira', '動圖 '],
  _动图保存格式: [
    '动图保存格式',
    'うごイラをどのタイプが保存するか',
    'Save the ugoira work as',
    '動圖儲存格式',
  ],
  _动图保存格式title: [
    '下载动图时，可以把它转换成视频文件',
    'うごイラをダウンロードするとき、動画に変換することができます。',
    'When you download a ugoira work, you can convert it to a video file.',
    '下載動圖時，可以將它轉換為影片檔案。',
  ],
  _webmVideo: ['WebM 视频', 'WebM ビデオ', 'WebM video', '影片（WebM）'],
  _gif: ['GIF 图片', 'GIF 画像', 'GIF picture', '圖片（GIF）'],
  _zipFile: ['Zip 文件', 'ZIP ファイル', 'Zip file', '壓縮檔（Zip）'],
  _当前作品个数: [
    '当前有 {} 个作品 ',
    '今は　{}　枚の作品があります ',
    'There are now {} works ',
    '目前有 {} 個作品 ',
  ],
  _当前有x个用户: [
    '当前有 {} 个用户 ',
    '現在 {} 人のユーザーがいます ',
    'There are currently {} users ',
    '目前有 {} 個使用者 ',
  ],
  _排行榜进度: [
    '已抓取本页面第{}部分',
    'このページの第　{}　部がクロールされました',
    'Part {} of this page has been crawled',
    '已擷取本頁面第 {} 部分',
  ],
  _新作品进度: [
    '已抓取本页面 {} 个作品',
    'このページの {} つの作品をクロールしました',
    'This page has been crawled {} works',
    '已擷取本頁面 {} 個作品',
  ],
  _抓取多少个作品: [
    '抓取本页面 {} 个作品',
    'このページの {} つの作品をクロールします',
    'Crawl this page {} works',
    '擷取本頁面 {} 個作品',
  ],
  _相关作品抓取完毕: [
    '相关作品抓取完毕。包含有{}个作品，开始获取作品信息。',
    '関連作品はクロールされました。 {} 作品を含み、その作品に関する情報の取得を開始します。',
    'The related works have been crawled. Contains {} works and starts getting information about the work.',
    '相關作品擷取完畢。包含有 {} 個作品，開始取得作品資訊。',
  ],
  _排行榜任务完成: [
    '本页面抓取完毕。<br>当前有{}个作品，开始获取作品信息。',
    'このページのクロール終了。<br>{}枚の作品があります。 作品情報の取得を開始します。',
    'This page is crawled and now has {} works.<br> Start getting the works for more information.',
    '本頁面擷取完畢。<br>目前有 {} 個作品，開始取得作品資訊。',
  ],
  _列表页抓取进度: [
    '已抓取列表页{}个页面',
    '{} のリストページを取得しました',
    'Has acquired {} list pages',
    '已擷取清單頁 {} 個頁面',
  ],
  _列表页抓取完成: [
    '列表页面抓取完成，开始获取图片网址',
    'リストページがクロールされ、画像 URL の取得が開始されます',
    'The list page is crawled and starts to get the image URL',
    '清單頁面擷取完成，開始取得圖片網址',
  ],
  _抓取结果为零: [
    '抓取完毕，但没有找到符合筛选条件的作品。',
    'クロールは終了しましたが、フィルタ条件に一致する作品が見つかりませんでした。',
    'Crawl finished but did not find works that match the filter criteria.',
    '擷取完畢，但沒有找到符合篩選條件的作品。',
  ],
  _当前任务尚未完成: [
    '当前任务尚未完成',
    '現在のタスクはまだ完了していません',
    'The current task has not yet been completed',
    '目前工作尚未完成',
  ],
  _当前任务尚未完成2: [
    '当前任务尚未完成，请等待完成后再下载。',
    '現在のタスクはまだ完了していません、完了するまでお待ちください',
    'The current task has not yet been completed',
    '目前工作尚未完成，請等待完成後再下載。',
  ],
  _列表抓取完成开始获取作品页: [
    '当前列表中有{}张作品，开始获取作品信息',
    '{} 枚の作品があります。 作品情報の取得を開始します。',
    'Now has {} works. Start getting the works for more information.',
    '目前清單中有 {} 張作品，開始取得作品資訊',
  ],
  _开始获取作品页面: [
    '开始获取作品页面',
    '作品ページの取得を開始する',
    'Start getting the works page',
    '開始取得作品頁面',
  ],
  _无权访问2: [
    '无权访问 {}，跳过该作品。',
    '{} のアクセス権限がありません、作品を無視する。',
    'No access {}, skip.',
    '沒有權限存取 {}，跳過該作品。',
  ],
  _作品页状态码0: [
    '请求的url不可访问',
    '要求された URL にアクセスできません',
    'The requested url is not accessible',
    '要求的 url 無法存取',
  ],
  _作品页状态码400: [
    '该作品已被删除',
    '作品は削除されました',
    'The work has been deleted',
    '該作品已被刪除',
  ],
  _作品页状态码403: [
    '无权访问请求的url 403',
    'リクエストされた url にアクセスできない 403',
    'Have no access to the requested url 403',
    '沒有權限存取要求的 url 403',
  ],
  _作品页状态码404: [
    '404 not found',
    '404 not found',
    '404 not found',
    '404 not found',
  ],
  _抓取的文件数量: [
    '已获取 {} 个文件网址',
    '5つのファイルURLを取得する',
    'Get {} file URLs',
    '已取得 {} 個檔案網址',
  ],
  _正在抓取: [
    '正在抓取，请等待……',
    'クロール中、しばらくお待ちください...',
    'Getting, please wait...',
    '擷取中，請稍後……',
  ],
  _获取全部书签作品: [
    '获取全部书签作品，时间可能比较长，请耐心等待。',
    'ブックマークしたすべての作品を取得すると、時間がかかることがあります。お待ちください。',
    'Get all bookmarked works, the time may be longer, please wait.',
    '取得全部書籤作品，時間可能比較長，請耐心等待。',
  ],
  _抓取图片网址遇到中断: [
    '当前任务已中断!',
    '現在のタスクが中断されました。',
    'The current task has been interrupted.',
    '目前工作已中斷！',
  ],
  _关闭: ['关闭', 'クローズ', 'close', '關閉'],
  _输出信息: ['输出信息', '出力情報', 'Output information', '輸出資訊'],
  _复制: ['复制', 'コピー', 'Copy', '複製'],
  _已复制到剪贴板: [
    '已复制到剪贴板，可直接粘贴',
    'クリップボードにコピーされました',
    'Has been copied to the clipboard',
    '已複製至剪貼簿，可直接貼上',
  ],
  _下载设置: ['下载设置', 'ダウンロード設定', 'Download settings', '下載設定'],
  _收起展开设置项: [
    '收起/展开设置项',
    '設定の折りたたみ/展開',
    'Collapse/expand settings',
    '摺疊/展開設定項目',
  ],
  _github: [
    'Github 页面，欢迎 star',
    'Github のページ、star をクリックしてください',
    'Github page, if you like, please star it',
    'Github 頁面，歡迎 star',
  ],
  _wiki: ['使用手册', 'マニュアル', 'Wiki', 'Wiki'],
  _快捷键切换显示隐藏: [
    '使用 Alt + X，可以显示和隐藏下载面板',
    'Alt + X を使用してダウンロードパネルを表示および非表示にする',
    'Use Alt + X to show and hide the download panel',
    'Alt + X 可以顯示或隱藏下載面板。',
  ],
  _共抓取到n个文件: [
    '共抓取到 {} 个文件',
    '合計 {} つのファイルがあります',
    'Crawl a total of {} files',
    '共擷取到 {} 個檔案',
  ],
  _设置文件名: [
    '设置命名规则',
    '命名規則を設定する',
    'Set naming rules',
    '設定命名規則',
  ],
  _设置文件夹名的提示: [
    `可以使用 '/' 建立文件夹<br>示例：{p_title}/{user}/{id}`,
    `フォルダーは '/' で作成できます<br>例：{p_title}/{user}/{id}`,
    `You can create a directory with '/'<br>Example：{p_title}/{user}/{id}`,
    `可以使用斜線（/）建立資料夾。<br>範例：{p_title}/{user}/{id}`,
  ],
  _添加命名标记前缀: [
    '添加命名标记前缀',
    '前に tag の名前を追加',
    'Add named tag prefix',
    '加入命名標記前綴',
  ],
  _添加字段名称提示: [
    '例如，在用户名前面添加“user_”标记',
    'たとえば、ユーザー名の前に 「user_」 tag を追加します。',
    'For example, add the "user_" tag in front of the username',
    '例如，在使用者名稱前面加入「user_」標記。',
  ],
  _查看标记的含义: [
    '查看标记的含义',
    ' tag の意味を表示する',
    'View the meaning of the tag',
    '檢視標記的意義',
  ],
  _命名标记id: [
    '默认文件名，如 44920385_p0',
    'デフォルトのファイル名，例 44920385_p0',
    'Default file name, for example 44920385_p0',
    '預設檔案名稱，例如：44920385_p0。',
  ],
  _命名标记title: ['作品标题', '作品のタイトル', 'works title', '作品標題'],
  _命名标记tags: [
    '作品的 tag 列表',
    '作品の tags',
    'The tags of the work',
    '作品的 tag 清單',
  ],
  _命名标记user: ['画师名字', 'アーティスト名', 'Artist name', '畫師名稱'],
  _命名标记userid: ['画师 id', 'アーティスト ID', 'Artist id', '畫師 id'],
  _命名标记px: ['宽度和高度', '幅と高さ', 'width and height', '寬度和高度'],
  _命名标记bmk: [
    'bookmark-count，作品的收藏数。把它放在最前面可以让文件按收藏数排序。',
    'bookmark-count，作品のボックマークの数、前に追加することでボックマーク数で并べることができます。',
    'bookmark-count, bookmarks number of works.',
    'bookmark-count，作品的收藏數。將它放在最前面可以讓檔案依收藏數排序。',
  ],
  _命名标记id_num: [
    '数字 id，如 44920385',
    '44920385 などの番号 ID',
    'Number id, for example 44920385',
    '數字 id，例如：44920385。',
  ],
  _命名标记p_num: [
    '图片在作品内的序号，如 0、1、2 …… 每个作品都会重新计数。',
    '0、1、2 など、作品の画像のシリアル番号。各ピースは再集計されます。',
    'The serial number of the picture in the work, such as 0, 1, 2 ... Each work will be recounted.',
    '圖片在作品內的序號，例如：0、1、2……每個作品都將重新計數。',
  ],
  _命名标记tags_trans: [
    '作品的 tag 列表，附带翻译后的 tag（如果有）',
    '作品の tag リスト、翻訳付き tag (あれば)',
    'The tags of the work, with the translated tag (if any)',
    '作品的 tag 清單，包含翻譯後的 tag（如果有的話）。',
  ],
  _命名标记date: [
    '作品的创建日期，格式为 yyyy-MM-dd。如 2019-08-29',
    '作品の作成日は yyyy-MM-dd の形式でした。 2019-08-29 など',
    'The date the creation of the work was in the format yyyy-MM-dd. Such as 2019-08-29',
    '作品的建立日期，格式為 yyyy-MM-dd，例如：2019-08-29。',
  ],
  _命名标记rank: [
    '作品在排行榜中的排名。如 #1、#2 …… 只能在排行榜页面中使用。',
    '作品のランキング。例え　#1、#2 …… ランキングページのみで使用できます。',
    'The ranking of the work in the ranking pages. Such as #1, #2 ... Can only be used in ranking pages.',
    '作品在排行榜中的排名。例如：#1、#2……只能在排行榜頁面中使用。',
  ],
  _命名标记type: [
    '作品类型，分为 illustration、manga、ugoira、novel',
    '作品分類は、illustration、manga、ugoira、novel',
    'The type of work, divided into illustration, manga, ugoira, novel',
    '作品類型，分為 illustration、manga、ugoira、novel。',
  ],
  _命名标记提醒: [
    '您可以使用多个标记；建议在不同标记之间添加分割用的字符。示例：{id}-{userid}<br>一定要包含 {id} 或者 {id_num}。<br>* 在某些情况下，会有一些标记不可用。',
    '複数のタグを使用することができます；異なるタグ間の分割のために文字を追加することをお勧めします。例：{id}-{userid}<br>必ず{id}または{id_num}を含めてください。<br>* 場合によっては、一部の tag が利用できず。',
    'You can use multiple tags, and you can add a separate character between different tags. Example: {id}-{userid}<br>Be sure to include {id} or {id_num}.<br>* In some cases, some tags will not be available.',
    '可以使用多個標記；建議在不同標記之間加入分隔用的字元。範例：{id}-{userid}<br>一定要包含 {id} 或者 {id_num}。<br>＊某些情況下有些標記無法使用。',
  ],
  _文件夹标记PTag: [
    '当前页面的 tag。当前页面没有 tag 时不可用。',
    '現在のページの tag。現在のページの tag がないときは使用できません。',
    'The tag of the current page. Not available if the current page has no tag.',
    '目前頁面的 tag。目前頁面沒有 tag 時無法使用。',
  ],
  _命名标记seriesTitle: [
    '系列标题（可能为空）',
    'シリーズタイトル（あれば）',
    'Series title (may be empty)',
    '系列標題（可能為空）',
  ],
  _命名标记seriesOrder: [
    '作品在系列中的序号，如 #1 #2',
    'シリーズの中の作品の番号，例え #1 #2',
    'The number of the work in the series, such as #1 #2',
    '作品在系列中的編號，如 #1 #2',
  ],
  _文件夹标记PTitle: [
    '当前页面的标题',
    'ページのタイトル',
    'The title of this page',
    '目前頁面的標題',
  ],
  _预览文件名: [
    '预览文件名',
    'ファイル名のプレビュー',
    'Preview file name',
    '預覽檔案名稱',
  ],
  _设置下载线程: [
    '设置下载线程',
    'ダウンロードスレッドを設定する',
    'Set the download thread',
    '設定下載執行緒',
  ],
  _线程数字: [
    '可以输入 1-5 之间的数字，设置同时下载的数量',
    '同時ダウンロード数を設定、1-5 の数値を入力してください',
    'You can type a number between 1-5 to set the number of concurrent downloads',
    '可以輸入 1-5 之間的數字，設定同時下載的數量。',
  ],
  _下载按钮1: ['开始下载', 'ダウンロードを開始', 'start download', '開始下載'],
  _下载按钮2: [
    '暂停下载',
    'ダウンロードを一時停止',
    'pause download',
    '暫停下載',
  ],
  _下载按钮3: ['停止下载', 'ダウンロードを停止', 'stop download', '停止下載'],
  _复制url: ['复制 url', 'URL をコピー', 'copy urls', '複製下載網址'],
  _当前状态: ['当前状态 ', '現在の状態 ', 'State ', '目前狀態：'],
  _未开始下载: [
    '未开始下载',
    'まだダウンロードを開始していません',
    'Not yet started downloading',
    '未開始下載',
  ],
  _下载进度: [
    '下载进度：',
    'ダウンロードの進行状況：',
    'Total progress: ',
    '下載進度：',
  ],
  _下载线程: ['下载线程：', 'スレッド：', 'Thread: ', '下載執行緒：'],
  _常见问题: ['常见问题', 'よくある質問', 'Help', '常見問題'],
  _uuid: [
    '如果下载后的文件名异常，请禁用其他有下载功能的浏览器扩展。',
    'ダウンロード後のファイル名が異常な場合は、ダウンロード機能を持つ他のブラウザ拡張機能を無効にしてください。',
    'If the file name after downloading is abnormal, disable other browser extensions that have download capabilities.',
    '如果下載後的檔案名稱異常，請停用其他有下載功能的瀏覽器擴充功能。',
  ],
  _下载说明: [
    "下载的文件保存在浏览器的下载目录里。<br>请不要在浏览器的下载选项里选中'总是询问每个文件的保存位置'。<br><b>如果下载后的文件名异常，请禁用其他有下载功能的浏览器扩展。</b><br>QQ群：675174717",
    'ダウンロードしたファイルは、ブラウザのダウンロードディレクトリに保存されます。<br><b>ダウンロード後のファイル名が異常な場合は、ダウンロード機能を持つ他のブラウザ拡張機能を無効にしてください。</b>',
    'The downloaded file is saved in the browser`s download directory. <br><b>If the file name after downloading is abnormal, disable other browser extensions that have download capabilities.</b>',
    '下載的檔案儲存在瀏覽器的下載目錄裡。<br>請不要在瀏覽器的下載選項裡選取「下載每個檔案前先詢問儲存位置」。<br><b>如果下載後的檔名異常，請停用其他有下載功能的瀏覽器擴充功能。</b><br>QQ 群：675174717',
  ],
  _正在下载中: ['正在下载中', 'ダウンロード中', 'Downloading', '正在下載'],
  _下载完毕: [
    '✓ 下载完毕!',
    '✓ ダウンロードが完了しました',
    '✓ Download finished',
    '✓ 下載完畢！',
  ],
  _已暂停: [
    '下载已暂停',
    'ダウンロードは一時停止中です',
    'Download is paused',
    '下載已暫停',
  ],
  _已停止: [
    '下载已停止',
    'ダウンロードが停止しました',
    'Download stopped',
    '下載已停止',
  ],
  _已下载: ['已下载', 'downloaded', 'downloaded', '已下載'],
  _抓取完毕: [
    '抓取完毕！',
    'クロールが終了しました！',
    'Crawl finished!',
    '擷取完畢！',
  ],
  _快速下载本页: [
    '快速下载本页作品',
    'この作品をすばやくダウンロードする',
    'Download this work quickly',
    '快速下載本頁作品',
  ],
  _从本页开始抓取new: [
    '从本页开始抓取新作品',
    'このページから新しい作品を入手する',
    'Crawl the new works from this page',
    '從本頁開始擷取新作品',
  ],
  _从本页开始抓取old: [
    '从本页开始抓取旧作品',
    'このページから古い作品を入手する',
    'Crawl the old works from this page',
    '從本頁開始擷取舊作品',
  ],
  _抓取推荐作品: [
    '抓取推荐作品',
    '推奨作品をダウンロードする',
    'Crawl the recommend works',
    '擷取推薦作品',
  ],
  _抓取推荐作品Title: [
    '抓取页面底部的的推荐作品',
    'ページの下部で推奨作品をクロールします',
    'Crawl the recommended works at the bottom of the page',
    '擷取頁面底部的推薦作品。',
  ],
  _抓取相关作品: [
    '抓取相关作品',
    '関連作品をダウンロードする',
    'Crawl the related works',
    '擷取相關作品',
  ],
  _相关作品大于0: [
    ' （下载相关作品必须大于 0）',
    ' 「ダウンロードする関連作品の数は0より大きくなければならない」',
    '  (Download related works must be greater than 0)',
    ' （下載相關作品必須大於 0）',
  ],
  _默认下载多页: [
    ', 如有多页，默认会下载全部。',
    '、複数のページがある場合、デフォルトですべてをダウンロードされます。',
    ', If there are multiple pages, the default will be downloaded.',
    '，如有多頁，預設會下載全部。',
  ],
  _调整完毕: [
    '调整完毕，当前有{}个作品。',
    '調整が完了し、今、{} の作品があります。',
    'The adjustment is complete and now has {} works.',
    '調整完畢，目前有 {} 個作品。',
  ],
  _抓取当前作品: [
    '抓取当前作品',
    '現在の作品をクロールする',
    'Crawl the current work',
    '擷取目前作品',
  ],
  _抓取当前作品Title: [
    '抓取当前列表里的所有作品',
    '現在のリスト内のすべての作品をクロールする',
    'Crawl all the works in the current list',
    '擷取目前清單裡的所有作品',
  ],
  _清除多图作品: [
    '清除多图作品',
    '複数の作品を削除する',
    'Remove multi-drawing works',
    '清除多圖作品',
  ],
  _清除多图作品Title: [
    '如果不需要可以清除多图作品',
    '必要がない場合は、複数のグラフを削除することができます',
    'If you do not need it, you can delete multiple graphs',
    '如果不需要可以清除多圖作品。',
  ],
  _清除动图作品: [
    '清除动图作品',
    'うごイラ作品を削除する',
    'Remove ugoira work',
    '清除動圖作品',
  ],
  _清除动图作品Title: [
    '如果不需要可以清除动图作品',
    '必要がない場合は、うごイラを削除することができます',
    'If you do not need it, you can delete the ugoira work',
    '如果不需要可以清除動圖作品。',
  ],
  _手动删除作品: [
    '手动删除作品',
    '作品を手動で削除する',
    'Manually delete the work',
    '手動刪除作品',
  ],
  _手动删除作品Title: [
    '可以在下载前手动删除不需要的作品',
    'ダウンロードする前に不要な作品を手動で削除することができます',
    'You can manually delete unwanted work before downloading',
    '可以在下載前手動刪除不需要的作品，點擊作品刪除。',
  ],
  _退出手动删除: [
    '退出手动删除',
    '削除モードを終了する',
    'Exit manually delete',
    '結束手動刪除',
  ],
  _抓取本页作品: [
    '抓取本页作品',
    'このページをクロールする',
    'Crawl this page works',
    '擷取本頁作品',
  ],
  _抓取本页作品Title: [
    '抓取本页列表中的所有作品',
    'このページの全ての作品をクロールする',
    'Crawl this page works',
    '擷取本頁清單中的所有作品',
  ],
  _抓取本排行榜作品: [
    '抓取本排行榜作品',
    'このリストの作品をクロールする',
    'Crawl the works in this list',
    '擷取本排行榜作品',
  ],
  _抓取本排行榜作品Title: [
    '抓取本排行榜的所有作品，包括现在尚未加载出来的。',
    'まだ読み込まれていないものを含めて、このリストの作品をダウンロードする',
    'Crawl all of the works in this list, including those that are not yet loaded.',
    '擷取本排行榜的所有作品，包括現在尚未載入出來的。',
  ],
  _抓取首次登场的作品: [
    '抓取首次登场作品',
    '初登場作品をダウンロードする',
    'Crawl the debut works',
    '擷取首次登場作品',
  ],
  _抓取首次登场的作品Title: [
    '只下载首次登场的作品',
    '初登場作品のみダウンロードします',
    'Download only debut works',
    '只下載首次登場的作品',
  ],
  _抓取该页面的图片: [
    '抓取该页面的图片',
    'ページの画像をクロールする',
    'Crawl the picture of the page',
    '擷取該頁面的圖片',
  ],
  _抓取相似图片: [
    '抓取相似图片',
    '類似の作品をクロールする',
    'Crawl similar works',
    '擷取相似圖片',
  ],
  _想要获取多少个作品: [
    '您想要获取多少个作品？',
    'いくつの作品をダウンロードしたいですか？',
    'How many works do you want to download?',
    '想要取得多少個作品？',
  ],
  _数字提示1: [
    '-1, 或者大于 0',
    '-1、または 0 より大きい',
    '-1, or greater than 0',
    '-1 或是大於 0',
  ],
  _下载大家的新作品: [
    '下载大家的新作品',
    'みんなの新作をダウンロードする',
    'Download everyone`s new work',
    '下載大家的新作品',
  ],
  _屏蔽设定: ['屏蔽設定', 'ミュート設定', 'Mute settings', '封鎖設定'],
  _举报: ['举报', '報告', 'Report', '回報'],
  _输入id进行抓取: [
    '输入id进行抓取',
    'idを入力してダウンロードする',
    'Enter id to fetch',
    '輸入 id 進行擷取',
  ],
  _输入id进行抓取的提示文字: [
    '请输入作品id。如果有多个id，则以换行分割（即每行一个id）',
    'イラストレーターIDを入力してください。 複数の id がある場合は、1 行に 1 つの id を付けます。',
    'Please type the illustration id. If there is more than one id, one id per line.',
    '請輸入作品 id。如果有多個 id，則以換行分隔（即每行一個 id）。',
  ],
  _开始抓取: ['开始抓取', 'クロールを開始する', 'Start crawling', '開始擷取'],
  _添加tag: [
    '给未分类作品添加 tag',
    '未分類の作品に tag を追加',
    'Add tag to unclassified work',
    '幫未分類的作品加入 tag',
  ],
  _id不合法: [
    'id不合法，操作取消。',
    'id が不正な、操作はキャンセルされます。',
    'id is illegal, the operation is canceled.',
    'id 不合法，動作取消。',
  ],
  _快速收藏: [
    '快速收藏',
    'クイックブックマーク',
    'Quick bookmarks',
    '快速收藏',
  ],
  _启用: ['启用', '有効にする', 'Enable', '啟用'],
  _自动开始下载: [
    '自动开始下载',
    'ダウンロードは自動的に開始されます',
    'Download starts automatically',
    '自動開始下載',
  ],
  _快速下载的提示: [
    '当“开始下载”状态可用时，自动开始下载，不需要点击下载按钮。',
    '「ダウンロードを開始する」ステータスが利用可能になると、ダウンロードは自動的に開始され、ダウンロードボタンをクリックする必要はありません。',
    'When the &quot;Start Downloa&quot; status is available, the download starts automatically and no need to click the download button.',
    '當可下載時自動開始下載，不需要點選下載按鈕。',
  ],
  _转换任务提示: [
    '正在转换 {} 个文件',
    '{} ファイルの変換',
    'Converting {} files',
    '正在轉換 {} 個檔案',
  ],
  _最近更新: ['最近更新', '最近更新する', 'What`s new', '最近更新'],
  _确定: ['确定', '確定', 'Ok', '確定'],
  _file404: [
    '404 错误：文件 {} 不存在。',
    '404 エラー：ファイル {} は存在しません。',
    '404 error: File {} does not exist.',
    '404 錯誤：檔案 {} 不存在。',
  ],
  _文件下载失败: [
    '文件 {} 下载失败',
    'ファイル {} のダウンロードを失敗しました',
    'File {} download failed',
    '檔案 {} 下載失敗',
  ],
  _重置设置: ['重置设置', 'リセット設定', 'Reset Settings', '重設設定'],
  _是否重置设置: [
    '是否重置设置？',
    '設定をリセットしますか？',
    'Do you want to reset the settings?',
    '確定要重設設定嗎？',
  ],
  _newver: [
    '有新版本可用',
    '新しいバージョンがあります',
    'A new version is available',
    '有新版本可更新',
  ],
  _快速下载建立文件夹: [
    '快速下载时，始终创建文件夹',
    'クイックダウンロード時、常にフォルダを作成します',
    'Always create directory when downloading quickly',
    '快速下載時，始終建立資料夾',
  ],
  _快速下载建立文件夹提示: [
    '快速下载时，如果只有一张图片，也会建立文件夹',
    'すばやくダウンロードとき、イラストが一枚だけでも、フォルダも作成されます',
    'When downloading quickly, if there is only one picture, a directory is also created',
    '快速下載時，若只有一張圖片，也會建立資料夾',
  ],
  _设置id范围: [
    '设置 id 范围',
    'id 範囲を設定',
    'Set id range',
    '設定 id 範圍',
  ],
  _设置id范围提示: [
    '您可以输入一个作品 id，抓取比它新或者比它旧的作品',
    '1 つの作品 id を入力することで、それより新しいあるいは古い作品をクロールことができます',
    'You can enter a work id and crawl works that are newer or older than it',
    '可以輸入一個作品 id，擷取比它新或者比它舊的作品。',
  ],
  _大于: ['大于', 'より大きい', 'Bigger than', '大於'],
  _小于: ['小于', 'より小さい', 'Less than', '小於'],
  _设置投稿时间: [
    '设置投稿时间',
    '投稿日時を設定する',
    'Set posting date',
    '設定投稿時間',
  ],
  _设置投稿时间提示: [
    '您可以下载指定时间内发布的作品',
    '指定された時間内に配信された作品をダウンロードすることができます',
    'You can download works posted in a specified period of time',
    '可以下載指定時間內發布的作品。',
  ],
  _时间范围: ['时间范围', '時間範囲', 'Time range', '時間範圍'],
  _必须大于0: [
    '必须大于 0',
    '0 より大きくなければなりません',
    'must be greater than 0',
    '必須大於 0',
  ],
  _开始筛选: ['开始筛选', 'スクリーニング開始', 'Start screening', '開始篩選'],
  _开始筛选Title: [
    '按照设置来筛选当前 tag 里的作品。',
    '現在の tag にある作品を設定によってスクリーニングする',
    'Screen the works in the current tag.',
    '按照設定來篩選目前 tag 裡的作品。',
  ],
  _在结果中筛选: [
    '在结果中筛选',
    '結果の中からスクリーニング',
    'Screen in results',
    '在結果中篩選',
  ],
  _在结果中筛选Title: [
    '您可以改变设置，并在结果中再次筛选。',
    '設定を変えて、結果の中で再びスクリーニングすることができます。',
    'You can change the settings and screen again in the results.',
    '可以變更設定，並在結果中再次篩選。',
  ],
  _抓取筛选结果: [
    '抓取筛选结果',
    'スクリーニングの結果をクロールする',
    'Crawl the screening results',
    '擷取篩選結果',
  ],
  _尚未开始筛选: [
    '尚未开始筛选',
    'まだスクリーニングを開始していない',
    'Screening has not started',
    '尚未開始篩選',
  ],
  _没有数据可供使用: [
    '没有数据可供使用',
    '使用可能なデータはない',
    'No data is available.',
    '沒有資料可供使用',
  ],
  _预览搜索结果: [
    '预览搜索页面的筛选结果',
    '検索ページのフィルタ結果をプレビューします',
    'Preview filter results on search page',
    '預覽搜尋頁面的篩選結果',
  ],
  _预览搜索结果说明: [
    '下载器可以把符合条件的作品显示在当前页面上。如果抓取结果太多导致页面崩溃，请关闭这个功能。<br>启用预览功能时，下载器不会自动开始下载。',
    'ローダは、該当する作品を現在のページに表示することができます。クロール結果が多すぎてページが崩れる場合は、この機能をオフにしてください。<br>プレビュー機能を有効にすると、ダウンロードは自動的に開始されません。',
    'The downloader can display the qualified works on the current page. If too many crawling results cause the page to crash, turn off this feature.<br>When the preview feature is enabled, the downloader does not start downloading automatically.',
    '下載器可以將符合條件的作品顯示在目前頁面上。如果擷取結果太多導致頁面當掉，請關閉這個功能。<br>啟用預覽功能時，下載器不會自動開始下載。',
  ],
  _目录名使用: [
    '目录名使用：',
    'ディレクトリ名の使用：',
    'Folder name use: ',
    '資料夾名稱使用：',
  ],
  _命名规则: ['命名规则', '命名規則', 'Naming rule', '命名規則'],
  _启用快速收藏: [
    '启用快速收藏',
    'クイックボックマークを有効にする',
    'Enable quick bookmark',
    '開啟快速收藏',
  ],
  _启用快速收藏说明: [
    '当你点击下载器添加的收藏按钮(☆)，把作品添加到书签时，自动添加这个作品的 tag。',
    'ダウンローダーに追加されたボックマークボタン「☆」をクリックして、作品をブックマークに追加すると、自動的に作品の tag が追加されます。',
    'When you click the favorite button (☆) added by the downloader to bookmark a work, the tag of the work is automatically added.',
    '當點選下載器新增的收藏按鈕（☆），將作品加入書籤時，自動新增這個作品的 tag。',
  ],
  _新增设置项: [
    '新增设置项',
    '新たな機能を追加されました。',
    'Added setting items',
    '新增設定項目',
  ],
  _抓取: ['抓取', 'クロール', 'Crawl', '擷取'],
  _下载: ['下载', 'ダウンロード', 'Download', '下載'],
  _其他: ['其他', 'その他', 'Other', '其他'],
  _第一张图不带序号: [
    '第一张图不带序号',
    '最初のイメージの番号を削除します',
    'The first picture without a serial number',
    '第一張圖片不包含序號',
  ],
  _第一张图不带序号说明: [
    '去掉每个作品第一张图的序号。例如 80036479_p0 变成 80036479',
    '作品ごとの最初のイメージの番号を削除します。例えば 80036479_p0 は 80036479 になります。',
    'Remove the serial number of the first picture of each work. For example 80036479_p0 becomes 80036479.',
    '去掉每個作品第一張圖的序號。例如：80036479_p0 變成 80036479。',
  ],
  _最小值: ['最小值', '最小値', 'Minimum value', '最小值'],
  _最大值: ['最大值', '最大値', 'maximum value', '最大值'],
  _单图作品: [
    '单图作品',
    'シングルイメージ作品',
    'Single image works',
    '單圖作品',
  ],
  _彩色图片: ['彩色图片', 'カラーイメージ', 'Color picture', '彩色圖片'],
  _黑白图片: [
    '黑白图片',
    '白黒イメージ',
    'Black and white pictures',
    '黑白圖片',
  ],
  _不保存图片因为颜色设置: [
    '图片 {} 没有被保存，因为它的颜色不符合设定。',
    'イメージ {} は色が設定に合わないため、保存されていません。',
    'The image {} was not saved because its colors do not match the settings.',
    '圖片 {} 並未儲存，因為它的色彩不符合設定。',
  ],
  _同时转换多少个动图: [
    '同时转换多少个动图',
    '同時変換のうごイラの上限',
    'How many animations are converted at the same time',
    '同時轉換多少個動圖',
  ],
  _同时转换多少个动图警告: [
    '同时转换多个动图会增加资源占用。<br>转换动图时，请保持该标签页激活，否则浏览器会降低转换速度。',
    '複数の動画を同時に変換すると、リソースの占有が増加します。<br>うごイラを変換するときは、このタブを有効にしてください。そうしないと、ブラウザは変換速度を下げます。',
    'Converting multiple animations at the same time will increase resource consumption. <br> Please keep the tab active when converting animation, otherwise the browser will reduce the conversion speed.',
    '同時轉換多個動圖會增加資源占用。<br>轉換動圖時，請保持這個分頁啟動，否則瀏覽器會降低轉換速度。',
  ],
  _提示: ['提示', 'ヒント', 'tip', '提示'],
  _fanboxDownloader: [
    'Fanbox 下载器',
    'Fanbox ダウンロード',
    'Fanbox Downloader',
    'Fanbox 下載器',
  ],
  _不保存图片因为体积: [
    '{} 没有被保存，因为它的体积不符合设定。',
    '{} はファイルサイズが設定に合わないため、保存されていません。',
    '{} was not saved because its size do not match the settings.',
    '{} 並未儲存，因為它的大小不符合設定。',
  ],
  _文件体积限制: [
    '文件体积限制',
    'ファイルサイズ制限',
    'File size limit',
    '檔案大小限制',
  ],
  _不符合要求的文件不会被保存: [
    '不符合要求的文件不会被保存。',
    '設定 に合わないファイルは保存されません。',
    'Files that do not meet the requirements will not be saved.',
    '不符合要求的檔案不會被儲存。',
  ],
  _小说: ['小说', '小説', 'novel', '小說'],
  _抓取系列小说: [
    '抓取系列小说',
    '小説のシリーズをクロールする',
    'Crawl series of novels',
    '擷取系列小說',
  ],
  _小说保存格式: [
    '小说保存格式',
    '小説の保存形式',
    'Save the novel as',
    '小說儲存格式',
  ],
  _在小说里保存元数据: [
    '在小说里保存元数据',
    '小説の中にメタデータを保存する',
    'Save metadata in the novel',
    '將中繼資料（metadata）儲存在小說裡',
  ],
  _在小说里保存元数据提示: [
    '把作者、网址等信息保存到小說里',
    '作者やURLなどの情報をファイルの中に保存します。',
    'Save the author, url and other information in the file',
    '將作者、網址等訊息儲存到小說裡',
  ],
  _收藏本页面的所有作品: [
    '收藏本页面的所有作品',
    'この頁の全ての作品をブックマークに追加します',
    'Bookmark all works on this page',
    '收藏本頁面的所有作品',
  ],
  _输出内容太多已经为你保存到文件: [
    '因为输出内容太多，已经为您保存到文件。',
    '出力内容が多いため、txt ファイルに保存しました。',
    'Because the output is too much, it has been saved to a file.',
    '因為輸出內容太多，已經為你保存到檔案。',
  ],
  _不下载重复文件: [
    '不下载重复文件',
    '重複ファイルをダウンロードしない',
    'Don`t download duplicate files',
    '不下載重複檔案',
  ],
  _不下载重复文件的提示: [
    '下载器会保存自己的下载记录，以避免下载重复的文件。',
    'ダウンローダーは独自のダウンロード履歴を保存して、重複ファイルのダウンロードを回避する。',
    'The downloader will save its download record to avoid downloading duplicate files.',
    '下載器會儲存自己的下載記錄，以避免下載重複的檔案。',
  ],
  _策略: ['策略：', 'フィルター：', 'Strategy:', '策略：'],
  _严格: ['严格', '厳格', 'Strict', '嚴格'],
  _宽松: ['宽松', '緩い', 'Loose', '寬鬆'],
  _严格模式说明: [
    '当文件的 id 和文件名都相同时，认为是重复文件',
    'ファイルの ID とファイル名が同じ場合、重複ファイルとみなされます',
    'When the file id and file name are the same, it is considered a duplicate file',
    '當檔案 id 和檔名都相同時，認為是重複檔案',
  ],
  _宽松模式说明: [
    '只要文件的 id 相同，就认为是重复文件',
    'ファイルの ID が同じである限り、重複ファイルと見なされます',
    'As long as the id of the file is the same, it is considered a duplicate file',
    '只要檔案 id 相同，就認為是重複檔案',
  ],
  _清除下载记录: [
    '清除下载记录',
    '履歴をクリア',
    'Clear download record',
    '清除下載記錄',
  ],
  _下载记录已清除: [
    '下载记录已清除',
    'ダウンロード履歴がクリアされました',
    'Download record has been cleared',
    '已清除下載記錄',
  ],
  _跳过下载因为重复文件: [
    '检测到文件 {} 已经下载过，跳过此次下载',
    '重複ファイル {} をスキップ',
    'Skip downloading duplicate files {}',
    '偵測到檔案 {} 已經下載過，跳過此次下載。',
  ],
  _xzNew660: [
    '添加点续传功能；添加不下载重复文件的功能。',
    '「レジューム機能を追加しました；重複ファイルの除外機能を追加しました。',
    'Add breakpoint resume function; add the function not to download duplicate files.',
    '新增断點續傳功能；新增不下載重複檔案的功能。',
  ],
  _保存用户头像为图标: [
    '保存用户头像为图标',
    'プロフィール画像をアイコンとして保存',
    'Save user avatar as icon',
    '將使用者頭像另存為圖示檔案',
  ],
  _保存用户头像为图标说明: [
    '把用户头像保存为 ico 文件，可以手动设置成文件夹的图标。',
    'ユーザーのプロフィール画像を ico ファイルとして保存して、フォルダーアイコンとして設定できます。',
    'Save user avatar as icon',
    '將使用者頭像儲存為 ico 檔案，可以手動設定成資料夾圖示。',
  ],
  _正在保存抓取结果: [
    '正在保存抓取结果',
    'クロール結果を保存しています',
    'Saving crawl results',
    '正在儲存擷取結果',
  ],
  _已保存抓取结果: [
    '已保存抓取结果',
    'クロール結果を保存しました',
    'Crawl results saved',
    '已儲存擷取結果',
  ],
  _正在恢复抓取结果: [
    '正在恢复抓取结果',
    'クロール結果を再開しています',
    'Restoring crawl results',
    '正在還原擷取結果',
  ],
  _已恢复抓取结果: [
    '已恢复抓取结果',
    'クロール結果を再開しました',
    'Crawl results resumed',
    '已還原擷取結果',
  ],
}

export { langText, langTextKeys }
