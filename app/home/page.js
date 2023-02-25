import Image from "next/image";
import ourStoryPic from "../../images/home-image-1.jpg";
import styles from "./home.module.css";

/**
 * sizes
 *    - 100vw
 *    - this is basically a string that provides the information about how wide the image will be at different breakpoints
 *    - vw > stands for viewport width
 *
 * fill
 *    - when fill is true, it causes the image to fill the parent element instead of setting the width
 *      and height explicitly
 *
 * The default image git behavior will strech the image to fit the container,
 * and you may prefer to set a propery objectFit:
 *  objectFit: "contain" -> for an image, which is letter box to fit the container and also preserve the aspect ratio of the image
 *  objectFit: "cover" -> will cause the image to fill the entire container and be
 */

export default function Page() {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          src={ourStoryPic}
          alt="Our story pic"
          placeholder="blur"
          quality={100}
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <h1 className={styles.bgHeader}>Humble beginnings a story of life</h1>
      <p className={styles.bgText}>
        How we became the farmers of the future, tilling the technology of
        tomorrow today.
      </p>
    </>
  );
}
