---
id: example-one-time-task
title: "Example one time task"
---

Let's say you want to create a one time task for Progress Planner. This would be a task the user would have to do only once. 

The code for this would look like this:

```php
<?php
/**
 * One time task for Progress Planner.
 */
class Example_One_Time_Task extends Progress_Planner\Suggested_Tasks\Local_Tasks\Providers\One_Time\One_Time {

    /**
     * The provider ID.
     *
     * @var string
     */
    const ID = 'example-one-time-task';

    /**
     * The provider type. This is used to determine the type of task.
     *
     * @var string
     */
    const TYPE = 'your-own-type-of-task';

    /**
     * The capability required to perform the task. Only users with this capability can see the task.
     *
     * @var string
     */
    const CAPABILITY = 'moderate_comments';

    /**
     * Check if the task should be added.
     *
     * @return bool
     */
    public function should_add_task() {
        // This is where you would check if the task should be added.
        return true;
    }

    /**
     * Get the task details.
     *
     * @param string $task_id The task ID.
     *
     * @return array
     */
    public function get_task_details( $task_id = '' ) {

        if ( ! $task_id ) {
            $task_id = $this->get_task_id();
        }

        return [
            'task_id'      => $task_id,
            'title'        => \esc_html__( 'Example one time task', 'example-text-domain' ),
            'parent'       => 0,
            'priority'     => 'medium',
            'type'         => $this->get_provider_type(),
            'points'       => 1,
            'url'          => $this->capability_required() ? \esc_url( \admin_url( 'options.php?page=example-settings-page' ) ) : '',
            'description'  => '<p>' . \esc_html__( 'This is a description of the task.', 'example-text-domain' ) . '</p>',
        ];
    }
}
```

