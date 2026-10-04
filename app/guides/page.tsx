import Header from "#/components/header";
import GuideCard from "#/guides/components/guide-card";
import guides from "@/public/data/guides.json";

export default function Home() {
  return(
    <div>
      <Header/>
      <div className="update-list">
        {Object.entries(guides).map(
          (guide, key) => (

          <GuideCard
            key={key}
            id={guide[0]}
            title={guide[1].title}
            body={guide[1].body}
          />

        ))}
      </div>
    </div>
  );
}
