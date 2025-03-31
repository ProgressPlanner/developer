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
class Example_One_Time_Task extends Progress_Planner\Suggested_Tasks\Local_Tasks\Providers\One_Time {

	/**
	 * The provider ID.
	 *
	 * @var string
	 */
	const PROVIDER_ID = 'example-one-time-task';

	/**
	 * The provider category.
	 *
	 * @var string
	 */
	const CATEGORY = 'your-own-category-of-task';

	/**
	 * The capability required to perform the task. Only users with this capability can see the task.
	 *
	 * @var string
	 */
	const CAPABILITY = 'moderate_comments';

	/**
	 * Whether the task is dismissable.
	 *
	 * @var bool
	 */
	protected $is_dismissable = false;

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->url         = $this->capability_required() ? \esc_url( \admin_url( 'options.php?page=example-settings-page' ) ) : '';
		$this->title       = \esc_html__( 'Example one time task', 'example-text-domain' );
		$this->description = '<p>' . \esc_html__( 'This is a description of the task.', 'example-text-domain' ) . '</p>';
		$this->points      = 1;
	}

	/**
	 * Check if the task should be added.
	 *
	 * @return bool
	 */
	public function should_add_task() {
		// This is where you would check if the task should be added.
		return true;
	}
}
```