import { useQuery } from "@tanstack/react-query";
import {getSettings} from "../../services/apiSettings.js";

function useSettings() {

  const {data: settings, isLoading, error} = useQuery({
    queryKey: ['settings'],
    queryFn: getSettings,
  });

  return {settings, isLoading, error}
}

export default useSettings;