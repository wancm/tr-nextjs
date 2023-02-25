/** Generate Static Params.
 * Ensure routes are statically generated at build time and imrpoves the performance of the dynamic routes. 
 * 
 * Server function that defines the list of route segment parameters.
 *
 * Statically generated at build time instead of on-demand at request time
 *
 * Will not be called again during revalidation (ISR)
 * 
export async function generateStaticParams() {
  const speakers = await getSpeakers();

  return speakers.map((speaker) => ({ slug: speaker.slug }));
}
 */

// this page is about Dynamic routing

import styles from "../../conference.module.css";
import { speakerJson } from "../page";

function fetchSpeakerInfo(params) {
  // API call, DB Query, fetch from the app

  const speakerInfo = speakerJson.speakers?.find(
    (speaker) => speaker.name == params.slug
  );

  return speakerInfo;
}

export default async function Page({ params }) {
  const speakerInfo = fetchSpeakerInfo(params);

  const { name, bio, sessions } = speakerInfo;

  return (
    <div className={styles.infoContainer}>
      <h3 className={styles.titleText}>{name}</h3>
      <h5 className={styles.descText}>About: {bio}</h5>
      {sessions &&
        sessions.map(({ name, id }) => (
          <div key={id}>
            <h5 className={styles.descText}>Session: {name}</h5>
          </div>
        ))}
    </div>
  );
}
