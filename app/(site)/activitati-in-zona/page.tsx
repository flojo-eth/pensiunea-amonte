import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ActivityCard from "@/components/ActivityCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ACTIVITIES } from "@/lib/content";
import { btnTerracotta } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Activități în zonă",
  description:
    "Ce poți face în jurul Pensiunii Amonte: drumeții în Munții Făgăraș, Brambura Park, Palatul Brukenthal, închirieri e-bike, călărie & ATV, ferma de cerbi, Corabia Piraților.",
};

const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";

export default function ActivitatiPage() {
  return (
    <section className={`${container} py-[clamp(56px,7vw,96px)]`}>
      <SectionHeading
        eyebrow="În jurul pensiunii"
        title="Activități în zonă"
        className="mb-[clamp(36px,5vw,56px)]"
      >
        De la drumeții pe creste la seri lângă foc - muntele are mereu un plan
        pentru tine.
      </SectionHeading>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ACTIVITIES.map((a) => (
          <ActivityCard key={a.name} activity={a} />
        ))}
      </div>

      <div className="mt-10">
        <WhatsAppButton className={btnTerracotta}>
          Rezervă-ți sejurul pe WhatsApp
        </WhatsAppButton>
      </div>
    </section>
  );
}
