import type { ResearchPost } from '../types';

type ResearchSource = ResearchPost['sources'][number];

const sources: ResearchSource[] = [
  { label: 'Privacy Framework', publisher: 'National Institute of Standards and Technology', url: 'https://www.nist.gov/privacy-framework', checkedAt: '2026-10-12' },
  { label: 'Digital Identity Guidelines', publisher: 'National Institute of Standards and Technology', url: 'https://pages.nist.gov/800-63-4/', checkedAt: '2026-10-12' },
  { label: 'Protecting Personal Information', publisher: 'Federal Trade Commission', url: 'https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business', checkedAt: '2026-10-12' },
  { label: 'Federal Plain Language Guidelines', publisher: 'PlainLanguage.gov', url: 'https://www.plainlanguage.gov/guidelines/', checkedAt: '2026-10-12' }
];

export const october12ResearchPosts: ResearchPost[] = [
  {
    slug: 'fitness-credential-verification-reproducibility-study',
    title: 'A Review Protocol for Fitness Credential Verification',
    summary: 'A proposed, source-led protocol for testing whether independent reviewers can reproduce a fitness credential status from retained evidence.',
    publishedAt: '2026-10-12', cluster: 'Credential operations', image: '/october-12/fitness-credential-verification-reproducibility-study.webp',
    finding: 'Protocol premise: a credential decision is reviewable only when another authorized reviewer can reconstruct the issuer source, status, scope, decision owner, and schedule consequence. This page proposes a method; it does not report an executed study or measured result.',
    methodology: [
      'Observation unit. Select one credential record from submission through issuer check, owner decision, schedule use, and renewal. Define permitted status labels before sampling so reviewers do not invent categories after seeing evidence.',
      'Sample and exclusions. Declare the cohort, date range, credential types, issuer channels, and excluded records. Include ordinary renewals plus mismatched names, inaccessible issuer sources, scope restrictions, corrections, and credentials that expire during an assignment window.',
      'Independent reconstruction. Give two authorized reviewers the retained source package without private verbal context. Each records the source consulted, status, uncertainty, required owner decision, and any scheduling restriction; disagreements remain visible for adjudication.',
      'Reporting plan. Publish numerators with denominators for reproducible status, missing evidence, unresolved disagreement, and late correction. Do not convert protocol counts, checklist fields, or planned sample sizes into performance claims.'
    ],
    findings: [
      'Operational consideration: preserve submitted evidence separately from issuer verification and the qualified owner’s approval.',
      'Operational consideration: use pending or unverifiable states when evidence is missing rather than substituting a likely answer.',
      'Operational consideration: retain original and corrected values with actors and timestamps so schedule consequences remain traceable.',
      'Limitation: requirements vary by issuer, role, facility, insurer, and jurisdiction; qualified owners must adapt and approve this protocol.'
    ], sources
  },
  {
    slug: 'group-class-substitute-readiness-study',
    title: 'A Review Protocol for Group Class Substitute Readiness',
    summary: 'A proposed protocol for testing whether a substitute record contains the evidence needed before a class assignment is released.',
    publishedAt: '2026-10-12', cluster: 'Coverage planning', image: '/october-12/group-class-substitute-readiness-study.webp',
    finding: 'Protocol premise: availability is not readiness. A review should test whether class scope, site approval, credential state, access, explicit acceptance, and contingency ownership can be reconstructed. No original study or result is reported here.',
    methodology: [
      'Observation unit. Follow one substitute request from the initial vacancy through candidate outreach, manager approval, explicit acceptance, access preparation, and class completion or cancellation.',
      'Sample and adverse cases. Declare sites, formats, dates, and exclusions. Include a declined offer, an expired response, a format mismatch, a late schedule revision, uncertain building access, and a credential that changes before class time.',
      'Readiness comparison. Have reviewers classify availability, format approval, site access, credential evidence, acceptance, and manager release as separate states. A single ready label must not hide a missing prerequisite.',
      'Reporting plan. Report the proportion of sampled requests with each required state and acknowledged owner, alongside unresolved cases and exclusions. Planned checks are not evidence of current roster performance.'
    ],
    findings: [
      'Operational consideration: roster design should keep availability separate from owner-approved readiness for a specific class and site.',
      'Operational consideration: schedule changes require renewed acceptance when they alter the assignment a substitute agreed to cover.',
      'Operational consideration: urgency changes escalation timing, not professional-scope or safety authority.',
      'Limitation: each facility defines its own coverage, access, emergency, and qualification rules.'
    ], sources
  },
  {
    slug: 'fitness-schedule-credential-drift-study',
    title: 'A Review Protocol for Schedule and Credential Drift',
    summary: 'A proposed protocol for checking whether future assignments remain aligned with current credential and facility decisions after records change.',
    publishedAt: '2026-10-12', cluster: 'Schedule governance', image: '/october-12/fitness-schedule-credential-drift-study.webp',
    finding: 'Protocol premise: a schedule can become inconsistent after publication when credentials, role scope, site rules, or assignment dates change. This brief proposes a drift test and reports no measured prevalence.',
    methodology: [
      'Observation unit. Pair one published assignment with the credential, format-scope, site-approval, and access records that governed it at publication and at service time.',
      'Change events. Declare which events trigger comparison: renewal, expiration, corrected identity, role restriction, class rename, site transfer, access revocation, and schedule revision. Record event time and propagation time separately.',
      'Drift test. Recompute the assignment state from retained source records at each change point. Route any mismatch to named schedule and credential owners without allowing the reviewer to waive the controlling rule.',
      'Reporting plan. Report sampled assignments, change events, mismatches, time unresolved, exclusions, and owner acknowledgement. Do not characterize a planned detector as an observed drift rate.'
    ],
    findings: [
      'Operational consideration: event-driven checks are stronger than relying only on a periodic expiration reminder.',
      'Operational consideration: historical snapshots are needed to explain whether an assignment was valid when published and when performed.',
      'Operational consideration: credential, class scope, facility approval, and access are separate controls even when one person owns several decisions.',
      'Limitation: this protocol must be configured to the organization’s actual systems and cannot establish legal or professional requirements.'
    ], sources
  },
  {
    slug: 'fitness-incident-record-completeness-study',
    title: 'A Review Protocol for Fitness Incident Records',
    summary: 'A proposed protocol for checking whether incident records preserve observations, chronology, routing, and owner acknowledgement without remote diagnosis.',
    publishedAt: '2026-10-12', cluster: 'Incident coordination', image: '/october-12/fitness-incident-record-completeness-study.webp',
    finding: 'Protocol premise: administrative completeness means source observations and required handoffs are traceable; it does not mean an incident was clinically assessed, investigated, or resolved. This is a proposed review, not a completed study.',
    methodology: [
      'Observation unit. Select one incident record from first report through emergency routing when applicable, owner acknowledgement, corrections, and administrative closure. Keep investigation and clinical records outside the administrative completeness score.',
      'Evidence classes. Mark direct observation, quoted report, system event, owner decision, and inference separately. Include timestamp, timezone, location, reporter channel, notifications, and correction history only when permitted by policy.',
      'Adverse cases. Include an urgent report, conflicting accounts, a late correction, a failed notification, an inaccessible attachment, and sensitive health or safeguarding information placed in the wrong channel.',
      'Reporting plan. Report missing required fields, failed acknowledgements, uncontrolled copies, unresolved routing, and exclusions. Never publish private incident content or infer safety performance from the administrative sample.'
    ],
    findings: [
      'Operational consideration: emergency action precedes routine documentation and remains with onsite or local authorities.',
      'Operational consideration: preserve conflicting accounts rather than asking administrative staff to select a true version.',
      'Operational consideration: administrative closure is distinct from investigation, insurance, legal, safeguarding, or clinical resolution.',
      'Limitation: safety, privacy, employment, insurance, and record-retention owners must approve the review design.'
    ], sources
  },
  {
    slug: 'fitness-staff-access-revocation-study',
    title: 'A Review Protocol for Fitness Staff Access Revocation',
    summary: 'A proposed protocol for checking whether physical and digital access ends across every assigned facility after a role or site change.',
    publishedAt: '2026-10-12', cluster: 'Access governance', image: '/october-12/fitness-staff-access-revocation-study.webp',
    finding: 'Protocol premise: a submitted removal ticket is not proof of revocation. Reviewers should seek completion evidence from every in-scope physical and digital system. No access audit was executed for this page.',
    methodology: [
      'Observation unit. Follow one access holder across approval, use, role or site change, revocation request, completion evidence, and independent verification. Inventory each facility and system separately.',
      'Scope and sample. Declare systems, locations, date range, worker categories, temporary grants, and exclusions. Include a transfer, departed worker, dormant account, duplicate identity, lost device, and access with no current assignment.',
      'Verification. Compare source assignments with named-account, badge, door, scheduling, and member-system states. Record approving and revoking owners; do not treat a credential status as access authority.',
      'Reporting plan. Report grants reviewed, confirmed removals, unresolved systems, grants without current purpose, completion time, and exclusions. Protect detailed access data and avoid publishing exploitable system information.'
    ],
    findings: [
      'Operational consideration: access should be granted by site and system for a documented purpose, not inherited from a generic active status.',
      'Operational consideration: temporary access needs an end date and completion evidence, not only an approval date.',
      'Operational consideration: physical and digital revocation can disagree and therefore require separate verification.',
      'Limitation: security and system owners must define the authoritative evidence and acceptable verification method.'
    ], sources
  }
];
