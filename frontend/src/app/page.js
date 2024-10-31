import Countries from "@/components/Countries";
import Layout from "@/components/Layout";

export default function Page() {
  return (
    <Layout>
      <h1 className="text-black text-4xl mb-8">The Country Info App</h1>
      <Countries />
    </Layout>
  );
}
