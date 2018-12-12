// react redux's connect function
import { connect } from "react-redux";

// import in the Articles component
import Tasks from "../../components/Tasks";


// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = state => {
    return {
        // convert the articles object into an array
        tasks: state.data,
    };
};

// setup mapDispatchToProps to call the action creator
const mapDispatchToProps = dispatch => {

};

// connect up mapStateToProps with the Articles component
// Articles' props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);