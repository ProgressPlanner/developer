---
id: overview
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
$this->task_providers = \apply_filters( 'progress_planner_suggested_tasks_providers', $this->task_providers );
```

Task providers should be classes that extend one of our abstract classes. This makes sure that your task provider is compatible with Progress Planner.
We currently have three abstract classes for task providers:

- `Progress_Planner\Suggested_Tasks\Local_Tasks\Providers\Content\Content` - See [class-content.php](https://github.com/ProgressPlanner/progress-planner/blob/main/classes/suggested-tasks/local-tasks/providers/content/class-content.php)
- `Progress_Planner\Suggested_Tasks\Local_Tasks\Providers\One_Time\One_Time` - See [class-one-time.php](https://github.com/ProgressPlanner/progress-planner/blob/main/classes/suggested-tasks/local-tasks/providers/one-time/class-one-time.php)
- `Progress_Planner\Suggested_Tasks\Local_Tasks\Providers\Repetitive\Repetitive` - See [class-repetitive.php](https://github.com/ProgressPlanner/progress-planner/blob/main/classes/suggested-tasks/local-tasks/providers/repetitive/class-repetitive.php)

Most of the time you'll want to extend one of the latter two.

## Important constants and properties

### ID
The `ID` class constant holds the ID of the task. This is used to identify the task, and should be unique.

### Type
The `TYPE` class constant holds the type of task. The plugin by default shows only one task per type at a time, with an exception for the `content-update` type, it shows two of those at a time. You can either use the built-in types (see below), or create your own.

#### Built-in types

- `configuration` - A configuration task.
- `content-new` - A "write new content" task.
- `content-update` - A "update existing content" task.
- `maintenance` - Site maintenance tasks.

#### On creating your own type

If you create your own type, realize that we try to not show too many tasks to a user at once. Adding a lot of types is _not_ a good idea.


### Capability
The `capability` class protected variable holds the capability required to perform the task. This will already be set in the abstract class, but you can override it if needed.