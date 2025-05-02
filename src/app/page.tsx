import { db } from "~/server/db";
import {
  files as filesSchema,
  folders as foldersSchema,
} from "~/server/db/schema";
import DriveContents from "./drive-contents";

export default function HomePage() {
  return <div>Hello World</div>;
}
