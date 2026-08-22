# AASU Reports Data Audit & Migration Recommendation Report

## Executive Summary

This document provides a comprehensive audit of `src/data/reportsData.js` (78 records) in the AASU codebase following Phase 1 of the Supabase content migration.

While Phase 1 migrated all **79 articles, news posts, events, press releases, and readouts** from `src/data/newsEventsData.js` into the Supabase `posts` table, `reportsData.js` represents a distinct repository of PDF documents, annual reports, concept notes, policy briefs, and brochures.

---

## 1. Structure Analysis of `reportsData.js`

- **Total Records**: 78 document entries
- **Primary Fields**:
  - `id` (slug-like unique identifier)
  - `title`
  - `type` (e.g. `Annual Report`, `Concept Note`, `Program Report`, `Policy Brief`, `Case Book`, `Brochure`, `Other`)
  - `year` (e.g. 2017 - 2026)
  - `priorityArea` (e.g. `Education & Students' Rights`, `Climate Action and Environmental Sustainability`, `Gender Equity & Social Inclusion`, `Democracy, Good Governance, Peace & Security`, `Capacity Building, Skills Development & Employability`, `Migration, Mobility & Exchanges`, `Pan-Africanism & African Culture`, `General`)
  - `description`
  - `fileUrl` (Points to PDF files hosted in `/public/`)
  - `thumbnail` (Points to thumbnail image in `/public/`)

---

## 2. Comparison: `newsEventsData.js` vs `reportsData.js`

| Dimension | `newsEventsData.js` (Migrated in Phase 1) | `reportsData.js` (Audited in Phase 2) |
|---|---|---|
| **Primary Purpose** | Articles, news updates, press releases, events, readouts | Downloadable PDF reports, concept notes, brochures |
| **Count** | 79 posts | 78 documents |
| **Media Type** | Featured image & gallery images | Local PDF file URL + document thumbnail |
| **Supabase Destination** | `posts` table | Can be mapped as `type = 'report'` OR stored in a dedicated `documents`/`reports` table |
| **Current Status** | 100% Migrated (79/79) | Retained as static fallback & Document Hub source |

---

## 3. Detailed Categorization of `reportsData.js` Entries

### A. Annual & Impact Reports (14 items)
- `report-2025-annual` ("AASU Annual Report 2025")
- `report-2025-impact` ("AASU Impact Report 2025")
- `report-impact-2024` ("AASU Impact Report 2024")
- `report-impact-2023` ("Impact Report AASU 2023")
- `report-annual-2023` ("AASU Annual Report 2023")
- `report-2022-midyear` ("AASU Mid-Year Report 2022")
- `report-annual-2022-v5` ("AASU Annual Report 2022")
- `report-2020-annual` ("AASU Annual Report 2020")
- `report-2019-activity` ("AASU Activity Report 2019")
- `report-2018-annual` ("AASU Annual Report 2018")
- `report-2017-annual` ("AASU Annual Report 2017")
- `other-workplan-2026` ("2026 Work Plan")
- `other-workplan-2025` ("Work Plan 2025")
- `other-aasu-workplan-2021` ("AASU Workplan")

### B. Concept Notes & Program Frameworks (25 items)
- `concept-asgi` ("Africa Students Governance Index")
- `concept-election-observer-2021` ("Election observer mission concept note")
- `concept-regional-dgg-2021` ("Regional conferences on dgg concept note")
- `concept-eep-2021` ("Concept Note for Education Enrolment Programme")
- `concept-qap-2021` ("AASU Higher Education Quality Assurance Ambassadors Project (QAP)")
- `concept-sdg4-2021` ("SDG 4 Monitoring Plan of Action")
- `concept-so-clim-2021` ("AASU SO CLIM project")
- `concept-activists-changemakers-2023` ("Activists and Changemakers")
- `concept-tree-planting-2021` ("Tree planting project")
- `concept-girls-stem-2021` ("Girls in Stem Project")
- `concept-girls-back-to-school-2021` ("Girls Back to School Project")
- `concept-human-trafficking-2021` ("Campaign against human trafficking")
- `concept-decent-work-2021` ("Decent Work Initiative")
- `concept-student-migrants-2021` ("Supporting student migrants")
- `concept-diaspora-connect-2023` ("Diaspora youth connect project")
- `concept-student-refugee-2023` ("Student Refugee Project")
- `concept-disability-2021` ("Students with Disability")
- `concept-educators-forum-2021` ("Africa Educators' Forum")
- `concept-breast-cancer-activism-2024` ("Breast Cancer and Sixteen Days of Activism")
- `concept-girl-child-day-2022` ("International Day of the Girl Child")
- `concept-eep-2022` ("Education Enrolment Programme")
- `concept-adolescent-360` ("Adolescent 360 Concept Note")
- `concept-breast-cancer` ("Breast Cancer Awareness Concept Note")

