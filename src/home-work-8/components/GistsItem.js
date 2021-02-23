import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { kimbieLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Container, List, Image } from "semantic-ui-react";
import { selectGist } from "../redux/actions/action";

function GistsItem(props) {
  const gist = props.gist;
  const userName = gist.owner.login;
  const avatar = gist.owner.avatar_url;
  const files = Object.keys(gist.files);
  const dispatch = useDispatch();

  // LIFTING STATE UP

  // const {
  //   clickedGist: [clickedGist, setClickedGist],
  // } = {
  //   clickedGist: useState(null),
  //   ...(props.state || null),
  // };

  return (
    <Container>
      <List>
        <List.Item>
          <Image avatar src={avatar} />
          <List.Content>
            <Link to={`/gists/${gist.id}`}>
              {files.map((fileName) => (
                <List.Header
                  as="a"
                  onClick={() => {
                    // setClickedGist(gist.files[fileName]); // LIFTING STATE UP
                    dispatch(selectGist(gist.files[fileName]));
                  }}
                >
                  {fileName}
                  <List.Description>
                    language :
                    {gist.files[fileName].language
                      ? gist.files[fileName].language
                      : "not definitely"}
                  </List.Description>
                </List.Header>
              ))}
            </Link>

            <List.Header>Author Name : {userName}</List.Header>
          </List.Content>
        </List.Item>
      </List>
    </Container>
  );
}

export default GistsItem;
