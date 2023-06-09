import Typed from 'react-typed';
import {TOP_SECTION} from '../../Module/General';

export default function MytypedComponent() {
  return (
    <div className="typing-div">
      <h1>
        <Typed strings={TOP_SECTION.Typed_effect} typeSpeed={100} loop />
      </h1>
    </div>
  );
}
