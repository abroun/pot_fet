# pot-fet

A simple one page app that consumes the Flickr public feed.

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

A PHP server is also needed as this project uses a simple proxy to avoid 
the CORS error that arises when trying to use the Flickr api directly. 
Therefore, run the following to start a simple PHP server for dev purposes

```
cd app
php -S localhost:8888
```

TODO: It's a bit clunky having to start a separate dev PHP server. So it
might be worthwhile looking at a more sophisticated solution such as
this [one](http://fettblog.eu/php-browsersync-grunt-gulp/)

## Testing

Running `grunt test` will run the unit tests with karma.
