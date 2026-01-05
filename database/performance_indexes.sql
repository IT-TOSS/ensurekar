-- ===========================================================
-- Performance Optimization Indexes for Ensurekar Database
-- ===========================================================
-- Run this SQL file to add indexes that will significantly
-- improve query performance, especially for large datasets
-- ===========================================================

-- Blog Posts Indexes
-- Index for filtering by status and ordering by publish_date
CREATE INDEX IF NOT EXISTS idx_blog_posts_status_publish_date 
ON blog_posts(status, publish_date DESC, created_at DESC);

-- Index for slug lookups (for blog detail pages)
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug 
ON blog_posts(slug);

-- Index for featured posts
CREATE INDEX IF NOT EXISTS idx_blog_posts_featured_status 
ON blog_posts(featured, status);

-- Index for ID lookups (already has PRIMARY KEY, but this helps with joins)
-- PRIMARY KEY already exists on id

-- Orders Indexes
-- Index for ordering by ID (most common query pattern)
CREATE INDEX IF NOT EXISTS idx_orders_id_desc 
ON orders(id DESC);

-- Index for payment status filtering
CREATE INDEX IF NOT EXISTS idx_orders_payment_status 
ON orders(payment_status);

-- Index for date-based queries
CREATE INDEX IF NOT EXISTS idx_orders_created_at 
ON orders(created_at DESC);

-- User Info Indexes
-- Index for ordering by ID
CREATE INDEX IF NOT EXISTS idx_user_info_id_desc 
ON user_info(id DESC);

-- Index for email lookups (if used for authentication)
CREATE INDEX IF NOT EXISTS idx_user_info_email 
ON user_info(email);

-- Users Table Indexes
-- Index for email lookups (login queries)
CREATE INDEX IF NOT EXISTS idx_users_email 
ON users(email);

-- Index for userId lookups (Google login)
CREATE INDEX IF NOT EXISTS idx_users_userId 
ON users(userId);

-- Index for email and password queries (login)
CREATE INDEX IF NOT EXISTS idx_users_email_password 
ON users(email, password);

-- Admin Login Indexes
-- Index for email lookups
CREATE INDEX IF NOT EXISTS idx_admin_login_email 
ON admin_login(email);

-- Index for email and password queries
CREATE INDEX IF NOT EXISTS idx_admin_login_email_password 
ON admin_login(email, password);

-- Packages Offers Indexes
-- Index for ordering by ID
CREATE INDEX IF NOT EXISTS idx_packages_offers_id_desc 
ON packages_offers(id DESC);

-- Company Slider Indexes
-- Index for ordering by 'order' field
CREATE INDEX IF NOT EXISTS idx_company_slider_order 
ON company_slider(`order` ASC);

-- Index for header filtering
CREATE INDEX IF NOT EXISTS idx_company_slider_header 
ON company_slider(header);

-- Composite index for header and order
CREATE INDEX IF NOT EXISTS idx_company_slider_header_order 
ON company_slider(header, `order` ASC);

-- ===========================================================
-- Notes:
-- 1. These indexes will speed up queries significantly
-- 2. Indexes use a small amount of disk space
-- 3. INSERT/UPDATE operations may be slightly slower, but
--    SELECT queries will be much faster
-- 4. Run ANALYZE TABLE after creating indexes:
--    ANALYZE TABLE blog_posts;
--    ANALYZE TABLE orders;
--    ANALYZE TABLE user_info;
--    ANALYZE TABLE users;
-- ===========================================================

