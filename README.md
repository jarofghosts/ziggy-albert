albert
====

for use with [ziggy](http://npm.im/ziggy).

## usage

make a `.albert.json` file where this plugin lives that looks like:

```js
{
  "words": ["words", "to", "ding", "on"],
  "log_dir": "/wherever/you/want/to/store/logs",
  "caught_file": "file_with_dings.txt",
  "log_all": false
}
```

whenever one of the words specified in your list is said in whatever channel
Ziggy is in, it will log it to `caught_file` if you set `log_all` to `true`,
it will put log files named by channel in `log_dir`. Default for `log_all` is
false.

## license

MIT
