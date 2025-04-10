import PropTypes from 'prop-types'

function Student(props){
    return(
       <div className="student">
            <p>Name: {props.name} </p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
       </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student

// import PropTypes from 'prop-types';
// import { checkPropTypes } from 'prop-types'; // 新增导入

// function Student({ name = "Guest", age = 0, isStudent = false }) {
//   // 手动检查 Props
//   checkPropTypes(Student.propTypes, { name, age, isStudent }, 'prop', 'Student');

//   return (
//     <div className="student">
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//       <p>Student: {isStudent ? "Yes" : "No"}</p>
//     </div>
//   );
// }

// Student.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired, // 必填项
//   isStudent: PropTypes.bool,
// };

// export default Student;
