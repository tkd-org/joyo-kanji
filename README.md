# joyo-kanji
常用漢字を扱うライブラリ

## usage
```
kanji = require('joyo-kanji-counts')

# 画数を取得
kanji.stroke_count('愛')
# => 13

# 画数のリストを取得
kanji.stroke_kanji_list(21)
# => [ '艦', '顧', '鶴', '魔', '躍', '露' ]
```
