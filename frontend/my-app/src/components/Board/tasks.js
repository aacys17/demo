// import * as React from 'react';
// import axios from 'axios';
// import MoodBoard from './moodBoard';
// import { BoardContainer } from './moodboardWrapper';
// const end_point = 'http://localhost:5000/tasks';

// export default function RecipeReviewCard() {
//   const [tasks, setTasks] = React.useState([]);

//   const gettingTasks = async (values) => {
//     try {
//       const { data } = await axios.get(end_point, values);
//       setTasks(data);
//     } catch (error) {
//       return error.response;
//     }
//   };
//   React.useEffect(() => {
//     gettingTasks();
//   }, []);
//   return (
//     <BoardContainer>
//       {tasks.map((task => {
//         return <MoodBoard key={task._id}{...task} />;
//     })}
//     </BoardContainer>
//   );
// }
