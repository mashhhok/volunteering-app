ALTER TABLE `donation_requests` ADD CONSTRAINT `donation_requests_organization_id_organizations_id_fk` FOREIGN KEY (`organization_id`) REFERENCES `organizations`(`id`) ON DELETE no action ON UPDATE no action;