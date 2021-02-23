import React, { useEffect, useState } from "react";
import { Container, Comment, Header, Icon, Button } from "semantic-ui-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import apiClient from "../redux/API";
import { useDispatch, useSelector } from "react-redux";
import { selectGist } from "../redux/actions/action";
import LoadingOverlay from "../../home-work-2/LoadingOverlay";

function GistsItemInfo() {
  const selectedGist = useSelector((state) => state.selectedGist);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedGist) {
      setLoading(true);
      apiClient
        .get(selectedGist.raw_url)
        .then((response) => {
          const text = response.request.responseText;
          setText(text);
          setLoading(false);
        })
        .catch((err) => console.log(err), setLoading(false));
    }
  }, [selectedGist]);

  if (!selectedGist) {
    return (
      <div>
        <span>Choose a theme</span>
      </div>
    );
  }

  // LIFTING STATE UP

  // const [isLoading, setIsLoading] = useState(false);
  // const {
  //   selectedGist: [selectedGist, setselectedGist],
  // } = {
  //   selectedGist: useState(null),
  //   ...(props.state || null),
  // };
  // const [text, setText] = useState("");
  // if (selectedGist) {
  //   apiClient
  //     .get(selectedGist.raw_url)
  //     .then((response) => {
  //       const text = response.request.responseText;
  //       setText(text);
  //     })
  //     .catch((err) => console.log(err));
  // }

  return (
    <Container>
      <LoadingOverlay active={loading} />

      {selectedGist && (
        <Comment>
          <Comment.Content>
            <Header as="h3" dividing>
              Language :{" "}
              {selectedGist.language ? selectedGist.language : "Not specified"}
            </Header>
            <Comment.Metadata>
              <span>Type : {selectedGist.type}</span>
            </Comment.Metadata>
            <Comment.Text>File name : {selectedGist.filename}</Comment.Text>
          </Comment.Content>
          <Button
            onClick={() => dispatch(selectGist(null))}
            animated="vertical"
          >
            <Button.Content hidden>Close</Button.Content>
            <Button.Content visible>
              <Icon name="times" />
            </Button.Content>
          </Button>
        </Comment>
      )}

      {selectedGist && (
        <SyntaxHighlighter
          language={
            selectedGist.language ? selectedGist.language.toLowerCase() : ""
          }
          style={docco}
        >
          {text}
        </SyntaxHighlighter>
      )}
    </Container>
  );
}

export default GistsItemInfo;
