function stroke_count(kanji) {
  var chars = require('./db/chars.json');
  if (chars[kanji] === undefined) {
    return null;
  }
  return chars[kanji]['stroke_count'];
}

function stroke_kanji_list(stroke_count) {
  var stroke_kanji = require('./db/stroke_kanji.json');
  if (stroke_kanji[stroke_count] === undefined) {
    return null;
  }
  return stroke_kanji[stroke_count];
}

module.exports = {
    stroke_count,
    stroke_kanji_list,
};

