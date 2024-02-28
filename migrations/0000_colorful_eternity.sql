CREATE TABLE `full_requests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`company_name` varchar(20) NOT NULL,
	`request_title` varchar(255) NOT NULL,
	`image_url` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`need_money` int NOT NULL,
	`collected_money` int NOT NULL,
	CONSTRAINT `full_requests_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `requests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`company_name` varchar(20) NOT NULL,
	`request_title` varchar(255) NOT NULL,
	`image_url` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `requests_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `spend_history_items` (
	`id` int AUTO_INCREMENT NOT NULL,
	`text` text NOT NULL,
	`full_request_id` int NOT NULL,
	CONSTRAINT `spend_history_items_id` PRIMARY KEY(`id`)
);
