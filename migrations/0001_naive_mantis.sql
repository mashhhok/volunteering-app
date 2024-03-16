CREATE TABLE `donation_requests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`organization_id` int NOT NULL,
	`request_title` varchar(255) NOT NULL,
	`image_url` varchar(255) NOT NULL,
	`need_money` int NOT NULL,
	`donation_category` varchar(255) NOT NULL,
	`collected_money` int NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `donation_requests_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
DROP TABLE `full_requests`;--> statement-breakpoint
DROP TABLE `spend_history_items`;