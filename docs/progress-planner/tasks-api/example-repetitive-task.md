---
id: example-repetitive-task
title: "Example repetitive task"
---

Let's say you want to create a repetitive task for Progress Planner. This would be a task the user would have to do regularly.

The code for this would look like this (for a task to moderates comments, adapted and simplified from our Comment Hacks plugin):

```php
<?php
/**
 * Task for the comment moderation.
 */
class Comment_Moderation extends \Progress_Planner\Suggested_Tasks\Local_Tasks\Providers\Repetitive {

	/**
	 * The provider ID.
	 *
	 * @var string
	 */
	protected const PROVIDER_ID = 'ch-comment-moderation';

	/**
	 * The provider category. This is used to determine the category of the task.
	 *
	 * @var string
	 */
	protected const CATEGORY = 'maintenance';

	/**
	 * The capability required to perform the task.
	 *
	 * @var string
	 */
	protected const CAPABILITY = 'moderate_comments';

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->url         = $this->capability_required() ? \esc_url( \admin_url( 'edit-comments.php?comment_status=moderated' ) ) : '';
	}

	/**
	 * Get the title.
	 *
	 * @return string
	 */
	public function get_title() {
		return \esc_html__( 'Moderate comments', 'comment-hacks' );
	}

	/**
	 * Get the description.
	 *
	 * @return string
	 */
	public function get_description() {
		return \esc_html__( 'Moderate comments to make sure they are not spam.', 'comment-hacks' );
	}

	/**
	 * Check if the task should be added.
	 *
	 * @return bool
	 */
	public function should_add_task() {
		$comments = \get_comments( [
			'status' => 'hold',
			'count'  => true,
		] );

		return $comments > 0;
	}
}
```
