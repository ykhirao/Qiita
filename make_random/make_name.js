var family = [
  {"k": "佐藤", "y": "サトウ"}, {"k": "鈴木", "y": "スズキ"}, {"k": "高橋", "y": "タカハシ"}, {"k": "田中", "y": "タナカ"}, {"k": "渡辺", "y": "ワタナベ"},
  {"k": "伊藤", "y": "イトウ"}, {"k": "山本", "y": "ヤマモト"}, {"k": "中村", "y": "ナカムラ"}, {"k": "小林", "y": "コバヤシ"}, {"k": "加藤", "y": "カトウ"},
  {"k": "吉田", "y": "ヨシダ"}, {"k": "山田", "y": "ヤマダ"}, {"k": "佐々木", "y": "ササキ"}, {"k": "山口", "y": "ヤマグチ"}, {"k": "斎藤", "y": "サイトウ"},
  {"k": "松本", "y": "マツモト"}, {"k": "井上", "y": "イノウエ"}, {"k": "木村", "y": "キムラ"}, {"k": "林", "y": "ハヤシ"}, {"k": "清水", "y": "シミズ"},
  {"k": "山崎", "y": "ヤマザキ"}, {"k": "森", "y": "モリ"}, {"k": "阿部", "y": "アベ"}, {"k": "池田", "y": "イケダ"}, {"k": "橋本", "y": "ハシモト"},
  {"k": "山下", "y": "ヤマシタ"}, {"k": "石川", "y": "イシカワ"}, {"k": "中島", "y": "ナカジマ"}, {"k": "前田", "y": "マエダ"}, {"k": "藤田", "y": "フジタ"},
  {"k": "小川", "y": "オガワ"}, {"k": "後藤", "y": "ゴトウ"}, {"k": "岡田", "y": "オカダ"}, {"k": "長谷川", "y": "ハセガワ"}, {"k": "村上", "y": "ムラカミ"},
  {"k": "近藤", "y": "コンドウ"}, {"k": "石井", "y": "イシイ"}, {"k": "斉藤", "y": "サイトウ"}, {"k": "坂本", "y": "サカモト"}, {"k": "遠藤", "y": "エンドウ"},
  {"k": "青木", "y": "アオキ"}, {"k": "藤井", "y": "フジイ"}, {"k": "西村", "y": "ニシムラ"}, {"k": "福田", "y": "フクダ"}, {"k": "太田", "y": "オオタ"},
  {"k": "三浦", "y": "ミウラ"}, {"k": "岡本", "y": "オカモト"}, {"k": "松田", "y": "マツダ"}, {"k": "中川", "y": "ナカガワ"}, {"k": "中野", "y": "ナカノ"},
  {"k": "原田", "y": "ハラダ"}, {"k": "小野", "y": "オノ"}, {"k": "田村", "y": "タムラ"}, {"k": "竹内", "y": "タケウチ"}, {"k": "金子", "y": "カネコ"},
  {"k": "藤原", "y": "フジワラ"}, {"k": "和田", "y": "ワダ"}, {"k": "中山", "y": "ナカヤマ"}, {"k": "石田", "y": "イシダ"}, {"k": "上田", "y": "ウエダ"},
  {"k": "森田", "y": "モリタ"}, {"k": "原", "y": "ハラ"}, {"k": "柴田", "y": "シバタ"}, {"k": "酒井", "y": "サカイ"}, {"k": "工藤", "y": "クドウ"},
  {"k": "横山", "y": "ヨコヤマ"}, {"k": "宮崎", "y": "ミヤザキ"}, {"k": "宮本", "y": "ミヤモト"}, {"k": "内田", "y": "ウチダ"}, {"k": "高木", "y": "タカギ"},
  {"k": "安藤", "y": "アンドウ"}, {"k": "谷口", "y": "タニグチ"}, {"k": "大野", "y": "オオノ"}, {"k": "丸山", "y": "マルヤマ"}, {"k": "今井", "y": "イマイ"},
  {"k": "高田", "y": "タカダ"}, {"k": "藤本", "y": "フジモト"}, {"k": "武田", "y": "タケダ"}, {"k": "村田", "y": "ムラタ"}, {"k": "上野", "y": "ウエノ"},
  {"k": "杉山", "y": "スギヤマ"}, {"k": "増田", "y": "マスダ"}, {"k": "平野", "y": "ヒラノ"}, {"k": "大塚", "y": "オオツカ"}, {"k": "千葉", "y": "チバ"},
  {"k": "久保", "y": "クボ"}, {"k": "松井", "y": "マツイ"}, {"k": "小島", "y": "コジマ"}, {"k": "岩崎", "y": "イワサキ"}, {"k": "桜井", "y": "サクライ"},
  {"k": "野口", "y": "ノグチ"}, {"k": "松尾", "y": "マツオ"}, {"k": "野村", "y": "ノムラ"}, {"k": "木下", "y": "キノシタ"}, {"k": "菊地", "y": "キクチ"},
  {"k": "佐野", "y": "サノ"}, {"k": "大西", "y": "オオニシ"}, {"k": "杉本", "y": "スギモト"}, {"k": "新井", "y": "アライ"}, {"k": "浜田", "y": "ハマダ"},
  {"k": "菅原", "y": "スガワラ"}, {"k": "市川", "y": "イチカワ"}, {"k": "古川", "y": "フルカワ"}, {"k": "水野", "y": "ミズノ"}, {"k": "小松", "y": "コマツ"},
  {"k": "島田", "y": "シマダ"}, {"k": "小山", "y": "コヤマ"}, {"k": "高野", "y": "タカノ"}, {"k": "西田", "y": "ニシダ"}, {"k": "菊池", "y": "キクチ"},
  {"k": "山内", "y": "ヤマウチ"}, {"k": "西川", "y": "ニシカワ"}, {"k": "五十嵐", "y": "イガラシ"}, {"k": "北村", "y": "キタムラ"}, {"k": "安田", "y": "ヤスダ"},
  {"k": "中田", "y": "ナカタ"}, {"k": "川口", "y": "カワグチ"}, {"k": "平田", "y": "ヒラタ"}, {"k": "川崎", "y": "カワサキ"}, {"k": "飯田", "y": "イイダ"},
  {"k": "吉川", "y": "ヨシカワ"}, {"k": "本田", "y": "ホンダ"}, {"k": "久保田", "y": "クボタ"}, {"k": "沢田", "y": "サワダ"}, {"k": "辻", "y": "ツジ"},
  {"k": "関", "y": "セキ"}, {"k": "吉村", "y": "ヨシムラ"}, {"k": "渡部", "y": "ワタナベ"}, {"k": "岩田", "y": "イワタ"}, {"k": "中西", "y": "ナカニシ"},
  {"k": "服部", "y": "ハットリ"}, {"k": "樋口", "y": "ヒグチ"}, {"k": "福島", "y": "フクシマ"}, {"k": "川上", "y": "カワカミ"}, {"k": "永井", "y": "ナガイ"},
  {"k": "松岡", "y": "マツオカ"}, {"k": "田口", "y": "タグチ"}, {"k": "山中", "y": "ヤマナカ"}, {"k": "森本", "y": "モリモト"}, {"k": "土屋", "y": "ツチヤ"},
  {"k": "矢野", "y": "ヤノ"}, {"k": "広瀬", "y": "ヒロセ"}, {"k": "小沢", "y": "オザワ"}, {"k": "秋山", "y": "アキヤマ"}, {"k": "石原", "y": "イシハラ"},
  {"k": "松下", "y": "マツシタ"}, {"k": "馬場", "y": "ババ"}, {"k": "大橋", "y": "オオハシ"}, {"k": "松浦", "y": "マツウラ"}, {"k": "吉岡", "y": "ヨシオカ"},
  {"k": "小池", "y": "コイケ"}, {"k": "浅野", "y": "アサノ"}, {"k": "荒木", "y": "アラキ"}, {"k": "大久保", "y": "オオクボ"}, {"k": "野田", "y": "ノダ"},
  {"k": "熊谷", "y": "クマガイ"}, {"k": "田辺", "y": "タナベ"}, {"k": "川村", "y": "カワムラ"}, {"k": "星野", "y": "ホシノ"}, {"k": "黒田", "y": "クロダ"},
  {"k": "堀", "y": "ホリ"}, {"k": "尾崎", "y": "オザキ"}, {"k": "望月", "y": "モチヅキ"}, {"k": "永田", "y": "ナガタ"}, {"k": "大谷", "y": "オオタニ"},
  {"k": "内藤", "y": "ナイトウ"}, {"k": "松村", "y": "マツムラ"}, {"k": "西山", "y": "ニシヤマ"}, {"k": "平井", "y": "ヒライ"}, {"k": "大島", "y": "オオシマ"},
  {"k": "岩本", "y": "イワモト"}, {"k": "片山", "y": "カタヤマ"}, {"k": "本間", "y": "ホンマ"}, {"k": "早川", "y": "ハヤカワ"}, {"k": "横田", "y": "ヨコタ"},
  {"k": "岡崎", "y": "オカザキ"}, {"k": "荒井", "y": "アライ"}, {"k": "大石", "y": "オオイシ"}, {"k": "鎌田", "y": "カマタ"}, {"k": "成田", "y": "ナリタ"},
  {"k": "宮田", "y": "ミヤタ"}, {"k": "小田", "y": "オダ"}, {"k": "石橋", "y": "イシバシ"}, {"k": "河野", "y": "コウノ"}, {"k": "篠原", "y": "シノハラ"},
  {"k": "須藤", "y": "ストウ"}, {"k": "高山", "y": "タカヤマ"}, {"k": "大沢", "y": "オオサワ"}, {"k": "小西", "y": "コニシ"}, {"k": "南", "y": "ミナミ"},
  {"k": "栗原", "y": "クリハラ"}, {"k": "伊東", "y": "イトウ"}, {"k": "松原", "y": "マツバラ"}, {"k": "三宅", "y": "ミヤケ"}, {"k": "福井", "y": "フクイ"},
  {"k": "大森", "y": "オオモリ"}, {"k": "奥村", "y": "オクムラ"}, {"k": "岡", "y": "オカ"}, {"k": "内山", "y": "ウチヤマ"}, {"k": "片岡", "y": "カタオカ"}
];

