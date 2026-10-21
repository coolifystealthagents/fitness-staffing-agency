import type { BlogPost } from '../types';

export const october12BlogPosts: BlogPost[] = [
  {
    "slug": "trainer-credential-verification-handoff",
    "title": "Building a Trainer Credential Verification Handoff",
    "description": "A practical guide to preserving issuer evidence, escalation, and owner decisions when trainer credentials are reviewed.",
    "category": "Credential operations",
    "image": "/october-12/trainer-credential-verification-handoff.webp",
    "internalService": "/services/trainer-records",
    "source": {
      "label": "ACE recertification guidance",
      "url": "https://www.acefitness.org/fitness-certifications/recertification/"
    },
    "sections": [
      {
        "heading": "Define what verification means",
        "paragraphs": [
          "A credential record should distinguish a document supplied by a trainer from a status verified with an issuer. Record the credential name, issuer, identifier when appropriate, scope, expiration date, verification date, and verifier without turning a copied card into an approval decision.",
          "The fitness program director or credentialing owner decides whether the evidence is sufficient for an assignment. Administrative support can organize the evidence and flag gaps, but it should not certify competence or waive a facility rule."
        ]
      },
      {
        "heading": "Preserve the source and chronology",
        "paragraphs": [
          "Keep the submitted record beside the issuer result and note the channel and timestamp used for the check. If a source cannot be reached, mark the status pending or unverifiable rather than inferring that a familiar credential remains current.",
          "Corrections should be appended with their author and time. Replacing the old value destroys the history needed to understand whether an assignment was made from stale information."
        ]
      },
      {
        "heading": "Route exceptions before scheduling",
        "paragraphs": [
          "Create explicit exception states for expired evidence, a name mismatch, a restricted scope, an inaccessible issuer source, and a credential that expires during the assignment window. Each state needs a named owner and a rule that prevents administrative staff from making the consequential decision.",
          "A scheduling handoff is complete only when the decision owner records the permitted scope and the scheduler can see the approved state without opening private supporting documents."
        ]
      },
      {
        "heading": "Review the handoff evidence",
        "paragraphs": [
          "Sample records across new submissions, renewals, corrections, and denied assignments. Confirm that another reviewer can reconstruct the source, status, decision, and schedule consequence from retained evidence.",
          "Use gaps to revise the checklist, not to score individual trainers. Credential requirements vary by role, facility, insurer, and jurisdiction, so the operating owner must maintain the controlling rule."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can remote staff approve a trainer credential?",
        "a": "No. They can collect and organize source evidence, while the qualified credential owner makes the approval decision."
      },
      {
        "q": "What happens when an issuer cannot be reached?",
        "a": "Keep the record pending or unverifiable and route it to the named owner before scheduling."
      }
    ],
    "internalSibling": "/blog/group-fitness-substitute-roster",
    "publishedAt": "2026-10-12",
    "readTime": "8 min read"
  },
  {
    "slug": "group-fitness-substitute-roster",
    "title": "Maintaining a Ready Group Fitness Substitute Roster",
    "description": "A guide to keeping substitute availability, class scope, site approval, and acceptance evidence aligned.",
    "category": "Coverage planning",
    "image": "/october-12/group-fitness-substitute-roster.webp",
    "internalService": "/services/class-schedule-support",
    "source": {
      "label": "OSHA emergency preparedness guidance",
      "url": "https://www.osha.gov/emergency-preparedness"
    },
    "sections": [
      {
        "heading": "Separate availability from readiness",
        "paragraphs": [
          "A person can be available and still not be ready for a specific class. The roster should keep availability apart from approved format, site access, current credential state, and any local orientation requirement.",
          "This separation prevents a fast search from silently becoming an authorization decision. A manager remains responsible for confirming that the proposed substitute fits the class and facility rules."
        ]
      },
      {
        "heading": "Record the coverage request",
        "paragraphs": [
          "Capture the class, location, start time, format, expected attendance context, access instructions, and response deadline. Link the request to the original schedule entry so later edits do not create two competing versions.",
          "Urgency should change the escalation path, not erase required checks. If readiness cannot be confirmed, the record should show that the class needs an owner decision or cancellation plan."
        ]
      },
      {
        "heading": "Require explicit acceptance",
        "paragraphs": [
          "A tentative message is not coverage. Record the substitute's acceptance, the exact assignment accepted, the manager who approved it, and any unresolved access or equipment issue.",
          "Notify only the people who need the change and avoid exposing member or health information in the coverage thread. Keep private evidence in the controlled source system."
        ]
      },
      {
        "heading": "Close the loop after the class",
        "paragraphs": [
          "Confirm whether the class occurred, whether access worked, and whether a late change created a new roster requirement. Record exceptions such as a no-show or format mismatch without asking administrative staff to judge coaching quality.",
          "Periodic roster review should remove stale availability and expired approvals so an old green status is not mistaken for current readiness."
        ]
      }
    ],
    "faq": [
      {
        "q": "Is an available instructor automatically approved?",
        "a": "No. Availability, format scope, credentials, site access, and manager approval are separate states."
      },
      {
        "q": "Who can change the class format?",
        "a": "The authorized fitness manager or program owner, not administrative support."
      }
    ],
    "internalSibling": "/blog/aquatics-staff-expiry-control",
    "publishedAt": "2026-10-12",
    "readTime": "8 min read"
  },
  {
    "slug": "aquatics-staff-expiry-control",
    "title": "Controlling Credential Expiry for Aquatics Staff",
    "description": "A guide to monitoring aquatics credential dates without replacing qualified safety decisions.",
    "category": "Aquatics staffing",
    "image": "/october-12/aquatics-staff-expiry-control.webp",
    "internalService": "/services/trainer-records",
    "source": {
      "label": "American Red Cross lifeguarding information",
      "url": "https://www.redcross.org/take-a-class/lifeguarding"
    },
    "sections": [
      {
        "heading": "Build the expiry inventory",
        "paragraphs": [
          "List each required credential separately with its issuer, scope, verified expiration date, assigned sites, and responsible owner. Do not collapse lifeguarding, CPR, first aid, or facility-specific requirements into one generic current field.",
          "The controlling owner should define which source is authoritative and how far ahead renewal work begins. Administrative staff maintain dates and evidence but do not decide whether a credential satisfies a safety requirement."
        ]
      },
      {
        "heading": "Use staged reminders",
        "paragraphs": [
          "Create reminder points that leave time for training availability, issuer processing, and owner review. A reminder should name the credential and consequence rather than send a vague message that something is expiring.",
          "Escalate non-response through a documented path. Do not expose credential documents in broad email chains when a link to the controlled record is sufficient."
        ]
      },
      {
        "heading": "Protect the schedule boundary",
        "paragraphs": [
          "Compare expiration dates with future assignments and flag any shift that extends beyond approved evidence. The system should surface the conflict before publication rather than rely on a last-minute memory check.",
          "Only the designated safety or credential owner can approve, restrict, or remove an assignment. Support staff should never infer an exception from prior practice."
        ]
      },
      {
        "heading": "Test adverse cases",
        "paragraphs": [
          "Review examples involving a corrected date, a different legal name, an inaccessible issuer portal, a credential with limited scope, and a renewal that has been booked but not completed. Each case should end in a clear status and owner action.",
          "After a system or policy change, retest the date calculation and notification path. A dashboard is useful only when its source dates and decision rules remain current."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a booked renewal be treated as current?",
        "a": "Not unless the authorized owner and controlling rule explicitly allow it; the record should distinguish booked from completed."
      },
      {
        "q": "Who decides whether an aquatics credential is sufficient?",
        "a": "The facility's qualified safety or credential owner."
      }
    ],
    "internalSibling": "/blog/youth-fitness-staff-boundary",
    "publishedAt": "2026-10-12",
    "readTime": "8 min read"
  },
  {
    "slug": "youth-fitness-staff-boundary",
    "title": "Defining Safeguarding Boundaries for Youth Fitness Staff",
    "description": "A guide to administrative coordination that keeps safeguarding decisions with designated qualified owners.",
    "category": "Safeguarding",
    "image": "/october-12/youth-fitness-staff-boundary.webp",
    "internalService": "/services/fitness-back-office",
    "source": {
      "label": "U.S. Center for SafeSport resources",
      "url": "https://uscenterforsafesport.org/"
    },
    "sections": [
      {
        "heading": "Name the safeguarding owner",
        "paragraphs": [
          "Every youth program needs a named safeguarding authority and an emergency route that does not depend on a remote administrator interpreting an allegation. Contact details, coverage hours, and backup ownership should be visible to staff who receive messages.",
          "Administrative support can maintain approved rosters and route reports exactly as instructed. It must not investigate, assess credibility, promise confidentiality, or decide whether conduct is safe."
        ]
      },
      {
        "heading": "Limit information collection",
        "paragraphs": [
          "Forms and inbox procedures should request only the information needed to route the matter. Avoid collecting medical details, identity documents, or narrative histories in general-purpose tools when a controlled safeguarding channel exists.",
          "Access should be limited to named roles, and retention should follow the organization's policy and legal advice. A convenient shared spreadsheet is not an acceptable default for sensitive youth records."
        ]
      },
      {
        "heading": "Use exact escalation triggers",
        "paragraphs": [
          "Write observable triggers such as a reported boundary concern, missing authorized pickup, unsupervised access, or an urgent safety message. Pair each trigger with an immediate destination and prohibit support staff from downgrading it based on tone or familiarity.",
          "For imminent danger, staff follow the facility's emergency procedure and local emergency requirements. The administrative queue is never a substitute for emergency response."
        ]
      },
      {
        "heading": "Audit access and acknowledgement",
        "paragraphs": [
          "Check that the designated owner received the routed item and that no unnecessary copy remains in ordinary support systems. Record routing time and acknowledgement without summarizing conclusions the administrator is not qualified to make.",
          "Review the procedure whenever program locations, vendors, staff roles, or safeguarding rules change. Training should use synthetic scenarios rather than real youth records."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a remote assistant investigate a safeguarding report?",
        "a": "No. They may route information under an approved procedure; designated safeguarding and emergency authorities retain judgment and action."
      },
      {
        "q": "Should reports be placed in the normal member inbox?",
        "a": "Use the organization's controlled safeguarding channel and minimum-necessary access instead."
      }
    ],
    "internalSibling": "/blog/fitness-staff-shift-acceptance",
    "publishedAt": "2026-10-12",
    "readTime": "8 min read"
  },
  {
    "slug": "fitness-staff-shift-acceptance",
    "title": "Using Shift Acceptance Gates for Fitness Facilities",
    "description": "A guide to distinguishing offers, acknowledgements, acceptance, and release-to-work decisions.",
    "category": "Schedule control",
    "image": "/october-12/fitness-staff-shift-acceptance.webp",
    "internalService": "/services/class-schedule-support",
    "source": {
      "label": "OSHA recommended practices for safety programs",
      "url": "https://www.osha.gov/safety-management"
    },
    "sections": [
      {
        "heading": "Define the acceptance states",
        "paragraphs": [
          "Use separate states for offered, viewed, accepted, declined, expired, cancelled, and manager released. A message delivered to a phone is not evidence that the person accepted the exact shift.",
          "Each transition should capture actor and time. Managers define which approvals, access checks, or credential checks must exist before a shift can be released."
        ]
      },
      {
        "heading": "Send a complete offer",
        "paragraphs": [
          "Include site, role, date, local start and end time, required scope, response deadline, and a link to controlled instructions. Avoid including member details or access credentials in the offer message.",
          "If the shift changes, issue a revised offer instead of silently editing the accepted record. The worker should be able to see what changed before confirming again."
        ]
      },
      {
        "heading": "Escalate unfilled work",
        "paragraphs": [
          "When an offer expires or is declined, reopen the coverage queue and alert the named scheduler. Do not mark a shift covered because several people were contacted.",
          "Urgent coverage still follows the facility's minimum readiness checks. If those checks cannot be completed, the authorized manager chooses the operational response."
        ]
      },
      {
        "heading": "Reconcile after completion",
        "paragraphs": [
          "Compare the accepted shift with attendance or completion evidence and record exceptions for the payroll or operations owner. Administrative staff can prepare the discrepancy but do not decide pay, discipline, or safety consequences.",
          "Review repeated late changes by site and role to improve lead time. Keep the analysis focused on workflow conditions rather than unsupported conclusions about individuals."
        ]
      }
    ],
    "faq": [
      {
        "q": "Does a delivered message count as acceptance?",
        "a": "No. Capture an explicit acceptance tied to the exact shift version."
      },
      {
        "q": "Who can release a worker to the shift?",
        "a": "The authorized facility or scheduling owner under the organization's rules."
      }
    ],
    "internalSibling": "/blog/personal-training-client-handoff",
    "publishedAt": "2026-10-12",
    "readTime": "8 min read"
  },
  {
    "slug": "personal-training-client-handoff",
    "title": "Separating Client Handoff from Training Judgment",
    "description": "A guide to coordinating personal-training handoffs without transferring coaching or health judgment to administrative staff.",
    "category": "Client continuity",
    "image": "/october-12/personal-training-client-handoff.webp",
    "internalService": "/services/member-support",
    "source": {
      "label": "FTC: Protecting Personal Information",
      "url": "https://search.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business-0"
    },
    "sections": [
      {
        "heading": "Define the administrative handoff",
        "paragraphs": [
          "A support handoff can cover appointment status, approved contact preference, package administration, and the next coordination step. It should not summarize diagnoses, injuries, or training recommendations in a general service queue.",
          "The trainer or qualified program owner controls exercise decisions and any interpretation of health information. Support staff use approved wording and route questions outside that wording."
        ]
      },
      {
        "heading": "Minimize the client record",
        "paragraphs": [
          "Identify the smallest set of fields needed to coordinate the next appointment. Link to controlled systems rather than copying sensitive notes into chat, email, or task descriptions.",
          "Use named accounts and role-based access. Remove access when the support assignment ends, and avoid shared credentials even when the handoff is temporary."
        ]
      },
      {
        "heading": "Handle changes and exceptions",
        "paragraphs": [
          "Create routes for trainer unavailability, client cancellation, package questions, accessibility requests, and messages that mention pain or injury. The last category goes to qualified staff or the emergency path, not to an administrative script.",
          "Record what was communicated and which owner received the exception. Do not record a clinical interpretation or promise a training outcome."
        ]
      },
      {
        "heading": "Confirm continuity",
        "paragraphs": [
          "Close the handoff when the next administrative action is accepted by its owner, not merely when a message is sent. Sample records for missed acknowledgements and duplicate outreach.",
          "Ask clients only for information the receiving role actually needs. If a new purpose appears, review consent, access, and retention before expanding the record."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can support staff answer injury questions?",
        "a": "No. They should use the approved escalation path to qualified personnel or emergency resources."
      },
      {
        "q": "What belongs in the handoff?",
        "a": "Only the minimum administrative facts needed to coordinate the next approved step."
      }
    ],
    "internalSibling": "/blog/fitness-facility-opening-coverage",
    "publishedAt": "2026-10-12",
    "readTime": "8 min read"
  },
  {
    "slug": "fitness-facility-opening-coverage",
    "title": "Verifying Opening Coverage for a Fitness Facility",
    "description": "A guide to proving that opening roles, access, safety checks, and contingencies have accountable owners.",
    "category": "Facility operations",
    "image": "/october-12/fitness-facility-opening-coverage.webp",
    "internalService": "/services/class-schedule-support",
    "source": {
      "label": "OSHA emergency action plan guidance",
      "url": "https://www.osha.gov/emergency-preparedness/guides/emergency-action-plan"
    },
    "sections": [
      {
        "heading": "List the opening roles",
        "paragraphs": [
          "Define which roles must be onsite, their arrival windows, and which responsibilities cannot be performed remotely. Opening coverage is more than a name on a schedule when access, safety, or supervision duties require specific authority.",
          "The facility owner sets the minimum coverage rule. Administrative staff can compare the roster with that rule but cannot waive it."
        ]
      },
      {
        "heading": "Confirm access and readiness",
        "paragraphs": [
          "Check explicit acceptance, approved site access, required current records, and acknowledgement of the opening checklist. Never transmit door codes or alarm credentials through broad scheduling messages.",
          "A green status should point to the source evidence and its time. If access is uncertain, route it before the opening window rather than assuming prior access still works."
        ]
      },
      {
        "heading": "Prepare a contingency path",
        "paragraphs": [
          "Name the manager who decides whether to delay opening, restrict areas, or activate backup coverage. The path should include emergency contacts and a response deadline.",
          "Support staff may initiate the documented escalation. They should not make safety, security, staffing, or public-notice decisions unless that authority is formally part of their role."
        ]
      },
      {
        "heading": "Capture the opening outcome",
        "paragraphs": [
          "Record whether required roles arrived and whether access or checklist exceptions occurred. Keep sensitive security details out of the general completion note.",
          "Review recurring exceptions such as late acknowledgements or stale access records. Improvements should target the source system and handoff timing, not add unsupported surveillance."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a remote assistant decide to open with reduced coverage?",
        "a": "No. That decision belongs to the authorized facility and safety owner."
      },
      {
        "q": "Should access codes be included in shift messages?",
        "a": "No. Use controlled access systems and minimum-necessary disclosure."
      }
    ],
    "internalSibling": "/blog/instructor-class-format-scope",
    "publishedAt": "2026-10-12",
    "readTime": "8 min read"
  },
  {
    "slug": "instructor-class-format-scope",
    "title": "Matching Instructor Scope to Class Format",
    "description": "A guide to documenting class-format approval without asking administrative staff to judge professional competence.",
    "category": "Role matching",
    "image": "/october-12/instructor-class-format-scope.webp",
    "internalService": "/services/trainer-records",
    "source": {
      "label": "ACE group fitness certification information",
      "url": "https://www.acefitness.org/fitness-certifications/group-fitness-certification/default.aspx"
    },
    "sections": [
      {
        "heading": "Create a format taxonomy",
        "paragraphs": [
          "Use the organization's approved class names and define which evidence or internal approval applies to each. Avoid free-text labels that make the same format appear under several names.",
          "Qualified fitness leadership owns the taxonomy and determines scope. Administrative support maintains the mapping and flags unknown combinations."
        ]
      },
      {
        "heading": "Link people to approved scope",
        "paragraphs": [
          "For each instructor, record the formats approved by the owner, effective dates, restrictions, and source evidence. Do not infer approval for a new format from general experience or popularity.",
          "Keep expired, pending, and restricted states distinct. The schedule should consume only the owner-approved state."
        ]
      },
      {
        "heading": "Validate each assignment",
        "paragraphs": [
          "Compare the scheduled format and site rule with the instructor's current approved scope before publication. If a class is renamed or materially changed, send it back for owner review.",
          "A substitute must pass the same format check; being on the general roster is not enough. Record the decision without exposing unnecessary credential documents."
        ]
      },
      {
        "heading": "Review changes over time",
        "paragraphs": [
          "Audit new formats, instructor updates, and exceptions to ensure the taxonomy and approvals still match actual operations. Remove obsolete labels rather than maintaining silent aliases.",
          "Any decision about competence, safety, or professional scope remains with qualified leadership. The administrative record supports that decision but does not create it."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can general trainer experience imply approval for every format?",
        "a": "No. Use the qualified owner's explicit format-scope decision."
      },
      {
        "q": "What if a class name changes?",
        "a": "Map it to the approved taxonomy or route it for review before scheduling."
      }
    ],
    "internalSibling": "/blog/fitness-staff-incident-handoff",
    "publishedAt": "2026-10-12",
    "readTime": "8 min read"
  },
  {
    "slug": "fitness-staff-incident-handoff",
    "title": "Creating an Evidence-Bounded Fitness Incident Handoff",
    "description": "A guide to preserving observations and routing incidents without remote diagnosis or investigation.",
    "category": "Incident coordination",
    "image": "/october-12/fitness-staff-incident-handoff.webp",
    "internalService": "/services/fitness-back-office",
    "source": {
      "label": "OSHA incident investigation guidance",
      "url": "https://www.osha.gov/incident-investigation"
    },
    "sections": [
      {
        "heading": "Route emergencies first",
        "paragraphs": [
          "An incident form is never a substitute for emergency response. The procedure should tell staff when to contact local emergency services and the onsite safety authority before administrative documentation begins.",
          "Remote support follows the routing rule and records acknowledgement. It does not assess injury severity, provide care advice, or decide that escalation is unnecessary."
        ]
      },
      {
        "heading": "Record observations, not conclusions",
        "paragraphs": [
          "Preserve the reporter's words, observed time and place, people notified, and actions already taken. Separate direct observation from secondhand report and avoid labels that imply fault or diagnosis.",
          "Use a controlled channel for health, identity, or safeguarding information. General task tools should contain only a reference and minimum routing status."
        ]
      },
      {
        "heading": "Maintain the chronology",
        "paragraphs": [
          "Append corrections rather than overwriting the original account. Record each owner handoff and acknowledgement so a reviewer can identify gaps without relying on private memory.",
          "If accounts conflict, retain the conflict and route it to the authorized investigator. Administrative staff should not reconcile testimony or choose a preferred version."
        ]
      },
      {
        "heading": "Close administrative work carefully",
        "paragraphs": [
          "Administrative closure means required records and owner acknowledgements are present; it does not mean the incident has been investigated or resolved. Use distinct fields for those states.",
          "Review missing timestamps, failed notifications, and uncontrolled copies after the event. Legal, safety, privacy, insurance, and safeguarding owners determine retention and further action."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can remote support assess an injury?",
        "a": "No. Follow emergency and qualified-owner procedures; administrative support only preserves and routes information."
      },
      {
        "q": "Should conflicting reports be merged?",
        "a": "No. Preserve each source and let the authorized investigator evaluate them."
      }
    ],
    "internalSibling": "/blog/multi-site-trainer-access-review",
    "publishedAt": "2026-10-12",
    "readTime": "8 min read"
  },
  {
    "slug": "multi-site-trainer-access-review",
    "title": "Reviewing Trainer Access Across Multiple Facilities",
    "description": "A guide to tracing physical and digital access by site, purpose, owner, and end date.",
    "category": "Access governance",
    "image": "/october-12/multi-site-trainer-access-review.webp",
    "internalService": "/services/trainer-records",
    "source": {
      "label": "NIST SP 800-53 Rev. 5",
      "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
    },
    "sections": [
      {
        "heading": "Inventory access by facility",
        "paragraphs": [
          "List each physical and digital access grant separately with its site, system, purpose, approver, effective date, and review date. A generic active field hides partial revocation and unnecessary cross-site access.",
          "Use named accounts and avoid shared door, scheduling, or member-system credentials. The system owner decides the least privilege required for the role."
        ]
      },
      {
        "heading": "Tie grants to assignments",
        "paragraphs": [
          "Each grant should point to the assignment or approved responsibility that requires it. When a site or role changes, the access review should be triggered from the same source event.",
          "Credential approval and access approval are different decisions. A current trainer record does not automatically justify entry to every facility or system."
        ]
      },
      {
        "heading": "Verify revocation",
        "paragraphs": [
          "A submitted removal ticket is not proof that access ended. Capture completion from each system or facility owner and escalate any grant that cannot be independently confirmed.",
          "Temporary access needs an explicit end date. Exceptions should name the approving owner and the narrower period or scope granted."
        ]
      },
      {
        "heading": "Review dormant and conflicting states",
        "paragraphs": [
          "Look for people with no current assignment, grants that survived a site transfer, duplicate accounts, and physical access that disagrees with digital access. Route each discrepancy to the appropriate owner.",
          "Do not publish detailed access inventories broadly. Review with minimum-necessary participants and retain evidence according to security and privacy policy."
        ]
      }
    ],
    "faq": [
      {
        "q": "Does a current trainer credential grant site access?",
        "a": "No. Credential, assignment, physical access, and digital access are separate approvals."
      },
      {
        "q": "What proves revocation?",
        "a": "Completion evidence from each responsible system or facility owner."
      }
    ],
    "internalSibling": "/blog/fitness-staff-rate-change-record",
    "publishedAt": "2026-10-12",
    "readTime": "8 min read"
  },
  {
    "slug": "fitness-staff-rate-change-record",
    "title": "Documenting Fitness Staff Rate Changes Before Scheduling",
    "description": "A guide to separating rate approval, effective dates, schedule use, and payroll reconciliation.",
    "category": "Compensation operations",
    "image": "/october-12/fitness-staff-rate-change-record.webp",
    "internalService": "/services/fitness-back-office",
    "source": {
      "label": "U.S. Department of Labor wage guidance",
      "url": "https://www.dol.gov/agencies/whd"
    },
    "sections": [
      {
        "heading": "Identify the decision owner",
        "paragraphs": [
          "Compensation changes require an authorized finance, HR, or management decision. Administrative staff can prepare the request and maintain records but should not infer a rate from messages, prior invoices, or schedule urgency.",
          "The approval record should identify the person, role or service, approved amount or rule, effective date, affected sites, and approving owner."
        ]
      },
      {
        "heading": "Control the effective date",
        "paragraphs": [
          "Keep proposed, approved, scheduled, and paid states distinct. A future effective date should not alter earlier work, while a retroactive change needs explicit handling by the authorized owner.",
          "When schedules cross the effective date, identify which sessions or shifts use each rate. Do not overwrite historical values needed for reconciliation."
        ]
      },
      {
        "heading": "Propagate the approved change",
        "paragraphs": [
          "Update only the systems named in the procedure and record completion for each. If scheduling, timekeeping, payroll, and contractor billing use separate records, reconcile them before assuming the change is complete.",
          "Restrict compensation data to roles that need it. General class schedules should not expose private rate details."
        ]
      },
      {
        "heading": "Reconcile and escalate differences",
        "paragraphs": [
          "Compare approved records with downstream outputs and prepare discrepancies for finance or HR. Administrative support should not resolve wage, classification, tax, contract, or legal questions.",
          "Retain the source approval and correction history under the organization's policy. Repeated mismatches indicate a workflow problem that owners should correct at the source."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can support staff approve a rate change?",
        "a": "No. They can prepare and propagate an authorized decision."
      },
      {
        "q": "Should historical rates be overwritten?",
        "a": "No. Preserve effective dates and prior values needed for reconciliation."
      }
    ],
    "internalSibling": "/blog/special-population-referral-boundary",
    "publishedAt": "2026-10-12",
    "readTime": "8 min read"
  },
  {
    "slug": "special-population-referral-boundary",
    "title": "Protecting Referral Boundaries for Special-Population Fitness",
    "description": "A guide to routing requests without giving medical, therapeutic, or scope-of-practice advice.",
    "category": "Scope governance",
    "image": "/october-12/special-population-referral-boundary.webp",
    "internalService": "/services/member-support",
    "source": {
      "label": "ADA effective communication guidance",
      "url": "https://www.ada.gov/resources/effective-communication/"
    },
    "sections": [
      {
        "heading": "Define the administrative role",
        "paragraphs": [
          "Support staff may explain approved scheduling and referral steps, collect minimum contact information, and route a request to the named qualified owner. They should not determine whether a program is medically appropriate.",
          "Use language that distinguishes an administrative referral from professional clearance, diagnosis, treatment, or individualized exercise advice."
        ]
      },
      {
        "heading": "Use a minimum-information intake",
        "paragraphs": [
          "Ask only what is needed to connect the person with the correct owner and communication method. Avoid soliciting diagnoses or detailed health histories through ordinary contact forms or chat.",
          "If a person volunteers sensitive information, move it through the approved secure channel and limit access. Do not repeat the details in general scheduling notes."
        ]
      },
      {
        "heading": "Route urgent and non-urgent needs",
        "paragraphs": [
          "The procedure should identify emergency language that bypasses the routine referral queue and points to local emergency resources. Remote administrative support cannot assess severity.",
          "For non-urgent requests, record the destination, routing time, and owner acknowledgement. Do not promise acceptance, outcomes, or response times that the qualified service has not approved."
        ]
      },
      {
        "heading": "Check accessibility and closure",
        "paragraphs": [
          "Offer approved communication accommodations and preserve the person's stated preference without interpreting disability or medical status. Qualified owners decide service scope and any professional requirements.",
          "Close the administrative task when the receiving owner acknowledges it or the documented follow-up path is complete. Periodically test the route with synthetic cases and update contacts when providers or policies change."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a remote assistant decide whether a program is medically appropriate?",
        "a": "No. They route requests to qualified owners and do not provide health or exercise advice."
      },
      {
        "q": "What information should intake collect?",
        "a": "Only the minimum contact and routing information required by the approved process."
      }
    ],
    "internalSibling": "/blog/trainer-credential-verification-handoff",
    "publishedAt": "2026-10-12",
    "readTime": "8 min read"
  }
];
