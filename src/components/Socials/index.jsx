import {SOCIALS} from '../../Module/General';

export default function Media() {
  return (
    <div className="media">
      <p>Follow us on social media for updates</p>
      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.instagram}>
          <i className="fab fa-3x fa-instagram"></i>
        </a>
      </div>

      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.email}>
        <i class="fa fa-3x fa-envelope-o"></i>
        </a>
        </div>

      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
          <i className="fab fa-3x fa-discord"></i>
        </a>
      </div>

      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
          <i className="fab fa-3x fa-linkedin-in"></i>
        </a>
      </div>

      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.devpost}>
          <i className="fab fa-3x fa-dev"></i>
        </a>
      </div>
    </div>
  );
}
