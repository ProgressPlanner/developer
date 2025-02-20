---
id: adding-tasks
title: "Adding and removing tasks to Progress Planner"
---

## Example: adding and removing a task provider

```php
/**
 * Registers the tasks for the Progress Planner.
 */
class Progress_Planner_Tasks {

    /**
     * Constructor.
     */
    public function __construct() {
        \add_filter( 'progress_planner_suggested_tasks_providers', [ $this, 'add_task_providers' ], 11, 1 );
    }

    /**
     * Adds the task providers to the Progress Planner.
     *
     * @param array $providers The array of task providers.
     *
     * @return array The array of task providers.
     */
    public function add_task_providers( $providers ) {
        // Remove the example provider, we're replacing with a better one.
        foreach ( $providers as $key => $provider ) {
            if ( $provider->get_provider_id() === 'example-provider' ) {
                unset( $providers[ $key ] );
            }
        }

        // Add the better example task.
        $providers[] = new Example\Better_Example_Task();

        return $providers;
    }

}
```
