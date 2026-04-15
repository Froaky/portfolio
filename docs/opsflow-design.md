# OpsFlow - Flagship Project Design

## Objective
A modern internal platform for managing operational requests, approvals, and task routing. Designed to showcase backend architecture, data modeling, and fullstack implementation skills.

## Core Features
- **Authentication**: Secure login for different user roles.
- **Request Dashboard**: View status of current and past requests.
- **Workflow Engine**: 
    - Transition requests through states (Draft -> Pending -> Approved/Rejected -> Done).
    - Email/Notification alerts on status change.
- **Audit Log**: Immutable history of all actions taken on a request.
- **Role-Based Access Control (RBAC)**: Different views for Requesters, Approvers, and Admins.

## Database Schema (PostgreSQL)

### Users
- `id` (UUID, PK)
- `email` (String, Unique)
- `password_hash` (String)
- `full_name` (String)
- `role` (Enum: requester, approver, admin)
- `created_at` (Timestamp)

### Requests
- `id` (UUID, PK)
- `title` (String)
- `description` (Text)
- `status` (Enum: draft, pending, approved, rejected, completed)
- `requester_id` (UUID, FK -> Users.id)
- `assigned_approver_id` (UUID, FK -> Users.id, Optional)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

### AuditLogs
- `id` (UUID, PK)
- `request_id` (UUID, FK -> Requests.id)
- `user_id` (UUID, FK -> Users.id)
- `action` (String, e.g., "status_change", "comment_added")
- `from_status` (String, Optional)
- `to_status` (String, Optional)
- `details` (JSONB)
- `created_at` (Timestamp)

## Technology Stack
- **Frontend**: Next.js (App Router), CSS Modules/Vanilla CSS.
- **Backend**: Next.js API Routes / Server Actions.
- **Database**: PostgreSQL (Prisma or Drizzle ORM).
- **Auth**: NextAuth.js or simple JWT.
- **Deployment**: Vercel + Neon (Postgres).
