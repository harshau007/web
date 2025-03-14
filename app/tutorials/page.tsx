import Metadata from "@/components/metadata";
import TutorialPage from "./TutorialPage";

export const metadata = {
  title: "Tutorials | ALG",
  description: "ALG",
};

export default function Downloads() {
  return (
    <section className="relative">
      <Metadata params="Tutorials" />
      <TutorialPage />
    </section>
  );
}
