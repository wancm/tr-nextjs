import Link from "next/link";
import styles from "../conference.module.css";

export let speakerJson = {};

/**  CM: I found that, somehow in localhost DEV environment, fetch() doesn't perform it's cache mechanism, it's always refresh...
 *  the features only available if you are hosted with Vercel
 */
async function fetchSpeakers() {
  /** Static data fetching or Satic site generation
   * Always reuse the cached data
   const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json"
   */

  /** Static Data Fetching with Revalidation
   * After initial request, show cached data until time interval.
   * After time interval, show cached data and trigger regeneration of data in background.
   * After success, invalidate cache, and show updated data. If background regenerations failed for some reasons.., the old data still remains!
    const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json",
    { next: { revalidate: 5 } }
  );
   */
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json",
    { next: { revalidate: 5 } }
  );

  const data = await response.json();
  speakerJson = data;
  return data;
}

export default async function Page() {
  const data = await fetchSpeakers();

  return (
    <div className={styles.parentContainer}>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>Welcome to Globomantics Speakers</h1>
      {data.speakers.map(({ id, name, bio }) => (
        <div key={id} className={styles.infoContainer}>
          <Link
            className={styles.bgLinks}
            href={`/conference/speakers/${name}`}
          >
            <h3 className={styles.titleText}>{name}</h3>
          </Link>
          <h5 className={styles.descText}>{bio}</h5>
        </div>
      ))}
    </div>
  );
}
