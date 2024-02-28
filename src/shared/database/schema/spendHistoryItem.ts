import { fullRequests } from "./fullRequests";

import { relations } from "drizzle-orm";
import { mysqlTable, text, int } from "drizzle-orm/mysql-core";

export const spendHistoryItems = mysqlTable("spend_history_items", {
  id: int("id").primaryKey().autoincrement(),
  text: text("text").notNull(),
  fullRequestId: int("full_request_id").notNull(),
});

export const spendHistoryItemsRelations = relations(
  spendHistoryItems,
  ({ one }) => ({
    fullRequest: one(fullRequests, {
      fields: [spendHistoryItems.fullRequestId],
      references: [fullRequests.id],
    }),
  })
);
