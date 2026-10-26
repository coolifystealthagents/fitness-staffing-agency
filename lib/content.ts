import { site } from './site';
import type { BlogPost, ResearchPost } from './types';
import { october12BlogPosts } from './october-12/blogPosts';
import { october12ResearchPosts } from './october-12/researchPosts';
import { october22BlogPosts } from './october22-blog';
import { october25BlogPosts } from './october25-blog';
import { october22ResearchPosts } from './october22-research';
import { october25ResearchPosts } from './october25-research';

const legacyBlogPosts: BlogPost[] = [
  {
    "slug": "fitness-operations-manager-vs-fitness-va",
    "title": "Fitness operations manager vs fitness VA",
    "description": "Separate operating ownership from repeatable administrative support before you write either role.",
    "category": "Role design",
    "publishedAt": "2026-10-04",
    "readTime": "9 min read",
    "internalService": "/services/fitness-back-office",
    "internalSibling": "/blog/class-coverage-workflow",
    "source": {
      "label": "U.S. Department of Labor: Managers",
      "url": "https://www.dol.gov/agencies/whd/fact-sheets/17b-overtime-executive"
    },
    "sections": [
      {
        "heading": "Start with decision ownership",
        "paragraphs": [
          "An operations manager owns priorities, tradeoffs, people decisions, and the operating result. A fitness virtual assistant can prepare records, coordinate approved steps, and maintain queues, but should not inherit management accountability through an ambiguous job description.",
          "List decisions the manager must retain before listing tasks that can move. This prevents routine delegation from becoming unreviewed authority."
        ]
      },
      {
        "heading": "Separate management from preparation",
        "paragraphs": [
          "Budget changes, performance decisions, policy exceptions, safety responses, and final schedule approval belong with an accountable manager. Data entry, meeting preparation, status collection, and approved follow-up can form a bounded support queue.",
          "If a task changes a member commitment or employee condition, document the required approval instead of relying on job-title assumptions."
        ]
      },
      {
        "heading": "Write two distinct scorecards",
        "paragraphs": [
          "Measure the manager on decisions, team outcomes, and resolved risks. Review the assistant on record completeness, timeliness, source use, and correct escalation.",
          "Using one activity count for both roles hides whether preparation was accurate and whether management judgment was timely."
        ]
      },
      {
        "heading": "Test the handoff",
        "paragraphs": [
          "Run one recurring queue for two weeks with explicit owners and sample reviews. Record every item that could not proceed under the written rule.",
          "Use those exceptions to refine access, templates, and escalation paths before expanding the role."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a virtual assistant replace an operations manager?",
        "a": "Not when the work requires management authority, policy judgment, or accountability for people and operating outcomes."
      },
      {
        "q": "Where should delegation begin?",
        "a": "Begin with a repeatable administrative queue whose source, output, reviewer, and escalation path are already known."
      },
      {
        "q": "Who approves exceptions?",
        "a": "A named manager or qualified owner should approve exceptions before the assistant communicates or closes them."
      }
    ]
  },
  {
    "slug": "class-coverage-workflow",
    "title": "Build a class coverage workflow",
    "description": "Create a coverage queue that protects schedule accuracy without moving safety or instructor decisions to support staff.",
    "category": "Class operations",
    "publishedAt": "2026-10-05",
    "readTime": "10 min read",
    "internalService": "/services/class-schedule-support",
    "internalSibling": "/blog/trainer-credential-verification-handoff",
    "source": {
      "label": "OSHA: Emergency action plans",
      "url": "https://www.osha.gov/emergency-preparedness/getting-started"
    },
    "sections": [
      {
        "heading": "Define the coverage trigger",
        "paragraphs": [
          "Specify who reports an absence, where it is recorded, and how close to class time the request becomes urgent. A shared queue prevents text threads and private inboxes from becoming the unofficial schedule.",
          "Include location, format, required credentials, access needs, and the current member-facing status in every request."
        ]
      },
      {
        "heading": "Separate outreach from approval",
        "paragraphs": [
          "Support staff can contact instructors from an approved list and record responses. A qualified owner should decide whether a substitute meets credential, format, safeguarding, and local policy requirements.",
          "The workflow should not treat availability as approval."
        ]
      },
      {
        "heading": "Control member communication",
        "paragraphs": [
          "Prepare cancellation or replacement messages from approved templates, but release them only after the schedule owner confirms the decision. Record the channel and timestamp so front desk and digital listings stay aligned.",
          "When no approved substitute is available, escalate early enough for the owner to choose cancellation, format change, or another permitted option."
        ]
      },
      {
        "heading": "Review recurring gaps",
        "paragraphs": [
          "Track why coverage requests occur, how long approval takes, and where source records disagree. Use patterns to improve availability records and escalation timing rather than to pressure staff into unsafe shortcuts.",
          "A monthly sample should compare the queue, approved schedule, and member-facing notice."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can support staff choose a substitute instructor?",
        "a": "They can prepare options from approved records; a qualified owner should make the approval decision."
      },
      {
        "q": "What belongs in every request?",
        "a": "Include class, location, time, required qualifications, current status, and the accountable approver."
      },
      {
        "q": "When should members be notified?",
        "a": "After the schedule owner confirms the approved replacement or cancellation and the communication text."
      }
    ]
  },
  {
    "slug": "member-request-escalation",
    "title": "Design member-request escalation",
    "description": "Route routine member questions and sensitive exceptions to the right owner with a visible response record.",
    "category": "Member experience",
    "publishedAt": "2026-10-06",
    "readTime": "8 min read",
    "internalService": "/services/member-support",
    "internalSibling": "/blog/fitness-lead-follow-up",
    "source": {
      "label": "ADA: Effective communication",
      "url": "https://www.ada.gov/resources/effective-communication/"
    },
    "sections": [
      {
        "heading": "Classify the request before answering",
        "paragraphs": [
          "Create a short set of request types such as schedule information, account records, accessibility needs, complaints, injuries, payment disputes, and cancellation questions. Classification should decide the owner and permitted response, not merely add a tag.",
          "Sensitive health, safety, accessibility, contract, and payment matters should move to named qualified owners."
        ]
      },
      {
        "heading": "Define routine response boundaries",
        "paragraphs": [
          "Support staff can share approved factual information and collect missing context. They should not improvise policy, promise refunds, interpret medical needs, or decide accommodations.",
          "Templates should identify when a response is informational and when the member must speak with an authorized person."
        ]
      },
      {
        "heading": "Make escalation observable",
        "paragraphs": [
          "Record the request, consented contact channel, owner, due time, and reason for escalation in the approved system. Avoid copying sensitive details into broad chat channels.",
          "The member should receive a realistic acknowledgment without a promise that the reviewing owner has not made."
        ]
      },
      {
        "heading": "Close the loop",
        "paragraphs": [
          "Closure means the owner responded and the system records the outcome or next step. A sent internal message is not closure.",
          "Review aged requests and repeated categories to improve source guidance while preserving case-specific judgment."
        ]
      }
    ],
    "faq": [
      {
        "q": "Which requests should always escalate?",
        "a": "Escalate safety, health, accessibility, payment, contract, privacy, and policy exceptions to the designated owner."
      },
      {
        "q": "Can an assistant promise a resolution time?",
        "a": "Only use a response target approved for that category; do not promise an outcome or deadline the owner has not confirmed."
      },
      {
        "q": "Where should sensitive details be stored?",
        "a": "Use the approved record system with appropriate access, not general-purpose chat or personal notes."
      }
    ]
  },
  {
    "slug": "trainer-records-assistant",
    "title": "What a trainer records assistant can manage",
    "description": "Define administrative record support without transferring credential or professional-practice decisions.",
    "category": "Trainer systems",
    "publishedAt": "2026-10-07",
    "readTime": "9 min read",
    "internalService": "/services/trainer-records",
    "internalSibling": "/blog/trainer-credential-verification-handoff",
    "source": {
      "label": "ACE: Find an ACE Pro",
      "url": "https://www.acefitness.org/resources/everyone/find-ace-pro/"
    },
    "sections": [
      {
        "heading": "Inventory the approved records",
        "paragraphs": [
          "List the systems that hold identity, certification, insurance, continuing-education, availability, and assignment information. Define which system is authoritative for each field.",
          "Support staff should not combine conflicting records silently; disagreement is an exception for the record owner."
        ]
      },
      {
        "heading": "Separate collection from verification",
        "paragraphs": [
          "An assistant can request documents, log receipt dates, and use an approved issuer lookup. The organization’s qualified owner determines whether evidence satisfies policy and whether a trainer may be assigned.",
          "A screenshot or self-entered date is not equivalent to issuer confirmation."
        ]
      },
      {
        "heading": "Use an expiry queue",
        "paragraphs": [
          "Create reminders far enough ahead for the trainer and owner to act. The queue should show source, last check, current status, and unresolved discrepancies.",
          "Do not automatically extend status because a renewal is reportedly in progress."
        ]
      },
      {
        "heading": "Limit access and exports",
        "paragraphs": [
          "Grant only the fields and actions needed for record maintenance. Avoid local downloads and broad spreadsheets when the approved system can hold the evidence.",
          "Review permissions when roles change and document deletion or archival expectations."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can an assistant approve a credential?",
        "a": "No. The assistant can prepare and source-check records; the designated qualified owner approves status."
      },
      {
        "q": "What if two systems disagree?",
        "a": "Preserve both source references and escalate the discrepancy rather than choosing one silently."
      },
      {
        "q": "Should records be exported to spreadsheets?",
        "a": "Use the approved system whenever possible and limit exports according to access and retention rules."
      }
    ]
  },
  {
    "slug": "fitness-lead-follow-up",
    "title": "Design responsible fitness lead follow-up",
    "description": "Build timely prospect follow-up around consent, approved claims, and clear sales ownership.",
    "category": "Growth operations",
    "publishedAt": "2026-10-08",
    "readTime": "9 min read",
    "internalService": "/services/fitness-lead-follow-up",
    "internalSibling": "/blog/member-request-escalation",
    "source": {
      "label": "FTC: CAN-SPAM Act",
      "url": "https://search.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business"
    },
    "sections": [
      {
        "heading": "Record consent and source",
        "paragraphs": [
          "Every lead record should show where the inquiry originated, what contact details the person supplied, and any channel preferences or consent evidence your process requires. Do not enrich the record with sensitive assumptions.",
          "Source context helps the team use an appropriate response rather than treating every inquiry as identical."
        ]
      },
      {
        "heading": "Use approved factual messages",
        "paragraphs": [
          "Support staff can send approved acknowledgments, scheduling links, and factual program information. Claims about outcomes, suitability, discounts, or availability need current approved source material.",
          "Never invent urgency or imply that a place is reserved when it is not."
        ]
      },
      {
        "heading": "Define the sales handoff",
        "paragraphs": [
          "Specify which questions require a coach, manager, or sales owner and how the lead is transferred. The support role should capture the question and preferred contact path without attempting advice outside scope.",
          "A handoff is complete only when the next owner can see the record and responsibility is assigned."
        ]
      },
      {
        "heading": "Respect stop signals",
        "paragraphs": [
          "Document opt-outs and channel restrictions promptly. Sequence logic should suppress future messages where required rather than relying on memory.",
          "Review bounced, duplicate, and stale records so activity metrics do not hide poor contact quality."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can support staff answer program questions?",
        "a": "They can use approved factual material and route advice, suitability, pricing exceptions, or outcome questions to the designated owner."
      },
      {
        "q": "What should the record preserve?",
        "a": "Preserve source, consent context, approved messages sent, responses, owner, and next action."
      },
      {
        "q": "How should opt-outs work?",
        "a": "Record them promptly in the system that controls future outreach and follow applicable channel rules."
      }
    ]
  }
];
const planningBriefs: ResearchPost[] = [
  {
    "slug": "class-schedule-support-workflow-boundary-review-1",
    "title": "Class schedule support: workflow boundary questions",
    "summary": "A source-led planning brief for workflow boundary questions in class schedule support, with questions to test against local policy and systems.",
    "cluster": "Class operations",
    "publishedAt": "2026-10-01",
    "finding": "Planning premise: Schedule preparation should preserve an accountable approval step for coverage, safety, and member-facing changes. Identify which steps may proceed under a written rule and which require approval.",
    "sources": [
      {
        "label": "OSHA: Emergency preparedness",
        "url": "https://www.osha.gov/emergency-preparedness"
      },
      {
        "label": "U.S. Department of Labor: Work hours",
        "url": "https://www.dol.gov/general/topic/workhours"
      }
    ]
  },
  {
    "slug": "member-support-source-quality-audit-2",
    "title": "Member support: source-quality checklist",
    "summary": "A source-led planning brief for source-quality checklist in member support, with questions to test against local policy and systems.",
    "cluster": "Member experience",
    "publishedAt": "2026-10-02",
    "finding": "Planning premise: Routine answers need a documented boundary that routes accessibility, privacy, payment, safety, and policy exceptions to an authorized owner. List the authoritative record for each field and the response when sources disagree.",
    "sources": [
      {
        "label": "ADA: Effective communication",
        "url": "https://www.ada.gov/resources/effective-communication/"
      },
      {
        "label": "FTC: Protecting personal information",
        "url": "https://search.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business-0"
      }
    ]
  },
  {
    "slug": "fitness-lead-follow-up-exception-pattern-study-3",
    "title": "Fitness lead follow-up: exception-review prompts",
    "summary": "A source-led planning brief for exception-review prompts in fitness lead follow-up, with questions to test against local policy and systems.",
    "cluster": "Growth operations",
    "publishedAt": "2026-10-03",
    "finding": "Planning premise: Follow-up preparation should retain source and consent context, use approved claims, and honor channel stop signals. Describe the cases that must pause, the owner who receives them, and the evidence that travels with the handoff.",
    "sources": [
      {
        "label": "FTC: CAN-SPAM Act",
        "url": "https://search.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business"
      },
      {
        "label": "FTC: Protecting personal information",
        "url": "https://search.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business-0"
      }
    ]
  },
  {
    "slug": "trainer-records-handoff-reliability-brief-4",
    "title": "Trainer records support: handoff-evidence guide",
    "summary": "A source-led planning brief for handoff-evidence guide in trainer records support, with questions to test against local policy and systems.",
    "cluster": "Trainer systems",
    "publishedAt": "2026-10-04",
    "finding": "Planning premise: Record support can collect and source-check evidence, while credential acceptance and assignment remain with a qualified owner. Define what the next owner must see before responsibility can change hands.",
    "sources": [
      {
        "label": "ACE: Find an ACE Pro",
        "url": "https://www.acefitness.org/resources/everyone/find-ace-pro/"
      },
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "membership-admin-review-consistency-report-5",
    "title": "Membership administration support: review-consistency checklist",
    "summary": "A source-led planning brief for review-consistency checklist in membership administration support, with questions to test against local policy and systems.",
    "cluster": "Membership operations",
    "publishedAt": "2026-10-05",
    "finding": "Planning premise: Membership records require limited access, source-linked changes, and escalation for contracts, payments, cancellations, and privacy requests. Use a small documented sample to test completeness, source use, access, and escalation without claiming a measured result.",
    "sources": [
      {
        "label": "FTC: Protecting personal information",
        "url": "https://search.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business-0"
      },
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "fitness-back-office-workflow-boundary-review-6",
    "title": "Fitness back-office support: workflow boundary questions",
    "summary": "A source-led planning brief for workflow boundary questions in fitness back-office support, with questions to test against local policy and systems.",
    "cluster": "Role design",
    "publishedAt": "2026-10-06",
    "finding": "Planning premise: Back-office delegation should name the system of record, decision owner, access boundary, and evidence required for review. Identify which steps may proceed under a written rule and which require approval.",
    "sources": [
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "U.S. Department of Labor: Work hours",
        "url": "https://www.dol.gov/general/topic/workhours"
      }
    ]
  },
  {
    "slug": "class-schedule-support-source-quality-audit-7",
    "title": "Class schedule support: source-quality checklist",
    "summary": "A source-led planning brief for source-quality checklist in class schedule support, with questions to test against local policy and systems.",
    "cluster": "Class operations",
    "publishedAt": "2026-10-07",
    "finding": "Planning premise: Schedule preparation should preserve an accountable approval step for coverage, safety, and member-facing changes. List the authoritative record for each field and the response when sources disagree.",
    "sources": [
      {
        "label": "OSHA: Emergency preparedness",
        "url": "https://www.osha.gov/emergency-preparedness"
      },
      {
        "label": "U.S. Department of Labor: Work hours",
        "url": "https://www.dol.gov/general/topic/workhours"
      }
    ]
  },
  {
    "slug": "member-support-exception-pattern-study-8",
    "title": "Member support: exception-review prompts",
    "summary": "A source-led planning brief for exception-review prompts in member support, with questions to test against local policy and systems.",
    "cluster": "Member experience",
    "publishedAt": "2026-10-08",
    "finding": "Planning premise: Routine answers need a documented boundary that routes accessibility, privacy, payment, safety, and policy exceptions to an authorized owner. Describe the cases that must pause, the owner who receives them, and the evidence that travels with the handoff.",
    "sources": [
      {
        "label": "ADA: Effective communication",
        "url": "https://www.ada.gov/resources/effective-communication/"
      },
      {
        "label": "FTC: Protecting personal information",
        "url": "https://search.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business-0"
      }
    ]
  },
  {
    "slug": "fitness-lead-follow-up-handoff-reliability-brief-9",
    "title": "Fitness lead follow-up: handoff-evidence guide",
    "summary": "A source-led planning brief for handoff-evidence guide in fitness lead follow-up, with questions to test against local policy and systems.",
    "cluster": "Growth operations",
    "publishedAt": "2026-10-01",
    "finding": "Planning premise: Follow-up preparation should retain source and consent context, use approved claims, and honor channel stop signals. Define what the next owner must see before responsibility can change hands.",
    "sources": [
      {
        "label": "FTC: CAN-SPAM Act",
        "url": "https://search.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business"
      },
      {
        "label": "FTC: Protecting personal information",
        "url": "https://search.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business-0"
      }
    ]
  },
  {
    "slug": "trainer-records-review-consistency-report-10",
    "title": "Trainer records support: review-consistency checklist",
    "summary": "A source-led planning brief for review-consistency checklist in trainer records support, with questions to test against local policy and systems.",
    "cluster": "Trainer systems",
    "publishedAt": "2026-10-02",
    "finding": "Planning premise: Record support can collect and source-check evidence, while credential acceptance and assignment remain with a qualified owner. Use a small documented sample to test completeness, source use, access, and escalation without claiming a measured result.",
    "sources": [
      {
        "label": "ACE: Find an ACE Pro",
        "url": "https://www.acefitness.org/resources/everyone/find-ace-pro/"
      },
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "membership-admin-workflow-boundary-review-11",
    "title": "Membership administration support: workflow boundary questions",
    "summary": "A source-led planning brief for workflow boundary questions in membership administration support, with questions to test against local policy and systems.",
    "cluster": "Membership operations",
    "publishedAt": "2026-10-03",
    "finding": "Planning premise: Membership records require limited access, source-linked changes, and escalation for contracts, payments, cancellations, and privacy requests. Identify which steps may proceed under a written rule and which require approval.",
    "sources": [
      {
        "label": "FTC: Protecting personal information",
        "url": "https://search.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business-0"
      },
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "fitness-back-office-source-quality-audit-12",
    "title": "Fitness back-office support: source-quality checklist",
    "summary": "A source-led planning brief for source-quality checklist in fitness back-office support, with questions to test against local policy and systems.",
    "cluster": "Role design",
    "publishedAt": "2026-10-04",
    "finding": "Planning premise: Back-office delegation should name the system of record, decision owner, access boundary, and evidence required for review. List the authoritative record for each field and the response when sources disagree.",
    "sources": [
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "U.S. Department of Labor: Work hours",
        "url": "https://www.dol.gov/general/topic/workhours"
      }
    ]
  },
  {
    "slug": "class-schedule-support-exception-pattern-study-13",
    "title": "Class schedule support: exception-review prompts",
    "summary": "A source-led planning brief for exception-review prompts in class schedule support, with questions to test against local policy and systems.",
    "cluster": "Class operations",
    "publishedAt": "2026-10-05",
    "finding": "Planning premise: Schedule preparation should preserve an accountable approval step for coverage, safety, and member-facing changes. Describe the cases that must pause, the owner who receives them, and the evidence that travels with the handoff.",
    "sources": [
      {
        "label": "OSHA: Emergency preparedness",
        "url": "https://www.osha.gov/emergency-preparedness"
      },
      {
        "label": "U.S. Department of Labor: Work hours",
        "url": "https://www.dol.gov/general/topic/workhours"
      }
    ]
  },
  {
    "slug": "member-support-handoff-reliability-brief-14",
    "title": "Member support: handoff-evidence guide",
    "summary": "A source-led planning brief for handoff-evidence guide in member support, with questions to test against local policy and systems.",
    "cluster": "Member experience",
    "publishedAt": "2026-10-06",
    "finding": "Planning premise: Routine answers need a documented boundary that routes accessibility, privacy, payment, safety, and policy exceptions to an authorized owner. Define what the next owner must see before responsibility can change hands.",
    "sources": [
      {
        "label": "ADA: Effective communication",
        "url": "https://www.ada.gov/resources/effective-communication/"
      },
      {
        "label": "FTC: Protecting personal information",
        "url": "https://search.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business-0"
      }
    ]
  },
  {
    "slug": "fitness-lead-follow-up-review-consistency-report-15",
    "title": "Fitness lead follow-up: review-consistency checklist",
    "summary": "A source-led planning brief for review-consistency checklist in fitness lead follow-up, with questions to test against local policy and systems.",
    "cluster": "Growth operations",
    "publishedAt": "2026-10-07",
    "finding": "Planning premise: Follow-up preparation should retain source and consent context, use approved claims, and honor channel stop signals. Use a small documented sample to test completeness, source use, access, and escalation without claiming a measured result.",
    "sources": [
      {
        "label": "FTC: CAN-SPAM Act",
        "url": "https://search.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business"
      },
      {
        "label": "FTC: Protecting personal information",
        "url": "https://search.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business-0"
      }
    ]
  },
  {
    "slug": "trainer-records-workflow-boundary-review-16",
    "title": "Trainer records support: workflow boundary questions",
    "summary": "A source-led planning brief for workflow boundary questions in trainer records support, with questions to test against local policy and systems.",
    "cluster": "Trainer systems",
    "publishedAt": "2026-10-08",
    "finding": "Planning premise: Record support can collect and source-check evidence, while credential acceptance and assignment remain with a qualified owner. Identify which steps may proceed under a written rule and which require approval.",
    "sources": [
      {
        "label": "ACE: Find an ACE Pro",
        "url": "https://www.acefitness.org/resources/everyone/find-ace-pro/"
      },
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "membership-admin-source-quality-audit-17",
    "title": "Membership administration support: source-quality checklist",
    "summary": "A source-led planning brief for source-quality checklist in membership administration support, with questions to test against local policy and systems.",
    "cluster": "Membership operations",
    "publishedAt": "2026-10-01",
    "finding": "Planning premise: Membership records require limited access, source-linked changes, and escalation for contracts, payments, cancellations, and privacy requests. List the authoritative record for each field and the response when sources disagree.",
    "sources": [
      {
        "label": "FTC: Protecting personal information",
        "url": "https://search.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business-0"
      },
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "fitness-back-office-exception-pattern-study-18",
    "title": "Fitness back-office support: exception-review prompts",
    "summary": "A source-led planning brief for exception-review prompts in fitness back-office support, with questions to test against local policy and systems.",
    "cluster": "Role design",
    "publishedAt": "2026-10-02",
    "finding": "Planning premise: Back-office delegation should name the system of record, decision owner, access boundary, and evidence required for review. Describe the cases that must pause, the owner who receives them, and the evidence that travels with the handoff.",
    "sources": [
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "U.S. Department of Labor: Work hours",
        "url": "https://www.dol.gov/general/topic/workhours"
      }
    ]
  },
  {
    "slug": "class-schedule-support-handoff-reliability-brief-19",
    "title": "Class schedule support: handoff-evidence guide",
    "summary": "A source-led planning brief for handoff-evidence guide in class schedule support, with questions to test against local policy and systems.",
    "cluster": "Class operations",
    "publishedAt": "2026-10-03",
    "finding": "Planning premise: Schedule preparation should preserve an accountable approval step for coverage, safety, and member-facing changes. Define what the next owner must see before responsibility can change hands.",
    "sources": [
      {
        "label": "OSHA: Emergency preparedness",
        "url": "https://www.osha.gov/emergency-preparedness"
      },
      {
        "label": "U.S. Department of Labor: Work hours",
        "url": "https://www.dol.gov/general/topic/workhours"
      }
    ]
  },
  {
    "slug": "member-support-review-consistency-report-20",
    "title": "Member support: review-consistency checklist",
    "summary": "A source-led planning brief for review-consistency checklist in member support, with questions to test against local policy and systems.",
    "cluster": "Member experience",
    "publishedAt": "2026-10-04",
    "finding": "Planning premise: Routine answers need a documented boundary that routes accessibility, privacy, payment, safety, and policy exceptions to an authorized owner. Use a small documented sample to test completeness, source use, access, and escalation without claiming a measured result.",
    "sources": [
      {
        "label": "ADA: Effective communication",
        "url": "https://www.ada.gov/resources/effective-communication/"
      },
      {
        "label": "FTC: Protecting personal information",
        "url": "https://search.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business-0"
      }
    ]
  }
];

export const blogPosts: BlogPost[] = [...october25BlogPosts, ...october22BlogPosts, ...october12BlogPosts, ...legacyBlogPosts];
export const researchPosts: ResearchPost[] = [...october25ResearchPosts, ...october22ResearchPosts, ...october12ResearchPosts, ...planningBriefs];
export const nav = [
  { href: '/services', label: 'Services' }, { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' }, { href: '/research', label: 'Research' },
  { href: '/contact-us', label: 'Contact' }
];
export function serviceBySlug(slug: string) { return site.services.find((service) => service.slug === slug); }
export function blogBySlug(slug: string) { return blogPosts.find((post) => post.slug === slug); }
export function researchBySlug(slug: string) { return researchPosts.find((post) => post.slug === slug); }
