import avatarBruno from "../images/quiz/quiz_bruno.png";
import avatarSusana from "../images/quiz/quiz_susana.png";

export default function Quiz() {
  return (
    <div>
      <div>
        <img
          className="rounded-full"
          src={avatarBruno.src}
          alt="Avatar Susana"
        />
      </div>
      <div>
        <img
          className="rounded-full"
          src={avatarSusana.src}
          alt="Avatar Susana"
        />
      </div>
      <a href="/labodadebrunoysusana/going-places">Hola mundo</a>
    </div>
  );
}