var man = [
  {"k": "蓮", "y": "レン"}, {"k": "雄大", "y": "ユウダイ"}, {"k": "湊", "y": "ミナト"}, {"k": "誠", "y": "マコト"}, {"k": "翔", "y": "ショウ"},
  {"k": "翔太", "y": "ショウタ"}, {"k": "新", "y": "アラタ"}, {"k": "樹", "y": "イツキ"}, {"k": "悠真", "y": "ユウマ"}, {"k": "設計", "y": "セッケイ"},
  {"k": "颯太", "y": "ソウタ"}, {"k": "陸", "y": "リク"}, {"k": "葵", "y": "アオイ"}, {"k": "大和", "y": "ヤマト"}, {"k": "直樹", "y": "ナオキ"},
  {"k": "瑛太", "y": "エイタ"}, {"k": "建設", "y": "ケンセツ"}, {"k": "大輔", "y": "ダイスケ"}, {"k": "翼", "y": "ツバサ"}, {"k": "匠", "y": "タクミ"},
  {"k": "諒", "y": "リョウ"}, {"k": "健太", "y": "ケンタ"}, {"k": "圭", "y": "ケイ"}, {"k": "達也", "y": "タツヤ"}, {"k": "大地", "y": "ダイチ"},
  {"k": "太一", "y": "タイチ"}, {"k": "颯真", "y": "ソウマ"}, {"k": "旭", "y": "アサヒ"}, {"k": "伊織", "y": "イオリ"}, {"k": "慶", "y": "ケイ"},
  {"k": "司", "y": "ツカサ"}, {"k": "拓也", "y": "タクヤ"}, {"k": "朝陽", "y": "アサヒ"}, {"k": "一郎", "y": "イチロウ"}, {"k": "悠", "y": "ユウ"},
  {"k": "隼人", "y": "ハヤト"}, {"k": "悠人", "y": "ユウト"}, {"k": "亮", "y": "リョウ"}, {"k": "駿", "y": "シュン"}, {"k": "晃輔", "y": "コウスケ"},
  {"k": "悠斗", "y": "ユウト"}, {"k": "歩", "y": "アユム"}, {"k": "和也", "y": "カズヤ"}, {"k": "奏太", "y": "ソウタ"}, {"k": "大翔", "y": "ヒロト"},
  {"k": "陽向", "y": "ヒナタ"}, {"k": "翔平", "y": "ショウヘイ"}, {"k": "新太", "y": "アラタ"}, {"k": "海斗", "y": "カイト"}, {"k": "亮太", "y": "リョウタ"},
  {"k": "悠太", "y": "ユウタ"}, {"k": "仁", "y": "ジン"}, {"k": "航平", "y": "コウヘイ"}, {"k": "陽斗", "y": "ハルト"}, {"k": "碧", "y": "アオイ"},
  {"k": "啓太", "y": "ケイタ"}, {"k": "潤", "y": "ジュン"}, {"k": "蒼", "y": "アオイ"}, {"k": "陽介", "y": "ヨウスケ"}, {"k": "哲也", "y": "テツヤ"},
  {"k": "陽翔", "y": "ハルト"}, {"k": "光", "y": "ヒカル"}, {"k": "楓", "y": "カエデ"}, {"k": "遼", "y": "リョウ"}, {"k": "悠翔", "y": "ユウト"},
  {"k": "航", "y": "ワタル"}, {"k": "徹", "y": "トオル"}, {"k": "拓海", "y": "タクミ"}, {"k": "晴", "y": "ハル"}, {"k": "湊斗", "y": "ミナト"},
  {"k": "蒼太", "y": "ソウタ"}, {"k": "優", "y": "ユウ"}, {"k": "翔", "y": "カケル"}, {"k": "豊", "y": "ユタカ"}, {"k": "拓実", "y": "タクミ"},
  {"k": "岳", "y": "ガク"}, {"k": "健太郎", "y": "ケンタロウ"}, {"k": "裕太", "y": "ユウタ"}, {"k": "大智", "y": "ダイチ"}, {"k": "大介", "y": "ダイスケ"},
  {"k": "奏太", "y": "カナタ"}, {"k": "奏多", "y": "カナタ"}, {"k": "颯人", "y": "ハヤト"}, {"k": "悟", "y": "サトル"}, {"k": "大輝", "y": "ダイキ"},
  {"k": "健人", "y": "ケント"}, {"k": "碧人", "y": "アオト"}, {"k": "涼", "y": "リョウ"}, {"k": "健", "y": "タケル"}, {"k": "怜", "y": "レイ"},
  {"k": "優太", "y": "ユウタ"}, {"k": "蒼真", "y": "ソウマ"}, {"k": "陸斗", "y": "リクト"}, {"k": "稜", "y": "リョウ"}, {"k": "大樹", "y": "ダイキ"},
  {"k": "晃", "y": "アキラ"}, {"k": "朔", "y": "サク"}, {"k": "直人", "y": "ナオト"}, {"k": "太郎", "y": "タロウ"}, {"k": "拓真", "y": "タクマ"},
  {"k": "和樹", "y": "カズキ"}, {"k": "陽", "y": "ハル"}, {"k": "渉", "y": "ワタル"}, {"k": "瑛斗", "y": "エイト"}, {"k": "陽太", "y": "ヨウタ"},
  {"k": "慧", "y": "ケイ"}, {"k": "純", "y": "ジュン"}, {"k": "壮真", "y": "ソウマ"}, {"k": "康平", "y": "コウヘイ"}, {"k": "俊介", "y": "シュンスケ"},
  {"k": "聡", "y": "サトシ"}, {"k": "響", "y": "ヒビキ"}, {"k": "和真", "y": "カズマ"}, {"k": "健一", "y": "ケンイチ"}, {"k": "健", "y": "ケン"},
  {"k": "洋平", "y": "ヨウヘイ"}, {"k": "遥斗", "y": "ハルト"}, {"k": "淳", "y": "ジュン"}, {"k": "隆", "y": "タカシ"}, {"k": "一", "y": "ハジメ"},
  {"k": "薫", "y": "カオル"}, {"k": "善", "y": "ゼン"}, {"k": "要", "y": "カナメ"}, {"k": "旬", "y": "シュン"}, {"k": "琉生", "y": "ルイ"},
  {"k": "柊", "y": "シュウ"}, {"k": "泰知", "y": "タイチ"}, {"k": "優斗", "y": "ユウト"}, {"k": "卓也", "y": "タクヤ"}, {"k": "祐介", "y": "ユウスケ"},
  {"k": "慶太", "y": "ケイタ"}, {"k": "奏汰", "y": "カナタ"}, {"k": "悠希", "y": "ユウキ"}, {"k": "圭佑", "y": "ケイスケ"}, {"k": "俊", "y": "シュン"},
  {"k": "海翔", "y": "カイト"}, {"k": "櫂", "y": "カイ"}, {"k": "康介", "y": "コウスケ"}, {"k": "太陽", "y": "タイヨウ"}, {"k": "裕介", "y": "ユウスケ"},
  {"k": "空", "y": "ソラ"}, {"k": "廉", "y": "レン"}, {"k": "圭吾", "y": "ケイゴ"}, {"k": "智也", "y": "トモヤ"}, {"k": "篤", "y": "アツシ"},
  {"k": "悠人", "y": "ハルト"}, {"k": "結翔", "y": "ユイト"}, {"k": "一樹", "y": "カズキ"}, {"k": "颯汰", "y": "ソウタ"}, {"k": "颯", "y": "ハヤテ"}
];

