-- CreateIndex
CREATE INDEX "IDX_POST_AUTHOR_ID_PUBLISHED" ON "Post"("authorId", "published");

-- CreateIndex
CREATE INDEX "Post_createdAt_idx" ON "Post"("createdAt" DESC);

-- CreateIndex
CREATE INDEX "IDX_USER_NAME" ON "User"("name");
