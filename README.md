<p align="center">
<h1 align="center">
  simple-cache-control-middleware
</h1>

<p align="center">
  A very simple cache control middleware for express
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/simple-cache-control-middleware"><img src="https://badgen.net/npm/v/simple-cache-control-middleware" alt="npm version"/></a>
  <a href="https://www.npmjs.org/package/simple-cache-control-middleware"><img src="https://badgen.net/npm/license/simple-cache-control-middleware" alt="license"/></a>
  <a href="https://www.npmjs.org/package/simple-cache-control-middleware"><img src="https://badgen.net/npm/dt/simple-cache-control-middleware" alt="downloads"/></a>
  <a href="https://snyk.io/test/github/ulisesgascon/simple-cache-control-middleware"><img src="https://snyk.io/test/github/ulisesgascon/simple-cache-control-middleware/badge.svg" alt="Known Vulnerabilities"/></a>
</p>

</p>

# About

A very simple cache control middleware for express.

❤️ Awesome Features:

- Easy to define the max-age 🔥
- Only GET Request are cached 🍺
- `debug` is supported 💪
- Easy to use and great test coverage ✅

## Usage

### Install

```bash
npm install simple-cache-control-middleware
```

### Default

```js
const express = require('express');
const simpleCacheControlMiddleware = require('simple-cache-control-middleware')
const app = express();

app.use(simpleCacheControlMiddleware())

app.get('/', (req, res) => {
  res.send(`This request has 5m max-age`);
});

app.post('/', (req, res) => {
  res.send(`This request is not cached`);
});

app.listen(3000, () => {
  console.log('We are in port 3000!');
});
```

### Custom max-age


```js
const express = require('express');
const simpleCacheControlMiddleware = require('simple-cache-control-middleware')
const app = express();

const TEN_MINUTES = 60 * 10
app.use(simpleCacheControlMiddleware({
    maxAge: TEN_MINUTES
}))
```

## Built With

Development only:

- [Standard](https://www.npmjs.com/package/standard) - Linting
- [Jest](https://www.npmjs.com/package/jest) Testing framework

Production only:

- [debug](https://www.npmjs.com/package/debug) - Debug the app
## Contributing

Please read [CONTRIBUTING.md](https://github.com/UlisesGascon/user-language-middleware/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ulisesGascon/simple-cache-control-middleware/tags).

## Authors

- **Ulises Gascón** - *Initial work- - [@ulisesGascon](https://github.com/ulisesGascon)

See also the list of [contributors](https://github.com/ulisesGascon/simple-cache-control-middleware/contributors) who participated in this project.

## License

This project is licensed under the GNU AGPL3.0 License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- This project is under development, but you can help us to improve it! We :heart: FOSS!