import Sequences from "../components/Sequences.js";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => state.sequencesState;

export default connect(mapStateToProps)(Sequences);
