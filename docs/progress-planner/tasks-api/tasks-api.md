---
id: tasks-api
title: "Progress Planner Tasks API"
slug: /progress-planner/tasks-api/
---

The Progress Planner Tasks API is a way to add tasks to the Progress Planner.

Tasks are provided by task providers. A single provider can add one or multiple tasks. 

## Adding a task provider
To add a new task provider to the built-in list of task providers, you can use the [following filter](https://github.com/ProgressPlanner/progress-planner/blob/main/classes/class-suggested-tasks.php):

```php
/**
 * Filter the task providers.
 *
 * @param array $task_providers The task providers.
 */
$this->task_providers = \apply_filters( 
	'progress_planner_suggested_tasks_providers',
	$this->task_providers
);
```

Task providers have to be classes that extend one of our abstract classes, otherwise they will be thrown out immediately. We do this to make sure that your task provider is compatible with Progress Planner. We currently have three abstract classes for task providers that all live in the `Progress_Planner\Suggested_Tasks\Local_Tasks\Providers` namespace:

- `Content` - See [class-content.php](https://github.com/ProgressPlanner/progress-planner/blob/main/classes/suggested-tasks/local-tasks/providers/class-content.php)
- `One_Time` - See [class-one-time.php](https://github.com/ProgressPlanner/progress-planner/blob/main/classes/suggested-tasks/local-tasks/providers/class-one-time.php)
- `Repetitive` - See [class-repetitive.php](https://github.com/ProgressPlanner/progress-planner/blob/main/classes/suggested-tasks/local-tasks/providers/class-repetitive.php)

Most of the time you'll want to extend one of the latter two.

## Class constants
Each task provider class has a few class constants that are used to identify the task and its important properties:

* `PROVIDER_ID`<br/>
  Protected constant that holds the ID of the provider. This is used to identify the provider, and should be unique.
* `CATEGORY`<br/>
  Protected constant that holds the category of the task. The plugin by default shows only one task per category at a time. You can either use the built-in categories (see below), or create your own.
* `CAPABILITY`<br/>
  Protected constant that holds the capability required to perform the task. This will already be set in the abstract class, but you can override it if needed.
* `IS_ONBOARDING_TASK`<br/>
  Protected constant that holds whether the task is an onboarding task and is shown in the onboarding checklist.

### Built-in types

- `configuration` - A configuration task.
- `content-new` - A "write new content" task.
- `content-update` - A "update existing content" task.
- `maintenance` - Site maintenance tasks.

### On creating your own type

If you create your own type, realize that we try to not show too many tasks to a user at once. Adding a lot of types is _not_ a good idea.
