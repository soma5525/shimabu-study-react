import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { CTAButtons } from "../components/CTAButtons";

export default function About() {
  return (
    <Layout title="About - Next.js App">
      <Hero page="about" />
      <CTAButtons />
    </Layout>
  );
}
