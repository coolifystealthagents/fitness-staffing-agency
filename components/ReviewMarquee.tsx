'use client';

import { stealthAgentsReviews } from '@/lib/reviews';

export function ReviewMarquee() {
  const paused = false;
  return <div className="review-collection">
    
    <div className="review-window" aria-label={`${stealthAgentsReviews.length} StealthAgents reviews`}>
      <div className="review-marquee" data-paused={paused || undefined}>
        {[...stealthAgentsReviews, ...stealthAgentsReviews].map((review, index) => <figure className="review-card" key={`${review.reviewer}-${index}`} aria-hidden={index >= stealthAgentsReviews.length || undefined}>
          <blockquote>{review.body}</blockquote><figcaption><strong>{review.reviewer}</strong><span>{review.detail}</span></figcaption>
        </figure>)}
      </div>
    </div>
  </div>;
}
