-- ============================================
-- Graduation RSVP Database Setup
-- Run these commands in Supabase SQL Editor
-- ============================================

-- Create the main table
CREATE TABLE graduation_rsvp (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    attendance VARCHAR(10) NOT NULL CHECK (attendance IN ('yes', 'no')),
    companions INTEGER DEFAULT 0 CHECK (companions >= 0 AND companions <= 10),
    companions_names TEXT,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_graduation_rsvp_email ON graduation_rsvp(email);
CREATE INDEX idx_graduation_rsvp_attendance ON graduation_rsvp(attendance);

-- Add table and column comments for documentation
COMMENT ON TABLE graduation_rsvp IS 'Stores RSVP responses for Mariana Montes graduation ceremony';
COMMENT ON COLUMN graduation_rsvp.name IS 'Full name of the guest';
COMMENT ON COLUMN graduation_rsvp.email IS 'Email address of the guest';
COMMENT ON COLUMN graduation_rsvp.phone IS 'Phone number of the guest (optional)';
COMMENT ON COLUMN graduation_rsvp.attendance IS 'Whether the guest will attend (yes/no)';
COMMENT ON COLUMN graduation_rsvp.companions IS 'Number of companions (0-10)';
COMMENT ON COLUMN graduation_rsvp.companions_names IS 'Names of the companions';
COMMENT ON COLUMN graduation_rsvp.message IS 'Optional message for Mariana';
COMMENT ON COLUMN graduation_rsvp.created_at IS 'Timestamp when the record was created';
COMMENT ON COLUMN graduation_rsvp.updated_at IS 'Timestamp when the record was last updated';

-- ============================================
-- SECURITY: Row Level Security (RLS)
-- ============================================

-- Enable RLS on the table
ALTER TABLE graduation_rsvp ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to INSERT new RSVPs
CREATE POLICY "Anyone can insert RSVP" 
ON graduation_rsvp 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Policy: Only authenticated users can read RSVPs
-- (This prevents guests from seeing other people's responses)
CREATE POLICY "Only authenticated users can read RSVPs" 
ON graduation_rsvp 
FOR SELECT 
TO authenticated 
USING (true);

-- Note: No UPDATE or DELETE policies = denied by default
-- Guests can submit but cannot modify or delete entries

-- ============================================
-- OPTIONAL: Prevent Duplicate Emails
-- ============================================
-- Uncomment if you want to ensure each email can only submit once:
-- ALTER TABLE graduation_rsvp ADD CONSTRAINT unique_email UNIQUE (email);

-- ============================================
-- USEFUL QUERIES
-- ============================================

-- View all RSVPs (most recent first)
-- SELECT * FROM graduation_rsvp ORDER BY created_at DESC;

-- Count total attendees and companions
-- SELECT 
--     attendance,
--     COUNT(*) as responses,
--     SUM(CASE WHEN attendance = 'yes' THEN 1 ELSE 0 END) as attending,
--     SUM(CASE WHEN attendance = 'yes' THEN companions + 1 ELSE 0 END) as total_people
-- FROM graduation_rsvp 
-- GROUP BY attendance;

-- View only those attending with companions
-- SELECT name, email, companions, companions_names 
-- FROM graduation_rsvp 
-- WHERE attendance = 'yes' AND companions > 0
-- ORDER BY created_at DESC;

-- Get a list of all messages
-- SELECT name, message, created_at
-- FROM graduation_rsvp
-- WHERE message IS NOT NULL AND message != ''
-- ORDER BY created_at DESC;

