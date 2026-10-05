import { useEffect, useState, useSyncExternalStore } from "react";
import PropTypes from "prop-types";

const TYPING_MS = 90;
const DELETING_MS = 45;
const HOLD_MS = 1800;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(onChange) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getMotionPreference() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function TypedText({ words, className }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const reduceMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreference,
    () => false
  );

  useEffect(() => {
    if (reduceMotion) return undefined;

    const word = words[index % words.length];
    const wordComplete = !deleting && text === word;
    const wordCleared = deleting && text === "";

    let delay = TYPING_MS;
    if (wordComplete) delay = HOLD_MS;
    else if (deleting) delay = DELETING_MS;

    const timer = setTimeout(() => {
      if (wordComplete) {
        setDeleting(true);
        return;
      }

      if (wordCleared) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
        return;
      }

      setText((prev) =>
        deleting ? word.slice(0, prev.length - 1) : word.slice(0, prev.length + 1)
      );
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, reduceMotion]);

  const longestWord = words.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ""
  );

  return (
    <span className="relative inline-block whitespace-nowrap">
      {/* Screen readers get the full list instead of a character-by-character animation. */}
      <span className="sr-only">{words.join(", ")}</span>

      {/* Invisible sizer: holds the width of the longest word so the heading
          never reflows to a new line while the text is being typed. */}
      <span aria-hidden="true" className="invisible">
        {longestWord}
        <span className="ml-1 inline-block w-[3px]" />
      </span>

      <span aria-hidden="true" className="absolute left-0 top-0 whitespace-nowrap">
        <span className={className}>{reduceMotion ? words[0] : text}</span>
        {reduceMotion ? null : (
          <span className="ml-1 inline-block h-[0.85em] w-[3px] animate-pulse rounded-xs bg-accent align-middle" />
        )}
      </span>
    </span>
  );
}

TypedText.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

export default TypedText;