import { CatalogSection } from "@/components/storefront/CatalogSection";
import { Footer } from "@/components/storefront/Footer";
import { Header } from "@/components/storefront/Header";
import { Hero } from "@/components/storefront/Hero";
import { TopStrip } from "@/components/storefront/TopStrip";
import {
  featuredStats,
  filterSections,
  getProducts,
  navItems,
  utilityLinks,
} from "@/components/storefront/data";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="page-shell">
      <TopStrip items={utilityLinks} />
      <Header navItems={navItems} />
      <Hero stats={featuredStats} />
      <CatalogSection products={products} filterSections={filterSections} />
      <Footer />
    </main>
  );
}
