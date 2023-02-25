import styles from "../conference.module.css";

/**  CM: I found that, somehow in localhost DEV environment, fetch() doesn't perform it's cache mechanism, it's always refresh...
 *  the features only available if you are hosted with Vercel
 */
// Dynamic Data Fetching or Server Side Rendering
async function fetchSessions() {
  console.time();
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/sessions.json",
    { cache: "no-store" } // no cache, the request is refreshed upon every request
  );

  const data = await response.json();
  console.timeEnd();
  return data;
}

export default async function Page() {
  const data = await fetchSessions();
  return (
    <div className={styles.parentContainer}>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>Welcome to Globomantics Sessions</h1>

      {data.sessions.map(
        ({ id, title, description, room, day, track, speakers }) => (
          <div key={id} className={styles.infoContainer}>
            <h3 className={styles.titleText}>{title}</h3>
            {speakers &&
              speakers.map(({ name }) => (
                <h3 className={styles.titleText}>Speaker: {name}</h3>
              ))}
            <h5 className={styles.descText}>{description}</h5>
            <h4 className={styles.infoText}>Room: {room}</h4>
            <h4 className={styles.infoText}>Day: {day}</h4>
            <h4 className={styles.infoText}>Track: {track}</h4>
          </div>
        )
      )}
    </div>
  );
}
