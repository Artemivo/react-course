import React from "react";
import { Container, Grid, Segment, List, Image } from "semantic-ui-react";
import GistsItemInfo from "../components/GistsItemInfo";
import GistsItem from "../components/GistsItem";
import { useSelector } from "react-redux";
import LoadingOverlay from "../../home-work-2/LoadingOverlay";
import ScrollToTop from "../../home-work-5/containers/ScrollToTop";

function Gists() {
  const state = useSelector((state) => state);
  const gists = state.gists.list;
  const loading = state.gists.loading;
  // LIFTING STATE UP
  // const [clickedGist, setClickedGist] = useState(null);
  return (
    <Container>
      <LoadingOverlay active={loading} />
      <Grid>
        <Grid.Column width={6}>
          {gists &&
            gists.map((gist) => (
              <Segment>
                <List>
                  <GistsItem
                    gist={gist}
                    key={gist.id}
                    // state={{ clickedGist: [clickedGist, setClickedGist] }} // LIFTING STATE UP
                  />
                </List>
              </Segment>
            ))}
        </Grid.Column>
        <Grid.Column width={10}>
          <ScrollToTop />

          <GistsItemInfo
          // state={{ clickedGist: [clickedGist, setClickedGist] }}
          />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default Gists;
