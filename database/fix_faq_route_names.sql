-- Fix route_name values accidentally seeded with "global"
-- Use this ONLY if your page-specific FAQs are showing on other pages.

-- LLP page: remove global flag (keeps only LLP route)
UPDATE faqs
SET route_name = REPLACE(route_name, ',global,', ',')
WHERE route_name LIKE '%,global,%'
  AND route_name LIKE '%/limited-liability-partnership-registration%';

-- Private Limited page: remove global flag (keeps only private-limited route)
UPDATE faqs
SET route_name = REPLACE(route_name, ',global,', ',')
WHERE route_name LIKE '%,global,%'
  AND route_name LIKE '%/private-limited-company-registration%';

