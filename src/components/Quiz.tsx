import avatarBruno from "../images/quiz/quiz_bruno.png";
import avatarSusana from "../images/quiz/quiz_susana.png";

export default function Quiz() {
  return (
    <div>
      <div className="rounded-3xl">
        <img src={avatarBruno.src} alt="Avatar Susana" />
      </div>
      <div>
        <img src={avatarSusana.src} alt="Avatar Susana" />
      </div>
      <a href="/labodadebrunoysusana/going-places">Hola mundo</a>
    </div>
  );
}
