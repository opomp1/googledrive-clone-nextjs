import { auth } from "@clerk/nextjs/server";
import DriveContents from "./drive-contents";

import { QUERIES } from "~/server/db/queries";
import { redirect } from "next/navigation";

export default async function GoogleDriveClone(props: {
  params: Promise<{ folderId: string }>;
}) {
  // get params from url
  const params = await props.params;

  //   parse the id make sure it is a number
  const parsedFolderId = parseInt(params.folderId);
  if (isNaN(parsedFolderId)) {
    return <div>Invalid folder ID</div>;
  }

  const session = await auth();

  if (!session.userId) {
    return redirect("/sign-in");
  }

  const [folders, files, parents, rootFolder] = await Promise.all([
    QUERIES.getFolders(parsedFolderId),
    QUERIES.getFiles(parsedFolderId),
    QUERIES.getAllParentsForFolder(parsedFolderId),
    QUERIES.getRootFolderForUser(session.userId),
  ]);

  return (
    <DriveContents
      files={files}
      folders={folders}
      parents={parents}
      currentFolderId={parsedFolderId}
      rootFolderId={rootFolder!.id}
    />
  );
}
