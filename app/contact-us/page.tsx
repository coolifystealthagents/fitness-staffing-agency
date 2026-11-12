import {ContactExperience} from '../inner-pages';
import {LeadForm} from '@/components/LeadForm';
export const metadata={title:'Contact Us',description:"Build support around your studio.",alternates:{canonical:'/contact-us'}};
export default function Contact(){return <><main id="main-content"><ContactExperience><LeadForm source="contact-page-consultation"/></ContactExperience></main></>}
