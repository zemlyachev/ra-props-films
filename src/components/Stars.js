import PropTypes from "prop-types";
import Star from "./Star";

function Stars({ count }) {
  const isHaveRaiting = count >= 1 && count <= 5;

  return (
    <>
      {isHaveRaiting && (
        <ul className="card-body-stars">
          {Array.from({ length: count }, (_, i) => (
            <Star key={i} />
          ))}
        </ul>
      )}
    </>
  );
}

Stars.defaultProps = {
  count: 0,
};

Stars.propTypes = {
  count: PropTypes.number,
};

export default Stars;
