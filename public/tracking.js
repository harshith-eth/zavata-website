// Microsoft Clarity tracking code
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "n5ndk3i377");

// PostHog tracking code
import posthog from 'posthog-js';

posthog.init('phc_xgLver4nrEIBFBqFDxGkKX8fTJExgEJOV8oMUMg1WwU', {
    api_host: 'https://us.i.posthog.com',
    person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
});
