import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Styled components
import { Container, Headline } from "../../styles/globalStyles";
import { TeacherBio } from "../../styles/_app/istruttoreStyles";

import { AiOutlineHome } from "react-icons/ai";

const IstruttorePage = ({ teachers, match }) => {
  const [teacher, setTeacher] = useState(null);
  useEffect(() => {
    const filterObject = (obj, filter, filterValue) =>
      Object.keys(obj).reduce(
        (acc, val) =>
          obj[val][filter] !== filterValue
            ? acc
            : {
                ...acc,
                [val]: obj[val],
              },
        {}
      );
    if (!!teachers) {
      const teacherObject = filterObject(teachers, "_id", match.params.id);
      setTeacher(teacherObject[Object.keys(teacherObject)[0]]);
    }
  }, [teachers, match.params.id]);

  return (
    <div>
      {teacher ? (
        <div>
          <Container>
            <Headline withHr>
              <small>
                <AiOutlineHome />
                <Link to="/app/per-te">Home</Link> /{" "}
                <Link to="/app/istruttori">Istruttori</Link> /{" "}
                <Link to={`/app/istruttore/${teacher.id}`}>
                  {teacher.name} {teacher.surname}
                </Link>
              </small>
              <h1>
                {teacher.name} {teacher.surname}
              </h1>
              <hr />
            </Headline>
          </Container>

          <TeacherBio>
            <p>{teacher.biography}</p>
            <img src={teacher.picture} alt="profile" />
          </TeacherBio>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

IstruttorePage.propTypes = {
  teachers: PropTypes.array,
};

const mapStateToProps = (state) => ({
  teachers: state.api.teachers,
});

export default connect(mapStateToProps)(IstruttorePage);
