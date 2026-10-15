import { APP_TITLE } from "@/lib/app-config";
import App from "@/App";

export function meta() {
  return [
    { title: `${APP_TITLE} | CampusPe` },
    { name: "description", content: "One platform connecting students, colleges and employers." },
  ];
}

export default App;
