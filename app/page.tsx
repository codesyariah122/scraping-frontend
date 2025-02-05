import { dehydrate, QueryClient } from "@tanstack/react-query";
import HomeClient from "@components/HomeClient";
export default async function Home() {
  const queryClient = new QueryClient();

  // Prefetch data jika perlu
  // await queryClient.prefetchQuery(["someKey"], fetchDataFunction);

  const dehydratedState = dehydrate(queryClient);

  return <HomeClient dehydratedState={dehydratedState} />;
}