var woman = [
  {"k": "陽菜", "y": "ヒナ"}, {"k": "凛", "y": "リン"}, {"k": "結菜", "y": "ユイナ"}, {"k": "葵", "y": "アオイ"}, {"k": "結愛", "y": "ユア"},
  {"k": "愛莉", "y": "アイリ"}, {"k": "美咲", "y": "ミサキ"}, {"k": "結衣", "y": "ユイ"}, {"k": "桜", "y": "サクラ"}, {"k": "凜", "y": "リン"},
  {"k": "心春", "y": "コハル"}, {"k": "杏", "y": "アン"}, {"k": "愛梨", "y": "アイリ"}, {"k": "芽衣", "y": "メイ"}, {"k": "莉子", "y": "リコ"},
  {"k": "さくら", "y": "サクラ"}, {"k": "美桜", "y": "ミオ"}, {"k": "あかり", "y": "アカリ"}, {"k": "花", "y": "ハナ"}, {"k": "暖", "y": "ヒナタ"},
  {"k": "美月", "y": "ミヅキ"}, {"k": "悠月", "y": "ユヅキ"}, {"k": "愛", "y": "アイ"}, {"k": "綾乃", "y": "アヤノ"}, {"k": "希美", "y": "ノゾミ"},
  {"k": "紗奈", "y": "サナ"}, {"k": "陽咲", "y": "ヒサキ"}, {"k": "莉央", "y": "リオ"}, {"k": "愛菜", "y": "アイナ"}, {"k": "愛唯", "y": "アユ"},
  {"k": "茜", "y": "アカネ"}, {"k": "絢音", "y": "アヤネ"}, {"k": "芽生", "y": "メイ"}, {"k": "咲良", "y": "サクラ"}, {"k": "美結", "y": "ミユ"},
  {"k": "柚希", "y": "ユズキ"}, {"k": "莉緒", "y": "リオ"}, {"k": "ひなた", "y": "ヒナタ"}, {"k": "花音", "y": "カノン"}, {"k": "琴音", "y": "コトネ"},
  {"k": "彩花", "y": "アヤカ"}, {"k": "紬", "y": "ツムギ"}, {"k": "美羽", "y": "ミウ"}, {"k": "蘭", "y": "ラン"}, {"k": "玲奈", "y": "レイナ"},
  {"k": "莉愛", "y": "リア"}, {"k": "愛理", "y": "アイリ"}, {"k": "華音", "y": "カノン"}, {"k": "芽衣", "y": "メイ"}, {"k": "詩織", "y": "シオリ"},
  {"k": "心愛", "y": "ココア"}, {"k": "心結", "y": "ミユ"}, {"k": "心優", "y": "ミユ"}, {"k": "心陽", "y": "コハル"}, {"k": "奈々", "y": "ナナ"},
  {"k": "楓花", "y": "フウカ"}, {"k": "優希", "y": "ユウキ"}, {"k": "凛音", "y": "リオン"}, {"k": "栞奈", "y": "カンナ"}, {"k": "澪", "y": "ミオ"},
  {"k": "くるみ", "y": "クルミ"}, {"k": "こはる", "y": "コハル"}, {"k": "しおり", "y": "シオリ"}, {"k": "すみれ", "y": "スミレ"}, {"k": "愛桜", "y": "アイサ"},
  {"k": "一花", "y": "イチカ"}, {"k": "叶愛", "y": "カナエ"}, {"k": "希愛", "y": "キア"}, {"k": "希帆", "y": "キホ"}, {"k": "結月", "y": "ユヅキ"},
  {"k": "彩未", "y": "アヤミ"}, {"k": "咲希", "y": "サキ"}, {"k": "実桜", "y": "ミオ"}, {"k": "紗菜", "y": "アヤナ"}, {"k": "紗良", "y": "サラ"},
  {"k": "珠莉", "y": "ジュリ"}, {"k": "真帆", "y": "マホ"}, {"k": "美空", "y": "ミソラ"}, {"k": "楓", "y": "カエデ"}, {"k": "優愛", "y": "ユア"},
  {"k": "優那", "y": "ユウナ"}, {"k": "由依", "y": "ユイ"}, {"k": "陽葵", "y": "ヒナタ"}, {"k": "玲菜", "y": "レイナ"}, {"k": "鈴", "y": "スズ"},
  {"k": "和花", "y": "ワカ"}, {"k": "いろは", "y": "イロハ"}, {"k": "えま", "y": "エマ"}, {"k": "そら", "y": "ソラ"}, {"k": "はるか", "y": "ハルカ"},
  {"k": "ひな", "y": "ヒナ"}, {"k": "まお", "y": "マオ"}, {"k": "みう", "y": "ミウ"}, {"k": "みなみ", "y": "ミナミ"}, {"k": "一華", "y": "カズハ"},
  {"k": "夏音", "y": "ナツネ"}, {"k": "花鈴", "y": "カリン"}, {"k": "花蓮", "y": "カレン"}, {"k": "華", "y": "ハナ"}, {"k": "叶夢", "y": "カナメ"},
  {"k": "結", "y": "ユイ"}, {"k": "結香", "y": "ユカ"}, {"k": "結那", "y": "ユイナ"}, {"k": "結乃", "y": "ユイノ"}, {"k": "結唯", "y": "ユイ"},
  {"k": "結莉", "y": "ユイリ"}, {"k": "香歩", "y": "カホ"}, {"k": "彩葵", "y": "サキ"}, {"k": "菜々", "y": "ナナ"}, {"k": "志帆", "y": "シホ"},
  {"k": "朱音", "y": "アカネ"}, {"k": "朱里", "y": "ジュリ"}, {"k": "春", "y": "ハル"}, {"k": "心", "y": "ココロ"}, {"k": "心羽", "y": "ココハ"},
  {"k": "心菜", "y": "ココナ"}, {"k": "心美", "y": "ココミ"}, {"k": "真央", "y": "マオ"}, {"k": "真菜", "y": "マナ"}, {"k": "雪穂", "y": "ユキホ"},
  {"k": "奏愛", "y": "ソア"}, {"k": "桃佳", "y": "モモカ"}, {"k": "桃子", "y": "モモコ"}, {"k": "奈央", "y": "ナオ"}, {"k": "日和", "y": "ヒヨリ"},
  {"k": "妃那", "y": "ヒナ"}, {"k": "百花", "y": "モモカ"}, {"k": "舞", "y": "マイ"}, {"k": "碧", "y": "アオイ"}, {"k": "望愛", "y": "ノア"},
  {"k": "唯華", "y": "ユイカ"}, {"k": "優", "y": "ユウ"}, {"k": "優妃", "y": "ユウキ"}, {"k": "悠愛", "y": "ユア"}, {"k": "柚", "y": "ユズ"},
  {"k": "柚花", "y": "ユズカ"}, {"k": "柚子", "y": "ユズ"}, {"k": "遥香", "y": "ハルカ"}, {"k": "陽向", "y": "ヒナタ"}, {"k": "陽香", "y": "ハルカ"},
  {"k": "陽茉梨", "y": "ヒマリ"}, {"k": "翼", "y": "ツバサ"}, {"k": "梨央", "y": "リオ"}, {"k": "梨乃", "y": "リノ"}, {"k": "和心", "y": "アコ"},
  {"k": "和奏", "y": "ワカナ"}, {"k": "莉菜", "y": "リナ"}, {"k": "莉桜", "y": "リオ"}, {"k": "菫", "y": "スミレ"}, {"k": "菫花", "y": "スミレ"}
];


var family_hash = family[Math.floor(Math.random() * family.length)];
console.log(family_hash["k"]);
console.log(family_hash["y"]);

var man_hash = man[Math.floor(Math.random() * man.length)];
console.log(man_hash["k"]);
console.log(man_hash["y"]);

var woman_hash = woman[Math.floor(Math.random() * woman.length)];
console.log(woman_hash["k"]);
console.log(woman_hash["y"]);



//
