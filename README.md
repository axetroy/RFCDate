## RFC Date

[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/RFCDate.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/axetroy/RFCDate.svg?branch=master)](https://travis-ci.org/axetroy/RFCDate)
[![Coverage Status](https://coveralls.io/repos/github/axetroy/RFCDate/badge.svg?branch=master)](https://coveralls.io/github/axetroy/RFCDate?branch=master)
[![Dependency](https://david-dm.org/axetroy/rfcdate.svg)](https://david-dm.org/axetroy/rfcdate)
![License](https://img.shields.io/badge/license-Apache-green.svg)
[![Prettier](https://img.shields.io/badge/Code%20Style-Prettier-green.svg)](https://github.com/prettier/prettier)
![Node](https://img.shields.io/badge/node-%3E=6.0-blue.svg?style=flat-square)
[![npm version](https://badge.fury.io/js/rfcdate.svg)](https://badge.fury.io/js/rfcdate)
![Size](https://github-size-badge.herokuapp.com/axetroy/RFCDate.svg)

Standard date formattor and parser.

## Usage

```javascript
const { Now, Parse, Time } = require('rfcdate');

// format
const now = new Time(new Date());
now.format(Time.ANSIC);             // Fri Jan 5  14:22:22 2018
now.format(Time.UnixDate);          // Fri Jan  5 14:22:22 UTC 2018
now.format(Time.RubyDate);          // Fri Jan 5 14:22:22 +0800 2018
now.format(Time.RFC822);            // Fri Jan 5 14:22:22 +0800 2018 UTC
now.format(Time.RFC822Z);           // 5 Jan 18 14:22 +0800
now.format(Time.RFC850);            // Friday, 05-Jan-18 14:22:22 UTC
now.format(Time.RFC1123);           // Fri, 05 Jan 18 14:22:22 UTC
now.format(Time.RFC3339);           // 2018-01-05T14:22:39+08:00
now.format(Time.RFC3339Nano);       // 2018-01-05T14:22:39.392000+08:00
now.format(Time.Kitchen);           // 2:22PM
now.format(Time.Stamp);             // Jan  5 14:22:22
now.format(Time.StampMilli);        // Jan  5 14:22:22.392
now.format(Time.StampMicro);        // Jan  5 14:22:22.392000
now.format(Time.StampNano);         // Jan  5 14:22:22.392000000
now.format(Time.ISO8601);           // 2018-01-05T14:22:22 +0800
now.format(Time.ISO8601Z);          // 2018-01-05T06:22:22Z
now.format(Time.ISODate);           // 2018-01-05
now.format(Time.ISOOrigin);         // 2018-5
now.format(Time.ISOTime);           // 14:22:22
now.format(Time.ISOWeek);           // 2018-W01
now.format(Time.ISOWeekDay);        // 2018-W01-5
now.format(Time.SlashedDate);       // 01/05/2018
now.format(Time.StrfTimeClock);     // 14:22
now.format(Time.StrfTimeISODate);   // 2018-01-05
now.format(Time.StrfTimeKitchen);   // 14:22:39 PM
now.format(Time.StrfTimeShortdate); // 5-Jan-2018
now.format(Time.UTC);               // Fri, 05 Jan 2018 14:22:22 UTC

// parse
Parse("2018-01-05T14:22.392000:39+08:00", Time.RFC3339Nano)
```

## Contributing

[Contributing Guide](https://github.com/axetroy/RFCDate/blob/master/CONTRIBUTING.md)

如果你觉得项目不错，不要吝啬你的 star.

长期造轮子，欢迎 follow.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/axetroy/RFCDate/commits?author=axetroy) [🐛](https://github.com/axetroy/RFCDate/issues?q=author%3Aaxetroy) 🎨 |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Faxetroy%2FRFCDate.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Faxetroy%2FRFCDate?ref=badge_large)
