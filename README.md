# Kentico Smart Search

Replacement for the default Kentico Smart Search web part (which refuses to play nicely with flat, trendy search designs that are flat and trendy). Tested in Kentico 8.

## Requirements

* [jQuery](http://jquery.com/)

## HTML structure

```html
<input class="searchInput" type="text">
<a href="#" class="searchButton">Search</a>
```

## Getting started

* `git clone` into CMSScripts 
* Link script in the masterpage after jQuery reference.

```html
<script src="path/to/jQuery.js"></script>
...
<script src="path/to/kenticoSmartSearch.js"></script>
```

* Call init method when the DOM is ready.

```javascript
kenticoSmartSearch.init();
```
