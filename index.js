module.exports = albert
var timestamp = require('internet-timestamp'),
    path = require('path'),
    fs = require('fs')

try {
  var config = require(path.join(__dirname, '.albert.json')),
      check_rex = new RegExp('(' + config.words.join('|') + ')')
      log_all = !!config.log_all,
      caught_file = config.caught_file,
      log_dir = config.log_dir || process.cwd()

} catch(e) {
  process.stderr.write('BAD CONFIG')
}
function albert(ziggy) {
  ziggy.on('message', check_message)
  function check_message(user, channel, text) {
    if (log_all) add_to_log(channel, user, text)
    if (check_rex.test(text)) add_to_log(caught_file, channel, user, text)
  }
}

function add_to_log(file, channel, user, text) {
  var log_file = path.join(log_dir, file),
      str = text ? '[' + channel + '] <' + user + '> ' + text :
          '<' + channel + '> ' + user

  str = [timestamp(Date.now()), str].join(' ')
  fs.appendFile(log_file, str, after_append)

  function after_append(err) {
    if (err) process.stderr.write('ERROR ' + JSON.stringify(err))
  }
}
