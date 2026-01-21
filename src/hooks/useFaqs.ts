import { useEffect, useMemo, useState } from "react";

export interface PublicFaqItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  routeName: string[];
}

export function useFaqs(routeName: string) {
  const [faqs, setFaqs] = useState<PublicFaqItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const safeRoute = useMemo(() => (routeName?.trim() ? routeName.trim() : "global"), [routeName]);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Fetch FAQs related to the specific route (includes FAQs with "global" route_name)
        // Fetch a larger page size so "more data in DB" doesn't get hidden by API default limit (50).
        const res = await fetch(
          `/api/faqs?routeName=${encodeURIComponent(safeRoute)}&limit=200`,
          {
          headers: { Accept: "application/json" },
          }
        );
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`);
        const list = Array.isArray(data?.data) ? data.data : [];
        if (!cancelled) setFaqs(list);
      } catch (e: any) {
        if (!cancelled) {
          setFaqs([]);
          setError(e?.message || "Failed to load FAQs");
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [safeRoute]);

  return { faqs, isLoading, error };
}

