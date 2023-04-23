import {useState, useMemo, useRef, useEffect} from 'react';
import {Button, Card} from 'react-bootstrap';
import autoAnimate from '@formkit/auto-animate';
import ReactMarkdown from 'react-markdown';

import {MIDDLE_SECTION} from 'Module/General';

const Collapse = () => {
  const [fullText, setFullText] = useState(false);
  const parentRef = useRef();

  const text = useMemo(
    () =>
      fullText
        ? [
            ...MIDDLE_SECTION.COLLAPSE_TITLE_PARAGRAPHS,
            ...MIDDLE_SECTION.COLLAPSE_DESCRIPTION_PARAGRAPHS
          ]
        : MIDDLE_SECTION.COLLAPSE_TITLE_PARAGRAPHS,
    [fullText]
  );

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  return (
    <div ref={parentRef} className="collapse-container">
      {text.map((props, i) => (
        <ReactMarkdown key={i}>{props}</ReactMarkdown>
      ))}
    </div>
  );
};

export default Collapse;
