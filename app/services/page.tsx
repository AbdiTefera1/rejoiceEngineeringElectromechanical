import FooterCTA from "@/components/FooterCTA";
import Header from "@/components/Header"
import ServiceTimeline from "@/components/ServiceTimeline";
import TopBar from "@/components/TopBar"

export default function ServiceTree() {
  return (
    <div>
        <TopBar />
        <Header />
        <ServiceTimeline />
        <FooterCTA/>
    </div>
  );
}


