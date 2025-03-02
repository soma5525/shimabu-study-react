import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { CTAButtons } from "../components/CTAButtons";

export default function Home() {
  return (
    <Layout title="Home - Next.js App">
      <Hero />
      <CTAButtons />
    </Layout>
  );
}
