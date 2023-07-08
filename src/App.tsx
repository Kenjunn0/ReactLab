import {createGlobalStyle} from "styled-components";
import styled from "styled-components";
import {DragDropContext, DropResult} from "react-beautiful-dnd";
import {useRecoilState} from "recoil";
import {toDoState} from "./atom";
import Board from "./Components/Board";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color: black;
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Box = styled.div`

`

const Boards = styled.div`
    display: grid;
    width: 100%;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
`




function App() {
    const [ toDos, setToDos ] = useRecoilState(toDoState);
    const onDragEnd = (info: DropResult) => {
        const {destination, draggableId, source} = info;
        if (!destination) return;
        if (destination?.droppableId === source.droppableId) {
            setToDos((allToDos) => {
                const boardCopy = [...allToDos[source.droppableId]];
                boardCopy.splice(source.index, 1)
                boardCopy.splice(destination?.index, 0, draggableId)
                return {
                    ...allToDos,
                    [source.droppableId]: boardCopy
                };

            });
        }
    };

  return (
      <Box>
          <GlobalStyle />
          <DragDropContext onDragEnd={onDragEnd}>
              <Wrapper>
                  <Boards>
                      {Object.keys(toDos).map(boradId => <Board boardId={boradId} key={boradId} toDos={toDos[boradId]} /> )}
                  </Boards>
              </Wrapper>
          </DragDropContext>
      </Box>
  );
}

export default App;