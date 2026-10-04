import Header from "#/components/header";
import UpdateCard from "#/home/components/update-card";
import updates from "@/public/data/updates.json";

export default function Home() {
  return(
    <div>
      <Header/>
      <div className="update-list">
        {Object.entries(updates).map(
          (update, key) => (

          <UpdateCard
            key={key}
            id={update[0]}
            title={update[1].title}
            body={update[1].body}
            publish_date={update[1].publish_date}
          />

        ))}
      </div>
    </div>
  );
}
