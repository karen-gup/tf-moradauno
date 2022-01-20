import { Banner } from "./Banner";
import Instructive from "./Instructive";
import "../css/Formulary.scss";

export default function Formulary() {
  return (
    <main>
      <Banner />
      <div className="cont-type">
        <p>Input que selecciona el proceso</p>
      </div>
      <section className="container">
        <div className="geri">
          <Instructive />
        </div>
        <div className="form">
          <h1>Soy form</h1>
        </div>
      </section>
    </main>
  );
}
