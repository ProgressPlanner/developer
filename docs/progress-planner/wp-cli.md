---
id: wp-cli
title: "WP CLI Commands"
---

Progress Planner provides WP CLI commands for managing tasks and retrieving statistics directly from the command line.

## Available Commands

### Task Commands

#### List Tasks

```bash
wp prpl task list
```

Lists all tasks in the system.

**Options:**
- `[--format=<format>]` - Output format. Options: `table`, `csv`, `json`, `count`, `yaml`. Default: `table`.
- `[--fields=<fields>]` - Comma-separated list of fields to display. Defaults to all fields.
- `[--<field>=<value>]` - Filter results by specific field values.

**Examples:**
```bash
wp prpl task list
wp prpl task list --format=json
wp prpl task list --status=pending
```

#### Get a Single Task

```bash
wp prpl task get <task_id>
```

Displays details for a single task.

**Arguments:**
- `<task_id>` - (Required) The ID of the task to retrieve.

**Options:**
- `[--format=<format>]` - Output format. Options: `table`, `json`, `yaml`. Default: `table`.

**Examples:**
```bash
wp prpl task get 123
wp prpl task get 123 --format=json
```

#### Create a Task

```bash
wp prpl task create --title="My Task"
```

Creates a new task.

**Options:**
- `[--task_id=<task_id>]` - Unique identifier. Auto-generated if omitted.
- `[--title=<title>]` - (Required) The title of the task.
- `[--description=<description>]` - Task description.
- `[--points=<points>]` - Point value for the task. Default: `1`.
- `[--provider_id=<provider_id>]` - Provider identifier. Default: `collaborator`.
- `[--status=<status>]` - Task status. Default: `pending`.
- `[--is_completed_callback=<callback>]` - Completion check callback function.
- `[--dismissable]` - Allow the task to be dismissed.
- `[--snoozable]` - Allow the task to be snoozed.
- `[--external_link_url=<url>]` - External resource URL.

**Examples:**
```bash
wp prpl task create --title="My Task"
wp prpl task create --title="My Task" --description="Task description" --points=5
wp prpl task create --title="Review post" --status=pending --dismissable --snoozable
```

#### Update a Task

```bash
wp prpl task update <task_id> --<field>=<value>
```

Updates an existing task.

**Arguments:**
- `<task_id>` - (Required) The ID of the task to update.

**Options:**
- `[--<field>=<value>]` - One or more fields to update with their new values.

**Examples:**
```bash
wp prpl task update 123 --status=completed
wp prpl task update 123 --title="Updated title" --points=10
```

#### Delete a Task

```bash
wp prpl task delete <task_id>
```

Deletes a task from the system.

**Arguments:**
- `<task_id>` - (Required) The ID of the task to delete.

**Options:**
- `[--force]` - Permanently delete the task instead of moving to trash.

**Examples:**
```bash
wp prpl task delete 123
wp prpl task delete 123 --force
```

### Get Statistics

```bash
wp prpl get_stats
```

Outputs the same data as the REST API endpoint. This is useful for quickly checking Progress Planner statistics without accessing the WordPress admin.
