---
id: debug-mode
title: "Progress Planner debug mode"
---

If you're developing with Progress Planner, one of the steps you'll want to take first is to enable debug mode. You do this by adding the following to your `wp-config.php` file:

```php
define( 'PRPL_DEBUG', true );
```

Or by creating an option `prpl_debug` in the options table and setting it to `true`.
