import { db } from "~/server/db";
import {
  files_table as filesSchema,
  folders_table as foldersSchema,
} from "~/server/db/schema";
import DriveContents from "../f/[folderId]/drive-contents";

export default function HomePage() {
  return <div>Hello World</div>;
}
