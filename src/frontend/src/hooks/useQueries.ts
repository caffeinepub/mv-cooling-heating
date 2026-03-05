import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useAddSubmission() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      number,
      service,
      message,
    }: {
      name: string;
      number: string;
      service: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      await actor.addSubmission(name, number, service, message);
    },
  });
}
