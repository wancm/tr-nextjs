/** to do server side render
 * 'use client'
 *
 * Mark component as 'use client' when :
 *  i.  using client React hooks such as useState, useEffect, useReducer
 *  ii. interactivity within the component, with event listeners (onClick())
 *  iii.use custom hooks that depnd on state, effects
 *
 * Other components that do not depend on client hooks can be automatically rendered as Server Components,
 * without 'use client'
 *  i.  Fetch Data
 *  ii. Store sensitive information on server (tokens, API keys, etc.)
 *  iii.Access backend resources deirectly
 *  iv. keep large dependencies on the server
 *
 * Ensures smallest amount of client-side Javascript code!
 *
 */

/** Data fetching in Next.js can be done on a page-by-page basis.
 * you can pick and choose the data fetching method that is most suitable for a specific page.
 *
 *  CM: I found that, somehow in localhost DEV environment, fetch() doesn't perform it's cache mechanism, it's always refresh...
 *  the features only available if you are hosted with Vercel
 *
 *
 * The default data fetching data approach in Next.js is called static data fetching.
 * a. It's also known as static site generation.
 *    i.  Data is fetched and cached. Cached data is re-used on each request!
 *    ii. Static generation is useful for data that doesn't change often (Blog Post).
 *    iii.By default, Next automatically does static data fetching.
 *    iv. const res = await fetch(`https://xxx`); // By default, the fetch call is set to static data fetching from the cahce after the first call
 *        const data = await res.json();
 *
 * b. Satic Data fetching with Revalidation or ISR (Incremental static regeneration)
 *      - this method is useful when your data changes and you want to ensure that the application shows the latest version without having to rebuild the entire application
 *    i.  Data is fetched and cached.
 *    ii. Cached data is re-used on each request until it reaches specified interval of time.
 *    iii.After sepcified time interval, Next.js revalidates the data, and invalidates the previous cache.
 *    iv. const res = await fetch(`https://xxx`, { next: { revalidate: 15}}); // This request is cached with a lifetime of 15 seconds
 *        const data = await res.json();
 *
 *  c. Dynamic data fetching, or the server side rendering.
 *    i.  Data is fetched on each request!
 *    ii. Dynamic data changes often or could be specific to users like a shopping cart.
 *    iii.There is no caching in synamic data fetching.
 *    iv. const res = await fetch(`https://xxx`, { cache: 'no-store' }); // This request is cached with a lifetime of 15 seconds
 *        const data = await res.json();
 *
 *
 *  Fetch in Next.js
 *    i.  Next 13's new data fetching works in /app directory
 *    ii. Built on top of fetch() Web API, fetch remote resources and returns a promise
 *    iii.Allows caching and revalidating options within fetch requests
 *
 */

import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Welcome to Globomantics App</h1>
      <Link href="/home">Home</Link>
    </>
  );
}
