CREATE TABLE `full_requests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`organization_id` int NOT NULL,
	`request_title` varchar(255) NOT NULL,
	`image_url` varchar(255) NOT NULL,
	`need_money` int NOT NULL,
	`donation_category` varchar(255) NOT NULL,
	`collected_money` int NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `full_requests_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(64) NOT NULL,
	`password` varchar(255) NOT NULL,
	`first_name` varchar(10) NOT NULL,
	`last_name` varchar(10) NOT NULL,
	`avatar` varchar(255),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
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
--> statement-breakpoint
CREATE TABLE `organizations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int,
	`company_name` varchar(20) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `organizations_id` PRIMARY KEY(`id`),
	CONSTRAINT `organizations_user_id_unique` UNIQUE(`user_id`)
);
--> statement-breakpoint
ALTER TABLE `organizations` ADD CONSTRAINT `organizations_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;