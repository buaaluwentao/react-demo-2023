import { connect } from "react-redux"
import Counter from '../../components/Counter'
import ActionCreator from "../../components/Counter/ActionCreator"

export default connect(state => ({'counter': state}), {
    add: ActionCreator
})(Counter)