import type { Service } from './types';

const sharedFaq = {
  start: { q: 'How should we start?', a: 'Choose one repeatable queue, name its owner, document the approved source material, and agree on what requires escalation before access is granted.' },
  authority: { q: 'What stays with our team?', a: 'Your qualified and authorized leaders retain coaching, safety, health, pricing, payment, contract, credential, privacy, and exception decisions.' }
};

export const services: Service[] = [
  {
    slug: 'class-schedule-support', name: 'Class schedule support', short: 'Maintain class records, instructor coverage, and approved changes without losing operational context.',
    heroImage: '/heroes/class-schedule-support.svg', heroAlt: 'Abstract editorial illustration for class schedule support',
    audience: 'Multi-class gyms, boutique studios, wellness programs, and fitness departments with recurring timetable changes and several instructors.',
    problem: 'Schedule changes often arrive through calls, chat threads, and informal notes. A support role can consolidate approved updates and keep coverage status visible while managers retain authority over programming and staffing decisions.',
    tasks: ['Update approved schedules in the system of record','Maintain a current instructor coverage queue','Prepare routine member and instructor notices','Flag collisions, missing details, and unresolved coverage'],
    inputs: ['Approved class timetable and change request','Instructor availability supplied by an authorized owner','Message templates and distribution rules','Escalation contacts for safety, staffing, and facility exceptions'],
    deliverables: ['Current class schedule record','Coverage status view with clear ownership','Prepared or sent routine notices','Exception list for management review'],
    workflow: [
      { title: 'Collect the approved change', copy: 'Confirm the class, location, time, instructor, effective date, source, and authorizing owner before editing a public schedule.' },
      { title: 'Check connected records', copy: 'Review instructor availability, room or equipment constraints, member-facing listings, and dependent reminders for conflicts.' },
      { title: 'Update and communicate', copy: 'Apply the authorized change, record what changed, and use approved messages for affected instructors or members.' },
      { title: 'Close with evidence', copy: 'Capture completion, unresolved exceptions, and the manager who owns any decision that remains open.' }
    ],
    controls: ['One named schedule source of truth','Approval recorded before material changes','Sampled comparison between request and published record','Daily review of unresolved coverage and collisions'],
    boundaries: ['No independent class programming or instructor selection','No safety, credential, pay, or disciplinary decisions','No promise of coverage until an authorized manager confirms it','No sharing member or trainer data outside approved systems'],
    scenarios: [
      { title: 'Same-week substitute coordination', copy: 'A manager approves the substitute. Support updates the roster, class listing, and standard notices, then records the completed handoff.' },
      { title: 'Seasonal timetable launch', copy: 'Support prepares bulk schedule records from an approved plan and returns exceptions for manager review before publication.' },
      { title: 'Multi-location collision check', copy: 'Support compares instructor and room records across sites and flags conflicting assignments without choosing a replacement.' }
    ],
    faq: [sharedFaq.start, { q: 'Can support choose an instructor?', a: 'No. Staff can organize availability and prepare options, but an authorized fitness leader makes the assignment.' }, sharedFaq.authority]
  },
  {
    slug: 'member-support', name: 'Member support', short: 'Handle routine member communication with consistent answers, clear records, and safe escalation.',
    heroImage: '/heroes/member-support.svg', heroAlt: 'Abstract editorial illustration for fitness member support',
    audience: 'Fitness businesses with recurring questions about schedules, facilities, account processes, program logistics, and approved policies.',
    problem: 'Member requests become expensive when context is scattered or every question reaches a manager. A bounded support queue can answer routine questions and document what needs an authorized decision.',
    tasks: ['Answer approved schedule and facility questions','Document member requests in the chosen system','Route account, safety, and service exceptions','Maintain follow-up status and response evidence'],
    inputs: ['Approved knowledge base and message templates','Current schedules and facility information','Member-support system and identity-check rules','Escalation matrix for account, health, safety, and conduct issues'],
    deliverables: ['Documented member conversation','Consistent approved response','Accurate owner and due date for escalations','Follow-up queue with resolution status'],
    workflow: [
      { title: 'Identify the request', copy: 'Classify the question without collecting unnecessary health, payment, or identity data.' },
      { title: 'Use approved guidance', copy: 'Answer only when current source material directly supports the response.' },
      { title: 'Escalate exceptions', copy: 'Route injuries, safety concerns, disputes, refunds, contract questions, and sensitive records to the designated owner.' },
      { title: 'Record the outcome', copy: 'Document the response, source, next owner, and promised follow-up so the member does not need to repeat the story.' }
    ],
    controls: ['Versioned approved responses','Identity checks before account-specific discussion','Sensitive-data minimization','Regular review of repeat questions and escalations'],
    boundaries: ['No health, nutrition, injury, or exercise advice','No refund, billing, contract, or disciplinary decisions','No emergency or safeguarding triage beyond the approved escalation path','No disclosure of another member or staff record'],
    scenarios: [
      { title: 'Class availability question', copy: 'Support checks the current public timetable and gives the approved booking instructions.' },
      { title: 'Account exception', copy: 'Support records the request and routes it to the authorized membership owner without promising an outcome.' },
      { title: 'Facility concern', copy: 'Support captures essential facts and immediately follows the facility or safety escalation policy.' }
    ],
    faq: [sharedFaq.start, { q: 'Can support resolve refunds or disputes?', a: 'Support can gather the request and prepare the record. An authorized owner decides refunds, credits, disputes, and contract exceptions.' }, sharedFaq.authority]
  },
  {
    slug: 'fitness-lead-follow-up', name: 'Fitness lead follow up', short: 'Keep approved inquiry follow up visible, timely, and connected to the next human decision.',
    heroImage: '/heroes/fitness-lead-follow-up.svg', heroAlt: 'Abstract editorial illustration for fitness lead follow up',
    audience: 'Gyms, studios, fitness programs, and wellness operators that receive inquiries from forms, calls, events, or referral partners.',
    problem: 'Interest cools when inquiries sit in disconnected inboxes or receive inconsistent messages. Support can maintain the queue and approved contact cadence while sales and fitness leaders handle qualification and commitments.',
    tasks: ['Prepare and maintain lead follow-up queues','Send approved informational messages','Record responses and next-action dates','Route qualification, pricing, health, and program-fit questions'],
    inputs: ['Consent-aware inquiry source','Approved message library and contact cadence','Current program, location, and availability information','Ownership rules for consultation, pricing, and qualification'],
    deliverables: ['Current inquiry record and consent status','Documented follow-up history','Scheduled next action or consultation handoff','Exception queue for an authorized owner'],
    workflow: [
      { title: 'Validate the record', copy: 'Confirm the inquiry source, contact permission, program interest, and required fields before outreach.' },
      { title: 'Send the approved next message', copy: 'Use the correct template and current program information without adding unsourced promises.' },
      { title: 'Interpret only the response state', copy: 'Record interested, not now, no response, or owner review needed. Do not make qualification decisions.' },
      { title: 'Hand off with context', copy: 'Give the consultation owner the source, timeline, questions, and requested next step in one reviewable record.' }
    ],
    controls: ['Consent and suppression checks before outreach','Approved templates with version ownership','Cadence limits and clear stop rules','Weekly sampling of message and status accuracy'],
    boundaries: ['No medical or training recommendation','No invented availability, pricing, savings, or result claim','No independent qualification or contract commitment','No continued contact after an applicable opt-out'],
    scenarios: [
      { title: 'Website consultation inquiry', copy: 'Support validates the form, sends the approved acknowledgement, and creates the consultation-owner handoff.' },
      { title: 'Trial-program follow up', copy: 'Support follows the approved cadence and routes detailed program questions to a qualified team member.' },
      { title: 'Dormant inquiry cleanup', copy: 'Support applies the approved status rules and suppression list instead of repeatedly messaging stale contacts.' }
    ],
    faq: [sharedFaq.start, { q: 'Can support sell memberships?', a: 'Support can share approved information and coordinate the next step. Pricing, qualification, promises, and agreement decisions remain with authorized staff.' }, sharedFaq.authority]
  },
  {
    slug: 'trainer-records', name: 'Trainer records support', short: 'Maintain approved credential, profile, availability, and document status records for management review.',
    heroImage: '/heroes/trainer-records.svg', heroAlt: 'Abstract editorial illustration for trainer record support',
    audience: 'Fitness organizations that coordinate multiple trainers, credentials, class formats, locations, and document-renewal cycles.',
    problem: 'A record can look complete while an expiry date, source document, or review owner is missing. Support can maintain evidence and reminders without making credential or fitness-practice judgments.',
    tasks: ['Update approved trainer profile fields','Track supplied document and expiry status','Maintain availability and location notes','Flag missing, conflicting, or overdue records'],
    inputs: ['Trainer-submitted or manager-approved documents','Required-field and retention policy','Authorized credential criteria and review owner','Secure system with role-based access'],
    deliverables: ['Current trainer profile record','Expiry and missing-document queue','Review-ready evidence links','Exception log with accountable owner'],
    workflow: [
      { title: 'Receive through an approved channel', copy: 'Keep documents out of informal chat and place them only in the authorized record system.' },
      { title: 'Check administrative completeness', copy: 'Compare required fields, dates, names, and document presence without judging professional validity.' },
      { title: 'Route for qualified review', copy: 'Send credential, safeguarding, identity, or compliance questions to the designated decision owner.' },
      { title: 'Maintain status and reminders', copy: 'Record the owner decision and prepare reminders according to the approved renewal policy.' }
    ],
    controls: ['Least-privilege document access','Required-field and expiry validation','Qualified approval separated from administrative entry','Retention and deletion rules for sensitive records'],
    boundaries: ['No credential verification beyond documented administrative checks','No hiring, assignment, safeguarding, or disciplinary decision','No storage in personal drives or inboxes','No change to an approval status without owner evidence'],
    scenarios: [
      { title: 'Renewal cycle preparation', copy: 'Support identifies upcoming dates and missing documents, then routes the review queue to the qualified owner.' },
      { title: 'New trainer onboarding', copy: 'Support creates the approved record shell and tracks received items without marking the trainer cleared.' },
      { title: 'Multi-site access review', copy: 'Support compares approved assignments with access records and returns discrepancies for manager action.' }
    ],
    faq: [sharedFaq.start, { q: 'Can support approve a credential?', a: 'No. Staff can organize documents and status evidence. A qualified, authorized owner determines validity and approval.' }, sharedFaq.authority]
  },
  {
    slug: 'membership-admin', name: 'Membership administration support', short: 'Organize routine records around starts, approved changes, pauses, and cancellations.',
    heroImage: '/heroes/membership-admin.svg', heroAlt: 'Abstract editorial illustration for membership administration',
    audience: 'Fitness operators with defined membership policies, recurring account requests, and authorized staff who retain financial and contract decisions.',
    problem: 'Membership requests touch communication, contracts, payment systems, access, and scheduling. Support can prepare complete records and apply explicitly approved changes while exceptions remain with accountable owners.',
    tasks: ['Prepare account records for authorized review','Document and apply explicitly approved changes','Maintain request, owner, and status notes','Escalate disputes, refunds, and contract questions'],
    inputs: ['Verified request and approved identity-check procedure','Current membership policy and agreement record','Authorized decision or standard operating rule','Secure account system and audit requirements'],
    deliverables: ['Complete request record','Applied standard change with evidence','Pending-decision queue','Member-facing confirmation from an approved template'],
    workflow: [
      { title: 'Verify the request path', copy: 'Use the approved identity and authorization checks before opening account-specific details.' },
      { title: 'Separate standard from exceptional', copy: 'Apply only changes covered by a current rule or explicit owner approval.' },
      { title: 'Update connected systems', copy: 'Keep account, access, schedule, and communication records aligned within the approved scope.' },
      { title: 'Confirm and retain evidence', copy: 'Send the approved confirmation and preserve the request, decision source, and completion record.' }
    ],
    controls: ['Identity and authorization checks','Separation of financial decisions from data entry','Audit trail for material account changes','Daily review of incomplete or conflicting requests'],
    boundaries: ['No independent refund, fee, price, or contract decision','No handling of full payment-card data','No legal interpretation or promise outside approved policy','No bypass of authorization or access controls'],
    scenarios: [
      { title: 'Approved membership pause', copy: 'Support checks the approval, applies the standard change, and sends the approved confirmation.' },
      { title: 'Cancellation dispute', copy: 'Support compiles the request and agreement record for the authorized decision owner without promising a result.' },
      { title: 'New-member record completion', copy: 'Support tracks missing administrative fields and routes health or waiver questions to the proper owner.' }
    ],
    faq: [sharedFaq.start, { q: 'Can support issue a refund?', a: 'No. Support can document the request and apply a refund only after a properly authorized decision through the approved system.' }, sharedFaq.authority]
  },
  {
    slug: 'fitness-back-office', name: 'Fitness back office support', short: 'Prepare operational records, work queues, and routine summaries without blurring decision ownership.',
    heroImage: '/heroes/fitness-back-office.svg', heroAlt: 'Abstract editorial illustration for fitness back-office support',
    audience: 'Fitness businesses whose leaders need reliable administrative follow-through across classes, members, trainers, vendors, and internal reporting.',
    problem: 'Back-office work becomes fragile when tasks live in individual memory and summaries hide the source record. Support can maintain queues and evidence so leaders can review real operating conditions.',
    tasks: ['Organize approved source records','Maintain recurring operational work queues','Prepare factual status summaries','Flag missing inputs, overdue work, and process exceptions'],
    inputs: ['Defined systems of record','Recurring calendar and completion standards','Named workflow and decision owners','Approved summary format and access policy'],
    deliverables: ['Current operational queue','Source-linked status summary','Exception and overdue-work register','Documented handoff for owner decisions'],
    workflow: [
      { title: 'Define the record boundary', copy: 'Name which system controls each workflow and which informal sources must be reconciled.' },
      { title: 'Maintain the recurring cadence', copy: 'Prepare daily, weekly, or monthly work from the approved source and completion standard.' },
      { title: 'Report facts and exceptions', copy: 'Separate completed work, missing input, overdue items, and owner decisions without inventing performance conclusions.' },
      { title: 'Improve after review', copy: 'Use leader feedback and recurring exception patterns to revise the documented workflow.' }
    ],
    controls: ['Source-linked updates and summaries','Named owner for every unresolved exception','Access limited by workflow need','Sampled reconciliation against original records'],
    boundaries: ['No accounting, legal, health, safety, or compliance judgment','No unsupported metric, forecast, or performance claim','No silent change to policy or source data','No credential sharing or unapproved exports'],
    scenarios: [
      { title: 'Weekly operations brief', copy: 'Support compiles source-linked schedule, member, lead, and record exceptions for manager review.' },
      { title: 'Recurring vendor coordination', copy: 'Support tracks approved requests and dates while commercial decisions stay with the owner.' },
      { title: 'Process cleanup', copy: 'Support maps a repeated queue, identifies missing fields, and prepares a proposed checklist for owner approval.' }
    ],
    faq: [sharedFaq.start, { q: 'Can support create management reports?', a: 'Staff can prepare factual, source-linked summaries. Leaders retain interpretation, forecasting, and business decisions.' }, sharedFaq.authority]
  }
];
