import { PropTypes } from 'prop-types';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    problems1,
    // problems2,
} from 'utils/db';
import { ProblemsListItem } from 'views/Problems/ProblemsPage/ProblemsList/ProblemsListItem'


export function ProblemsList(props) {
    let problems = null;
    try {
        problems = props.problems;
    } catch (error) {
        problems = problems1;
    }

    return (
        <>
        <br />
        <Table striped border='true' style={{margin: "1000"}}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Difficulty</th>
                    <th>Acceptance</th>
                </tr>
            </thead>
            <tbody>
                {problems.map((problem, idx) =>
                    <ProblemsListItem
                        key={problem.id}
                        id={problem.id}
                        index={idx}
                        title={problem.title}
                        difficulty={problem.difficulty}
                        acceptanceRate={problem.acceptanceRate}
                    />    
                )}
            </tbody>
        </Table>
        </>
    );
}
ProblemsList.propTypes = {
    problems: PropTypes.arrayOf(ProblemsListItem).isRequired,
};