import { Suspense } from "react";

import { Separator } from "@/components/ui/separator";

import { Info } from "../_components/Info";

// import { checkSubscription } from "@/lib/subscription";
import { ActivityList } from "./_components/activity-list";

const ActivityPage = async () => {
  //   const isPro = await checkSubscription();

  return (
    <div className="w-full">
      <Info />
      <Separator className="my-2" />
      <Suspense fallback={<ActivityList.Skeleton />}>
        <ActivityList />
      </Suspense>
    </div>
  );
};

export default ActivityPage;
