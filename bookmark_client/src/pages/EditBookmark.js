import React from "react";
import Helmet from "react-helmet";
import EditKeywords from "../components/EditKeywords";

function EditBookmark() {
  return (
    <div>
      <Helmet>
        <title>Modifier un bookmark</title>
      </Helmet>
      <EditKeywords />
    </div>
  );
}

export default EditBookmark;