### C. Program & Conference Reports (25 items)
- `toolkit-greening-skills-2026` ("Toolkit on Greening Skills and Qualifications in Africa")
- `book-good-practices-greening-2026` ("Book of Good Practices for the Greening of Skills and Qualifications in Africa")
- `greening-skills-engagement-2026` ("Greening Skills and Qualifications in Africa User’s Engagement")
- `report-backpack-hope-2026` ("AASU Backpack of Hope")
- `report-youth-gender-climate-2025` ("Africa Youth Gender and Climate Conference")
- `report-ess-2023` ("AASU Education Support Services")
- `report-africa-health-excon-2022` ("Africa Health Excon Report")
- `report-covid-global-action-2021` ("Solidifying global action in response to the covid-19 pandemic")
- `report-higher-edu-recognition-2021` ("Global convention on the recognition of Higher Education qualifications")
- `report-funding-gap-2023` ("ADDRESSING THE FUNDING GAP")
- `report-climate-sdgs-2021` ("Climate Change, the SDGs and Africa")
- `report-13th-congress-2021` ("Report on the 13th elective congress")
- `report-13th-congress-fr-2021` ("Report on the 13th elective congress - French Version")
- `report-haqaa3-pre-dissemination-2025` ("HAQAA3 PRE-DISSEMINATION Report")
- `report-inauguration-ceremony` ("Report on the AASU Handing Over, Inauguration and Honours Ceremony")
- `report-visit-kapaia-2025` ("Visit of Ms. Augusta Maravilha Kapaia")
- `report-congress-2026` ("2026 Congress Report")
- `report-green-skills-2024` ("Green skills green jobs report")
- `report-cultural-day-2024` ("AASU cultural day report")
- `report-tree-planting-2024` ("AASU tree planting report")
- `report-world-cleanup-2024` ("World clean up report")
- `report-breast-cancer-screening-2024` ("Report on breast cancer screening and awareness talk")
- `report-girl-child-day-2024` ("Report on international day of the girl child")
- `report-financial-literacy-2024` ("Report on the financial literacy conference")
- `report-green-ghana-day-2024` ("Green Ghana Day Report")
- `report-au-summit-engagement-2024` ("AASU engagement at the AU heads of state summit")
- `report-amace-2023` ("Africa Music, Art & Cultural Exhibition (AMACE) 2023 Report")
- `report-youth-peace-security-2023` ("Youth, Peace and Security Report")

### D. Case Books, Policy Briefs & Publications (14 items)
- `case-gbv-everyone-business-2021` ("Why Gender-Based Violence is Everyone's Business")
- `policy-gender-2022` ("Gender Policy")
- `doc-nels-syllabus-2025` ("2025 NELS Syllabus")
- `doc-nels-logistical-pack-2025` ("NELS Participant Logistical Pack")
- `doc-nels-one-sheet-2025` ("NELS One Sheet (A4)")
- `case-decolonising-education` ("Decolonising Education in Africa")
- `case-election-observer` ("Election Observer Mission Report")
- `case-education-social-contract` ("Rewriting the 3rd Education Social Contract")
- `brochure-inauguration` ("AASU Inauguration and Honours Ceremony Brochure")
- `case-4th-ir` ("The 4th Industrial Revolution and African Higher Education")
- `other-travel-advisory-ghana-2026` ("Travel Advisory - UB Trip to Ghana")
- `other-ub-trip-ghana-2026` ("UB Trip to Ghana")

---

## 4. Architectural & Migration Recommendations

### Recommendation 1: Maintain Dual Source in Phase 2
- Do **not** delete `src/data/reportsData.js` during Phase 2.
- Components like `ReportsSection.jsx`, `ClimatePage.jsx`, and `ReportsPage.jsx` draw from `reportsData.js` for standalone PDF downloads.
- `reportsData.js` acts as a reliable static document registry while Supabase handles dynamic articles and press releases.

### Recommendation 2: Optional Future Migration (Phase 3)
If AASU decides to migrate `reportsData.js` to Supabase in a future phase:
1. Create a dedicated Supabase `documents` bucket for storing PDF files.
2. Upload the 78 PDF files from `/public/` to the `documents` bucket.
3. Either:
   - Insert records into `posts` with `type = 'report'` and attach the PDF URL in the `documents` JSONB column.
   - OR create a dedicated `documents` table with fields `(id, title, type, year, priority_area, description, file_url, thumbnail_url, created_at)`.
