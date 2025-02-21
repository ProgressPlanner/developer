/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
	mainSidebar: [
		{
			type: "doc",
			label: "Home",
			id: "overview",
		},
		{
			type: "category",
			label: "Progress Planner",
			items: [
				{
					type: "doc",
					label: "Debug mode",
					id: "progress-planner/debug-mode",
				},
				{
					type: "category",
					label: "Tasks API",
					link: {
						type: "doc",
						id: "progress-planner/tasks-api/tasks-api",
					},
					items: [
						{
							type: "doc",
							label: "Adding and removing tasks",
							id: "progress-planner/tasks-api/adding-tasks",
						},
						{
							type: "doc",
							label: "Example: one time task",
							id: "progress-planner/tasks-api/example-one-time-task",
						},
						{
							type: "doc",
							label: "Example: repetitive task",
							id: "progress-planner/tasks-api/example-repetitive-task",
						},
					],
				},
			]
		}
	],
};
