import css from './StatisticsList.module.css';
import PropTypes from "prop-types";

export const StatisticsList = ({stats}) => {
  return <ul className={css.statlist}>
    {stats.map(statItem => (
      <li className={css.item} key={statItem.id} style={{ backgroundColor: getRandomHexColor() }}>
        <span className={css.label}>{statItem.label} </span>
        <span className={css.percentage}>{statItem.percentage} %</span>
      </li>
    ))}
  </ul>;
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

StatisticsList.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }